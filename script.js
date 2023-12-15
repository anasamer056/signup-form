// Elements 
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");


const root = document.documentElement;
// Intialize the theme color to light 
root.className = "light";

// Theme button 
const themeBtn = document.querySelector(".theme-button");
themeBtn.addEventListener("click", ()=>{
   root.className =  root.className === "light" ? "dark" : "light"
});

// Confirm Password Validation 



// Birthday Input Validation 

monthInput.addEventListener("input", handleBirthday)
dayInput.addEventListener("input", handleBirthday)
yearInput.addEventListener("input", handleBirthday)

function handleBirthday(event) {
    const value = parseInt(event.target.value);
    const errElem = document.querySelector(`#${event.target.id} ~ div`)
    const lowerBound = event.target.dataset.lower;
    const upperBound = event.target.dataset.upper ?? Date().getFullYear();

    if (value < lowerBound || value > upperBound) {
        event.target.setCustomValidity(`Invalid ${event.target.id}`);
        errElem.dataset.help = `Invalid ${event.target.id}`
    
    } else if (event.target.value ===""){
        event.target.setCustomValidity("");

    } else if (isNaN(value)) {
        event.target.setCustomValidity("Invalid input");

    } else {
        event.target.setCustomValidity("");
    }
}

// Deactivate submit button untill everything is valid 
const submitBtn = document.querySelector('.submit-button');
submitBtn.disabled = true;
const form = document.querySelector("form");

form.addEventListener("input", (event)=>{
    if (event.target.type !== "checkbox"){
        if (firstName.validity.valid &&
            lastName.validity.valid &&
            email.validity.valid &&
            password.validity.valid &&
            confirmPassword.validity.valid &&
            dayInput.validity.valid &&
            monthInput.validity.valid &&
            yearInput.validity.valid) {
                submitBtn.disabled = false;
            }
            else {
                submitBtn.disabled = true;
            }
    }
})

