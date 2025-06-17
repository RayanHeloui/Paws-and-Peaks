document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const imgLeft = document.querySelector(".img-left");
  const imgCenter = document.querySelector(".img-center");
  const imgRight = document.querySelector(".img-right");

  window.addEventListener("scroll", () => {
const rect = hero.getBoundingClientRect();
const progress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);


    // Animate to final positions
    imgLeft.style.transform = `translate(${scrollProgress * 200}px, ${scrollProgress * -150}px)`;
    imgCenter.style.transform = `translate(${scrollProgress * -50}px, ${scrollProgress * 100}px)`;
    imgRight.style.transform = `translate(${scrollProgress * -250}px, ${scrollProgress * 150}px)`;
  });
});
