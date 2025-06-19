document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const heroImages = document.querySelector(".hero-images");
  const imgLeft = document.querySelector(".img-left");
  const imgCenter = document.querySelector(".img-center");
  const imgRight = document.querySelector(".img-right");

  const slogan = document.querySelector(".hero-slogan");
  const blocks = [
    document.getElementById("word1"),
    document.getElementById("word2"),
    document.getElementById("word3"),
    document.getElementById("word4"),
  ];

  window.addEventListener("scroll", () => {
    const rect = hero.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.min(Math.max(-rect.top / windowHeight, 0), 1);

    // ✅ Move images smoothly
    imgLeft.style.transform = `translate(calc(-50% + ${scrollProgress * -34}px), -50%)`;
    imgCenter.style.transform = `translate(calc(-50% + ${scrollProgress * -500}px), -50%)`;
    imgRight.style.transform = `translate(calc(-50% + ${scrollProgress * -964}px), -50%)`;


    // ✅ Slogan appears at 0.4 scroll
    if (scrollProgress >= 0.45 && inView) {
      slogan.classList.add("visible");
    } else {
      slogan.classList.remove("visible");
    }

    // ✅ Word-by-word animation
   const thresholds = [0.65, 0.75, 0.85, 0.95];
    blocks.forEach((block, index) => {
      if (scrollProgress >= thresholds[index]) {
        block.classList.add("active");
      } else {
        block.classList.remove("active");
      }
    });
  });

  // ✅ TESTIMONIAL SLIDER
  const track = document.querySelector(".testimonial-track");
  const cards = document.querySelectorAll(".testimonial-card");
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
