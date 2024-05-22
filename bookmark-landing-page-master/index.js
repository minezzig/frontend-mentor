const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const dropdown = document.getElementById("dropdown");
const questions = document.querySelectorAll("#question");
const email = document.getElementById("email");
const error = document.getElementById("error");
const submit = document.getElementById("submit");

hamburger.addEventListener("click", () => {
  dropdown.classList.add("flex");
  dropdown.classList.remove("hidden");
  document.body.classList.add("overflow-y-hidden");
});

close.addEventListener("click", () => {
  dropdown.classList.remove("flex");
  dropdown.classList.add("hidden");
  document.body.classList.remove("overflow-y-hidden");
});

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const arrow = question.childNodes[1];
    const answer = question.nextSibling.nextSibling;

    arrow.classList.toggle("rotate-180");
    arrow.childNodes[1].classList.toggle("stroke-red");
    answer.classList.toggle("max-h-96");
    answer.classList.toggle("opacity-100");
  });
});

submit.addEventListener("click", () => {
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value))
    error.classList.remove("hidden");
  else error.classList.add("hidden");
});
