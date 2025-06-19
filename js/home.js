document.addEventListener("DOMContentLoaded", () => {
  // ✅ HERO SECTION SCROLL ANIMATION
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
    const scrollProgress = Math.min(Math.max(-rect.top / windowHeight, 0), 4);
    const progress = Math.min(scrollProgress, 1);

    // 🧠 Original movement
    imgLeft.style.transform = `translate(${progress * 247}px, ${progress * -222}px)`;
    imgCenter.style.transform = `translate(${progress * -567}px, ${progress * 50}px)`;
    imgRight.style.transform = `translate(${progress * -1250}px, ${progress * 445}px)`;

    // 🧾 Reveal slogan block
    if (scrollProgress >= 1.05 && rect.top <= 0 && rect.bottom > 0) {
      sloganSection.classList.add('visible');
    } else {
      sloganSection.classList.remove('visible');
    }

    // 🪄 Word-by-word animation
    const thresholds = [1.05, 1.2, 1.35, 1.5];
    blocks.forEach((block, index) => {
      if (scrollProgress >= thresholds[index]) {
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });
  });

  // ✅ TESTIMONIAL SLIDER (auto-scroll)
  const track = document.querySelector('.testimonial-track');
  const cards = document.querySelectorAll('.testimonial-card');
  const visibleCards = 3;
  const totalSlides = Math.ceil(cards.length / visibleCards);
  let index = 0;

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 20; // Adjust for margin if needed
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSlider();
  }, 4000);
});

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const imgLeft = document.querySelector(".img-left");
  const imgCenter = document.querySelector(".img-center");
  const imgRight = document.querySelector(".img-right");

  const panel = document.createElement("div");
  panel.style.position = "fixed";
  panel.style.bottom = "20px";
  panel.style.right = "20px";
  panel.style.background = "#fff";
  panel.style.border = "1px solid #ccc";
  panel.style.padding = "15px";
  panel.style.fontFamily = "monospace";
  panel.style.fontSize = "12px";
  panel.style.zIndex = "9999";
  panel.style.width = "320px";
  panel.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  panel.innerHTML = `
    <strong>🎛 Hero Image Adjuster</strong><br><br>
    
    <label>Left X:
      <input id="leftX" type="range" min="-1000" max="1000" value="490" step="1">
      <input id="leftXNum" type="number" value="490" style="width: 60px">
    </label><br>
    <label>Left Y:
      <input id="leftY" type="range" min="-500" max="500" value="0" step="1">
      <input id="leftYNum" type="number" value="0" style="width: 60px">
    </label><br><br>

    <label>Center X:
      <input id="centerX" type="range" min="-1000" max="1000" value="0" step="1">
      <input id="centerXNum" type="number" value="0" style="width: 60px">
    </label><br>
    <label>Center Y:
      <input id="centerY" type="range" min="-500" max="500" value="0" step="1">
      <input id="centerYNum" type="number" value="0" style="width: 60px">
    </label><br><br>

    <label>Right X:
      <input id="rightX" type="range" min="-1000" max="1000" value="-490" step="1">
      <input id="rightXNum" type="number" value="-490" style="width: 60px">
    </label><br>
    <label>Right Y:
      <input id="rightY" type="range" min="-500" max="500" value="0" step="1">
      <input id="rightYNum" type="number" value="0" style="width: 60px">
    </label><br>
  `;
  document.body.appendChild(panel);

  // Sync number inputs with sliders and apply transform
  const pairs = [
    ['leftX', 'leftXNum'],
    ['leftY', 'leftYNum'],
    ['centerX', 'centerXNum'],
    ['centerY', 'centerYNum'],
    ['rightX', 'rightXNum'],
    ['rightY', 'rightYNum']
  ];

  function getValue(id) {
    return parseFloat(document.getElementById(id).value);
  }

  function updateTransforms() {
    const rect = hero.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.min(Math.max(-rect.top / windowHeight, 0), 1);

    const lx = getValue('leftX');
    const ly = getValue('leftY');
    const cx = getValue('centerX');
    const cy = getValue('centerY');
    const rx = getValue('rightX');
    const ry = getValue('rightY');

    imgLeft.style.transform = `translate(${scrollProgress * lx}px, ${scrollProgress * ly}px)`;
    imgCenter.style.transform = `translate(${scrollProgress * cx}px, ${scrollProgress * cy}px)`;
    imgRight.style.transform = `translate(${scrollProgress * rx}px, ${scrollProgress * ry}px)`;
  }

  function syncInputs() {
    pairs.forEach(([sliderId, numId]) => {
      const slider = document.getElementById(sliderId);
      const number = document.getElementById(numId);
      number.value = slider.value;
    });
  }

  function syncSliders() {
    pairs.forEach(([sliderId, numId]) => {
      const slider = document.getElementById(sliderId);
      const number = document.getElementById(numId);
      slider.value = number.value;
    });
  }

  // Handle slider → number sync
  pairs.forEach(([sliderId, numId]) => {
    const slider = document.getElementById(sliderId);
    const number = document.getElementById(numId);

    slider.addEventListener("input", () => {
      document.getElementById(numId).value = slider.value;
      updateTransforms();
    });

    number.addEventListener("input", () => {
      document.getElementById(sliderId).value = number.value;
      updateTransforms();
    });
  });

  // Update on scroll
  window.addEventListener("scroll", updateTransforms);

  // Initial draw
  updateTransforms();
});
