console.log("Hello"); 

/* let myNumber = 10;  */
/* console.log(typeof(myNumber));  */
/*  */
/* let myString = `Hello World`;  */
/* console.log(typeof(myString));  */
/*  */
//Incremento
/* let x = 1;  */
/* let y = ++x; */
/*  */
/* console.log(x);  */
/* console.log(y);  */
/*  */
//Decremento
/* let z = x++;  */
/*  */
/* console.log(z);  */

          /* Boolean /  Valor y el tipo */ 

 /* !true == false */
 /* !false == true */
/*  !!true == true */

/* true === true =>  true*/
/* true === false =>  false*/
/* true !== false =>  true*/
/* false !== false  =>  false*/

/* 5 > 3 ==> true */
/* 5 < 3 ==> false */
/* 3 >= 3 ==> true */
/* 2 <= 1 ==> false */
/* "e" < "d" ==> false */

// Operador ==> AND (&&)
// Operador ==> OR (||)
// Operador ==> !==

/* let operation = 5 + 5;  */
/*  */
/* if(operation <= 10) { */
/*     console.log("Very Good");  */
/* }else { */
/*     console.log("It´s false ");  */
/* } */
/*  */
/* console.log(operation);  */

// Functions

/* function saludar(nombre) { */
/*     console.log(`Hola, mi nombre es ${nombre}`); */ 
/* } */
/*  */
/* saludar("Julieta");  */
/* saludar("Mauricio");  */
/* saludar("Karelly");  */

function person (name = "Elizabeth") {
   console.log(`Hola soy ${name}`); 
 }

 person(); 
 person("Alma"); 

  // Prototype / class (palabra reservada)
 class Inventario {

      constructor(nombre) {
        this.nombre = nombre; 
        this.articulos = [];  
      }

      getNombre() {
        console.log(this.nombre); 
      }

      add(articulos, cantidad) {
        console.log(this.articulos[articulos] = cantidad); 
      }

      cantidad(articulos) {
        console.log(this.articulos[articulos]); 
      }
  }

  let libros = new Inventario(`Libros`); 
  libros.getNombre() 
  libros.add("Aprendiendo Javascript", 5); 
  libros.cantidad("Aprendiendo Javascript"); 

class Personal {
  constructor(sexo, name) {
   this.sexo = sexo; 
   this.name = name; 
  }
  
  getsexo() {
    console.log(this.sexo); 
  }

  add(name) {
    console.log(name)
  }
}

let personal = new Personal ("Ella es, sexo Femenino"); 
personal.getsexo();
personal.add("Luisa Velázquez"); 

                  // THIS (Objeto == Contexto o referencia)

             // CLOSURES LET / CONST / VAR
// Funciones ejecutándose dentro de otras funciones

const myPlay = (function() {

     let _counter = 0; 

     function incremento() {
       return _counter++; 
     }

     function decremento() {
       return _counter--; 
     }

     function valor() {
       return _counter; 
     } 

     return  {
       incremento, 
       decremento, 
       valor
     }; 

})();

console.log(myPlay.incremento());  
console.log(myPlay.valor()); 
console.log(myPlay.incremento()); 
console.log(myPlay.valor()); 
