const hamburger = document.querySelector(".nav-hamburger");
const navCloseButton = document.querySelector(".nav-close-button");
const navItems = document.querySelector(".nav-items");
const dim = document.querySelector(".dim");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  navItems.style.right = "0";
  dim.style.display = "block";
  body.style.overflow = "hidden";
})
navCloseButton.addEventListener("click", () => {
    navItems.style.right = "-250px";
    dim.style.display = "none";
    body.style.overflow = ""
})