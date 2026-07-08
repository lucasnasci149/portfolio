/* ═══════════════════════════════════════════════════════════
   CUSTOM CURSOR
   Arrow circle that appears only when hovering work/archive
   cards. Normal OS cursor everywhere else.
   Skipped on touch devices.
   ═══════════════════════════════════════════════════════════ */
(function () {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  var pill = document.createElement('div');
  pill.className = 'cursor-view';
  pill.innerHTML = '&rarr;';
  document.body.appendChild(pill);

  var CARD_SEL = '.work-item, .archive-item';

  document.addEventListener('mousemove', function (e) {
    pill.style.left = e.clientX + 'px';
    pill.style.top  = e.clientY + 'px';
  });

  document.addEventListener('mouseover', function (e) {
    if (e.target.closest(CARD_SEL)) pill.classList.add('visible');
  });

  document.addEventListener('mouseout', function (e) {
    if (!e.target.closest(CARD_SEL)) return;
    var to = e.relatedTarget;
    if (!to || !to.closest(CARD_SEL)) pill.classList.remove('visible');
  });

  document.documentElement.addEventListener('mouseleave', function () {
    pill.classList.remove('visible');
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

    // Match exit-curtain colour to the destination page background
    // so there is no flash at the handoff between exit and enter curtains.
    // about.html is dark (#0c0c0c); every other page is light (#fbfaf7).
    var destPath = link.pathname;
    var destIsAbout = /\/about(\.html)?$/.test(destPath) || /\/about\/$/.test(destPath);
    curtain.style.background = destIsAbout ? '#0c0c0c' : '#fbfaf7';

    // Favicon spinner centered on the curtain
    var spinner = document.createElement('img');
    spinner.className = 'curtain-spinner';
    spinner.setAttribute('alt', '');
    spinner.setAttribute('aria-hidden', 'true');
    var _root = (typeof window._ASSET_ROOT !== 'undefined') ? window._ASSET_ROOT : '';
    spinner.src = _root + 'assets/icons/favicon.svg';
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
   BACK TO TOP
   Shows after 400px scroll, smooth scrolls to top on click.
   ═══════════════════════════════════════════════════════════ */
(function () {
  var btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
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

/* ═══════════════════════════════════════════════════════════
   CLICKABLE CARDS
   Makes the entire .case-card navigate to its .case-link href.
   ═══════════════════════════════════════════════════════════ */
(function () {
  document.querySelectorAll('.case-card').forEach(function (card) {
    var link = card.querySelector('.case-link');
    if (!link) return;
    card.style.cursor = 'pointer';
    card.addEventListener('click', function (e) {
      if (e.target.closest('a') && e.target.closest('a') !== link) return;
      window.location.href = link.href;
    });
  });
})();

/* ═══════════════════════════════════════════════════════════
 SITE HEADER — contact dropdown, mobile menu, scroll-hide
 ═══════════════════════════════════════════════════════════ */
(function () {
 // Contact dropdown
 var btn = document.getElementById('contactBtn');
 var panel = document.getElementById('contactPanel');
 if (btn && panel) {
  btn.addEventListener('click', function (e) {
   e.stopPropagation();
   var open = panel.classList.toggle('open');
   btn.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', function (e) {
   if (!btn.contains(e.target) && !panel.contains(e.target)) {
    panel.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
   }
  });
  document.addEventListener('keydown', function (e) {
   if (e.key === 'Escape') {
    panel.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.focus();
   }
  });
 }
 // Mobile menu
 var mBtn = document.getElementById('mobileMenuBtn');
 var mNav = document.getElementById('mobileNav');
 if (mBtn && mNav) {
  mBtn.addEventListener('click', function () {
   var isOpen = mNav.classList.toggle('open');
   mBtn.setAttribute('aria-expanded', String(isOpen));
   mBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
   mBtn.innerHTML = isOpen ? '&#10005;' : '&#9776;';
  });
 }
 // Header scroll hide/reveal
 var header = document.getElementById('siteHeader');
 if (header) {
  var lastY = window.scrollY;
  window.addEventListener('scroll', function () {
   var y = window.scrollY;
   if (y > 80) { header.classList.toggle('header-hidden', y > lastY); }
   else { header.classList.remove('header-hidden'); }
   lastY = y;
  }, { passive: true });
  document.addEventListener('mousemove', function (e) {
   if (e.clientY <= 60) header.classList.remove('header-hidden');
  });
 }
 // Back-to-top: avoid overlapping footer
 var btt = document.querySelector('.back-to-top');
 var footer = document.querySelector('.site-footer');
 if (btt && footer) {
  var base = 28;
  function adjustBtt() {
   var fTop = footer.getBoundingClientRect().top;
   var overlap = window.innerHeight - fTop;
   btt.style.bottom = (overlap > 0 ? overlap + base : base) + 'px';
  }
  window.addEventListener('scroll', adjustBtt, { passive: true });
  window.addEventListener('resize', adjustBtt);
 }
})();
