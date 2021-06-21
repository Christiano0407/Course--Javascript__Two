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

/* let value = 20;   */
/* try{ */
/*  if(value === 20) { */
/*      console.log("Valor verdadero") */
/*  } */
/* } */
/* catch(error) { */
/*  console.log("Error");  */
/* } */

// Finally == Tiene una  mayor prioridad. 
/* const finallyTry = () =>  */
/* { */
/*     try { return 1} */
/*     catch(e) {return 2} */
/*     finally {return 3} */
/* } */
/* console.log(finallyTry());  */


// Ejercicio == Form3
//const button = document.getElementById(`button-matter`); 
//const note = document.getElementById(`note-student`); //


/* button.addEventListener("click", () => { */
/*     let result, message;  */
/*     openModal(result, message); */
/*     try { */
/*       result = parseInt(document.getElementById(`notes`).value);  */
/*       if(isNaN(prevRes)) { */
/*           throw "Gracioso";  */
/*       } */
/*       message = verification(prevRes);   */
/*     } catch(e) { */
/*       result = "Error, Error";  */
/*       message = "Hacker site";  */
/*     } */
/*     openModal(result, message);  */
/* }) */
/*  */
/* const verification = (pr) =>  { */
/*   let result;  */
/*  */
/*   switch(pr) { */
/*    case 1: result = "Uff!";  */
/*    break;  */
/*    case 10: result = "Very Good";  */
/*    break;  */
/*    default : result = null;  */
/*   } */
/*   return result */
/* } */
/*  */
/* const openModal = (res, msg) => { */
/*     console.log(res);  */
/*     console.log(msg);  */
/* } */