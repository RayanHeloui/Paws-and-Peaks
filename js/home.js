document.addEventListener("DOMContentLoaded", () => {
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

    // Animate bones
    imgLeft.style.transform = `translate(${progress * 247}px, ${progress * -222}px)`;
    imgCenter.style.transform = `translate(${progress * -567}px, ${progress * 50}px)`;
    imgRight.style.transform = `translate(${progress * -1250}px, ${progress * 445}px)`;

    // ✅ Show slogan ONLY when bones are fully settled
    if (scrollProgress >= 1.05 && rect.top <= 0 && rect.bottom > 0) {
      sloganSection.classList.add('visible');
    } else {
      sloganSection.classList.remove('visible');
    }

    // ✅ Animate slogan blocks as scroll increases
    const thresholds = [1.35, 1.7, 2.05, 2.4];
    blocks.forEach((block, index) => {
      if (scrollProgress >= thresholds[index]) {
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });
  });
});
