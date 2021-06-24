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

let arr2 = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13];

//1) Ciclo for(); 
/* let result3 = [];  */
/* for(let index = 0; index < arr2.length; index++) { */
/*     const items = arr2[index];  */
/*  */
/*     if(items > 5 && items < 11) { */
/*        result3.push(items);  */
/*     }else { */
/*        console.log("Tenemos un error Dos");  */
/*     } */
/* } */
/* console.log(result3); */


//2) filter(); 
/* let result33 = arr2.filter( (itemss, index) => { */
/*    return itemss > 3 && itemss < 12;  */
/* });  */
let result33 = arr2.filter(itemss => itemss > 2 && itemss < 12); 
console.log(result33); 

// 4) ======================== .find(); 
// => Encontrar la primera coincidencia dentro de nuestro arreglo basado en una condición. 

let arr3 = [ 
 { 
  city: "New York",
  budget: 5500
 }, 
 {
  city: "Mexico City",
  budget: 4500
 }, 
 {
  city: "Orlando Florida",
  budget: 2000
 },
]; 

// 1) ciclo for(); 
let resultsss = []; 
for(let index = 0; index < arr3.length; index++) {
    const itemsss = arr3[index]; 

    if(itemsss.budget < 6000) {
        resultsss = itemsss; 
        break; 
    }
}
console.log(resultsss); 

// 2) .find(); 

let money = arr3.find(item => item.budget < 3000); 
console.log(money); 

console.log(arr3); 