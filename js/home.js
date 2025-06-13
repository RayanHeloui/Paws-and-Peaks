document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector('.hero');
  const imgLeft = document.querySelector('.img-left');
  const imgCenter = document.querySelector('.img-center');
  const imgRight = document.querySelector('.img-right');

  if (heroSection && imgLeft && imgCenter && imgRight) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      // Move start & end inside to recalc on resize
      const start = heroSection.offsetTop;
      const end = start + heroSection.offsetHeight * 0.25;

      let progress = (scrollY - start) / (end - start);
      progress = Math.max(0, Math.min(progress, 1));

      // 🎯 Apply scroll-driven transform
      imgLeft.style.transform = `translate(${lerp(-300, -200, progress)}px, ${lerp(300, 40, progress)}px)`;
      imgCenter.style.transform = `translate(${lerp(-75, -200, progress)}px, ${lerp(0, 20, progress)}px)`;
      imgRight.style.transform = `translate(${lerp(300, -200, progress)}px, ${lerp(-300, 0, progress)}px)`;
    });
  }

  function lerp(start, end, t) {
    return start + (end - start) * t;
  }
});
