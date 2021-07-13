console.log("Regreso al Javascript"); 
console.group("Full Javascript"); 

// < ============= Variables ================= > 
const welcomeEl = document.getElementById(`welcome-el`);
const titleOne = document.getElementById(`titleOne`);  
const countEl = document.getElementById(`count-el`); 
const button = document.getElementById(`btn`); 
const btnSave = document.getElementById(`btn-save`); 
const saveEl = document.getElementById(`save-el`); 

// <  ============  Funciones y ejecuciones =============== >

// InnerText = Agregar texto: 
//count.innerText = 10;
// < ======= Exercise Count ====== > 

let count = 0; 
console.log(count); 

let myAge = 29; 
console.log(`My Age: ${myAge}`); 

let dogAge = 7;
console.log(`Dog age: ${dogAge}`);  

button.addEventListener(`click`, () => {
    console.log("btn-1");  
// < == Va ir sumando un valor == > 
    /* count = count + 1;  */
    count += 1; 

  /*   if(count === dogAge) { */
  /*       countEl.innerText = dogAge;   */
  /*   }else { */
  /*       console.log("Error");  */
  /*   } */

// < == Contador va agregar el valor del count == > 
    countEl.innerText = count;
    countEl.style.color = "Red"; 
});

btnSave.addEventListener(`click`, () => {
    console.log("Btn-2"); 
}); 




console.groupEnd(); 