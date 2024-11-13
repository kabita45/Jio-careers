const slides = document.querySelectorAll(".slide");
function toggleActive(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}
let currentIndex = 0;
setInterval(() => {
  toggleActive(currentIndex);
  currentIndex = (currentIndex + 1) % slides.length;
}, 1500);

// Toggle Mobile Menu
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
mobileMenu.style.display = "none";

menuButton.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "none" ? "block" : "none";
});

// JavaScript for handling tab switch
function showContent(tabId) {
  // Hide all content
  document
    .querySelectorAll(".tab-content")
    .forEach((content) => content.classList.add("hidden"));
  // Show selected content
  document.getElementById(tabId + "-content").classList.remove("hidden");
  // Remove active state from all buttons
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) =>
      btn.classList.remove("border-green-600", "text-green-600")
    );
  // Set active state to selected button
  document
    .getElementById(tabId + "-btn")
    .classList.add("border-green-600", "text-green-600");
}

// Initialize the first tab as active
document.addEventListener("DOMContentLoaded", () => {
  showContent("tab1");
});

// Initialize Swiper with pagination at the bottom
const swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets", // Display pagination as bullets
    dynamicBullets: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const swiperB = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});
