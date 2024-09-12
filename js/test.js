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
    }
})

//llamo al metodo inscribir del alumno
alumno.inscribir()

//keys, claves
//values, valores
//tanto keys como values devuelven un array
console.log("Keys de alumnos " + Object.keys(alumno))
console.log("Values de alumnos " + Object.values(alumno))

// entries: par keys/value
console.log("Entries: " + Object.entries(alumno))
