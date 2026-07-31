const MASI_LOGO = 'data:image/webp;base64,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';
/**
 * MASI FASHION — CORE APP MODULE
 * Handles: logo injection, sticky header, mobile navigation drawer,
 * search overlay, back-to-top button, current-year stamp.
 * Depends on: brand-logo.js (must load before this file)
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    injectLogo();
    setCurrentYear();
    initStickyHeader();
    initMobileNav();
    initSearchOverlay();
    initBackToTop();
    markActiveNavLink();
  }

  /** Inject the base64 brand logo into every [data-brand-logo] <img> */
  function injectLogo() {
    if (typeof MASI_LOGO === 'undefined') return;
    document.querySelectorAll('[data-brand-logo]').forEach(function (img) {
      img.src = MASI_LOGO;
    });
  }

  /** Stamp the current year into [data-year] elements (footer copyright) */
  function setCurrentYear() {
    var year = new Date().getFullYear();
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = year;
    });
  }

  /** Add elevation shadow to header once the page scrolls */
  function initStickyHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    var toggleShadow = function () {
      if (window.scrollY > 12) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };

    toggleShadow();
    window.addEventListener('scroll', toggleShadow, { passive: true });
  }

  /** Mobile navigation drawer open/close */
  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');
    var backdrop = document.querySelector('.nav-backdrop');
    if (!toggle || !nav) return;

    function openNav() {
      nav.classList.add('is-open');
      toggle.classList.add('is-active');
      toggle.setAttribute('aria-expanded', 'true');
      if (backdrop) backdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeNav() {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
      if (backdrop) backdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      nav.classList.contains('is-open') ? closeNav() : openNav();
    });

    if (backdrop) backdrop.addEventListener('click', closeNav);

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  /** Search overlay open/close + submit handling */
  function initSearchOverlay() {
    var openBtns = document.querySelectorAll('[data-search-open]');
    var overlay = document.querySelector('.search-overlay');
    if (!overlay) return;

    var closeBtn = overlay.querySelector('.search-panel__close');
    var input = overlay.querySelector('input[type="search"]');
    var form = overlay.querySelector('form');
    var tagButtons = overlay.querySelectorAll('.search-panel__tags button');

    function openSearch() {
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      window.setTimeout(function () {
        if (input) input.focus();
      }, 150);
      document.body.style.overflow = 'hidden';
    }

    function closeSearch() {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    openBtns.forEach(function (btn) {
      btn.addEventListener('click', openSearch);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeSearch);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeSearch();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeSearch();
    });

    tagButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (input) {
          input.value = btn.textContent.trim();
          input.focus();
        }
      });
    });

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var query = input ? input.value.trim() : '';
        if (!query) return;
        window.location.href = 'collections.html?search=' + encodeURIComponent(query);
      });
    }
  }

  /** Back-to-top floating button */
  function initBackToTop() {
    var btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener(
      'scroll',
      function () {
        if (window.scrollY > 600) {
          btn.classList.add('is-visible');
        } else {
          btn.classList.remove('is-visible');
        }
      },
      { passive: true }
    );

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /** Mark the nav link matching the current page with aria-current */
  function markActiveNavLink() {
    var current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-list a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === current) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }
})();
/**
 * MASI FASHION — SCROLL REVEAL MODULE
 * Reveals any element with [data-reveal] as it enters the viewport,
 * using IntersectionObserver for performance (no scroll-event polling).
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initScrollReveal);

  function initScrollReveal() {
    var targets = document.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    // Respect users who prefer reduced motion: show everything immediately.
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
/**
 * MASI FASHION — IMAGE LAZY-LOAD ENHANCEMENT
 * Native `loading="lazy"` handles the heavy lifting; this module simply
 * removes the shimmer skeleton class once each image has finished loading,
 * and provides a fallback for browsers without native lazy-load support.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initLazyLoad);

  function initLazyLoad() {
    var images = document.querySelectorAll('img[loading="lazy"]');

    images.forEach(function (img) {
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('is-loaded');
      } else {
        img.addEventListener('load', function () {
          img.classList.add('is-loaded');
        });
        img.addEventListener('error', function () {
          img.classList.add('is-loaded');
        });
      }
    });

    // Fallback for very old browsers with no native lazy-load support.
    if (!('loading' in HTMLImageElement.prototype) && 'IntersectionObserver' in window) {
      var lazyObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var img = entry.target;
            if (img.dataset.src) img.src = img.dataset.src;
            obs.unobserve(img);
          }
        });
      });
      images.forEach(function (img) {
        lazyObserver.observe(img);
      });
    }
  }
})();
/**
 * MASI FASHION — GALLERY LIGHTBOX + FILTER MODULE
 * Powers the Store Gallery grid: category filtering and a keyboard/touch
 * accessible lightbox viewer with prev/next navigation.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initGalleryFilter();
    initLightbox();
  });

  function initGalleryFilter() {
    var filterBtns = document.querySelectorAll('[data-gallery-filter]');
    var items = document.querySelectorAll('[data-gallery-item]');
    if (!filterBtns.length || !items.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var category = btn.getAttribute('data-gallery-filter');

        filterBtns.forEach(function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');

        items.forEach(function (item) {
          var match = category === 'all' || item.getAttribute('data-gallery-item') === category;
          item.style.display = match ? '' : 'none';
        });
      });
    });
  }

  function initLightbox() {
    var lightbox = document.querySelector('.lightbox');
    if (!lightbox) return;

    var triggers = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox-trigger]'));
    var imgEl = lightbox.querySelector('img');
    var captionEl = lightbox.querySelector('.lightbox__caption');
    var closeBtn = lightbox.querySelector('.lightbox__close');
    var prevBtn = lightbox.querySelector('.lightbox__prev');
    var nextBtn = lightbox.querySelector('.lightbox__next');
    var currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      updateLightbox();
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function updateLightbox() {
      var trigger = triggers[currentIndex];
      var fullSrc = trigger.getAttribute('href') || trigger.querySelector('img').src;
      var caption = trigger.getAttribute('data-caption') || '';
      imgEl.src = fullSrc;
      imgEl.alt = caption;
      if (captionEl) captionEl.textContent = caption;
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % triggers.length;
      updateLightbox();
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + triggers.length) % triggers.length;
      updateLightbox();
    }

    triggers.forEach(function (trigger, index) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        openLightbox(index);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    });
  }
})();
/**
 * MASI FASHION — COLLECTIONS FILTER & SORT MODULE
 * Client-side filtering by category and sorting by price/name for the
 * Collections page product grid. No backend required — operates purely
 * on the DOM nodes already rendered in the page.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initCollections);

  function initCollections() {
    var grid = document.querySelector('[data-product-grid]');
    if (!grid) return;

    var filterBtns = document.querySelectorAll('[data-collection-filter]');
    var sortSelect = document.querySelector('[data-sort-select]');
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.product-card'));
    var resultsCount = document.querySelector('[data-results-count]');

    // Apply ?search= query param highlighting, if navigated from search
    applySearchParam();

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var category = btn.getAttribute('data-collection-filter');

        filterBtns.forEach(function (b) {
          b.classList.remove('is-active');
        });
        btn.classList.add('is-active');

        var visibleCount = 0;
        cards.forEach(function (card) {
          var match = category === 'all' || card.getAttribute('data-category') === category;
          card.style.display = match ? '' : 'none';
          if (match) visibleCount++;
        });

        updateCount(visibleCount);
      });
    });

    if (sortSelect) {
      sortSelect.addEventListener('change', function () {
        var value = sortSelect.value;
        var sorted = cards.slice().sort(function (a, b) {
          if (value === 'price-low') {
            return parsePrice(a) - parsePrice(b);
          }
          if (value === 'price-high') {
            return parsePrice(b) - parsePrice(a);
          }
          if (value === 'name') {
            return getTitle(a).localeCompare(getTitle(b));
          }
          return 0; // 'featured' = original order
        });
        sorted.forEach(function (card) {
          grid.appendChild(card);
        });
      });
    }

    function updateCount(n) {
      if (resultsCount) {
        resultsCount.textContent = n + (n === 1 ? ' item' : ' items');
      }
    }

    function parsePrice(card) {
      var priceEl = card.querySelector('.price-now');
      if (!priceEl) return 0;
      return parseFloat(priceEl.textContent.replace(/[^0-9.]/g, '')) || 0;
    }

    function getTitle(card) {
      var titleEl = card.querySelector('.product-card__title');
      return titleEl ? titleEl.textContent.trim() : '';
    }

    function applySearchParam() {
      var params = new URLSearchParams(window.location.search);
      var query = params.get('search');
      var searchNote = document.querySelector('[data-search-note]');
      if (query && searchNote) {
        searchNote.textContent = 'Showing results for “' + query + '”';
        searchNote.hidden = false;
      }
    }

    updateCount(cards.length);
  }
})();
/**
 * MASI FASHION — COUNTDOWN TIMER MODULE
 * Drives the "Exclusive Offers" countdown blocks. Each [data-countdown]
 * element counts down to a target Date set via its data-deadline attribute
 * (ISO string), or defaults to 5 days from first page load.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initCountdowns);

  function initCountdowns() {
    var countdowns = document.querySelectorAll('[data-countdown]');
    if (!countdowns.length) return;

    countdowns.forEach(function (el) {
      var deadlineAttr = el.getAttribute('data-deadline');
      var deadline = deadlineAttr ? new Date(deadlineAttr) : defaultDeadline();

      var daysEl = el.querySelector('[data-cd-days]');
      var hoursEl = el.querySelector('[data-cd-hours]');
      var minsEl = el.querySelector('[data-cd-mins]');
      var secsEl = el.querySelector('[data-cd-secs]');

      function tick() {
        var now = new Date().getTime();
        var distance = deadline.getTime() - now;

        if (distance <= 0) {
          setValues(0, 0, 0, 0);
          clearInterval(timer);
          return;
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var secs = Math.floor((distance % (1000 * 60)) / 1000);

        setValues(days, hours, mins, secs);
      }

      function setValues(d, h, m, s) {
        if (daysEl) daysEl.textContent = pad(d);
        if (hoursEl) hoursEl.textContent = pad(h);
        if (minsEl) minsEl.textContent = pad(m);
        if (secsEl) secsEl.textContent = pad(s);
      }

      function pad(n) {
        return String(n).padStart(2, '0');
      }

      tick();
      var timer = window.setInterval(tick, 1000);
    });
  }

  function defaultDeadline() {
    var d = new Date();
    d.setDate(d.getDate() + 5);
    return d;
  }
})();
/**
 * MASI FASHION — CONTACT FORM VALIDATION MODULE
 * Lightweight client-side validation with accessible inline error
 * messaging. No external dependencies; simulates a successful submit
 * since this is a static front-end build (wire up to a real endpoint
 * by replacing the `simulateSubmit` function).
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initContactForm);

  function initContactForm() {
    var form = document.querySelector('[data-contact-form]');
    if (!form) return;

    var statusEl = form.querySelector('[data-form-status]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors(form);

      var isValid = true;
      var name = form.querySelector('#contact-name');
      var email = form.querySelector('#contact-email');
      var phone = form.querySelector('#contact-phone');
      var message = form.querySelector('#contact-message');

      if (!name.value.trim()) {
        showError(name, 'Please enter your full name.');
        isValid = false;
      }

      if (!email.value.trim() || !isValidEmail(email.value.trim())) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
      }

      if (phone && phone.value.trim() && !isValidPhone(phone.value.trim())) {
        showError(phone, 'Please enter a valid phone number.');
        isValid = false;
      }

      if (!message.value.trim() || message.value.trim().length < 10) {
        showError(message, 'Message should be at least 10 characters.');
        isValid = false;
      }

      if (!isValid) {
        setStatus('Please fix the highlighted fields and try again.', 'error');
        return;
      }

      setStatus('Sending your message…', '');
      simulateSubmit(form, function () {
        setStatus('Thank you! Your message has been sent — our team will reply within 24 hours.', 'success');
        form.reset();
      });
    });

    function setStatus(text, type) {
      if (!statusEl) return;
      statusEl.textContent = text;
      statusEl.className = 'form-status' + (type ? ' ' + type : '');
      statusEl.setAttribute('role', 'status');
    }

    function showError(field, msg) {
      field.setAttribute('aria-invalid', 'true');
      field.style.borderColor = 'var(--masi-red)';
      var errorId = field.id + '-error';
      var existing = document.getElementById(errorId);
      if (!existing) {
        var errorEl = document.createElement('span');
        errorEl.id = errorId;
        errorEl.className = 'form-status error';
        errorEl.style.display = 'block';
        errorEl.style.marginTop = '0.35rem';
        errorEl.textContent = msg;
        field.insertAdjacentElement('afterend', errorEl);
      }
      field.setAttribute('aria-describedby', errorId);
    }

    function clearErrors(scope) {
      scope.querySelectorAll('.form-status.error[id$="-error"]').forEach(function (el) {
        el.remove();
      });
      scope.querySelectorAll('[aria-invalid]').forEach(function (el) {
        el.removeAttribute('aria-invalid');
        el.style.borderColor = '';
      });
    }

    function isValidEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function isValidPhone(value) {
      return /^[0-9+\-\s()]{7,16}$/.test(value);
    }

    function simulateSubmit(formEl, callback) {
      window.setTimeout(callback, 900);
    }
  }
})();
/**
 * MASI FASHION — UI EXTRAS MODULE
 * Small progressive-enhancement behaviours: footer newsletter sign-up,
 * horizontal product-scroll arrow buttons, wishlist heart toggle.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initNewsletter();
    initScrollNav();
    initWishlist();
  });

  function initNewsletter() {
    var form = document.querySelector('[data-newsletter-form]');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var note = form.parentElement.querySelector('[data-newsletter-note]');
      if (!input || !input.value.trim()) return;

      if (note) {
        note.textContent = 'Thanks for subscribing! Watch your inbox for exclusive drops.';
      }
      form.reset();
    });
  }

  function initScrollNav() {
    document.querySelectorAll('[data-scroll-target]').forEach(function (nav) {
      var targetId = nav.getAttribute('data-scroll-target');
      var track = document.getElementById(targetId);
      if (!track) return;

      var prevBtn = nav.querySelector('[data-scroll-prev]');
      var nextBtn = nav.querySelector('[data-scroll-next]');
      var scrollAmount = 300;

      if (prevBtn) {
        prevBtn.addEventListener('click', function () {
          track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', function () {
          track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
      }
    });
  }

  function initWishlist() {
    document.querySelectorAll('.product-card__wishlist').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var pressed = btn.getAttribute('aria-pressed') === 'true';
        btn.setAttribute('aria-pressed', String(!pressed));
        btn.classList.toggle('is-active', !pressed);
      });
    });
  }
})();
