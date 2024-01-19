const bill = document.querySelector("#bill");
const tips = document.querySelectorAll(".tip");
const customTip = document.querySelector("#custom-tip");
const people = document.querySelector("#people");
const error = document.querySelector(".error");
const resetBtn = document.querySelector("#reset");
const tipAmountDiv = document.querySelector("#tip-amount");
const totalAmountDiv = document.querySelector("#total-amount");
let tipPercent;

bill.addEventListener("input", calculate);
customTip.addEventListener("input", calculate);
people.addEventListener("input", calculate);
tips.forEach((tip) => tip.addEventListener("click", handleClick));
resetBtn.addEventListener("click", resetCalculator);

function calculate() {
  error.classList.remove("show");
  resetBtn.classList.add("active");
  if (people.value === "0") {
    error.classList.add("show");
    return;
  }
  if (customTip.value) {
    tipPercent = customTip.value / 100;
  }
  const tipAmount = bill.value * (tipPercent || 0);
  const perPerson = (+bill.value + tipAmount) / (people.value || 1);
  tipAmountDiv.innerHTML = `$${tipAmount.toFixed(2)}`;
  totalAmountDiv.innerHTML = `$${perPerson.toFixed(2)}`;
}

function handleClick(e) {
  tips.forEach((tip) => {
    //remove any previous button selection
    tip.classList.remove("active");

    //if the event matches the button, become active and record data attribute of tip
    if (e.target === tip) {
      tip.classList.add("active");
      tipPercent = tip.dataset.tip;
      calculate();
    }
  });
}

function resetCalculator() {
  resetBtn.classList.remove("active");
  tips.forEach((tip) => tip.classList.remove("active"));
  bill.value = "";
  people.value = "";
  tipAmountDiv.innerHTML = "$0.00";
  totalAmountDiv.innerHTML = "$0.00";
}

/*
const bill = document.querySelector("#bill");
const tips = document.querySelectorAll('input[name="tip"]');
const people = document.querySelector("#people");
const resetBtn = document.querySelector("#reset");

const tipAmountDiv = document.querySelector("#tip-amount");
const totalAmountDiv = document.querySelector("#total-amount");
console.log(resetBtn)

resetBtn.addEventListener("click", () => {

  bill.innerHTML = 0;
  people.innerHTML = 0;
  tipAmountDiv.innerHTML = "$0.00";
  totalAmountDiv.innerHTML = "$0.00";
});

billSplitterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // find out which tip amount was selected
  let tipPercent;
  tips.forEach((tip) => {
    if (tip.checked === true) tipPercent = tip.value;
  });

  const tipAmount = bill.value * tipPercent;
  const perPerson = (+bill.value + tipAmount) / people.value;
  tipAmountDiv.innerHTML = `$${tipAmount.toFixed(2)}`;
  totalAmountDiv.innerHTML = `$${perPerson.toFixed(2)}`;
});

*/
