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
   PAGE TRANSITIONS
   Fade-in on load + fade-out on internal navigation, with a
   slim accent progress bar for a more polished feel.
   ═══════════════════════════════════════════════════════════ */
(function () {
  function reveal() {
    document.body.classList.add('is-visible');
    var bar = document.querySelector('.page-transition-bar');
    if (!bar) return;
    bar.classList.add('active');
    window.setTimeout(function () {
      bar.classList.add('done');
    }, 350);
  }

  // Reveal after the first paint so the fade actually animates.
  requestAnimationFrame(function () {
    requestAnimationFrame(reveal);
  });

  // Re-run the reveal when navigating via back/forward (bfcache).
  window.addEventListener('pageshow', function () {
    document.body.classList.remove('page-exit');
    var bar = document.querySelector('.page-transition-bar');
    if (bar) {
      bar.classList.remove('active', 'done');
    }
    requestAnimationFrame(function () {
      requestAnimationFrame(reveal);
    });
  });

  // Intercept same-origin link clicks to play an exit animation
  // before navigating away.
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
    document.body.classList.add('page-exit');

    var bar = document.querySelector('.page-transition-bar');
    if (bar) {
      bar.classList.remove('done');
      bar.classList.add('active');
    }

    window.setTimeout(function () {
      window.location.href = href;
    }, 220);
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
