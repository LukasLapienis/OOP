import { Birds } from "./classes.js";

export function displayBirdsForm() {
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
  const wingsLabel = document.createElement("label");
  wingsLabel.innerText = "Wings:";
  const wingsInput = document.createElement("input");
  const beakLabel = document.createElement("label");
  beakLabel.innerText = "Beak:";
  const beakInput = document.createElement("input");
  const submitButton = document.createElement("button");
  submitButton.className = "submitButton"
  submitButton.innerText = "submit";

  submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    if (!nameInput.value || !ageInput.value || !legsInput.value || !wingsInput.value || !beakInput.value) {
      alert("Please fill in all the fields.");
      return;
    }
    const bird = new Birds(nameInput.value, ageInput.value, legsInput.value, wingsInput.value, beakInput.value)
    const cardsContainer = document.querySelector(".cardsContainer")
    const card = document.createElement("div")
    card.className = "card"
    card.innerText = `Name: ${bird.name}\n Age: ${bird.age}\n Legs: ${bird.legs}\n Wings: ${bird.wings}\n Beak: ${bird.beak}`
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
    wingsLabel,
    wingsInput,
    beakLabel,
    beakInput,
    submitButton
  );
  inputFormContainer.append(form);
}
