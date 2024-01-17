const hamburger = document.querySelector("#hamburger");
const close = document.querySelector("#close");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  menu.classList.remove("-translate-y-full");
  console.log("hi");
});
close.addEventListener("click", () => {
  menu.classList.add("-translate-y-full");
});
