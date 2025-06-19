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
    const leftX = 350;
    const leftY = -0;

    const centerX = 0;
    const centerY = 0;

    const rightX = -350;
    const rightY = 0;

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
// ✅ HERO IMAGE DEBUG ADJUSTER (LIMITED TO HERO SECTION)
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const imgLeft = document.querySelector(".img-left");
  const imgCenter = document.querySelector(".img-center");
  const imgRight = document.querySelector(".img-right");

  // 🧰 Create on-screen adjustment panel
  const debugContainer = document.createElement('div');
  debugContainer.style.position = 'fixed';
  debugContainer.style.bottom = '20px';
  debugContainer.style.right = '20px';
  debugContainer.style.background = 'rgba(255,255,255,0.95)';
  debugContainer.style.border = '1px solid #ccc';
  debugContainer.style.padding = '15px';
  debugContainer.style.fontFamily = 'monospace';
  debugContainer.style.zIndex = '9999';
  debugContainer.style.fontSize = '12px';
  debugContainer.style.maxWidth = '300px';
  debugContainer.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
  debugContainer.innerHTML = `
    <div><strong>🧭 Hero Image Offsets</strong></div>
    <label>Left X: <input id="leftX" type="number" value="300" style="width:50px"/></label>
    <label>Y: <input id="leftY" type="number" value="-100" style="width:50px"/></label><br>
    <label>Center X: <input id="centerX" type="number" value="-300" style="width:50px"/></label>
    <label>Y: <input id="centerY" type="number" value="30" style="width:50px"/></label><br>
    <label>Right X: <input id="rightX" type="number" value="-600" style="width:50px"/></label>
    <label>Y: <input id="rightY" type="number" value="100" style="width:50px"/></label><br>
    <div style="margin-top:8px;">Scroll to test → adjust values live</div>
  `;
  document.body.appendChild(debugContainer);

  function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
  }

  window.addEventListener("scroll", () => {
    const rect = hero.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Only animate when hero section is in view
    if (rect.top <= windowHeight && rect.bottom > 0) {
      const scrollProgress = Math.min(Math.max(-rect.top / windowHeight, 0), 1);

      const leftX = getInputValue('leftX');
      const leftY = getInputValue('leftY');
      const centerX = getInputValue('centerX');
      const centerY = getInputValue('centerY');
      const rightX = getInputValue('rightX');
      const rightY = getInputValue('rightY');

      imgLeft.style.transform = `translate(${scrollProgress * leftX}px, ${scrollProgress * leftY}px)`;
      imgCenter.style.transform = `translate(${scrollProgress * centerX}px, ${scrollProgress * centerY}px)`;
      imgRight.style.transform = `translate(${scrollProgress * rightX}px, ${scrollProgress * rightY}px)`;

      // Optional console log
      console.log(`[${(scrollProgress * 100).toFixed(0)}%] L: (${scrollProgress * leftX}, ${scrollProgress * leftY})`);
    }
  });
});
