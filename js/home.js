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

  // 🧰 Control Panel UI
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
  panel.style.width = "300px";
  panel.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  panel.innerHTML = `
    <strong>🎛 Hero Image Adjuster</strong><br><br>
    <label>Left X: <input id="leftX" type="range" min="-1000" max="1000" value="490" step="1"></label>
    <span id="valLeftX">490</span><br>
    <label>Left Y: <input id="leftY" type="range" min="-500" max="500" value="0" step="1"></label>
    <span id="valLeftY">0</span><br><br>

    <label>Center X: <input id="centerX" type="range" min="-1000" max="1000" value="0" step="1"></label>
    <span id="valCenterX">0</span><br>
    <label>Center Y: <input id="centerY" type="range" min="-500" max="500" value="0" step="1"></label>
    <span id="valCenterY">0</span><br><br>

    <label>Right X: <input id="rightX" type="range" min="-2000" max="2000" value="-490" step="1"></label>
    <span id="valRightX">-490</span><br>
    <label>Right Y: <input id="rightY" type="range" min="-500" max="500" value="0" step="1"></label>
    <span id="valRightY">0</span><br>
  `;
  document.body.appendChild(panel);

  // 🧠 Utility to get and show slider values
  function getValue(id) {
    return parseFloat(document.getElementById(id).value);
  }

  function updateLabels() {
    document.getElementById("valLeftX").textContent = getValue("leftX");
    document.getElementById("valLeftY").textContent = getValue("leftY");
    document.getElementById("valCenterX").textContent = getValue("centerX");
    document.getElementById("valCenterY").textContent = getValue("centerY");
    document.getElementById("valRightX").textContent = getValue("rightX");
    document.getElementById("valRightY").textContent = getValue("rightY");
  }

  // 🔄 Update on scroll
  window.addEventListener("scroll", () => {
    const rect = hero.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.min(Math.max(-rect.top / windowHeight, 0), 1);

    const leftX = getValue("leftX");
    const leftY = getValue("leftY");
    const centerX = getValue("centerX");
    const centerY = getValue("centerY");
    const rightX = getValue("rightX");
    const rightY = getValue("rightY");

    imgLeft.style.transform = `translate(${scrollProgress * leftX}px, ${scrollProgress * leftY}px)`;
    imgCenter.style.transform = `translate(${scrollProgress * centerX}px, ${scrollProgress * centerY}px)`;
    imgRight.style.transform = `translate(${scrollProgress * rightX}px, ${scrollProgress * rightY}px)`;

    updateLabels();
  });

  // 🔁 Update preview live when sliding (not just on scroll)
  document.querySelectorAll("input[type=range]").forEach(input => {
    input.addEventListener("input", () => {
      window.dispatchEvent(new Event("scroll")); // force update
    });
  });

  // Initial update
  updateLabels();
});
