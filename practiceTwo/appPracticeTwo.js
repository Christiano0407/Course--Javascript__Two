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

// 4) <<< ================ PUSH / POP / UNSHIFT ========================== >>>
// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
let largeCountriesTwo = ["Tuvalu","India","USA","Indonesia","Monaco"]
console.log(largeCountriesTwo); 

console.groupEnd(); 