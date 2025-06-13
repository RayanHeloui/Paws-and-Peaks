document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector('.hero');
  const imgLeft = document.querySelector('.img-left');
  const imgCenter = document.querySelector('.img-center');
  const imgRight = document.querySelector('.img-right');

  if (heroSection && imgLeft && imgCenter && imgRight) {
    // 👇 Add this so the image starts visually aligned with JS
    imgLeft.style.transform = `translate(0px, 170px)`;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const start = heroSection.offsetTop;
      const end = start + heroSection.offsetHeight * 0.25;

      let progress = (scrollY - start) / (end - start);
      progress = Math.max(0, Math.min(progress, 1));

      imgLeft.style.transform = `translate(${lerp(0, 300, progress)}px, ${lerp(170, -60, progress)}px)`;
      imgCenter.style.transform = `translate(${lerp(-50, 70, progress)}%, ${lerp(-60, 30, progress)}%)`;
      imgRight.style.transform = `translate(${lerp(0, -100, progress)}px, ${lerp(0, 100, progress)}px)`;
    });
  }
});

// ✅ Helper function
function lerp(start, end, t) {
  return start + (end - start) * t;
}
