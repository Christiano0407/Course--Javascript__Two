console.group("Build Chrome"); 
// =========== =========== <<<<< Chrome Exercise >>>>>> ================= ================
// =========== <<<<< Variables >>>>>> ================= 
const input = document.getElementById(`input-el`); 
const button = document.getElementById(`input-btn`); 
// ==>> Array de datos <<<<
let myLeads = ["www.awesomeLead.com "," www.epiclead.com "," www.greatCloud.com "]; 

// ==== Lista desordenada ====>
const ulEl = document.getElementById(`ul-el`); 
console.log(ulEl); 

// >>>>>>>>>>>> ====== Eventos ===== <<<<<<<<<<<<<
// ========= Ir agregando datos / Save input button ========
// >>> Get Value from input field js / Tipo Google Ads >
button.addEventListener(`click`, () => {
   console.log("I´m Button!"); 
// >>>> Methods >>>>>
   myLeads.push(input.value); 
   console.log(myLeads); 

   
});
// >>>>> Ciclo para guardar los datos ingresados <<<<<<
// 1) <<< Array using a for loop ========
// 2) ==== Render ulList using ulEl.textContent =====  
for(let i = 0; i < myLeads.length; i++) {
    // console.log(myLeads[i]); 

    ulEl.textContent += myLeads[i];
    ulEl.innerHTML += `<li>${myLeads[i]}</li>`; 
    ulEl.style.fontSize = `20px`; 
    ulEl.style.fontWeight = "700";
}
console.groupEnd(); 



console.group("BOX"); 

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