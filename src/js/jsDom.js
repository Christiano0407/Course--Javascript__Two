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
/* Atributo: tagName */

const items = document.getElementsByTagName(`li`); 
for(var i = 0; i < items.length; i++) {
    let elements = items[i]; 
    console.log(elements); 
}
console.log(items); 

/*  Cambiar el estilo */
/* const itemss = document.getElementsByTagName(`li`);  */
/* for( let i = 0; i < itemss.length; i++) { */
/*     if(i % 2  == 0) { */
/*         let elementss  = itemss[i];  */
/*         elementss.style.background = `f2f2f2`;  */
/*     } */
/* } */

    /* ===== Obtener Elementos por CSS ===== */

/* 1) Atributo: querySelector */
/* ==> (.) ==> Para class */
/* ==> (#) ==> Para Id  */
/* Elementos ==> (li) */

/* 2) Atributo ==>  querySelectorAll ==> retorna a una lista / todos los MediaElementAudioSourceNode */

/* 3) Atributo ==> querySelectorAll(`li:nth-child(add)`) ==> Permite tomar todos los atributos */


           /* ===== Elementos Hijo ===== */

const lista = document.querySelector(`ul`); 

/*Sus elementos hijos son: li*/
console.log(lista.childElementCount); 
console.log(lista.children); 
/* Iterar */
console.log(lista.childElementCount); 
  
for (let i = 0; i < lista.children.length; i++) {
    console.log(lista.children[i]); 
  }

/*Primer Hijo */
console.log(lista.firstElementChild.innerHTML);
console.log(lista.lastElementChild) 

        /* =====  Elemento Hermano ===== */

 /* Elemento Padre / Atributo ==> parentElement */
const father = document.querySelector(`div.row > ul.list-group > li`); 
console.log(father.innerHTML); 
console.log(father.parentElement); 

  /*Elemento Abuelo */
const grandFather = document.querySelector(`div.row > ul.list-group > li`); 
console.log(grandFather.innerHTML); 
console.log(grandFather.parentElement.parentElement); 
       
  /*Elementos hermanos */
/* atributo: .nextElementSibling */
const brothers = document.querySelector(`div.row > ul.list-group > li`); 
console.log(brothers.innerHTML); 
console.log(brothers.nextElementSibling); 
console.log(brothers.nextElementSibling.innerHTML); 
console.log(brothers.nextElementSibling.nextElementSibling); 
console.log(brothers.nextElementSibling.nextElementSibling.innerHTML);

/*   previo */
    /*  atributo: .previousElementSibling */
const last = document.getElementById(`last_element`); 
console.log(last); 
console.log(last.previousElementSibling); 
console.log(last.previousElementSibling.innerHTML); 

/* Dato: Si no tiene hermanos / padre / abuelo == null */

         /* =====  Nodos ===== */
const elem = document.getElementById(`course`); 
console.log(elem.childElementCount); 
/*Nodos ==> Cantidad de elementos que tiene un elemento */
/*La propiedad de solo lectura Node.childNodes  devuelve una colección de hijos nodes del elemento dado donde el primer nodo hijo es asignado un índice 0. */
console.log(elem.childNodes.length); 
console.log(elem.childNodes);  


