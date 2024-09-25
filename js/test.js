//declaracion de la variable
let mensaje 

//asino un valor a la variable
mensaje = "Hola Mundo"

//muestro la variable por consola
console.log(mensaje)

//tipo numbre
let edad=18

//tipo string
let nombreCompleto= "Juan Jose Hernandez"

//tipo booleano
let estudiante= false;

//number
let legajo=45655;

console.log("estudiante " + nombreCompleto)
console.log("es estudiante " + estudiante)
console.log("edad " + edad)
console.log("legajo " + legajo)

//objeto
let persona={
    nombre:"Juan",
    apellido:"Perez", 
    edad:25,
    estudiante: true
}


console.log("persona "+ persona.nombre 
            + " " + persona.apellido 
            + " edad: " + persona.edad 
            + " es estudiante " + persona.estudiante)


//arreglos en javascript
const paises=["Argentina","Chile", "Peru", "Guatemala", "Colombia", "Uruguay"]

console.log("Paises: " + paises[3])

console.log("comparando numeros: ")

let nroSetenta=70;
let letraSetenta="70"

//siempre las comparaciones devuelven V o F
console.log("son == 70 y ´70´: " + (nroSetenta == letraSetenta)) //TRUE, porque coincide valor
console.log("son === 70 y ´70´: " + (nroSetenta === letraSetenta)) //FALSE, porque coinciden valor pero NO el tipo de dato

console.log("son != 70 y ´70´: " + (nroSetenta != letraSetenta)) 
console.log("son !== 70 y ´70´: " + (nroSetenta !== letraSetenta))

let esMayor=(persona.edad > edad) && (persona.nombre.length > nombreCompleto.length)
console.log("es mayor: " + esMayor)

let seCumpleAlMenosUna=(persona.edad > edad) || (persona.nombre.length > nombreCompleto.length)
console.log("se cumple al menos una: " + seCumpleAlMenosUna)

console.log("se cumple al menos una(Negado): " + !seCumpleAlMenosUna)

console.log("se cumple al menos una(Doble Negado): " + !!seCumpleAlMenosUna)

let indumentaria={
    tipo: "remera",
    talle: "s",
    stock: 100,
    color: "rojo",
    marcaPropia: false
}

//agrego una propiedad precio a indumentaria
indumentaria.precio=552200

console.log("Precio indumentaria: " + indumentaria.tipo + " $"+ indumentaria.precio)

//borro una propiedad color de indumentaria
delete indumentaria.color

//al estar borrado color pasa a ser underfined
console.log("color " + indumentaria.color)

let proveedor={
    marca:"Proveedor VVBB",
    compraMinima: 2,
}

//agrego un objeto proveedor a indumentaria
indumentaria.prov = proveedor

console.log("Proveedor indumentaria: " + indumentaria.prov.marca)

//crear objeto con CONSTRUCTOR asi puedo agregar metodos al objeto 
let alumno = new Object({
    nombre:"Maria",
    apellido:"Gonzalez", 
    edad:25,
    inscribir: () => { 
        console.log("Se ha inscripto correctamente")
                    },
    saludar: () => { console.log("Bienvenida Maria Gonzalez")}
})

//llamo al metodo inscribir del alumno
alumno.inscribir()
alumno.saludar()

//keys, claves
//values, valores
//tanto keys como values devuelven un array
console.log("Keys de alumnos " + Object.keys(alumno))
console.log("Values de alumnos " + Object.values(alumno))

// entries: par keys/value
console.log("Entries: " + Object.entries(alumno))

console.log("Keys de indumentaria " + Object.keys(indumentaria));
console.log("Values de indumentaria " + Object.values(indumentaria));
console.log("Pares atributo valor (entrada) de indumentaria " + Object.entries(indumentaria));


// creamos arrays

let provincias=["Santa Fe","San Luis","Chaco","Corrientes","Buenos Aires"]

let asistente=[
        {nombre: "Julia", dni: 21438732},
        {nombre: "Maria", dni: 45256786},
        {nombre: "Pedro", dni: 58503278},
        {nombre: "Luis", dni: 34567543},
        {nombre: "Ana", dni: 23456789}
]

// mostrar array

console.log("La cantidad de Provincias ingresadas son: " + provincias.length)
console.log("la cantidad de Asistentes ingresadas son: " + asistente.length)

console.log(provincias[2]);

// SHIFT eliminar el primer dato
console.log(provincias[0]);
provincias.shift()
console.log(provincias[0]);

// POP eliminar el ultimo dato
console.log(provincias[provincias.length - 1]);
provincias.pop()
console.log(provincias[provincias.length - 1]);

// PUSH agregar al ULTIMO
provincias.unshift("Santa Fe")
console.log(provincias[provincias.length - 1]);

// UNSHIFT agrega como primer elemento
console.log(" primer elemento" + provincias[0])
provincias.unshift("Catamarca")
console.log("Agrege Primer elemento" + provincias[0])

console.log(Object.values(provincias))

console.log(Object.keys(provincias))

asistente.unshift({nombre:"Teresa", dni:67281935})
asistente.push({nombre:"Mario", dni:65973215})

console.log(Object.values(asistente));

console.log("Buscando elementos en array con includes")
console.log("Hay alguien llamada Ana como asistente") + asistente.includes({nombre: "Ana", dni: 23456789})

console.log("esta Catamarca " + provincias.includes("Catamarca"))

console.log("Buscando elementos en array con indexOF")
console.log("El indice de Ana es: " + 
    asistente.indexOf({nombre: "Ana", dni: 23456789,}))

console.log("el index o posicion de Chaco es: " + provincias.indexOf("Chaco"))


//Comienza con FUNCTION nombreFuncion (parametros){instrucciones}
function sumar (nro1, nro2){
    return nro1 + nro2;
}

//Llama a la funcion y se ejecuta con su nombre
console.log("sumar funcion " + sumar(5,10));


//Funciones anonimas (No tienen nombre) y el resultado
//de la ejecucion se guarda en la variable
const resultado = function (nro1, nro2) { return nro1+nro2; };
console.log("resultado " + resultado);



function esMayorEdadMenor90(edad){
    if(edad>18 && edad<90)
        {return true;}
    else{
        return false;}   
}
console.log(" es mayor de edad " + esMayorEdadMenor90(20))
console.log(" es mayor de edad " + esMayorEdadMenor90(91))

function queDiaCobroBeca(ultdni){
    switch(ultdni){
        case 1: console.log("cobra lunes")
        break;
        case 2: console.log("cobra martes")
        break;
        case 3: console.log("cobra miercoles")
        break;
        case 4: console.log("cobra jueves")
        break;
        case 5: console.log("cobra viernes")
        break;
        default: console.log("fecha no especificada")
    }
}

queDiaCobroBeca(2);
queDiaCobroBeca(8);

//
let asistencia = ["Ramiro", "Agustin", "Elian", "Guido", "Denise", "cristian"];

function mostrarAsistenciaDeHoy(asistencia){
    for (let i=0; asistencia.length-1; i++)
    {
        console.log("Hoy asistieron " + asistencia[i]);
    }
}

function cuantosAsistieron(asistencia){
    console.log(asistencia.length);
}

let edades =[18,19,20,22,24,23,23];

function promedioEdades(edades){
    let i=0;
    while(i<edades.length){
        i++;
        console.log( edades[i]);
        sumaEdades = sumaEdades+edades[i];
    }
    console.log("Promedio de edades: " + sumaEdades/sumaEdades.length);
}

mostrarAsistenciaDeHoy(asistencia);
cuantosAsistieron(asistencia);
promedioEdades(edades);

let elementoh2 = document get