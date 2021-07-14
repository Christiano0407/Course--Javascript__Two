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

//  > = Evento Contador < == Contador va agregar el valor del count == > 
console.log(countEl); 
button.addEventListener(`click`, () => {
    console.log("btn-1");  
// < == Va ir sumando un valor == > 
    /* count = count + 1;  */
    count += 1; 

    countEl.innerText = count;
    countEl.style.color = "Red"; 

});

// > Evento Guardar < ==== Vamos a guardar el número registrado / save ==== > 
//<====== Función save() / wich logs out the count when it´s called === > 
btnSave.addEventListener(`click`, () => {
    console.log("Btn-2"); 

    save = () => {
        console.log(count); 
        //let countStr = ` 0 Entries: ${count}`; 
        let countStr = `${count} - `; 

        //saveEl.innerText += countStr; 
        saveEl.textContent += countStr; 
        saveEl.style.color = "#000";
        saveEl.style.fontSize = "2.5rem";
        saveEl.style.fontWeight = "bold";   
        // < === Regresar a cero (0) / comience de cero == >
         countEl.textContent = 0; 
         count = 0; 
    }; 

    save(); 
}); 
// < =========== Node text Content ============== > 
const textContents = document.getElementById(`textContent`).textContent = "Es nuevo texto / Node Text Content"; 



console.log(saveEl); 

console.groupEnd(); 