const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  bar1.classList.toggle("rotate-[45deg]");
  bar1.classList.toggle("translate-y-[6px]");
  bar2.classList.toggle("scale-0");
  bar3.classList.toggle("rotate-[-45deg]");
  bar3.classList.toggle("translate-y-[-6px]");


});
