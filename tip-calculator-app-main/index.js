const billSplitterForm = document.querySelector("#bill-splitter-form");
const bill = document.querySelector("#bill");
const tips = document.querySelectorAll('input[name="tip"]');
const people = document.querySelector("#people");

const tipAmountDiv = document.querySelector("#tip-amount");
const totalDiv = document.querySelector("#total-amount");

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
  totalDiv.innerHTML = `$${perPerson.toFixed(2)}`;
});
