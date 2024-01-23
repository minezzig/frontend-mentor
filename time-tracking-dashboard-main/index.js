// select items from DOM
const buttons = document.querySelectorAll("button");
const ellipsis = document.querySelectorAll(".ellipsis");
const currentHoursDivs = document.querySelectorAll(".current-hours");
const previousHoursDivs = document.querySelectorAll(".previous-hours");

//preset values
let view = "daily";
let stats;

// fetch data
async function getStats() {
  const response = await fetch("./data.json");
  const data = await response.json();
  stats = data;
  console.log(data);
  setView(view);
}

// each button will select corresponding data and highlight button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let view = button.dataset.view;
    setView(view);

    buttons.forEach((button) => button.classList.remove("current"));
    if (button.dataset.view === view) button.classList.add("current");
  });
});

// repaint DOM with correct information
function setView(view) {
  const prevPhrases = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month",
  };

  currentHoursDivs.forEach((div, i) => {
    let hours = stats[i].timeframes[view].current;
    div.innerHTML = `${hours}${hours > 1 || hours === 0 ? "hrs" : "hr"}`;

    div.classList.add("animate");
    setTimeout(() => div.classList.remove("animate"), 500);
  });
  previousHoursDivs.forEach((div, i) => {
    let hours = stats[i].timeframes[view].previous;
    div.innerHTML = `${prevPhrases[view]} - ${hours}${
      hours > 1 || hours === 0 ? "hrs" : "hr"
    }`;

    div.classList.add("animate");
    setTimeout(() => div.classList.remove("animate"), 500);
  });
}

ellipsis.forEach((ellipse) => {
  ellipse.addEventListener("click", () => {
    ellipse.parentElement.nextElementSibling.nextElementSibling.classList.toggle(
      "open"
    );
  });
});

getStats();
