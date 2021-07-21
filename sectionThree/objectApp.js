console.group("Objects"); 

let course = {
    title: "Learn CSS GRID for free", 
    lessons: "16", 
    creator: "Harald Borgen", 
    length: 63, 
    level: 2,
    isFree: true,
    tags: ["HTML", "CSS", "SASS"],
}; 
console.log(course); 
console.log(course.length); 
console.log(course["tags"]); // Otra forma cuando es un array > 
console.log(course.tags[1]); // Llamar al array dentro de un object > 

// <<<< ================ Create OBJECT ================= >>>>
let airBnb = { 
    isFree: false, 
    lodging: true, 
    foundation: "Steve Jobs", 
    people: 25,
    countries: ["England", "Italy", "E.U.A", "Canada", "Mexico", "Germany", "Spain", "Australia"], 
    cities: ["London", "Rome", "Berlin", "Mexico City", "New York", "Ottawa", "Madrid", "Sidney"],
}; 
console.log(airBnb); 
console.log(airBnb.isFree); 
console.log(airBnb.people); 
console.log(airBnb["countries"]); 
console.log(airBnb.cities[0]); 

console.groupEnd(); 