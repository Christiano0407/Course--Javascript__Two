console.log("Prueba2"); 

      /* ==== Inner HTML ==== */
/* Podemos agregar o modificar el HTML con InnerHTML */

const description = document.getElementById(`description`);
/* description.innerHTML = "All the future";   */
/* description.innerHTML = " <h1>All Levels On The Future</h1>";  */

/* Podemos con ==> textContent alterar el contenido del texto. */
description.textContent = `All Technology`; 
description.innerHTML = ` <strong> ${description.textContent} </strong> `; 
/* ${} Y `` ==> Permite agregarle al texto existente */