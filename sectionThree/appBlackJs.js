console.group("Section Three / BlackJack"); 
// < ========== Variables ========== > 
const firstCard = 5; 
const secondCard = 10; 
let sum = firstCard + secondCard; 
console.log(sum); 
let totalSum = sum; 
let hasBlackjack = false; 
let isLive = true; 
let message = "";  
// Link to Stylesheet === > 
// Start Button ===== > 
const buttonStart = document.getElementById(`btnStart`);
console.log(buttonStart); 

// < =============== CONTINUE BLACKJACK GAME ============== > 
// Conditional Blackjack >>>>>>>>
/* buttonStart.addEventListener(`click`, () => { */
/*  console.log("Start Game");  */
/*   */
/* });  */
let messagePlay = document.getElementById(`message-el`); 
console.log(messagePlay);  


// 1 button > 
function startGame() {

    };

startGame(); 
// 2 button > 
buttonStart.addEventListener(`click`, () => {

    adds = () => {

        // Tarjetas se vean > 
        const cards = document.getElementById(`card`); 
        console.log(cards); 
        cards.innerText += ` ${firstCard} y ${secondCard} `; 
        cards.style.fontSize = "20px"
        
    }; 

    adds();
    
}); 
//  < ===== New Button Card ==== > 
const newCard = document.getElementById(`btnCard`); 
console.log(newCard); 

let cardThree = [3, 5, 6]; 
console.log(cardThree); 

getRandomCard = () => {
     for(let i = 0; i < cardThree.length; i++) {
         newCard.textContent += cardThree[i]; 
     } 
}
// let cardThree = []; 
/* const countCard = cardThree.push(6);  */
/* console.log(countCard);  */


newCard.addEventListener(`click`, () => {
     console.log("New Card and Life"); 

     addTotal = () =>  {
     const newThreeCard = document.getElementById(`newThreeCard`); 
     console.log(newThreeCard); 
     newThreeCard.textContent += cardThree; 
     newThreeCard.style.fontSize = "18px"; 
     newThreeCard.style.color = "blue"; 

     getRandomCard(); 
     }; 

     addTotal(); 
}); 

// < ======== Select You Card ============== > 
const selectCard = document.getElementById(`selectCard`);
console.log(selectCard);   

selectCard.addEventListener(`click`, () => {

    youCard = () => {

    const newSelect = document.getElementById(`newSelect`); 
    newSelect.textContent += cardThree[2]; 
    newSelect.style.fontSize = "18px"; 
    newSelect.style.color = "green"; 

    }
    youCard(); 
}); 


// Suma Total con la nueva carta ====> 
const buttonTotal = document.getElementById(`btnTotal`); 
console.log(buttonTotal); 
buttonTotal.addEventListener(`click`, () => {
    
    allTotalWin = () => {

        const sumaTotal = document.getElementById(`suma`);
        console.log(sumaTotal); 
        let allSum = totalSum + cardThree[2]; 
         console.log(allSum); 
        sumaTotal.textContent += allSum; 
        sumaTotal.style.color = " red";
        sumaTotal.style.fontSize = "18xpx"; 

     // suma Total > 
     if(allSum ===  21) {
        message = "wohoo! You´ve got Blackjack"; 
        hasBlackjack = true; 
    }else if (allSum <= 20) {
        message = "Do you want to draw a new card"; 
    }else {
        message = "You´re out of the game"; 
        isLive = false; 
       }; 
       // Cash >>>>>>
    console.log(hasBlackjack); 
     // ADD basic styling === > 
    console.log(isLive); 
    // Challenge Message===== >
    console.log(message);

     // Mensaje >
     messagePlay.innerText = message; 
     messagePlay.style.color = "#000";
     messagePlay.style.fontSize = "22px";     

    }; 

    allTotalWin(); 
}); 

console.groupEnd(); 

console.group("Practice / challenges"); 
// < =========== Funciones / Eventos / Condicionales / Ciclos ========== > 
// < ==== Card 21 ==== > 
/* if(sum < 21) { */
/*  console.log("I´m sorry. Your lost");  */
/* }else if(sum === 21) { */
/*   console.log("Win!");  */
/* }else if(sum > 21) { */
/*   console.log("You try again");  */
/* }else { */
/*   console.log("Game again");  */
/* }; */

// < === Age for enter club === > 
/* let age = 21;  */
/*  */
/* if(age <= 20) { */
/*     console.log("I´m sorry. Your not enter");  */
/* } else if(age === 21) { */
/*     console.log("Yes! Your enter at the club. But Card Age") */
/* }else if(age >= 21) { */
/*     console.log("Your Welcome!");  */
/* }else { */
/*     console.log("Sorry");  */
/* };  */
/*  */
// < ===== Card person King! ===== >
/* let ageKing = 100;  */
/*  */
/* if(ageKing <= 99) { */
/*     console.log("Not elegible");  */
/* }else if(ageKing === 100) { */
/*     console.log("Here is your Birthday card from the king!");  */
/* }else if(ageKing >= 101) { */
/*     console.log("Not elegible, you have already gotten one");  */
/* };  */

let playerTime = 102; 
let player2Time = 107; 

function getFastestRaceTimer() {
    if(playerTime < player2Time) {
        return playerTime; 
    }else {
        console.log("ErrorPlayer"); 
    }
}
console.log(getFastestRaceTimer()); 
console.groupEnd(); 