const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const dropdown = document.getElementById("dropdown");
const tabs = document.querySelectorAll("[data-tab]");
const questions = document.querySelectorAll("#question");
const email = document.getElementById("email");
const error = document.getElementById("error");
const submit = document.getElementById("submit");

// create function mobile navigation
hamburger.addEventListener("click", () => {
  dropdown.classList.add("flex");
  dropdown.classList.remove("hidden");
  document.body.classList.add("overflow-y-hidden");
});

// close mobile navigation
close.addEventListener("click", () => {
  dropdown.classList.remove("flex");
  dropdown.classList.add("hidden");
  document.body.classList.remove("overflow-y-hidden");
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // on click, hide all
    tabs.forEach((tab) => {
      const curTab = document.getElementById(`${tab.dataset.tab}`);
      curTab.classList.add("hidden");
      curTab.classList.remove("flex");
      tab.classList.remove("after:absolute");
    });
    // only show the one that was clicked
    const clickedTab = document.getElementById(`${tab.dataset.tab}`);
    clickedTab.classList.add("flex");
    clickedTab.classList.remove("hidden");
    tab.classList.add("after:absolute");
  });
});

// FAQ section - dropdown answer and animate arrows
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

// email validation on submit
submit.addEventListener("click", () => {
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
    error.classList.remove("hidden");
    email.classList.add("border-red", "border-2");
  } else {
    error.classList.add("hidden");
    email.classList.remove("border-red", "border-2");
  }
});
