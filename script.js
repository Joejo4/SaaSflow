// Grab the UI Elements
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.querySelector(".nav-menu");
const navActions = document.querySelector(".nav-actions");

// Toggle Mobile Menu Open/Closed
hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navActions.classList.toggle("active");

  // Animate the hamburger icon itself between bars and an 'X'
  const icon = hamburgerBtn.querySelector("i");
  if (navMenu.classList.contains("active")) {
    icon.className = "fa-solid fa-xmark";
  } else {
    icon.className = "fa-solid fa-bars";
  }
});

// Close mobile menu smoothly when clicking any link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navActions.classList.remove("active");
    hamburgerBtn.querySelector("i").className = "fa-solid fa-bars";
  });
});
