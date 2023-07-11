const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".closeButton");
const nav = document.querySelector("nav");
const expands = document.querySelectorAll(".expand");

hamburger.addEventListener("click", () => {
  nav.classList.add("open");
});
closeButton.addEventListener("click", () => {
  nav.classList.remove("open");
});

expands.forEach((expand) => {
  expand.addEventListener("click", () => {
    expand.lastElementChild.classList.toggle("openDropDown");
    let direction;
    expand.firstElementChild.src.includes("up")
      ? (direction = "down")
      : (direction = "up");
    expand.firstElementChild.src = `../images/icon-arrow-${direction}.svg`;
  });
});
