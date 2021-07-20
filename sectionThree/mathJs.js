console.group("MathRandom"); 
//< ================== MathRandom ==================== >
// === La función Math.random() retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1).======= >
// >>>>>> Random === aleatorio <<<<<<<
let randomNumber = Math.random(); 
console.log(randomNumber); 

// <<<< Math.floor >>>>
// ========= Devuelve el máximo entero menor o igual a un número. ============== >
// ========= Remove the decimals ===========
let floorNumber = Math.floor(3.1416); 
console.log(floorNumber);

// >>>> Math.round() <<<<
// ========== La función Math.round() retorna el valor de un número redondeado al entero más cercano. ========== >
// Remove the decimals ======== > 
let roundNumber = Math.round(3.6016); 
console.log(roundNumber);

// Using Math.random / floor ================ > 
let numberOne = Math.floor(Math.random() * 6);  // ===> Máximo 6 num.
console.log(numberOne); 

let numberTwo = Math.floor(Math.random() * 10); // ===> M'aximo 10 num.
console.log(numberTwo); 

// >>>> Math.ceil >>>>
// === La función Math.ceil() devuelve el entero mayor o igual más próximo a un número dado. =====> 
let numberThree = Math.ceil(5.55);  
console.log(numberThree); 

// >>>> Random y ceil >>>>>>>
let numberFour = Math.ceil(Math.random() * 7); 
console.log(numberFour); 
// >> Random Game <<


console.groupEnd(); 