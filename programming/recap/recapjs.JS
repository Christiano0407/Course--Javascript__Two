let names = "Alfred"; 
let lastNames = "Williams"; 

 people = () => {
    console.log(`${names} ${lastNames} is my name`);
 }; 

 people(); 

 let client = [`Luisa`, `Pamela`, `Alejandra`, `Rodrigo`]; 

 client.forEach( (item, index) => {
     console.log(item, index);
 }); 

const button = document.getElementById(`btn`); 
let error = document.getElementById(`error`); 
let img = document.querySelectorAll(`#image`); 

button.addEventListener(`click`, () => {
    console.log("Button clicked"); 
    error.innerText = `Something went wrong, it´s error`;  
}); 

console.log(error); 