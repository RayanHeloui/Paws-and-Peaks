document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector('.hero');
  const imgLeft = document.querySelector('.img-left');
  const imgCenter = document.querySelector('.img-center');
  const imgRight = document.querySelector('.img-right');

  if (heroSection && imgLeft && imgCenter && imgRight) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      const start = heroSection.offsetTop;
      const end = start + heroSection.offsetHeight * 0.25;

      let progress = (scrollY - start) / (end - start);
      progress = Math.max(0, Math.min(progress, 1));

      imgLeft.style.transform = `translate(${lerp(0, 100, progress)}px, ${lerp(100, -100, progress)}px)`;
      imgCenter.style.transform = `translate(-50%, -50%) scale(${lerp(1, 0.9, progress)})`;
      imgRight.style.transform = `translate(${lerp(0, -100, progress)}px, ${lerp(0, 100, progress)}px)`;
    }); // ✅ End scroll listener
  } // ✅ End if block
});

// ✅ lerp outside DOMContentLoaded
function lerp(start, end, t) {
  return start + (end - start) * t;
}
