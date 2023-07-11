const shareButton = document.querySelector(".share-circle");
const arrow = document.querySelector(".arrow");
const share = document.querySelector(".share");

shareButton.addEventListener("click", () => {
  if (!share.classList.contains("close")) {
    shareButton.style.transform = "rotate(0deg)";
    shareButton.style.background = "hsl(210, 46%, 95%)";
  } else {
    shareButton.style.transform = "rotate(270deg)";
    shareButton.style.background = "hsl(210, 46%, 95%)";
  }
  share.classList.toggle("close");
});
