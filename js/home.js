document.addEventListener("DOMContentLoaded", function () {
  const heroImages = document.querySelector('.hero-images');
  const imgLeft = document.querySelector('.img-left');
  const imgCenter = document.querySelector('.img-center');
  const imgRight = document.querySelector('.img-right');

  if (heroImages && imgLeft && imgCenter && imgRight) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const start = heroImages.offsetTop;
      const end = start + window.innerHeight * 0.5; // smaller scroll range = faster animation


      // Progress: 0 (start) to 1 (fully scrolled through hero section)
      let progress = (scrollY - start) / (end - start);
      progress = Math.max(0, Math.min(progress, 1)); // Clamp between 0 and 1

      // Movement ranges
      imgLeft.style.transform = `translate(${lerp(-300, -200, progress)}px, ${lerp(300, 40, progress)}px)`;
      imgCenter.style.transform = `translate(${lerp(-75, -200, progress)}px, ${lerp(0, 20, progress)}px)`;
      imgRight.style.transform = `translate(${lerp(300, -200, progress)}px, ${lerp(-300, 0, progress)}px)`;

      // Optional: fade in
      const opacity = lerp(0.3, 1, progress);
      imgLeft.style.opacity = opacity;
      imgCenter.style.opacity = opacity;
      imgRight.style.opacity = opacity;
    });
  }

  function lerp(start, end, t) {
    return start + (end - start) * t;
  }
});
