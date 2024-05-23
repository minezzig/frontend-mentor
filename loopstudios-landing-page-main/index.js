const hamburger = document.querySelector("#hamburger");
const close = document.querySelector("#close");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  menu.classList.remove("translate-x-full");
  document.body.classList.add("overflow-y-hidden");
});
close.addEventListener("click", () => {
  menu.classList.add("translate-x-full");
  document.body.classList.remove("overflow-y-hidden");
});
