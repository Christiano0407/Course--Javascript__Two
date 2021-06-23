//console.log("Build01"); 

// Agregar texto al DOM = HTML = Javascript: 

// Exercise Text =====
let welcomeEl = document.getElementById(`welcome-el`); 

let names = "Jennifer Amanda"; 
let secondName = "Law Saínz"; 

welcomeEl.innerText = names + " " + secondName; 
welcomeEl.style.color = "red";
welcomeEl.style.fontSize =  "24px"; 

welcomeEl.innerText += " From New York"; 

//Exercise Count ====
// Variables ===HTML/DOMG/id: 
const btn = document.getElementById(`btn`); 
const count= document.getElementById(`count-el`);
const saveBtn = document.getElementById(`btn-save`); 
const saveEl = document.getElementById(`save-el`); 

// Contador: 
let countOne = 0; 

// Evento Contador:
btn.addEventListener(`click`, () => {
    countOne = countOne + 1; 
    
    count.innerText = countOne; 
})

//Evento Guardar/save: 
saveBtn.addEventListener(`click`, () => {
   save = () => {
       console.log(countOne); 
   }
   save(); 
})
console.log(countOne); 