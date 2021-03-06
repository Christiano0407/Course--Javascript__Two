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

              /* ===== Double Click ===== */
const threeOn = document.getElementById(`buttonThree`); 

threeOn.addEventListener(`dblclick`, up);

function up() {
    //console.log(e);
    //document.write("Hola"); 
    alert("Tres"); 
}

              /* ===== Mouse Over ===== */

const four = document.getElementById(`four`); 

four.addEventListener(`mouseover`, mouse); 

function mouse (e) {
    console.log("Ratón"); 
}

//MouseOut ==> Evento fuera del elemento. 
//contextmenu ==> ocurre con un click en el botón derecho ==> Para Abrir un menú ===> Dentro del elemento. 
              /* ===== Exercise 01===== */
const five = document.getElementById(`five`); 

five.addEventListener("click", life);

function life(e) {
    console.log("Desarrollo"); 

    let heading = document.createElement("h1"); 
    let heading_text = document.createTextNode("Desarrollo");
    
    heading.style.color = "#f72585"; 
    heading.style.fontSize = "30px"; 

    heading.appendChild(heading_text); 

    document.body.appendChild(heading); 

     //button.removeEventListener("click", push); 
    five.removeEventListener("click", life); 
}

              /* ===== Eventos de Teclado ===== */
//keydown ==> Ocurre cuando una tecla se deja de presionar.
//keypress ==> Ocurre cuando una tecla se presiona. 
//keyup ==> Ocurre después de que, los dos eventos hayan ocurrido. 

const keyboard = document.getElementById(`keyboard`); 

keyboard.addEventListener("keyup", (e) => {
     console.log("Up tecla presionada"); 
}); 

keyboard.addEventListener("keypress", (e) => {
     console.log("Press nueva tecla!"); 
}); 

keyboard.addEventListener("keydown", (e) => {
    console.log("Down bajo Tecl!"); 
}); 


             /* =====Eventos de Interfaz  ===== */
//abort:
//error:
const log = document.querySelector(`.event-log-contents`); 

const badImg = document.querySelector(`.bad-img`);
badImg.addEventListener(`error`, (e) => {
    log.textContent = log.textContent + `${e.type}: Loading Img\n`; 
    console.log(e); 
}); 

const imgError = document.querySelector(`#img-error`);
imgError.addEventListener(`click`, () => {
    badImg.setAttribute(`src`, `i-dont-exist`); 
}); 

//load:
//beforeunload:
//unload:
 /*  Carga */
//resize
/* los diferentes tamaños de pantalla */
/* window.addEventListener(`resize`, () => { */
/*     console.log("Cambiando...");  */
/* }) */
/*  */

//scroll

//select
const inputs = document.querySelector(`.inputs`);
const container = document.querySelector(`.container`); 
// Lo va a colocar en la posición de event-log.

inputs.addEventListener(`select`, (e) => {
    let start =  e.target.selectionStart;
    let end = e.target.selectionEnd;
    
    let textoCompleto = inputs.value; 
    
    container.innerHTML = textoCompleto.substring(start, end); 
})

             /* ===== Eventos Timers (Temporizadores) ===== */
//setTimeout() ==> Tarda el tiempo que le pongas para aparecer.
//A)
 /* const time = document.getElementById(`time`);  */
 /*   setTimeout(function(){ */
 /*       time.value = document.write("hOLA") */
 /*   }, 1000);  */
//B)
/* const times = () => { */
/*     document.write("Es Tiempo!") */
/* } */
/* setTimeout(times, 1000);  */

// Clock Create: 
//1)
/* function startTime() { */
/*  let today = new Date();  */
/*  let h = today.getHours();  */
/*  let m = today.getMinutes();  */
/*  let s = today.getSeconds();  */
/*  */
/*  // add a zero in front of numbers <10 */
/*  */
/*  m = checkTime(m);  */
/*  s = checkTime(s);  */
/*  document.getElementById(`time`).innerHTML = h + ":"+ m + ":"+ s;  */
/*  t = setTimeout(function() { */
/*      startTime() */
/*  }, 500);  */
/* } */
/*  */
/* function checkTime(i) { */
/*   if(i<10) { */
/*       i = "0" + i;  */
/*   } */
/*   return i;  */
/* } */

//setInterval() ==> Cada intervalo de tiempo. 
//clearTimeout()
//clearInterval()
             
             /* =====  ===== */
