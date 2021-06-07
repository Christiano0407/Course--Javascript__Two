console.log("Hello World"); 

/* Object Window */
/* Permite realizar acciones sobre la ventana. */

/* Object Documents */
/* Nos permite realizar acciones sobre nuestra página web. */

let saludo = "Hola amigo y familia"; 
console.log(saludo); 


   /*  Obtener Elementos a través de "ID" */
/* Atributo: getElementById */
const title = document.getElementById(`title`); 
console.log(title); 
title.innerHTML = "Cursos con Javascript"; 

const description = document.getElementById(`description`); 
console.log(description); 
description.innerHTML = "Listado de Cursos para Programación : "; 


  /*     Obtener Elementos a través de "Class" */
/* Atributo: className */

const list = document.getElementsByClassName(`list-group`); 
console.log(list); 

     /*   Iterar los items */
const item = document.getElementsByClassName(`list-group-item`); 
for (var i = 0; i < item.length; i++) {
    let element = item[i]; 
    console.log(element); 
}
console.log(item); 


/*   Obtener Elementos por Etiquetas */