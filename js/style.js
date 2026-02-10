// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Animate hamburger menu
  const spans = menuToggle.querySelectorAll("span");
  if (navLinks.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
  } else {
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
});

// Play/Pause Button Toggle
const playBtn = document.getElementById("playBtn");
let isPlaying = false;

playBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  playBtn.textContent = isPlaying ? "⏸" : "▶";
});

// Sound Button Toggle
const soundBtn = document.getElementById("soundBtn");
let isMuted = false;

soundBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  soundBtn.textContent = isMuted ? "🔇" : "🔊";
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove("active");
    const spans = menuToggle.querySelectorAll("span");
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
});

// Smooth scroll for navigation links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    document
      .querySelectorAll(".nav-links a")
      .forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// Animate logos on scroll
const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease forwards";
    }
  });
}, observerOptions);

document.querySelectorAll(".logo-item, .feature-item").forEach((el) => {
  observer.observe(el);
});

const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

// Animated counter for statistics
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start).toLocaleString();
    }
  }, 16);
}

// Intersection Observer for triggering animations
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
      entry.target.classList.add("animated");

      const numberElement = entry.target.querySelector(".stat-number");
      const target = parseInt(numberElement.getAttribute("data-target"));

      animateCounter(numberElement, target);
    }
  });
}, observerOptions);

// Observe all stat items
document.querySelectorAll(".stat-item").forEach((item) => {
  observer.observe(item);
});

// Get Quote button interaction
document.querySelector(".get-quote-btn").addEventListener("click", () => {
  alert("Thank you for your interest! Our team will contact you shortly.");
});

// Add hover effect to stats
document.querySelectorAll(".stat-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateY(-10px)";
    item.style.transition = "transform 0.3s ease";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateY(0)";
  });
});
