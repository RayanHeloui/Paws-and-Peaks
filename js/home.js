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
    const fullProgress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 2);
    const progress = Math.min(fullProgress, 1);

    // Animate bones
    imgLeft.style.transform = `translate(${progress * 247}px, ${progress * -222}px)`;
    imgCenter.style.transform = `translate(${progress * -567}px, ${progress * 50}px)`;
    imgRight.style.transform = `translate(${progress * -1250}px, ${progress * 445}px)`;

    // Show slogan
    if (fullProgress >= 1) {
      sloganSection.classList.add('visible');
    } else {
      sloganSection.classList.remove('visible');
    }

    // Animate each slogan block by scroll phase (1.0–2.0)
    const scrollSlogan = fullProgress - 1;
    const thresholds = [0.05, 0.3, 0.55, 0.8];
    blocks.forEach((block, index) => {
      if (scrollSlogan >= thresholds[index]) {
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });
  });
});
