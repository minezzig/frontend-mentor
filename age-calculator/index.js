const birthdayDay = document.getElementById("birthdayDay");
const birthdayMonth = document.getElementById("birthdayMonth");
const birthdayYear = document.getElementById("birthdayYear");
const button = document.getElementById("button");
const yearDiv = document.getElementById("year");
const monthDiv = document.getElementById("month");
const dayDiv = document.getElementById("day");
const inputs = document.querySelectorAll("input");
const time = {
  year: 31557600000,
  month: 2628000000,
  day: 86400000,
};

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.classList.remove("error");
    input.nextElementSibling.innerHTML = "";
  });
});
button.addEventListener("click", () => {
  // convert numbers to date
  birthday = new Date(
    birthdayYear.value,
    birthdayMonth.value - 1,
    birthdayDay.value
  );

  // error month incorrect
  if (birthdayMonth.value > 12) {
    birthdayMonth.classList.add("error");
    birthdayMonth.nextElementSibling.innerHTML = "must be a valid month";
  }
  // error if date in future
  if (Date.now() < birthday) {
    birthdayYear.classList.add("error");
    birthdayYear.nextElementSibling.innerHTML = "must be in the past";
  }
  // error if missing data
  if (!birthdayYear.value || !birthdayMonth.value || !birthdayDay.value) {
    if (!birthdayDay.value) {
      birthdayDay.classList.add("error");
      birthdayDay.nextElementSibling.innerHTML = "must be a valid day";
      console.log(birthdayDay.nextElementSibling);
    }
    if (!birthdayMonth.value) {
      birthdayMonth.classList.add("error");
      birthdayMonth.nextElementSibling.innerHTML = "must be a valid month";
    }
    if (!birthdayYear.value) {
      birthdayYear.classList.add("error");
      birthdayYear.nextElementSibling.innerHTML = "must be a valid year";
    }
    return;
  }

  const age = Date.now() - birthday;

  const years = Math.floor(age / time.year);
  yearDiv.innerHTML = `  
  <span class="number">${years}</span> ${
    years > 1 || years === 0 ? "years" : "year"
  }`;

  const months = Math.floor((age % time.year) / time.month);
  monthDiv.innerHTML = `
  <span class="number">${months}</span> ${
    months > 1 || months === 0 ? "months" : "month"
  }`;

  const days = Math.floor((age % time.year) / time.day);
  dayDiv.innerHTML = `
  <span class="number">${days}</span> ${days > 1 || days === 0 ? "days" : "day"}
  `;
});
