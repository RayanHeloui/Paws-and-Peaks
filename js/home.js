document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector('.hero');
  const imgLeft = document.querySelector('.img-left');
  const imgCenter = document.querySelector('.img-center');
  const imgRight = document.querySelector('.img-right');

  if (heroSection && imgLeft && imgCenter && imgRight) {
    // Initial positions for all three using transform
    imgLeft.style.transform = `translate(0px, 0px)`;
    imgCenter.style.transform = `translate(0px, 0px)`;
    imgRight.style.transform = `translate(0px, 0px)`;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const start = heroSection.offsetTop;
      const end = start + heroSection.offsetHeight * 0.25;

      let progress = (scrollY - start) / (end - start);
      progress = Math.max(0, Math.min(progress, 1));

      // 📦 Scroll-based transforms
      imgLeft.style.transform = `translate(${lerp(0, 200, progress)}px, ${lerp(0, -100, progress)}px)`;
      imgCenter.style.transform = `translate(${lerp(0, -100, progress)}px, ${lerp(0, 50, progress)}px)`;
      imgRight.style.transform = `translate(${lerp(0, -150, progress)}px, ${lerp(0, 100, progress)}px)`;
    });
  }
});

function lerp(start, end, t) {
  return start + (end - start) * t;
}
