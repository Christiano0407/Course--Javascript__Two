console.group("Logical Operators"); 
// > =====================  Operadores lógicos / Anidar operators ========================= <
let hasCompleteCourse = true; 
let givesCertificate = true; 

// > ===== Anidar condicionales y logical operators ========== > 
/* if (hasCompleteCourse === true) { */
/*     if(givesCertificate === true) { */
/*         generateCertificate();  */
/*     }else { */
/*         console.log("Sorry! Not certificated");  */
/*     } */
/* };  */

// > ==== Operator One:  And = &&  <<<<  = Afuerzas las dos tienen que cumplir =
if(hasCompleteCourse === true && givesCertificate === true) {
    generateCertificate(); 
}else {
    console.log("Sorry! Your not certificated!"); 
}; 

function generateCertificate() {
  console.log("Generating Certificate...")
}; 
//generateCertificate();

// > ==== Operator Two: <<<< ======= || ===== >>> Or / Or logic = Una puede cumplir, mientras la otra no =
let one = true; 
let two = false; 

if(one === true || two === false) {
    getPlay(); 
}else {
    console.log("Sorry! It´s not function this operator"); 
}

function getPlay() {
    console.log("yes! It´s amazing"); 
}


// > ==== Operator Three: <<<< ======= != ===== >>> No es igual. 
let three = false; 
let four = false; 

if(three != four) {
    noPlay(); 
}else {
    console.log("Sorry!")
}

function noPlay() {
    console.log("Yes! Not play"); 
}

console.groupEnd(); 