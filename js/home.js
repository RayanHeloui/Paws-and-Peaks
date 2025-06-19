document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const imgLeft = document.querySelector(".img-left");
  const imgCenter = document.querySelector(".img-center");
  const imgRight = document.querySelector(".img-right");

  const sloganSection = document.querySelector('.hero-slogan');
  const blocks = [
    document.getElementById('word1'),
    document.getElementById('word2'),
    document.getElementById('word3'),
    document.getElementById('word4')
  ];

  window.addEventListener("scroll", () => {
    const rect = hero.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.min(Math.max(-rect.top / windowHeight, 0), 1);

    // 🔧 Tweak your target end positions here
    const leftX = 300;
    const leftY = -100;

    const centerX = -300;
    const centerY = 30;

    const rightX = -600;
    const rightY = 100;

    // 💡 Scroll-based movement
    imgLeft.style.transform = `translate(${scrollProgress * leftX}px, ${scrollProgress * leftY}px)`;
    imgCenter.style.transform = `translate(${scrollProgress * centerX}px, ${scrollProgress * centerY}px)`;
    imgRight.style.transform = `translate(${scrollProgress * rightX}px, ${scrollProgress * rightY}px)`;

    // 🧠 Live debug
    console.clear();
    console.log("Scroll Progress:", scrollProgress.toFixed(2));
    console.log("Left:", scrollProgress * leftX, scrollProgress * leftY);
    console.log("Center:", scrollProgress * centerX, scrollProgress * centerY);
    console.log("Right:", scrollProgress * rightX, scrollProgress * rightY);

    // 👀 Slogan reveal
    if (scrollProgress >= 0.8) {
      sloganSection.classList.add('visible');
    } else {
      sloganSection.classList.remove('visible');
    }

    const thresholds = [1.05, 1.2, 1.35, 1.5];
    blocks.forEach((block, index) => {
      if (scrollProgress >= thresholds[index]) {
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });
  });
});
