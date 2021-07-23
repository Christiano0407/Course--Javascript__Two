console.group("Game One"); 
let hands = ["Rock", "Paper", "Scissor"]; 

// >>>> ========== Function para darle el turno a cada elemento ========== >>>>>>
getHand = () => {
    let randomIndex = Math.floor(Math.random() * 3); 
    return hands[randomIndex]; 
}
console.log(getHand()); 

console.groupEnd(); 