console.log("Métodos"); 

// ========================== One Practice: forEach()
// Por cada elemento. 

let array = [2,4,6,8,10,12,14];

// 1) Primer Método (antiguo) : Ciclo: 

/* for(let i = 0; i < array.length; i++ ) { */
/*   const item = array[i];  */
/*   const index = i;  */
/*  */
/*   console.log(item, index); */
/* } */

// 2) Segundo método: forEach:
array.forEach((item, index) => {
    console.log(item, index); 
})


// =========================== Practice: .map() 
//=> Regresa un nuevo arreglo.

let arrayTwo = ["Luisa", "Alma", "Alexa", "Pamela"]; 

// 1) ============
/* let result = [];  */
/*  */
/* for(let adds = 0; adds < arrayTwo.length; adds++) { */
/*     const item = arrayTwo[adds];  */
/*      */
/*     result.push(`<div>${item}</div>`) */
/* } */
/* console.log(result);  */

// .map() =========================
let arr = ["Mariana", "Natasha", "Luisa", "Pamela"]; 

let result2 = arr.map((item) => {
    return `<h1>${item}</h1>`; 
})

console.log(arr); 
console.log(result2); 

// 3) ========================= .filter()
// => Nos permite filtrar / Nos regresa un arreglo nuevo:

let arr2 = [1,2,3,4,5,6,7,8,9,10];

