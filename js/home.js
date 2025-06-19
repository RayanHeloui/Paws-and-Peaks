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

    // 🎯 Animate + Lock Image Movement
    if (scrollProgress < lockAt) {
      imgLeft.style.transform = `translate(calc(-50% + ${scrollProgress * -68}px), -50%)`;
      imgCenter.style.transform = `translate(calc(-50% + ${scrollProgress * -1000}px), -50%)`;
      imgRight.style.transform = `translate(calc(-50% + ${scrollProgress * -1928}px), -50%)`;
  // Slogan fade in
  slogan.style.opacity = scrollProgress >= 0.45 ? "1" : "0";

} else {
  // Lock image positions
  imgLeft.style.transform = `translate(calc(-50% + -34px), -50%)`;
  imgCenter.style.transform = `translate(calc(-50% + -500px), -50%)`;
  imgRight.style.transform = `translate(calc(-50% + -964px), -50%)`;

  // 🧷 Lock slogan position (remove vertical scroll drift)
  slogan.style.transform = `translateY(0, -50%)`;
  slogan.style.opacity = "1";
}

    // ✅ Word-by-word animation
    const thresholds = [0.65, 0.75, 0.85, 0.95];
    blocks.forEach((block, index) => {
      if (scrollProgress >= thresholds[index]) {
        block.classList.add("active");
      } else {
        block.classList.remove("active");
      }
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
