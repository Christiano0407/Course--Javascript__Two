console.group("Calculator"); 
// < ========== Variables ========= >
let num1 = 8; 
let num2 = 2; 

const numOne = document.getElementById(`num1-el`).textContent = num1; 
const numTwo = document.getElementById(`num2-el`).textContent = num2; 

const btnOne = document.getElementById(`btn1`); 
const btnTwo = document.getElementById(`btn2`); 
const btnThree = document.getElementById(`btn3`); 
const btnFour = document.getElementById(`btn4`); 

const suma = document.getElementById(`sum-el`); 

// < ================== Funciones y eventos =============== > 

// < === Suma === > 
btnOne.addEventListener(`click`, () => {
    console.log("BtnAdd"); 

    add = () => {
    let sum = num1 + num2; 
    console.log(sum); 

    suma.textContent += sum; 
    };
    add(); 
});
// < === Resta === > 
btnTwo.addEventListener(`click`, () => {
    console.log("BtnSubtract"); 

    subtract = () => {
    let sub = num1 - num2; 
    console.log(sub); 

    suma.textContent = `Resta: ${sub}`; 
    }; 
    subtract(); 
}); 
// < ==== División === > 
btnThree.addEventListener(`click`, () => {
    console.log("BtnDivide"); 
 
    divide = () => {
        let div = num1 / num2; 
        console.log(div); 

        suma.textContent = `División: ${div}`; 
     }; 
    divide(); 
}); 
// < === Multiplicación === > 
btnFour.addEventListener(`click`, () => {
    console.log("BtnMultiply"); 
    
    multiply = () => {
    let mult = num1 * num2; 
    console.log(mult); 

    suma.textContent = `Multiplicado: ${mult}`; 
    }; 
    multiply(); 
}); 


console.groupEnd(); 