console.group("Practice Two");
// 1) >>>>>>>>>>  ==================== OBJECT ================================ >>>>>>>>> 
// Create a person object that contains three keys: name, age, and county.
//  ===== Use yourself as an example to set the values for name, age, and country ==== > 
// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works
const personOne = document.getElementById(`personOne`); 
console.log(personOne); 

persons = () => {
    let person = {
        name: "Tom Evans", 
        age: 29, 
        country: "New York City",
    }; 
    console.log(person); 
    console.log(person.name); 

    personOne.innerText = `${person.name} edad: ${person.age} y vive en ${person.country}; `
    personOne.style.fontSize = "18px"; 
    personOne.style.fontWeight = "500"; 
    personOne.style.color = "red"; 
}; 
persons(); 

// 2) >>>>>> ======================== If else ================================== <<>>>

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

let age = 32; 
peopleAge = () => {

    if(age === 6 || age < 6) {
        console.log("Free"); 
    }else if (age === 6 || age <= 17) {
      console.log("Child discount"); 
    }else if (age === 18 || age < 26) {
      console.log("Student Discount"); 
    }else if (age > 27 && age < 66) {
     console.log("full Price"); 
    }else if(age === 66 && age > 67) {
      console.log("Senior citizen discount"); 
    }else {
     console.log("What is is wrong... ? ")
    }
}; 

peopleAge(); 

// 3) >>> ====================== LOOPS ============================ <<<<
/* Use a for loop to log the following to the console:
The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]; 
console.log(largeCountries); 

for (let i = 0; i < largeCountries.length; i++) {
    console.log(largeCountries[i]); 
}
/* largeCountries.forEach((item, index) => { */
/*     console.log(item, index);  */
/* });  */

// 4) <<< ================ PUSH / POP / UNSHIFT ========================== >>>
// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

let largeCountriesTwo = ["Tuvalu","India","USA","Indonesia","Monaco"]
console.log(largeCountriesTwo); 
// = push() =
largeCountriesTwo.push("China", "Pakistan"); 
console.log(largeCountriesTwo); 
// = forEach() =
largeCountriesTwo.forEach((item, index) => {
    console.log(item, index); 
}); 
// = pop() =
largeCountriesTwo.pop()
console.log(largeCountriesTwo); 
// = Unshift() = El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array. ==
largeCountriesTwo.unshift("United Kingdom", "Italy"); 
console.log(largeCountriesTwo); 

// = Shift() = El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
largeCountriesTwo.shift(); 
console.log(largeCountriesTwo);

// 5) >>>> ================ Logical Operators ================= <<<<
// If it is Friday the 13th, log out this spooky face: 
// Use the logical "AND operator" -> &&

let dayOfMonth = 13; 
let weekDay = "Friday"; 

oneDay = () => {
 if(dayOfMonth === 13) {
   console.log(true); 
 }else if(weekDay === "Friday") {
   console.log(true); 
 }
}; 
oneDay(); 
// 6) >>>> =============== Rock Paper scissor ================ <<<<
// Create a function that returns a random item from the array
let hands = ["Rock", "Paper", "Scissor"]; 

getHand = () => {
  let randomIndex = Math.floor(Math.random() * 3); 
  return hands[randomIndex]; 
}
console.log(getHand()); 

// 7) >>>>>>> =========== Shorting Fruits ============ <<<<<<<<<<<<
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]; 
const apple = document.getElementById(`apple-sheld`); 
console.log(apple); 
const orange = document.getElementById(`orange-sheld`); 
console.log(orange); 



console.groupEnd(); 