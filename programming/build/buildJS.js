//console.log("Build01"); 

// Agregar texto al DOM = HTML = Javascript: 

let welcomeEl = document.getElementById(`welcome-el`); 

let names = "Jennifer Amanda"; 
let secondName = "Law Saínz"; 

welcomeEl.innerText = names + " " + secondName; 
welcomeEl.style.color = "red";
welcomeEl.style.fontSize =  "24px"; 

welcomeEl.innerText += " From New York"; 