const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

const scrollDown = document.getElementById("scroll-down");
const scrollUp = document.getElementById("scroll-up");
const navbar = document.getElementById("navbar");
const contact = document.getElementById("contact");

scrollDown.addEventListener("click", () => {
  contact.scrollIntoView({
    behavior: "smooth",
  });
  scrollUp.style.display = "block";
  scrollDown.style.display = "none";
});
scrollUp.addEventListener("click", () => {
  navbar.scrollIntoView({
    behavior: "smooth",
  });
  scrollDown.style.display = "block";
  scrollUp.style.display = "none";
});
