const root = document.documentElement;
// Intialize the theme color to light 
root.className = "light";


// Month Input Validation 
const monthInput = document.querySelector("#month");
const monthError = document.querySelector("#month ~ div");

monthInput.addEventListener("input", ()=>{
    const month = parseInt(monthInput.value);
    if (month < 1 || month > 12) {
        monthInput.setCustomValidity("Invalid month");
    
    } else if (isNaN(month)) {
        monthInput.setCustomValidity("Invalid input");
        monthError.dataset.help = "Invalid input";
    }
    else {
        monthInput.setCustomValidity("");
        monthError.dataset.help = "Invalid month";
    }
})

// Day Input Validation 
const dayInput = document.querySelector("#day");
const dayError = document.querySelector("#day ~ div");

dayInput.addEventListener("input", ()=>{
    const day = parseInt(dayInput.value);
    if (day < 1 || day > 31) {
        dayInput.setCustomValidity("Invalid day");
    
    } else if (isNaN(day)) {
        dayInput.setCustomValidity("Invalid input");
        dayError.dataset.help = "Invalid input";
    }
    else {
        dayInput.setCustomValidity("");
        dayError.dataset.help = "Invalid day";
    }
})

// Year Input Validation 
const yearInput = document.querySelector("#year");
const yearError = document.querySelector("#year ~ div");

yearInput.addEventListener("input", ()=>{
    const year = parseInt(yearInput.value);
    if (year < 1900 || year > new Date().getFullYear()) {
        yearInput.setCustomValidity("Invalid year");
    
        yearError.dataset.help = "Invalid year"
    } else if (isNaN(year)) {
        yearInput.setCustomValidity("Invalid input");
        yearError.dataset.help = "Invalid input";
    }
    else {
        yearInput.setCustomValidity("");
        yearError.dataset.help = "Invalid year";
    }
})
