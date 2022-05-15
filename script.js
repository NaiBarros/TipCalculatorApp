//elementos
let billElement = document.getElementById("bill");
let customTipElement = document.getElementById("custom");
let numPeopleElement = document.getElementById("people");
let tipButtons = document.getElementsByClassName("tip-button");
let errorElement = document.getElementById("error");
let tipAmountElement = document.getElementById("tip-amount");
let totalElement = document.getElementById("total");
let customElement = document.getElementById("custom");

//variáveis
let bill = 0;
let tip = 0;
let numPeople = 0;
let tipAmount = 0;
let total = 0;

billElement.addEventListener("input", (event) => {
  bill = event.target.value;
  calculateValues();
});

numPeopleElement.addEventListener("input", (event) => {
  numPeople = event.target.value;
  calculateValues();

  if (numPeople != 0) {
    numPeopleElement.classList.remove("input-error");
    return errorElement.classList.remove("visible");
  }

  numPeopleElement.classList.add("input-error");
  errorElement.classList.add("visible");
});

customElement.addEventListener("input", (event) => {
  if (event.target.value > 100) {
    event.target.value = 100;
  }
  setTip(event.target.value, true);
});

function setTip(tipValue, useCustomElement = false) {
  tip = tipValue;
  calculateValues();

  let tipButtonsArray = Array.from(tipButtons); //ou = [...tipButtons]

  if (useCustomElement) {
    for (let button of tipButtonsArray) {
      button.classList.remove("selected");
    }

    return;
  }

  customElement.value = null;

  let tipButton = tipButtonsArray.find((button) => {
    return button.dataset.value == tipValue;
  });

  for (let button of tipButtonsArray) {
    //para cada botão do tipButtonsArray
    if (button != tipButton) {
      button.classList.remove("selected");
    }
  }

  tipButton.classList.add("selected");
}

function calculateValues() {
  if (bill == 0 || tip == 0 || numPeople == 0) {
    return;
  }

  let percentage = tip / 100;
  let tipTotal = percentage * bill;
  tipAmount = tipTotal / numPeople;
  total = tipAmount + bill / numPeople;

  tipAmountElement.innerText = `$${tipAmount.toFixed(2)}`;
  totalElement.innerText = `$${total.toFixed(2)}`;
}

function resetValues() {
  bill = 0;
  tip = 0;
  numPeople = 0;
  tipAmount = 0;
  total = 0;

  tipAmountElement.innerText = "$0.00";
  totalElement.innerText = "$0.00";
  billElement.value = null;
  numPeopleElement.value = null;
  customElement.value = null;

  let tipButtonsArray = Array.from(tipButtons);

  for (let button of tipButtonsArray) {
    button.classList.remove("selected");
  }
}
