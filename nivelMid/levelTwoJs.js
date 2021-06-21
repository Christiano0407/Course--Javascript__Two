document.write(`Hello World`); 
/*  ======== Control de flujo, y manejo de errores. ======= */

// a) Sentencia de Bloque.
// B) Sentencia de control de flujo.
// C) Sentencias de manejo de excepciones.

// VAR / CONST / LET.
// SWITCH / FOR / 

// Try...Catch
/* La sentencia try consiste en un bloque try que contiene una o más sentencias. */
/*  Las llaves {} se deben utilizar siempre, incluso para una bloques de una sola sentencia. */
/*   Al menos un bloque catch o un bloque finally debe estar presente.  */
/*   Esto nos da tres formas posibles para la sentencia try: */
/*  */
/* try...catch */
/* try...finally */
/* try...catch...finally */
/*  */

let value = 20;  
try{
 if(value === 20) {
     console.log("Valor verdadero")
 }
}
catch(error) {
 console.log("Error"); 
}

