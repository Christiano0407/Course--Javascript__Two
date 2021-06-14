console.log("Practice"); 
const names = document.getElementById(`name`); 
const form = document.getElementById(`form`); 
const email = document.getElementById(`email`); 
const matter = document.getElementById(`matter`); 
const button = document.getElementById(`btn`); 
const resultado = document.querySelector(".resultado"); 

           // Events
button.addEventListener(`click`, (e) => { 
  e.preventDefault(); 

  let error = validarCampos(); 
  if(error[0]) {
    resultado.innerHTML = error[1]; 
    resultado.classList.add(`red`); 
  } else {
    resultado.innerHTML = "Solicitud enviada correctamente"; 
    resultado.classList.add("green");  
    resultado.classList.remove("red")   
  }
}); 

    // Validar Campo de formulario
    
const validarCampos = () => {
    let error = []; 
    if(names.value.length < 5) {
      error[0] = true; 
      error[1]= "El nombre no puede contener menos de 5 caracteres"; 
      return error; 
    }else if (names.value.length > 40) {
      error[0] = true; 
      error[1] = "El nombre no puede ser mayor a 40 caracteres"; 
      return error; 
    }else if(email.value.length < 5 || 
             email.value.length > 40 ||
             email.value.indexOf("@") == -1 ||
             email.value.indexOf(".") == -1) {
                 error[0] = true; 
                 error[1] = "El e-mail es inválido"; 
                 return error; 
    }else if(matter.value < 4 || 
             matter.value > 40 ) {
                 error[0] = true; 
                 error[1] = "La materia no existe"; 
             }
    error[0] = false; 
    return error; 
}