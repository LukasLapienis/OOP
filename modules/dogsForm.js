import { Dogs } from "./classes.js";

export function displayDogsForm() {
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
  const muzzleLabel = document.createElement("label");
  muzzleLabel.innerText = "Muzzle:";
  const muzzleInput = document.createElement("input");
  const submitButton = document.createElement("button");
  submitButton.className = "submitButton"
  submitButton.textContent = "submit";
  
  submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    if (!nameInput.value || !ageInput.value || !legsInput.value || !furInput.value || !tailInput.value || !muzzleInput.value) {
      alert("Please fill in all the fields.");
      return;
    }
    const dog = new Dogs(nameInput.value, ageInput.value, legsInput.value, furInput.value, tailInput.value, muzzleInput.value)
    const cardsContainer = document.querySelector(".cardsContainer")
    const card = document.createElement("div")
    card.className = "card"
    card.innerText = `Name: ${dog.name}\n Age: ${dog.age}\n Legs: ${dog.legs}\n Fur: ${dog.fur}\n Tail: ${dog.tail}\n Muzzle: ${dog.muzzle}`
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
    muzzleLabel,
    muzzleInput,
    submitButton
  );
  inputFormContainer.append(form);
}
