console.group("Build Chrome"); 
// =========== =========== <<<<< Chrome Exercise >>>>>> ================= ================
// =========== <<<<< Variables >>>>>> ================= 
const input = document.getElementById(`input-el`); 
const button = document.getElementById(`input-btn`); 

let myLeads = ["www.awesomeLead.com", "www.epiclead.com", "www.greatCloud.com"]; 

// >>>>>>>>>>>> ====== Eventos ===== <<<<<<<<<<<<<
button.addEventListener(`click`, () => {
   console.log("I´m Button!"); 
// >>>> Methods >>>>>
   myLeads.push(input.value); 
   console.log(myLeads); 

   
});

for(let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]); 
}



console.groupEnd(); 