console.group("Challenge Variables"); 
console.log("Variables")
/// < ========== Variables ============ >
const firstName = "Alma"; 
const lastName = "Cantú"; 

let names = `My name: ${firstName} ${lastName}; `
console.log(names); 

// < === Challenge Points ========= > 
let myPoints = 3; 
console.log(myPoints); 
add3Points = () => {
  myPoints += 3;  
  console.log(myPoints); 
}; 
add3Points();

remove1Point = () => {
   myPoints -= 1; 
   console.log(myPoints); 
}; 
remove1Point(); 
console.groupEnd(); 
console.group("Error ( Shoes"); 
// < =============== Rendering Message ================= > 
const text = document.getElementById(`text`); 
const button = document.getElementById(`btn`); 
//const error = document.getElementById(`error`); 

button.addEventListener(`click`, () => {
    console.log("bUTTON"); 

    message = () => {
        const error = document.getElementById(`error`).textContent = "Something went wrong, Please try Again."; 
         console.log(error); 
    }
    message(); 
}); 

// < ====== Llamar a las funciones =========== 
console.log(error); 
console.groupEnd(); 
