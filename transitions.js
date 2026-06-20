/* ═══════════════════════════════════════════════════════════
   CUSTOM CURSOR
   Ball cursor that follows the pointer and changes color on
   hover/click. Skipped entirely on touch devices.
   ═══════════════════════════════════════════════════════════ */
(function () {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  var dot  = document.createElement('div');
  var ring = document.createElement('div');
  dot.className  = 'cursor-dot cursor-hidden';
  ring.className = 'cursor-ring cursor-hidden';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  var mouseX = 0, mouseY = 0;
  var ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = 'translate(calc(-50% + ' + mouseX + 'px), calc(-50% + ' + mouseY + 'px))';
    dot.classList.remove('cursor-hidden');
    ring.classList.remove('cursor-hidden');
  });

  // Smooth-follow ring via rAF lerp
  (function loop() {
    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;
    ring.style.transform = 'translate(calc(-50% + ' + ringX + 'px), calc(-50% + ' + ringY + 'px))';
    requestAnimationFrame(loop);
  })();

  // Hover detection - interactive elements
  var HOVER_SEL = 'a, button, [role="button"], label, .case-card, .exp-trigger, .filter-btn, .theme-toggle, .nav-logo, .back-to-top';

  document.addEventListener('mouseover', function (e) {
    if (e.target.closest(HOVER_SEL)) {
      dot.classList.add('cursor-hover');
      ring.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', function (e) {
    if (e.target.closest(HOVER_SEL)) {
      dot.classList.remove('cursor-hover');
      ring.classList.remove('cursor-hover');
    }
  });

  // Click flash
  document.addEventListener('mousedown', function () {
    dot.classList.add('cursor-click');
    ring.classList.add('cursor-click');
  });
  document.addEventListener('mouseup', function () {
    dot.classList.remove('cursor-click');
    ring.classList.remove('cursor-click');
  });

  // Hide when pointer leaves the window
  document.documentElement.addEventListener('mouseleave', function () {
    dot.classList.add('cursor-hidden');
    ring.classList.add('cursor-hidden');
  });
  document.documentElement.addEventListener('mouseenter', function () {
    dot.classList.remove('cursor-hidden');
    ring.classList.remove('cursor-hidden');
  });
})();

/* ═══════════════════════════════════════════════════════════
   PAGE TRANSITIONS — CURTAIN SWEEP (top → bottom)
   ENTER: html::before (CSS) already covers the new page from
   first paint. JS adds .curtain-reveal → it slides downward
   off-screen, revealing content. No flash possible.
   EXIT: JS injects #page-curtain which sweeps down from the
   top, covering the old page before the browser navigates.
   ═══════════════════════════════════════════════════════════ */
(function () {
  var CURTAIN_IN_MS = 400; // how long the exit cover takes

  function reveal() {
    document.body.classList.add('is-visible'); // kept for scroll-reveal animations
    var html = document.documentElement;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        html.classList.add('curtain-reveal');
        // After animation completes, remove from paint tree entirely
        window.setTimeout(function () {
          html.classList.add('curtain-done');
        }, 500);
      });
    });
  }

  // On page load: animate the html::before cover away (downward)
  document.addEventListener('DOMContentLoaded', reveal);

  // bfcache (back/forward button): reset and replay the reveal
  window.addEventListener('pageshow', function (e) {
    if (!e.persisted) return;
    var html = document.documentElement;
    html.classList.remove('curtain-reveal', 'curtain-done');
    void html.offsetHeight; // force reflow so removal paints before re-add
    reveal();
  });

  // Intercept same-origin link clicks: sweep #page-curtain in
  // from the top, then navigate once it fully covers the page.
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    var link = e.target.closest('a');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    if (link.target === '_blank' || link.hasAttribute('download')) return;
    if (link.origin !== window.location.origin) return;
    if (link.pathname === window.location.pathname && link.hash) return;

    e.preventDefault();

    var existing = document.getElementById('page-curtain');
    if (existing) existing.remove();

    var curtain = document.createElement('div');
    curtain.id = 'page-curtain';
    curtain.classList.add('pc-leaving');

    // Favicon spinner centered on the curtain
    var spinner = document.createElement('img');
    spinner.src = 'assets/icons/favicon.svg';
    spinner.className = 'curtain-spinner';
    spinner.setAttribute('alt', '');
    spinner.setAttribute('aria-hidden', 'true');
    curtain.appendChild(spinner);

    document.body.appendChild(curtain);

    window.setTimeout(function () {
      window.location.href = href;
    }, CURTAIN_IN_MS);
  });
})();

/* ═══════════════════════════════════════════════════════════
   READING PROGRESS BAR
   Fills as the user scrolls through long pages (project case
   studies). Appears after 80px scroll, hides at the top.
   ═══════════════════════════════════════════════════════════ */
(function () {
  var bar = document.querySelector('.reading-progress');
  if (!bar) return;

  function update() {
    var scrolled = window.scrollY;
    var total = document.documentElement.scrollHeight - window.innerHeight;
    var pct = total > 0 ? Math.min(scrolled / total * 100, 100) : 0;
    bar.style.width = pct + '%';
    if (scrolled > 80) {
      bar.classList.add('active');
    } else {
      bar.classList.remove('active');
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ═══════════════════════════════════════════════════════════
   SCROLL REVEAL OBSERVER
   Adds .visible to .reveal and .reveal-card elements as they
   enter the viewport. Without this, those elements stay at
   opacity 0 indefinitely.
   ═══════════════════════════════════════════════════════════ */
(function () {
  var els = document.querySelectorAll('.reveal, .reveal-card');
  if (!els.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  els.forEach(function (el) { io.observe(el); });
})();

/* ═══════════════════════════════════════════════════════════
   REVEAL-BLUR OBSERVER
   Blur + fade + translateY reveal for pull quotes, large
   headings, and high-impact sections.
   ═══════════════════════════════════════════════════════════ */
(function () {
  var els = document.querySelectorAll('.reveal-blur');
  if (!els.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  els.forEach(function (el) { io.observe(el); });
})();
