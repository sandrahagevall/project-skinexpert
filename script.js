const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const body = document.body;

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active")
  hamburger.classList.toggle("open")
  body.classList.toggle("no-scroll")
})