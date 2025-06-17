document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector('.hero');
  const imgLeft = document.querySelector('.img-left');
  const imgCenter = document.querySelector('.img-center');
  const imgRight = document.querySelector('.img-right');

  const startY = heroSection.offsetTop;
  const endY = startY + window.innerHeight;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    let progress = (scrollY - startY) / (endY - startY);
    progress = Math.max(0, Math.min(progress, 1)); // Clamp between 0 and 1

    // Bone trajectories based on your screenshot
    imgLeft.style.transform = `translate(${lerp(0, 300, progress)}px, ${lerp(0, -200, progress)}px)`;
    imgCenter.style.transform = `translate(${lerp(0, 100, progress)}px, ${lerp(0, 100, progress)}px)`;
    imgRight.style.transform = `translate(${lerp(0, -350, progress)}px, ${lerp(0, 200, progress)}px)`;
  });
});

function lerp(start, end, t) {
  return start + (end - start) * t;
}
