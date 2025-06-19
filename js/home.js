document.addEventListener("DOMContentLoaded", () => {
  // ✅ HERO SECTION SCROLL ANIMATION
  const hero = document.querySelector(".hero");
  const imgLeft = document.querySelector(".img-left");
  const imgCenter = document.querySelector(".img-center");
  const imgRight = document.querySelector(".img-right");

  const sloganSection = document.querySelector('.hero-slogan');
  const blocks = [
    document.getElementById('word1'),
    document.getElementById('word2'),
    document.getElementById('word3'),
    document.getElementById('word4')
  ];

  window.addEventListener("scroll", () => {
    const rect = hero.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.min(Math.max(-rect.top / windowHeight, 0), 4);
    const progress = Math.min(scrollProgress, 1);

    // 🧠 Original movement
    imgLeft.style.transform = `translate(${progress * 247}px, ${progress * -222}px)`;
    imgCenter.style.transform = `translate(${progress * -567}px, ${progress * 50}px)`;
    imgRight.style.transform = `translate(${progress * -1250}px, ${progress * 445}px)`;

    // 🧾 Reveal slogan block
    if (scrollProgress >= 1.05 && rect.top <= 0 && rect.bottom > 0) {
      sloganSection.classList.add('visible');
    } else {
      sloganSection.classList.remove('visible');
    }

    // 🪄 Word-by-word animation
    const thresholds = [1.05, 1.2, 1.35, 1.5];
    blocks.forEach((block, index) => {
      if (scrollProgress >= thresholds[index]) {
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });
  });

  // ✅ TESTIMONIAL SLIDER (auto-scroll)
  const track = document.querySelector('.testimonial-track');
  const cards = document.querySelectorAll('.testimonial-card');
  const visibleCards = 3;
  const totalSlides = Math.ceil(cards.length / visibleCards);
  let index = 0;

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 20; // Adjust for margin if needed
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSlider();
  }, 4000);
});
