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

    const scrollProgress = Math.min(Math.max(-rect.top / windowHeight, 0), 4);
    const progress = Math.min(scrollProgress, 1);

    // Animate bones
    imgLeft.style.transform = `translate(${progress * 247}px, ${progress * -222}px)`;
    imgCenter.style.transform = `translate(${progress * -567}px, ${progress * 50}px)`;
    imgRight.style.transform = `translate(${progress * -1250}px, ${progress * 445}px)`;

    // ✅ Show slogan ONLY when bones are fully settled
    if (scrollProgress >= 1.05 && rect.top <= 0 && rect.bottom > 0) {
      sloganSection.classList.add('visible');
    } else {
      sloganSection.classList.remove('visible');
    }

    // ✅ Animate slogan blocks as scroll increases
    const thresholds = [1.05, 1.2, 1.35, 1.5];
    blocks.forEach((block, index) => {
      if (scrollProgress >= thresholds[index]) {
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });
  });
  // Sample 10 testimonials
const testimonials = [
  "Paws and Peaks saved our trip! – Emily",
  "Stylish, practical, and pup-approved. – Raj",
  "I won’t hike without our kit anymore. – Tasha",
  "The Pro Kit is the real deal. – Michael",
  "Camping with confidence now! – Zoe",
  "My dog’s first aid kit is better than mine 😂 – Chris",
  "Beautiful design and smart packaging. – Lena",
  "Quick delivery and amazing service. – Jordan",
  "Preparedness never looked this cute. – Sarah",
  "A must-have for weekend warriors. – Dean"
];

const track = document.querySelector('.testimonial-track');

testimonials.forEach(text => {
  const slide = document.createElement('div');
  slide.textContent = text;
  track.appendChild(slide);
});

let index = 0;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % testimonials.length;
  updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  updateSlider();
  
});
setInterval(() => {
  index = (index + 1) % testimonials.length;
  updateSlider();
}, 5000); // every 5 seconds

});
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("subscribe-popup");
  const closeBtn = document.getElementById("close-subscribe");

  // Show after 1.5 seconds
  setTimeout(() => {
    popup.classList.remove("hidden");
  }, 1500);

  // Close popup on click
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  // Optional: close if clicking outside the popup content
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });

  // Optional: fake subscribe submission
  document
    .getElementById("subscribe-form-popup")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      popup.classList.add("hidden");
      alert("Thanks for subscribing!");
    });
});
