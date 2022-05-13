//elementos
let billElement = document.getElementById("bill")
let customTipElement = document.getElementById("custom")
let numPeopleElement = document.getElementById("people")
let tipButtons = document.getElementsByClassName("tip-button")
let errorElement = document.getElementById("error")

//variáveis
let bill = 0
let tip = 0
let numPeople = null

billElement.addEventListener("input", (event) => {
  bill = event.target.value
})

numPeopleElement.addEventListener("input", (event) => {
  numPeople = event.target.value

  if (numPeople != 0) {
    numPeopleElement.classList.remove("input-error")
    return errorElement.classList.remove("visible")
  }

  numPeopleElement.classList.add("input-error")
  errorElement.classList.add("visible")
})

function setTip(tipValue) {
  tip = tipValue

  let tipButtonsArray = Array.from(tipButtons) //ou = [...tipButtons]

  let tipButton = tipButtonsArray.find((button) => {
    return button.dataset.value == tipValue
  })

  for (let button of tipButtonsArray) { //para cada botão do tipButtonsArray
    if (button != tipButton) {
      button.classList.remove("selected")
    }
  }

  tipButton.classList.add("selected")
}




