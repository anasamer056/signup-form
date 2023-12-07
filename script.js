const root = document.documentElement;
// Intialize the theme color to light 
root.className = "light";

document.querySelector("#first-name").setCustomValidity("Invalid field.");
document.querySelector("#first-name::after").textContent = "sadasd"