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
