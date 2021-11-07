import { getAllAnimals, postAnimal, updateAnimal, deleteAnimal } from "./api.js";
import { validateCreateInput, validateEditInput } from "./validation.js";
import { trimAnimal, renderItemsDOM, calculateTotal,
    getInputValues, clearInputs, chosenAnimalId } from "./modules.js";


const cardDeck = document.getElementById("card-deck");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const clearButton = document.getElementById("clear-button");
const sortCheckbox = document.getElementById("sort");
const countButton = document.getElementById("count");
const countResults = document.getElementById("count-results");
const countTotal = document.getElementById("count-total");

const viewButton = document.getElementById("view-animals");
const createButton = document.getElementById("create-button");
const modalCreateWindow =  document.getElementById("create-window");
const modalEditWindow = document.getElementById("edit-window");
const modalDeleteWindow = document.getElementById("delete-window");
const createWindowButton = document.getElementById("create-window-button");
const editWindowButton = document.getElementById("edit-window-button");
const deleteWindowButton = document.getElementById("delete-window-button");
const modalCreteCloseButton = document.getElementById("modal-close-button");
const modalEditCloseButton = document.getElementById("modal-edit-close-button");
const modalDeleteCloseButton = document.getElementById("modal-delete-close-button");

const inputCreateName = document.getElementById("create-name-input");
const selectCreatePhoto = document.getElementById("photo-create-dropdown");
const inputCreateMass = document.getElementById("create-mass-input");
const inputCreateConsumption = document.getElementById("create-consumption-input");
const inputCreateFeedType = document.getElementById("create-feedType-input");
const inputCreateAge = document.getElementById("create-age-input");
const inputCreateAnimalType = document.getElementById("create-animalType-input");
const selectCreateMigratory = document.getElementById("migratory-create-dropdown");
const inputCreateWingsSize = document.getElementById("create-wingsSize-input");

const inputEditName = document.getElementById("edit-name-input");
const selectEditPhoto = document.getElementById("photo-edit-dropdown");
const inputEditMass = document.getElementById("edit-mass-input");
const inputEditConsumption = document.getElementById("edit-consumption-input");
const inputEditFeedType = document.getElementById("edit-feedType-input");
const inputEditAge = document.getElementById("edit-age-input");
const inputEditAnimalType = document.getElementById("edit-animalType-input");
const selectEditMigratory = document.getElementById("migratory-edit-dropdown");
const inputEditWingsSize = document.getElementById("edit-wingsSize-input");

let animals = [
//     {
//     id : 1,
//     name: "Birdie", 
//     image: "Caique.jpg",
//     mass: 3,
//     consumption: 5,
//     feedType: "corn",
//     age: 5, 
//     animalType: "bird", 
//     migratory: "Non-migratory",
//     wingsSize: 50,
// }, 
// {
//     id : 2,
//     name: "Birdo", 
//     image: "Cockatiel.jpg",
//     mass: 4,
//     consumption: 2,
//     feedType: "corn",
//     age: 7, 
//     animalType: "bird", 
//     migratory: "Migratory",
//     wingsSize: 40,
// }
];
let animalsSorted = [];

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    let animalsFound = animals.filter(
        (animal) => animal.name.search(searchInput.value) !== -1);
        renderItemsDOM(animalsFound);
})

clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    searchInput.value = "";
})

sortCheckbox.addEventListener("change", () => {
    animalsSorted = Array.from(animals);
    if (sortCheckbox.checked) {
        animalsSorted.sort(
            (first, second) => first.mass - second.mass
        );
    }
    renderItemsDOM(animalsSorted);
})

countButton.addEventListener("click", () => {
    countResults.classList.remove("hidden");
    const totalPrice = calculateTotal(animals, 
        (animal) => animal.consumption);
    countTotal.innerHTML = totalPrice;
})

createButton.addEventListener("click", (event) => {
    event.preventDefault();
    modalCreateWindow.style.display = "block";
})

modalCreteCloseButton.addEventListener("click", () => {
    modalCreateWindow.style.display = "none";
})

modalEditCloseButton.addEventListener("click", () => {
    modalEditWindow.style.display = "none";
})

modalDeleteCloseButton.addEventListener("click", () => {
    modalDeleteWindow.style.display = "none";
})

createWindowButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (validateCreateInput()) {
        postAnimal(getInputValues(inputCreateName, selectCreatePhoto,
            inputCreateMass, inputCreateConsumption, inputCreateFeedType,
            inputCreateAge, inputCreateAnimalType, selectCreateMigratory,
            inputCreateWingsSize)).then(refetchAllAnimals);
        clearInputs(inputCreateName, inputCreateMass, inputCreateConsumption,
            inputCreateFeedType, inputCreateAge, inputCreateAnimalType, inputCreateWingsSize);
        modalCreateWindow.style.display = "none";
    }
})

editWindowButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (validateEditInput()) {
        updateAnimal(chosenAnimalId, getInputValues(inputEditName, selectEditPhoto, inputEditMass,
            inputEditConsumption, inputEditFeedType, inputEditAge, inputEditAnimalType, 
            selectEditMigratory, inputEditWingsSize)).then(refetchAllAnimals);
    }
})

deleteWindowButton.addEventListener("click", (event) => {
    event.preventDefault();
    deleteAnimal(chosenAnimalId).then(refetchAllAnimals);
    modalDeleteWindow.style.display = "none";
})

export const refetchAllAnimals = async () => {
    const allAnimals = await getAllAnimals();
    animals = allAnimals;
    renderItemsDOM(animals);
};

refetchAllAnimals();
export { cardDeck, animals };