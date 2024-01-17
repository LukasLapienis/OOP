import { displayDogsForm } from "./modules/dogsForm.js";
import { displayCatsForm } from "./modules/catsForm.js";
import { displayBirdsForm } from "./modules/birdsForm.js";

function formCheck() {
    const formCheck = document.querySelector("form");
    if (formCheck) {
      formCheck.remove();
    }
}
function cardsCheck() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(function(card) {
      card.remove();
  });
}

function navEventListeners() {
    const dogsButton = document.querySelector(".dogsButton");
    dogsButton.addEventListener("click", (event) => {
        event.preventDefault();
        formCheck()
        cardsCheck()
        displayDogsForm();
    });
  
    const catsButton = document.querySelector(".catsButton");
    catsButton.addEventListener("click", (event) => { 
      event.preventDefault();
      formCheck()
      cardsCheck()
      displayCatsForm();
    });
  
    const birdsButton = document.querySelector(".birdsButton");
    birdsButton.addEventListener("click", (event) => {
      event.preventDefault();
      formCheck()
      cardsCheck()
      displayBirdsForm();
    });
  }

  navEventListeners()
