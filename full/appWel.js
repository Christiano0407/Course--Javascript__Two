console.log("Form"); 
console.group("Form/visits"); 
// < ========== Variables =========== > 
const welcomeEl = document.getElementById(`welcome-el`); 
const btn = document.getElementById(`btn`); 

// < ======= Funciones y eventos ======== > 
let names = `Hi! Wlcome Beautiful People !`; 
welcomeEl.innerText = names; 
welcomeEl.style.color = "red"; 

btn.addEventListener(`click`, () => {
    console.log("Button"); 
}); 

// < ====== Llamar ====== >


console.groupEnd(); 