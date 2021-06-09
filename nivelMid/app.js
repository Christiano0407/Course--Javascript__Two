//alert("Hello!"); 
console.log("Hello!"); 

//Object Window:

//let openURL = "https://developer.mozilla.org/es/docs/Web/API/Window"; 
//window.open(openURL); 
//window.closed(cierra la ventana).
//stop() ==> Detiene la carga de recursos en el contexto de navegación actual.
//prompt() ==> Hacer preguntas / agrgar datos.
//confirm() ==> confirmar. 

//screen
/* const screen = window.screen;  */
/* console.log(screen.colorDepth);  */
/* document.write(screen);  */

              /* ===== Location ===== */
//window.location.href
const href = window.location.href; 
//document.write(href); 
console.log(href); 

//window.location.hostname
//window.location.pathname
//window.location.protocol
//window.location.assign()

/*  ====  Alto y Ancho  ===== */

/* let alto = window.screen.availHeight;  */
/* let ancho = window.screen.availWidth;  */
/*  */
/* tamaño = confirm(`Alto: ${alto}, ancho: ${ancho}`);  */
/*  */

                  /* ===== Events  ===== */

                  /* ===== Click ==> Dos formas: ===== */

// A) Forma:
const button = document.getElementById(`button`); 

button.addEventListener("click", push); 

function push () {
    
    console.log(`Es un botón`); 

    // Quitar el mismo evento: 
    //button.removeEventListener("click", push); 
}
button.style.background = "#000"; 
button.style.color = `#fff`; 

// B) Forma

/* const ButtonTwo = document.getElementById(`buttonTwo`);  */
/*  */
/* ButtonTwo.onclick = () => { */
/*     console.log("Soy el segundo");  */
/* } */
/* ButtonTwo.style.background = `#000`;  */
/* ButtonTwo.style.color = `#fff`;   */

                /* ===== Object Event ===== */

// Event ==> "e".
// e.target
// this

const buttonTwo = document.getElementById(`buttonTwo`); 

buttonTwo.addEventListener("click", (e) => {
   console.log(e.target); 
}); 

              /* =====  ===== */

              /* =====  ===== */

              /* =====  ===== */

              /* =====  ===== */

             /* =====  ===== */
