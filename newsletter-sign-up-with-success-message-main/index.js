const form = document.querySelector(".form");
const email = document.querySelector(".email");
const errorMessage = document.querySelector(".error-message");
const overlay = document.querySelector(".overlay");
const card = document.querySelector(".card");
const thanksEmailDiv = document.querySelector(".thanksEmail");
const dismiss = document.querySelector(".dismiss");

email.addEventListener("input", () => {
  errorMessage.style.display = "none";
  email.classList.remove("invalid");
});

function handleSubmit(e) {
  e.preventDefault();
  if (!email.value.includes("@")) {
    errorMessage.style.display = "block";
    email.classList.add("invalid");
  } else {
    overlay.classList.remove("hidden");
    card.classList.add("hidden");

    thanksEmailDiv.innerHTML = `${email.value}`;
  }
}

form.onsubmit = handleSubmit;

dismiss.addEventListener("click", () => {
  overlay.classList.add("hidden");
  card.classList.remove("hidden");
  email.value = "";
});
