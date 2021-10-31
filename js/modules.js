import {cardDeck, animals } from "./main.js";


const cardTemplate = ({ id, name, image, mass, consumption, feedType, age, animalType, migratory, wingsSize }) => `
<div id="item-${id}" class="card">
<img class="card-img-top" src="../src/${image}" alt="Card image cap" />
<div class="card-body">
<h5 class="card-title">${name}</h5>
<p class="card-text">
Mass: ${mass} kg<br>
Consumption: ${consumption} kg/day<br>
Type of feed: ${feedType}<br>
Age: ${age} years<br>
Type of animal: ${animalType}<br>
Lifestyle: ${migratory}<br>
Size of wings: ${wingsSize}
</p>
</div>
<small class="text-muted">
<button id="edit-button-${id}" class="edit-button btn btn-outline-info px-4 py-0">Edit</button>
<button id="delete-button-${id}" class="delete-button btn btn-outline-danger px-3 py-0">Delete</button>
</small>
</div>
`;


const modalEditWindow = document.getElementById("edit-window");
const modalDeleteWindow = document.getElementById("delete-window");

const inputEditName = document.getElementById("edit-name-input");
const inputEditMass = document.getElementById("edit-mass-input");
const inputEditConsumption = document.getElementById("edit-consumption-input");
const inputEditFeedType = document.getElementById("edit-feedType-input");
const inputEditAge = document.getElementById("edit-age-input");
const inputEditAnimalType = document.getElementById("edit-animalType-input");
const inputEditWingsSize = document.getElementById("edit-wingsSize-input");

let chosenAnimalId = 0;

const addItemToPage = ({ id, name, image, mass, consumption, feedType, age, animalType, migratory, wingsSize }) => {
    cardDeck.insertAdjacentHTML(
        "afterbegin", 
        cardTemplate({ id, name, image, mass, consumption, feedType, age, animalType, migratory, wingsSize })
    )
}

const renderItemsDOM = (array) => {
    cardDeck.innerHTML = "";
    for (const item of array) {
        addItemToPage(item);
    }
    renderEditButtons();
    renderDeleteButtons();
};

const calculateTotal = (array, key) => {
    const total = array.reduce((acc, item) => acc + key(item), 0);
    return total;
}

const getInputValues = (name, selectPhoto, mass, consumption, feedType, age, animalType, selectMigratory, wingsSize ) => {
    return {
        name: name.value,
        image: selectPhoto.value,
        mass: parseInt(mass.value),
        consumption: parseFloat(consumption.value),
        feedType: feedType.value,
        age: parseInt(age.value),
        animalType: animalType.value,
        migratory: selectMigratory.value,
        wingsSize: parseInt(wingsSize.value),
    }
}

const clearInputs = (name, mass, consumption, feedType, age, animalType, wingsSize) => {
    name.value = "";
    mass.value = "";
    consumption.value = "";
    feedType.value = "";
    age.value = "";
    animalType.value = "";
    wingsSize.value = "";
}



const renderEditButtons = () => {
    for (let animal of animals) {
        let editButton = document.getElementById(`edit-button-${animal.id}`)
        editButton.addEventListener("click", () => {
            modalEditWindow.style.display = "block";
            chosenAnimalId = animal.id;
            inputEditName.value = animal.name;
            inputEditMass.value = animal.mass;
            inputEditConsumption.value = animal.consumption;
            inputEditFeedType.value = animal.feedType;
            inputEditAge.value = animal.age;
            inputEditAnimalType.value = animal.animalType;
            inputEditWingsSize.value = animal.wingsSize;
        })
    }
}

const renderDeleteButtons = () => {
    for (let animal of animals) {
        let deleteButton = document.getElementById(`delete-button-${animal.id}`)
        deleteButton.addEventListener("click", () => {
            modalDeleteWindow.style.display = "block";
            chosenAnimalId = animal.id;
        });
    }
}

const trimAnimal = (animal) => {
    return {
        name: animal.name,
        image: animal.image,
        mass: animal.mass,
        consumption: animal.consumption,
        feedType: animal.feedType,
        age: animal.age,
        animalType: animal.animalType,
        migratory: animal.migratory,
        wingsSize: animal.wingsSize,
    }
}

export {
    trimAnimal, addItemToPage, renderItemsDOM, calculateTotal,
    getInputValues, clearInputs, chosenAnimalId
};