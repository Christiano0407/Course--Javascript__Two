  /* =======  build count App ======= */
//console.log("Build"); 
//document.getElementById(`count-el`).innerText = 5; 

// cmd+k+c
/* let firstBatch = 10;  */
/* let secondBatch = 5;  */
/* let count = firstBatch + secondBatch;  */
// 1- Create a variable, myAge, and set its value to your age. 
//let myAge = 29; 

// 2- Log the myAge variable to the console. 
/* console.log(count); */ 
/* console.log(myAge); */ 

// Exercise 
/* let first = 20;  */
/* let second = 10;  */
/*  */
/* function all() */
/* { */
/*   if(first === 20) { */
/*     return first + second;  */
/*   }else { */
/*     console.log(`I am a error`);  */
/*   } */
/* } */

//console.log(all()); 

// Exercise 2: 
/* let bonusPoints = 50;  */
/* console.log(bonusPoints);  */
/*  */
/* bonusPoints = bonusPoints + 50;  */
/* console.log(bonusPoints);  */
/*  */
/* bonusPoints = bonusPoints - 75;  */
/* console.log(bonusPoints);  */
/*  */
/* bonusPoints = bonusPoints + 45;  */
/* console.log(bonusPoints);  */

// Exercise 3: button
/* const btn = document.getElementById(`btn`); */
/*  */
/* btn.addEventListener(`click`,() => { */
/*   console.log("Button");  */
/* }) */
// Write laps complete / Exercise 5: 

/* let lapsCompleted = 0;   */
/*  */
/* function incrementLap()  */
/* { */
/*   lapsCompleted = lapsCompleted + 1;  */
/* } */
/* incrementLap();  */
/* incrementLap();  */
/* incrementLap();  */
/*  */
/* console.log(lapsCompleted);  */

// Exercise 6 / Increment Clicks: 
/* const btn = document.getElementById(`btn`); */
/*  */
/* let countPlus = 0;  */
/*  */
/* btn.addEventListener(`click`, () => { */
/*   countPlus = countPlus + 1;  */
/*   console.log(countPlus);  */
/* }) */

// Exercise Seven 7: / Display The Count

const btn = document.getElementById(`btn`); 
const countEl = document.getElementById(`count-el`); 

let countT = 0; 

btn.addEventListener(`click`, () => {

  countT = countT + 1; 
  countT.innerHTML = countEl.style.color = "red";  
  
  countEl.innerText = countT; 

})

console.log(countEl); 