//  Toevoegen aan de DOM
// Stap 1: const listElement = document.createElement("li");
// Stap 2: listItem.classList.add("list-item-class");
// Stap 3: const list = document.querySelector("ul");
// Stap 4: list.appendChild(listItem);

// Definities
const lionButton = document.querySelector("li .lion");
const leopardButton = document.querySelector("li .leopard");
const elephantButton = document.querySelector("li .elephant");
const rhinoButton = document.querySelector("li .rhino");
const buffaloButton = document.querySelector("li .buffalo");
const newSpottedAnimalList = document.getElementById("spotted-animals-list");
const removeFirstChildButton = document.querySelector("#remove-first-item-button");
const removeAllSpottedAnimalsButton = document.querySelector("#remove-all-button")

// Create New Spotted Animal
const createNewSpottedAnimal = (name) => {
    const newSpottedAnimalItem = document.createElement("li");
    newSpottedAnimalItem.textContent = name;
    newSpottedAnimalItem.classList.add("spotted-animals-list-item");
    newSpottedAnimalList.appendChild(newSpottedAnimalItem);
};

// Add New Spotted Animals to the list
lionButton.addEventListener("click", () => createNewSpottedAnimal("Lion"));
leopardButton.addEventListener("click", () => createNewSpottedAnimal("Leopard"));
elephantButton.addEventListener("click", () => createNewSpottedAnimal("Elephant"));
rhinoButton.addEventListener("click", () => createNewSpottedAnimal("Rhino"));
buffaloButton.addEventListener("click", () => createNewSpottedAnimal("Buffalo"));

// Remove first Spotted Animal
removeFirstChildButton.addEventListener("click", () => newSpottedAnimalList.removeChild(newSpottedAnimalList.firstElementChild));

// //Empty list of Spotted Animals
removeAllSpottedAnimalsButton.addEventListener("click", () => {
    while (newSpottedAnimalList.firstChild) {
        newSpottedAnimalList.removeChild(newSpottedAnimalList.firstChild);
    };
});


// Verwijderen elementen
// Stap 1: Selecteer de parent.
// Stap 2: Selecteer het kind dat je wil verwijderen.
// Stap 3: Call parent.removeChild(child)