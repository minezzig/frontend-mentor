const downArrows = document.querySelectorAll(".arrow");

downArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrow.parentNode.firstElementChild.lastElementChild.classList.toggle(
      "open"
    );
    arrow.classList.toggle("flip");
    arrow.parentNode.firstElementChild.firstElementChild.classList.toggle("bold");
  });
});
