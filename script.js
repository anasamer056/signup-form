// SVG
const openEye = `<svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const closedEye = `<svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L22 22" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`; 

// Elements 
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const eyeIconPassword = document.querySelector("#eye-icon-password");
eyeIconPassword.innerHTML = closedEye;
const eyeIconConfirm = document.querySelector("#eye-icon-confirm");
eyeIconConfirm.innerHTML = closedEye;

const root = document.documentElement;
// Intialize the theme color to light 
root.className = "light";

// Theme button 
const themeBtn = document.querySelector(".theme-button");
themeBtn.addEventListener("click", ()=>{
   root.className =  root.className === "light" ? "dark" : "light"
});

// Confirm Password Validation 
password.addEventListener ("input", handlePasswordConfirm)
confirmPassword.addEventListener("input", handlePasswordConfirm)

function handlePasswordConfirm (event){
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match");
    } else {
        confirmPassword.setCustomValidity("")
    }
}

// Show/hide password 
eyeIconPassword.addEventListener("click", ()=>{
    if (password.type === "password"){
        password.type = "text";
        eyeIconPassword.innerHTML = openEye;
    } else {
        password.type = "password";
        eyeIconPassword.innerHTML = closedEye;
    }
})

eyeIconConfirm.addEventListener("click", ()=>{
    if (confirmPassword.type === "password"){
        confirmPassword.type = "text";
        eyeIconConfirm.innerHTML = openEye;
    } else {
        confirmPassword.type = "password";
        eyeIconConfirm.innerHTML = closedEye;
    }
})

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

