  /* =======  build count App ======= */
//console.log("Build"); 
//document.getElementById(`count-el`).innerText = 5; 

// cmd+k+c
let firstBatch = 10; 
let secondBatch = 5; 
let count = firstBatch + secondBatch; 
// 1- Create a variable, myAge, and set its value to your age. 
let myAge = 29; 

// 2- Log the myAge variable to the console. 
console.log(count); 
console.log(myAge); 

// Exercise 
let first = 20; 
let second = 10; 

function all()
{
  if(first === 20) {
    return first + second; 
  }else {
    console.log(`I am a error`); 
  }
}

console.log(all()); 

// Exercise 2: 
let bonusPoints = 50; 
console.log(bonusPoints); 

bonusPoints = bonusPoints + 50; 
console.log(bonusPoints); 

bonusPoints = bonusPoints - 75; 
console.log(bonusPoints); 

bonusPoints = bonusPoints + 45; 
console.log(bonusPoints); 

// Exercise 3: button
const btn = document.getElementById(`btn`); 
btn.addEventListener(`click`, () => {
  console.log("Button"); 
})
