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
  const scrollProgress = Math.min(Math.max(-rect.top / windowHeight, 0), 1);

  // 🎯 Final transform values
  imgLeft.style.transform = `translate(${scrollProgress * -182}px, 0px)`;
  imgCenter.style.transform = `translate(${scrollProgress * -648}px, 0px)`;
  imgRight.style.transform = `translate(${scrollProgress * -1112}px, 0px)`;

  // ✅ Slogan Reveal Logic (keep as is)
if (scrollProgress >= 0.75 && rect.top <= 0 && rect.bottom > 0) {
  sloganSection.classList.add('visible');
} else {
  sloganSection.classList.remove('visible');
}

  const thresholds = [0.90, 0.935, 0.97, 1.0];
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

