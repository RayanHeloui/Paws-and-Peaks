document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector('.hero');
  const imgLeft = document.querySelector('.img-left');
  const imgCenter = document.querySelector('.img-center');
  const imgRight = document.querySelector('.img-right');

  if (heroSection && imgLeft && imgCenter && imgRight) {
    // Set initial transform based on scroll start
    const initialProgress = 0;
    imgLeft.style.transform = `translate(${lerp(0, 300, initialProgress)}px, ${lerp(550, -60, initialProgress)}px)`;
    imgCenter.style.transform = `translate(${lerp(-50, 70, initialProgress)}%, ${lerp(-60, 30, initialProgress)}%)`;
    imgRight.style.transform = `translate(${lerp(0, -100, initialProgress)}px, ${lerp(0, 100, initialProgress)}px)`;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const start = heroSection.offsetTop;
      const end = start + heroSection.offsetHeight * 0.25;

      let progress = (scrollY - start) / (end - start);
      progress = Math.max(0, Math.min(progress, 1));

      imgLeft.style.transform = `translate(${lerp(0, 300, progress)}px, ${lerp(550, -60, progress)}px)`;
      imgCenter.style.transform = `translate(${lerp(-50, 70, progress)}%, ${lerp(-60, 30, progress)}%)`;
      imgRight.style.transform = `translate(${lerp(0, -100, progress)}px, ${lerp(0, 100, progress)}px)`;
    });
  }
});

function lerp(start, end, t) {
  return start + (end - start) * t;
}
