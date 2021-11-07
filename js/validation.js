const inputCreateName = document.getElementById("create-name-input");
const inputCreateNameError = document.getElementById("create-name-input-error");
const inputCreateMass = document.getElementById("create-mass-input");
const inputCreateMassError = document.getElementById("create-mass-input-error");
const inputCreateConsumption = document.getElementById("create-consumption-input");
const inputCreateConsumptionError = document.getElementById("create-consumption-input-error");
const inputCreateFeedType = document.getElementById("create-feedType-input");
const inputCreateFeedTypeError = document.getElementById("create-feedType-input-error");
const inputCreateAge = document.getElementById("create-age-input");
const inputCreateAgeError = document.getElementById("create-age-input-error");
const inputCreateAnimalType = document.getElementById("create-animalType-input");
const inputCreateAnimalTypeError = document.getElementById("create-animalType-input-error");
const inputCreateWingsSize = document.getElementById("create-wingsSize-input");
const inputCreateWingsSizeError = document.getElementById("create-wingsSize-input-error");

const inputEditName = document.getElementById("edit-name-input");
const inputEditNameError = document.getElementById("edit-name-input-error");
const inputEditMass = document.getElementById("edit-mass-input");
const inputEditMassError = document.getElementById("edit-mass-input-error");
const inputEditConsumption = document.getElementById("edit-consumption-input");
const inputEditConsumptionError = document.getElementById("edit-consumption-input-error");
const inputEditFeedType = document.getElementById("edit-feedType-input");
const inputEditFeedTypeError = document.getElementById("edit-feedType-input-error");
const inputEditAge = document.getElementById("edit-age-input");
const inputEditAgeError = document.getElementById("edit-age-input-error");
const inputEditAnimalType = document.getElementById("edit-animalType-input");
const inputEditAnimalTypeError = document.getElementById("edit-animalType-input-error");
const inputEditWingsSize = document.getElementById("edit-wingsSize-input");
const inputEditWingsSizeError = document.getElementById("edit-wingsSize-input-error");

const invalidSymbols = ["<", ">", "/", "|", "\\", "#", "!", "~", "&", "$", "@", ";", ".", "?", "%", "*", "₴", "`"];

const validateInt = (field, fieldError) => {
    if (field.value == "") {
        fieldError.textContent = "*field must not be empty";
        fieldError.display = "block";
        return false;
    } else if (field.value.charAt(0) == "0"){
        fieldError.textContent = "*first digit cannot be 0";
        fieldError.display = "block";
        return false;
    } else {
        for (var i = 0; i < field.value.length; i++) {
            if (field.value.charAt(i) < "0" || field.value.charAt(i) > "9") {
                return false;
            }
        }
    }
    return true;
}

const validateString = (field, fieldError) => {
    if (field.value == "") {
        fieldError.textContent = "*field must not be empty";
        fieldError.display = "block";
        return false;
    } else if(invalidSymbols.some((symbol) => field.value.includes(symbol))){
        fieldError.textContent = "*restricted symbols"
        fieldError.display = "block";
        return false;
    } else {
        fieldError.textContent = "";
        fieldError.display = "none";
        return true;
    }
};

const validateCreateInput = () => {
    let validated = true;
    validated = validateString(inputCreateName, inputCreateNameError);
    validated = validateInt(inputCreateMass, inputCreateMassError);
    validated = validateInt(inputCreateConsumption, inputCreateConsumptionError);
    validated = validateString(inputCreateFeedType, inputCreateFeedTypeError);
    validated = validateInt(inputCreateAge, inputCreateAgeError);
    validated = validateString(inputCreateAnimalType, inputCreateAnimalTypeError);
    validated = validateInt(inputCreateWingsSize, inputCreateWingsSizeError);
    return validated;
}

const validateEditInput = () => {
    let validated = true;
    validated = validateString(inputEditName, inputEditNameError);
    validated = validateInt(inputEditMass, inputEditMassError);
    validated = validateInt(inputEditConsumption, inputEditConsumptionError);
    validated = validateString(inputEditFeedType, inputEditFeedTypeError);
    validated = validateInt(inputEditAge, inputEditAgeError);
    validated = validateString(inputEditAnimalType, inputEditAnimalTypeError);
    validated = validateInt(inputEditWingsSize, inputEditWingsSizeError);
    return validated;
}

export { validateCreateInput, validateEditInput}