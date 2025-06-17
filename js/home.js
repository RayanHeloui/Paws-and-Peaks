document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const imgLeft = document.querySelector(".img-left");
  const imgCenter = document.querySelector(".img-center");
  const imgRight = document.querySelector(".img-right");

  window.addEventListener("scroll", () => {
    const rect = hero.getBoundingClientRect();
    const progress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);

    // Animate to final positions
    imgLeft.style.transform = `translate(${progress * 200}px, ${progress * -150}px)`;
    imgCenter.style.transform = `translate(${progress * -50}px, ${progress * 100}px)`;
    imgRight.style.transform = `translate(${progress * -250}px, ${progress * 150}px)`;
  });
});

