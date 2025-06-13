// ########## FORMAS DE IMPIMIR JS
console.log("HOLA PROFE")
//alert("Hola profe")
//document.body.innerHTML = "<h1>HOLA QUERIDO PROFESOR</h1>"
//document.body.innerText = "<h1>HOLA QUERIDO PROFESOR</h1>"


// ########## VARIABLES EN JS => LET, VAR, CONST
const edad =18; //constante que no puede ser alterada
let edad_dos =18; //variable para bloques
var nombre = "Margarita Perez" // variable global

// ######### TIPOS DE DATOS enteros/decimal.string,booleano,arrays
var entero =20;
var decimal =20.5;
var string = "MI NOMBRE ES: MARGARITA"
var boolean = true // false
var array_String = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];


// ########## OPERADORES ARITMETICOS => +,-,/,*,%
var suma = entero + decimal;
var resta = decimal - entero;
var multi = decimal * entero;
var divi = decimal / entero;
var modulo = decimal % 2;


// ########## OPERADORES DE COMPARACION 


// ########## ESTRUCTURAS LOGICAS =>
//Inicializador - comparacion - contador 
var impresion = "";

    for(let i = 0; i < array_String.length; i++){

        console.log(array_String[i])

        impresion = impresion + array_String[i]

    }

 Swal.fire(impresion);
    




//PARA IMPIMIR
//console.log(boolean)
