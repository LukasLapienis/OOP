import { Cats } from "./classes.js";

export function displayCatsForm() {
  const inputFormContainer = document.querySelector(".inputFormContainer");
  const form = document.createElement("form");
  const nameLabel = document.createElement("label");
  nameLabel.innerText = "Name:";
  const nameInput = document.createElement("input");
  const ageLabel = document.createElement("label");
  ageLabel.innerText = "Age:";
  const ageInput = document.createElement("input");
  const legsLabel = document.createElement("label");
  legsLabel.innerText = "Legs:";
  const legsInput = document.createElement("input");
  const furLabel = document.createElement("label");
  furLabel.innerText = "Fur:";
  const furInput = document.createElement("input");
  const tailLabel = document.createElement("label");
  tailLabel.innerText = "Tail:";
  const tailInput = document.createElement("input");
  const whiskersLabel = document.createElement("label");
  whiskersLabel.innerText = "Whiskers:";
  const whiskersInput = document.createElement("input");
  const submitButton = document.createElement("button");
  submitButton.className = "submitButton"
  submitButton.innerText = "submit";

  submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    if (!nameInput.value || !ageInput.value || !legsInput.value || !furInput.value || !tailInput.value || !whiskersInput.value) {
      alert("Please fill in all the fields.");
      return;
    }
    const cat = new Cats(nameInput.value, ageInput.value, legsInput.value, furInput.value, tailInput.value, whiskersInput.value)
    const cardsContainer = document.querySelector(".cardsContainer")
    const card = document.createElement("div")
    card.className = "card"
    card.innerText = `Name: ${cat.name}\n Age: ${cat.age}\n Legs: ${cat.legs}\n Fur: ${cat.fur}\n Tail: ${cat.tail}\n Whiskers: ${cat.whiskers}`
    cardsContainer.append(card)
    form.reset()
  })

  form.append(
    nameLabel,
    nameInput,
    ageLabel,
    ageInput,
    legsLabel,
    legsInput,
    furLabel,
    furInput,
    tailLabel,
    tailInput,
    whiskersLabel,
    whiskersInput,
    submitButton
  );
  inputFormContainer.append(form);
}
