console.group("Count Three"); 

for(let count = 1; count < 11; count += 1) {
   console.log(count); 
}; 

let counts = [1, 2, 3, 4, 5]; 
counts.forEach((item, index) => {
   console.log(item, index); 
}); 

let more = 100; 
for (let i = 10 ; i < more; i++) {
    console.log(more); 
}; 

// < =================== Loops and Arrays ======================== >
let message = [
 "Hey, how´s it going", 
 "I´m great thank you",
 "All good, been working on my portfolio",
 "Same here!"
]; 
/* console.log(message[0]);  */
/* console.log(message[1]);  */
/* console.log(message[2]);  */
/* console.log(message[3]);  */
console.log(message.length); 
for(let i = 0; i < 5; i ++) {
    console.log(message[i]); 
}; 

// < =============== Loop Cards ==================== > 

let cards = [7, 3, 9]; 
//console.log(cards); 

for (let i = 0; i < cards.length; i++) {
   console.log(cards[i]); 

   if(cards[i] === 7) {
       console.log("Seven"); 
   }else if(cards[i] === 3){
       console.log("Three"); 
   }else if(cards[i] === 9) {
       console.log("Nine"); 
   }else {
       console.log("Error"); 
   }

}; 

// < =============== Count level =================== > 
const sentences = ["Hello", "My", "Name", "Is", "Per"]; 
let greetingEl = document.getElementById(`greeting-el`); 
// << push() >>
let addGreting = "Evans"; 
sentences.push(addGreting); 
console.log(sentences); 

for(let i = 0; i < sentences.length; i++) {
    //console.log(sentences[i]); 

    greetingEl.textContent += sentences[i] + " ";

    // << function >>
    add = () =>  {
      if(sentences[0] === "Hello") {
          console.log("Hi!"); 
          // greetingEl.style.color = "green"; 
      }else {
          console.log("All texts"); 
      }; 
    }
    add(); 

}; 


console.groupEnd(); 