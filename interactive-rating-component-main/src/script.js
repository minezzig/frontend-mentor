const ratingCard = document.querySelector(".rating-card");
const thankyouCard = document.querySelector(".thankyou-card");
const button = document.querySelector(".button");
const ratings = document.querySelectorAll(".rating");
const score = document.querySelector(".score");

button.addEventListener("click", () => {
  ratingCard.style.display = "none";
  thankyouCard.style.display = "flex";
});

ratings.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    let selected = e.target;
    ratings.forEach((rating) => {
      if (rating === selected) {
        rating.style.background = "hsl(25, 97%, 53%)";
        rating.style.color = "white";
        score.innerHTML = rating.getAttribute("data-rating");
      } else {
        rating.style.background = "hsl(213, 19%, 18%)";
        rating.style.color = "hsl(217, 12%, 63%)";
      }
    });
  });
});
