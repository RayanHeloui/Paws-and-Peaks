const heroImages = document.querySelector('.hero-images');

window.addEventListener('scroll', () => {
  const trigger = heroImages.offsetTop - window.innerHeight * 0.3;

  if (window.scrollY > trigger) {
    heroImages.classList.add('stack');
  } else {
    heroImages.classList.remove('stack');
  }
});
