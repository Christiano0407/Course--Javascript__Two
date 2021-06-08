console.log("events"); 
       /*  ==== EVENTS ==== */
/* Eventos nos permiten controlar acciones dentro de nuestra web */

const button = document.getElementById(`hola`); 

button.addEventListener(`click`, saluda);

function saluda() {
    console.log("Agregar Saludo"); 
}

        /* ==== Evento Click ==== */

const buttonTwo = document.getElementById(`bottom`); 

buttonTwo.addEventListener("click", all); 
                       /*  Evento y function */
function all() {

    /* hola.style.display = `none`;  */
    console.log(`Éste es un botón`); 
}


        /* ==== Objeto Target ==== */

const here = document.getElementById(`here`); 

here.addEventListener( "click", remove); 

function remove(e) {

    console.log(e); 

    if(title.style.display != `none`) {
        title.style.display = `none`; 

        //button.textContent = `Mostrar`; 
        //e.target.textContent = `Mostrar`;
        this.textContent = `Mostrarlo`;  
        /*  Elemento que dispara el evento */

    }else {
        title.style.display = `block`; 
        
        //button.textContent =  `Ocultar`; 
        //e.target.textContent =  `Ocultar`;
        this.textContent = `Ocultarse`;  
    }

}

/* Parámetro  ==> (e) ==== */

     /*  =====  Evento Mouse ===== */

     /*  =====  SetTimeOut ===== */

     /*  =====  Evento Teclado ===== */

     /*  =====  Evento submit ===== */
/* recomendable el evento para el formulario */
   const form = document.getElementById(`course-form`); 
   //console.log(form); 
   form.addEventListener(`submit`, function(e) {

        e.preventDefault(); //Previo de mandar datos a servidor.

        let title = document.getElementById(`title-form`).value;  // ==> toma el valor
        let suscription = document.getElementById(`suscription-form`).value; // value
  
        console.log(title); 
        console.log(suscription); 
    }) 

     /*  =====  Cambio de valor / CHange===== */

     

     /*  =====  Document Loaded ===== */
     /*  =====  Evento bubbling ===== */
     /*  =====  Evento prpagación de eventos===== */
     /*  =====  Evento Detener propagación ===== */
