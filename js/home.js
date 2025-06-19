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

  const heroImages = document.querySelector('.hero-images');
  const slogan = document.querySelector('.hero-slogan');

  window.addEventListener("scroll", () => {
    const rect = hero.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.min(Math.max(-rect.top / windowHeight, 0), 1);

    // 🎯 Image transform logic
    imgLeft.style.transform = `translate(calc(-50% + ${scrollProgress * -34}px), -50%)`;
    imgCenter.style.transform = `translate(calc(-50% + ${scrollProgress * -500}px), -50%)`;
    imgRight.style.transform = `translate(calc(-50% + ${scrollProgress * -964}px), -50%)`;

    // ✅ Show/hide images & slogan only inside .hero
    const inView = rect.top <= 0 && rect.bottom > 0;
    heroImages.style.display = inView ? 'block' : 'none';
    slogan.style.display = inView ? 'block' : 'none';

    // ✅ Slogan visibility
    if (scrollProgress >= 0.75 && inView) {
      sloganSection.classList.add('visible');
    } else {
      sloganSection.classList.remove('visible');
    }

    // ✅ Word-by-word reveal
    const thresholds = [1.1, 1.25, 1.4, 1.55];
    blocks.forEach((block, index) => {
      if (scrollProgress >= thresholds[index]) {
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });
  });

  // ✅ TESTIMONIAL SLIDER
  const track = document.querySelector('.testimonial-track');
  const cards = document.querySelectorAll('.testimonial-card');
  const visibleCards = 3;
  const totalSlides = Math.ceil(cards.length / visibleCards);
  let index = 0;

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 20;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSlider();
  }, 4000);
});
