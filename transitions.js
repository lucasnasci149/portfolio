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
   PAGE TRANSITIONS · CURTAIN SWEEP (top → bottom)
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
 SITE HEADER · contact dropdown, mobile menu, scroll-hide
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
  // .at-top lets case pages tint the header only while it sits over the band
  header.classList.toggle('at-top', window.scrollY <= 8);
  window.addEventListener('scroll', function () {
   var y = window.scrollY;
   /* a rail jump is navigation, not a scroll-up gesture: leave the header alone */
   if (!window.__railScrolling) {
    if (y > 80) { header.classList.toggle('header-hidden', y > lastY); }
    else { header.classList.remove('header-hidden'); }
   }
   header.classList.toggle('at-top', y <= 8);
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

/* ═══════════════════════════════════════════════════════════
   CASE SECTION RAIL
   Right-hand quick nav on case study pages. Builds itself from the
   sections already in the DOM, so labels follow the active language
   and no page needs extra markup.
   ═══════════════════════════════════════════════════════════ */
(function () {
  var header = document.querySelector('.case-header');
  if (!header) return;                 /* case study pages only */

  var entries = [];

  /* "01 · Consumer product · Transactions" -> ["Consumer product", "Transactions"] */
  function parts(text) {
    return text.replace(/^\s*\d+\s*[·.\-]\s*/, '')
      .split(/\s*·\s*/)
      .map(function (p) { return p.trim(); })
      .filter(Boolean);
  }

  /* <br> yields no whitespace in textContent, so normalise through a clone */
  function readText(el) {
    var clone = el.cloneNode(true);
    Array.prototype.forEach.call(clone.querySelectorAll('br'), function (br) {
      br.parentNode.replaceChild(clone.ownerDocument.createTextNode(' '), br);
    });
    return clone.textContent.replace(/\s+/g, ' ').trim();
  }

  function labelFor(section) {
    var eyebrow = section.querySelector('.eyebrow');
    if (eyebrow && eyebrow.textContent.trim()) return parts(readText(eyebrow));
    var heading = section.querySelector('h2');
    if (heading && heading.textContent.trim()) {
      var text = readText(heading).replace(/[.]+$/, '');
      return [text.length > 30 ? text.slice(0, 28) + '...' : text];
    }
    return null;
  }

  /* keeps every label distinct: falls back to the next segment of the eyebrow */
  function pickLabel(candidates, used) {
    for (var i = 0; i < candidates.length; i++) {
      if (used.indexOf(candidates[i]) === -1) return candidates[i];
    }
    return candidates[candidates.length - 1];
  }

  /* cover first, then every section that can name itself */
  var used = [];
  entries.push({ el: header, label: (window.t ? window.t('rail.cover', 'Cover') : 'Cover') });
  used.push(entries[0].label);
  Array.prototype.forEach.call(document.querySelectorAll('section.section'), function (section) {
    var candidates = labelFor(section);
    if (!candidates || !candidates.length) return;
    var label = pickLabel(candidates, used);
    used.push(label);
    entries.push({ el: section, label: label });
  });
  if (entries.length < 3) return;      /* not worth a rail */

  /* a <div> on purpose: a <nav> child of <body> would inherit the full-width
     navbar rule (left:0 + backdrop-filter) from style.css */
  var railScrollTimer = null;

  var rail = document.createElement('div');
  rail.className = 'case-rail';
  rail.setAttribute('role', 'navigation');
  rail.setAttribute('aria-label', 'Section navigation');

  entries.forEach(function (entry, i) {
    if (!entry.el.id) entry.el.id = 'case-section-' + i;
    var item = document.createElement('a');
    item.className = 'case-rail-item';
    item.href = '#' + entry.el.id;
    item.innerHTML = '<span class="case-rail-label"></span><span class="case-rail-tick"></span>';
    item.querySelector('.case-rail-label').textContent = entry.label;
    item.addEventListener('click', function (e) {
      e.preventDefault();
      /* land exactly on the section top: the header stays hidden during a
         rail jump, so no offset is needed and no gap is left behind */
      var top = entry.el.getBoundingClientRect().top + window.scrollY;
      window.__railScrolling = true;
      window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
      window.clearTimeout(railScrollTimer);
      railScrollTimer = window.setTimeout(function () { window.__railScrolling = false; }, 900);
    });
    entry.item = item;
    rail.appendChild(item);
  });
  document.body.appendChild(rail);

  /* active state: the last section whose top has passed a third of the viewport */
  var ticking = false;
  function refresh() {
    ticking = false;
    var line = window.innerHeight * 0.34;
    var current = 0;
    entries.forEach(function (entry, i) {
      if (entry.el.getBoundingClientRect().top <= line) current = i;
    });
    entries.forEach(function (entry, i) {
      entry.item.classList.toggle('is-active', i === current);
      if (i === current) entry.item.setAttribute('aria-current', 'true');
      else entry.item.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(refresh); }
  }, { passive: true });
  window.addEventListener('resize', refresh);
  refresh();

  /* labels come from the DOM, so refresh them when the language changes */
  document.addEventListener('langchange', function () {
    var seen = [];
    entries.forEach(function (entry, i) {
      var label;
      if (i === 0) label = window.t ? window.t('rail.cover', 'Cover') : 'Cover';
      else {
        var candidates = labelFor(entry.el);
        label = candidates && candidates.length ? pickLabel(candidates, seen) : null;
      }
      if (label) {
        seen.push(label);
        entry.item.querySelector('.case-rail-label').textContent = label;
      }
    });
  });
})();
