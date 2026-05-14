/*
 * Mobile-friendly deck navigation.
 *
 * Expects the layout contract documented in styles/deck.css:
 *   <body class="deck">
 *     <main class="deck__viewport">
 *       <section class="slide"> ... </section>
 *       ...
 *     </main>
 *     <nav class="deck__nav">
 *       <button data-deck-prev>Prev</button>
 *       <span class="deck__progress" data-deck-progress></span>
 *       <button data-deck-next>Next</button>
 *     </nav>
 *   </body>
 *
 * Keyboard, click, and touch-swipe all advance one slide at a time.
 * The script is intentionally framework-free so the rendered HTML
 * stays portable and works offline.
 */

(function () {
  const viewport = document.querySelector(".deck__viewport");
  if (!viewport) return;

  const slides = Array.from(viewport.querySelectorAll(".slide"));
  if (slides.length === 0) return;

  const prevButton = document.querySelector("[data-deck-prev]");
  const nextButton = document.querySelector("[data-deck-next]");
  const progress = document.querySelector("[data-deck-progress]");

  let currentIndex = 0;

  function clampIndex(index) {
    if (index < 0) return 0;
    if (index > slides.length - 1) return slides.length - 1;
    return index;
  }

  function goTo(index) {
    const next = clampIndex(index);
    currentIndex = next;
    slides[next].scrollIntoView({ behavior: "smooth", block: "start" });
    updateProgress();
  }

  function updateProgress() {
    if (progress) {
      progress.textContent = String(currentIndex + 1) + " / " + slides.length;
    }
    if (prevButton) prevButton.disabled = currentIndex === 0;
    if (nextButton) nextButton.disabled = currentIndex === slides.length - 1;
  }

  // Track which slide is in view so keyboard nav stays in sync with scroll.
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          const index = slides.indexOf(entry.target);
          if (index !== -1) {
            currentIndex = index;
            updateProgress();
          }
        }
      });
    },
    { root: viewport, threshold: [0.6] }
  );
  slides.forEach(function (slide) {
    observer.observe(slide);
  });

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      goTo(currentIndex - 1);
    });
  }
  if (nextButton) {
    nextButton.addEventListener("click", function () {
      goTo(currentIndex + 1);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) return;
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      goTo(currentIndex + 1);
      event.preventDefault();
    } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
      goTo(currentIndex - 1);
      event.preventDefault();
    } else if (event.key === "Home") {
      goTo(0);
      event.preventDefault();
    } else if (event.key === "End") {
      goTo(slides.length - 1);
      event.preventDefault();
    } else if (event.key === "p" || event.key === "P") {
      document.body.classList.toggle("deck--present");
    }
  });

  // Horizontal swipe navigation on top of vertical scroll-snap.
  let touchStartX = null;
  let touchStartY = null;
  viewport.addEventListener(
    "touchstart",
    function (event) {
      if (event.touches.length !== 1) return;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    },
    { passive: true }
  );

  viewport.addEventListener(
    "touchend",
    function (event) {
      if (touchStartX === null || touchStartY === null) return;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - touchStartX;
      const dy = touch.clientY - touchStartY;
      touchStartX = null;
      touchStartY = null;
      const horizontalDominant = Math.abs(dx) > Math.abs(dy) * 1.5;
      const longEnough = Math.abs(dx) > 48;
      if (horizontalDominant && longEnough) {
        if (dx < 0) {
          goTo(currentIndex + 1);
        } else {
          goTo(currentIndex - 1);
        }
      }
    },
    { passive: true }
  );

  updateProgress();
})();
