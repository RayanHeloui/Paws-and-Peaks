document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const imgLeft = document.querySelector(".img-left");
  const imgCenter = document.querySelector(".img-center");
  const imgRight = document.querySelector(".img-right");
  const slogan = document.querySelector(".hero-slogan");
  const blocks = [
    document.getElementById("word1"),
    document.getElementById("word2"),
    document.getElementById("word3"),
    document.getElementById("word4"),
  ];

  window.addEventListener("scroll", () => {
    const rect = hero.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.min(Math.max(-rect.top / windowHeight, 0), 1);
    const lockAt = 0.5;

    // 🌞 Parallax Shadow Lighting
    const shadowBlur = 12;
    const shadowColor = "rgba(0, 0, 0, 0.35)";
    const shadowDistanceBase = 60;
    const parallaxMultiplier = 1.5;

    const lightStartAngle = 195; // Top-left behind
    const lightEndAngle = 240;   // Top-right behind
    const angle = scrollProgress < lockAt
      ? lightStartAngle + scrollProgress * (lightEndAngle - lightStartAngle)
      : lightStartAngle + lockAt * (lightEndAngle - lightStartAngle);

    const radians = angle * (Math.PI / 180);
    const shadowX = Math.cos(radians) * shadowDistanceBase;
    const shadowY = Math.sin(radians) * shadowDistanceBase;

    // ✅ Apply animated shadows
    imgLeft.style.filter = `drop-shadow(${shadowX * 0.8}px ${shadowY * 0.8}px ${shadowBlur}px ${shadowColor})`;
    imgCenter.style.filter = `drop-shadow(${shadowX * parallaxMultiplier}px ${shadowY * parallaxMultiplier}px ${shadowBlur}px ${shadowColor})`;
    imgRight.style.filter = `drop-shadow(${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor})`;

    // 📦 Animate movement & slogan
    if (scrollProgress < lockAt) {
      imgLeft.style.transform = `translate(calc(-50% + ${scrollProgress * -68}px), -50%)`;
      imgCenter.style.transform = `translate(calc(-50% + ${scrollProgress * -1000}px), -50%)`;
      imgRight.style.transform = `translate(calc(-50% + ${scrollProgress * -1928}px), -50%)`;

      slogan.style.transform = `translate(0, -50%)`;
      slogan.style.opacity = scrollProgress >= 0.45 ? "1" : "0";
    } else {
      imgLeft.style.transform = `translate(calc(-50% + -34px), -50%)`;
      imgCenter.style.transform = `translate(calc(-50% + -500px), -50%)`;
      imgRight.style.transform = `translate(calc(-50% + -964px), -50%)`;

      slogan.style.transform = `translate(0, -50%)`;
      slogan.style.opacity = "1";
    }

    // Animate slogan words
    const thresholds = [0.65, 0.75, 0.85, 0.95];
    blocks.forEach((block, index) => {
      block.classList.toggle("active", scrollProgress >= thresholds[index]);
    });
  });

  // ✅ Testimonial slider
  const track = document.querySelector(".testimonial-track");
  const cards = document.querySelectorAll(".testimonial-card");
  const visibleCards = 3;
  const totalSlides = Math.ceil(cards.length / visibleCards);
  let index = 0;

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 20;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSlider();
  }, 4000);
});
