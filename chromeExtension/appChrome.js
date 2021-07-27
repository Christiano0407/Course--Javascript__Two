console.group("Build Chrome"); 
// truthy
// falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

// =========== =========== <<<<< Chrome Exercise >>>>>> ================= ================
// =========== <<<<< Variables >>>>>> ================= 
const input = document.getElementById(`input-el`); 
const button = document.getElementById(`input-btn`); 
// ==>> Array de datos <<<<
//let myLeads = ["www.awesomeLead.com "," www.epiclead.com "," www.greatCloud.com "]; 
// ====  RenderLeads() function ===== >
let myLeads = []; 
let oldLeads = []; 
// ==== Lista desordenada ====>
const ulEl = document.getElementById(`ul-el`); 
console.log(ulEl); 

//
//console.log(localStorage.getItem("myLeads")); 
localStorage.clear(); 
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads")); 
console.log(leadsFromLocalStorage); 

// >>>>>>>>>>>> ====== Eventos ===== <<<<<<<<<<<<<

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// < ==== Delete All Button ====== > 
// 2. Listen for double clicks on the delete button (google it!)
// 3. When clicked, clear localStorage, myLeads, and the DOM
const btnDelete = document.getElementById(`input-btn_delete`); 

btnDelete.addEventListener(`dblclick`, function() {
    console.log("Delete dbClick!"); 

    localStorage.clear();  
    myLeads = []; 
    render(myLeads); 
})
// ========= Ir agregando datos / Save input button ========
// >>> Get Value from input field js / Tipo Google Ads >
button.addEventListener(`click`, () => {
   console.log("I´m Button!"); 
// >>>> Methods >>>>>
   myLeads.push(input.value); 
   console.log(myLeads); 
   // JSON 
   localStorage.setItem("myLeads", JSON.stringify(myLeads)); 

   // == 4) Clear out the input field ==
   input.value = ""; 

   render(myLeads); 
   // tO VERIFY = LOCALSTORAGE =
   console.log(localStorage.getItem("myLeads")); 
});
// >>>>> Ciclo para guardar los datos ingresados <<<<<<
// 1) <<< Array using a for loop ========
// 2) ==== Render ulList using ulEl.textContent =====  

// 3) ====  RenderLeads() function ===== >
function render(leads) {
    let listItem = "";  

    for(let i = 0; i < leads.length; i++) {
        // console.log(myLeads[i]);
    
      // 1) == Primera forma == 
        /* ulEl.textContent += myLeads[i]; */
        /* ulEl.innerHTML += `<li>${myLeads[i]}</li>`;  */
        /* ulEl.style.fontSize = `20px`;  */
        /* ulEl.style.fontWeight = "700"; */
    
        // 2) ===== forma de hacer / CREAR UN ELEMENTO ==== :
     /*    const li = document.createElement(`li`); */
     /*    li.textContent = myLeads[i];  */
     /*    // == Method / element == */
     /*    ulEl.append(li);  */

        // 3 ) == extra forma ==
        // < ==== Se llama TEMPLATE STRING = `${}` === >
        listItem += `<li><a href="${leads[i]}"  target="_blank">${leads[i]}</a></li>`; 
        //listItem += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        console.log(listItem); 
        ulEl.innerHTML = listItem; 
        ulEl.style.fontSize = `20px`; 
        ulEl.style.fontWeight = "700"; 
        ulEl.style.margin = `20px 0`; 
    }   

}; 
 // > append() === El Element.append()método inserta un conjunto de Nodeobjetos u DOMStringobjetos después del último hijo de Element. DOMStringlos objetos se insertan como Textnodos equivalentes . ====

 // = Deployment = == JSON (Javascript Object Notation) ==== Almacenar y envíar datos === >

 // LocalStorage
 /* let names = localStorage.getItem("myName") */
 /* console.log(names);  */
 // localStorage.clear()

 // < =========== JSON /JSON.perse() ========== >
 // < Transforma los valores en formato JSON >
// 1) ===
 let myFriends = `["Mauricio Chávez"]`; 
myFriends = JSON.parse(myFriends);
myFriends.push("Alma Rosa"); 
console.log(myFriends); 

// 2) ===
let myBros = ["Luisa Cantú"]; 
myBros = JSON.stringify(myBros); 
console.log(myBros); 

// 3) ===
let girls = `["Jennifer Alexander"]`; 

girls = JSON.parse(girls); 
girls.push("Natalia Valenzuela"); 
console.log(girls); 


console.groupEnd(); 

console.group("BOX"); 
// ======================================================================================================== 
// >>>>>>>>>>>>>>>> =========== Exercise BOX =============== <<<<<<<<<<<<<<<<<<<<<<<<
let box = document.getElementById(`boxs`); 
console.log(boxs); 

box.addEventListener(`click`, function() {
    console.log("box!"); 
})

// =========== InnerHTML PRACTICE ===============>
const container = document.getElementById(`container`); 
console.log(container); 

const containerTwo = document.getElementById(`containerTwo`); 
console.log(containerTwo); 

const btnThree = document.getElementById(`btnThree`); 
console.log(btnThree); 
// 1) ======================================== > 
container.innerHTML = `<p>Create Container</p>`; 
container.style.color = `red`; 
container.style.fontSize = `20px`; 
container.style.fontWeight = `700`; 
// 2) ========================================== >
containerTwo.innerHTML = `<p>I´m create on my first InnerHTML</p>`; 

containerTwo.style.color = `blue`; 
containerTwo.style.fontSize = `18px`; 
containerTwo.style.fontWeight = `400`; 
containerTwo.style.textAlign = `center`; 
// 3) =============== ========================== >
btnThree.innerHTML = `<button onclick = "buy()">Buy!</button>`
function buy() {
    console.log("Thank you for buying");
    btnThree.innerHTML = `<p>Thank you for buying!</p>`;  
   
    btnThree.style.color = "#000"; 
    btnThree.style.fontSize = "24px"; 
    btnThree.style.fontWeight = "bold"; 
} 

console.groupEnd(); 