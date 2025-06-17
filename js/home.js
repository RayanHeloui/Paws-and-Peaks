document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const imgLeft = document.querySelector(".img-left");
  const imgCenter = document.querySelector(".img-center");
  const imgRight = document.querySelector(".img-right");

  const sloganSection = document.querySelector('.hero-slogan');
  const words = [
    document.getElementById('word1'),
    document.getElementById('word2'),
    document.getElementById('word3'),
    document.getElementById('word4')
  ];
  let sloganActivated = false;

  window.addEventListener("scroll", () => {
    const rect = hero.getBoundingClientRect();
    const progress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);

    // Animate bones
    imgLeft.style.transform = `translate(${progress * 247}px, ${progress * -222}px)`;
    imgCenter.style.transform = `translate(${progress * -567}px, ${progress * 50}px)`;
    imgRight.style.transform = `translate(${progress * -1250}px, ${progress * 445}px)`;

    // Show slogan after bone animation finishes
    if (progress >= 1 && !sloganActivated) {
      sloganActivated = true;
      sloganSection.classList.add('visible');

      words.forEach((word, index) => {
        setTimeout(() => {
          word.classList.add('active');
        }, index * 300);
      });
    }

    // Reset if scrolling back up
    if (progress < 1 && sloganActivated) {
      sloganActivated = false;
      sloganSection.classList.remove('visible');
      words.forEach(word => word.classList.remove('active'));
    }
  });
});
