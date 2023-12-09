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
