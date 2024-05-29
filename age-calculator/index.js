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
const shortMonths = ["9", "4", "6", "11"];
let validated;

// function to add error message and styles
const addErrorStyles = (inputField, message, valid) => {
  inputField.classList.add("error");
  inputField.nextElementSibling.innerHTML = message;
inputField.previousElementSibling.classList.add("error")
  validated = valid;
};

// clears errors/styles from inputs on focus of individual input
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.classList.remove("error");
    input.nextElementSibling.innerHTML = "";
    input.previousElementSibling.classList.remove("error")
    validated = true;
  });
});

// submit birthday date
button.addEventListener("click", () => {
  // convert numbers to date
  birthday = new Date(
    birthdayYear.value,
    birthdayMonth.value - 1,
    birthdayDay.value
  );

  // --------------error handling---------------
  const validateInput = () => {
    if (Date.now() < birthday)
      addErrorStyles(birthdayYear, "must be in the past", false);
    validateDay();
    validateMonth();
    validateYear();

    return validated;
  };

  const validateDay = () => {
    if (!birthdayDay.value)
      addErrorStyles(birthdayDay, "must be a valid day", false);
    if (birthdayDay.value > 31)
      addErrorStyles(birthdayDay, "must be a valid date", false);
    if (shortMonths.includes(birthdayMonth.value))
      addErrorStyles(birthdayDay, "must be a valid date", false);
    if (birthdayMonth.value == 2 && birthdayDay > "28")
      addErrorStyles(birthdayDay, "must be a valid date", false);
  };

  const validateMonth = () => {
    if (!birthdayMonth.value)
      addErrorStyles(birthdayMonth, "must be a valid month", false);
    if (birthdayMonth.value > 12)
      addErrorStyles(birthdayMonth, "must be a valid month", false);
  };
  const validateYear = () => {
    if (!birthdayYear.value)
      addErrorStyles(birthdayYear, "must be a valid year", false);
  };

  // don't calculate if there are errors
  if (validateInput()) {
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
  }
});
