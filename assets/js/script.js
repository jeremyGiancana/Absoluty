// MENU TOOGLE

let hamburger = document.querySelector(".hamburger");
let menuSide = document.querySelector(".menu-side");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuSide.classList.toggle("active");
});
