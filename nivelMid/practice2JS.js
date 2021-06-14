let students = [{
    name: "Fausto Medel", 
    email: "fausto@gmail.com", 
    matter: "Math 4"
}, {
    name: "Rodrigo Velázquez", 
    email: "rodrigo@gmail.com", 
    matter: "Physical 2"
}, {
    name: "Alejandro Morales", 
    email: "alex@gmail.com", 
    matter: "History 1"
}]; 
//let student = []; 

for(student in students) {

    let data = students[student]; 
    let name = data["name"]; 
    let email = data["email"]; 
    let matter = data["matter"]; 

    let htmlCode = ` 
    <section class="grid-container">
        <div class="grid-item names">${name}</div>
        <div class="grid-item emails">${email}</div>
        <div class="grid-item matters">${matter}</div>
        <div class="grid-item week">
            <select name="" id="" class="week-select">
            <option value="1">Week One</option>
            <option value="2">Week Two</option>
            </select>
        </div>
    </section> `; 
    
    document.querySelector(`.grid-container`).innerHTML += htmlCode; 
}