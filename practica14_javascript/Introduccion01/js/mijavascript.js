// document.write("Hola Mundo");
// console.log("Hola Mundo desde la consola");
// console.error("Error en la consola");

// //Variables
// /* tipo - tipado debil*/
// let x;
// var y;
// const z = 10;
// let pr = false;
// console.log(x);
// console.log(typeof (y));
// if (pr) {
//     console.log("Es verdadero");
// } else {
//     console.log("Es falso");
// }

// let num = 1234123451254125124213;
// BigInt(num);
// console.log(num);

// let cadena = "Hola Mundo";
// console.log(cadena);
// let cadena2 = "otra cadnea " + z;
// console.log(cadena2);

// // interpolacion de variables
// let cadena3 = `cadena3
// puedo poner saltos de linea ${z} ${num}`;
// console.log(cadena3);
// //Simbolos y objetos
// let id = Symbol("id");
// console.log(id);
// //objeto
// let usuario = { nombre: "Juan", edad: 30, [id]: 123 };
// console.log(usuario.nombre + " " + usuario[id]);

// let variablenulla = null;

// const PI = 3.1416;
// console.log(PI);

// let arreglo = [1, 2, 3, 4, 5];
// arreglo.push(6);//agrega al final
// arreglo.unshift(0); //agrega al inicio
// arreglo.pop(); //elimina el ultimo
// arreglo.shift(); //elimina el primero
// arreglo.splice(1, 1); //elimina un elemento en la posicion 1
// arreglo.splice(1, 0, 10); //agrega un elemento en la posicion 1
// arreglo.splice(1, 1, 10); //reemplaza un elemento en la posicion 1
// arreglo.indexOf(3); //busca la posicion del elemento
// console.log(arreglo);

// let objeto = { nombre: "Juan", edad: 30, id: 123 };
// console.log(Object.keys(objeto));
// console.log(Object.values(objeto));
// console.log(Object.entries(objeto));


// // let nombre = prompt("Ingrese su nombre", "Juan");
// // alert("Hola " + nombre);

// //otra clase
// let variable = "valor";
// const CONSTANTE = "VALOR";
// function miFunction(a = 2) { //valor por defecto
//     return 2 * a;
// }
// console.log(miFunction(6));
// //funcion flecha
// const funcionFlecha = (a = 10) => {
//     return 2 * a;
// }
// console.log(funcionFlecha(4));

// //Destructiring - destructurar
// //Objetos
// const usuarios = {
//     nombre: "Martin",
//     apellido: "Nevarez"
// };

// // let nombre = usuarios.nombre;
// // let apellido = usuarios.apellido;
// let { nombre, apellido } = usuarios;
// console.log(nombre + " " + apellido);

// //Otro objeto
// const usuarios2 = {
//     nombre: "Martin",
//     apellido: "Nevarez",
//     redes: {
//         sociales: {
//             facebook: "martin.nevarez",
//             twitter: "martin_nevarez"
//         }
//     }
// };

// const face = usuarios2.redes.sociales.facebook;
// const { twitter } = usuarios2.redes.sociales;
// console.log(face, twitter);

// const { redes: { sociales: { facebook } } } = usuarios2;
// console.log(facebook);

// //Arreglos

// const arregloNombres = ["Martin", "Juan", "Pedro"];
// // let nombre1 = arregloNombres[0];
// // let nombre2 = arregloNombres[1];
// const [nombre1, , nombre3] = arregloNombres;
// console.log(nombre1, nombre3);

// //combinaciones - objetos
// const usuarios3 = {
//     direccion: "conocida",
//     numerocasa: "300"
// }

// const nuevoObjeto = { usuarios2, usuarios3 };
// console.log(nuevoObjeto);
// const nuevoObjeto2 = { ...usuarios2, ...usuarios3 }; //con esto hago propagacion de objetos y se combinan
// console.log(nuevoObjeto2);

// //Spread Operator
// const arreglo1 = ["Martin", "Juan", "Pedro"];
// const arreglo2 = ["Carlos", "Maria", "Laura"];
// const arreglo3 = [...arreglo1, ...arreglo2];
// console.log(arreglo3);

// const otroNuevoArreglo = arreglo3.concat(arreglo1, arreglo2);
// console.log(otroNuevoArreglo);

// //forEach, for, map, reduce y filter para manejar arreglos
// // for (let i = 0; i < otroNuevoArreglo.length; i++) {
// //     console.log(otroNuevoArreglo[i]);
// // }

// otroNuevoArreglo.forEach(function (nombre) {
//     console.log(nombre);
// });

// // otroNuevoArreglo.forEach((elemento, i) => {
// //     console.log(elemento + " " + i);
// // });

// let numeros = [1, 2, 3, 4, 5];
// let suma = 0;
// numeros.forEach((numero) => {
//     suma += numero;
// });
// console.log(suma);

// //Map
// let precios = [20, 30, 40, 50];
// const conversion = 0.85;
// let preciosnuevos = precios.map((precio) => {
//     return precio * conversion;
// });
// console.log(preciosnuevos);

// //Filter
// let edades = [12, 20, 30, 40, 50];
// let mayores = edades.filter((edad) => {
//     return edad > 18;
// });
// console.log(mayores);

// //Reduce
// let sumaprecios = precios.reduce((suma, precio) => {
//     return suma + precio;
// }, 0);
// console.log(sumaprecios);

// //Clases
// class Animal {
//     constructor(nombre) {
//         this.nombre = nombre;
//     }

//     habla() {
//         console.log(this.nombre + " hace un ruido");
//     }
// }

// //Herencia
// class Perro extends Animal {
//     habla() {
//         console.log(this.nombre + " ladra");
//     }
// }

// const perro = new Perro("Firulais");
// perro.habla();


// //Metodos estaticos
// class Calculadora {
//     static sumar(a, b) {
//         return a + b;
//     }
// }

// console.log(Calculadora.sumar(2, 3));

// //Promesas
// const promesa = new Promise((resolve, reject) => {
//     const exito = true;
//     if (exito) {
//         resolve("La operacion fue exitosa");
//     } else {
//         reject("Hubo un error");
//     }
// });

// promesa.then((mensaje) => {
//     console.log(mensaje);
// }).catch((error) => {
//     console.log(error);
// });

/*
CLASE 24 Y 25 DE OCTUBRE
*/
//Clousures, es una funcion que guarda un conjunto de funciones encapsuladas
const variablefuncion = function () {
    return "hola";
};

console.log(variablefuncion());

const saludo = "!hola";
function exdterna() {
    const persona = ' Martin ';
    function interna() {
        const fin = 'Nevarez!';
        return saludo + persona + fin;
    }
    return interna;
}

console.log(exdterna()());

const clousure = exdterna();

console.log(clousure());

//Otro ejemplo
const miContador = (function () { //clase pero no es clase
    let contador = 0;
    function incrementar() {
        return ++contador;
    }
    function decrementar() {
        return --contador;
    }
    function valor() {
        return contador;
    }
    return {
        incrementar,
        decrementar,
        valor
    }
})(); // ejectura la funcion principal
console.log(miContador);
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
miContador.decrementar();
console.log(miContador.valor());

//Promesas
//Paginas dinamicas <---- Acceso a datos (internos, externos)
// kb <---- externas, internas ----> MB o  GB
let datos = [
    {
        id: 1,
        materia: 'PW',
        semestres: 6
    },
    {
        id: 2,
        materia: 'POO',
        semestres: 1
    },
    {
        id: 3,
        materia: 'Estructura de datos',
        semestres: 2
    }
]
//console.log(datos);
//arrow function

//funcion que simula obtener datos de un servidor remoto

// una promesa es codigo que se ve a ejecutar , no inmediatamente y va a esperar a respuesta del servidor
datos = [];
const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error("No hay datos"));
        }
        setTimeout(() => {
            resolve(datos);
        }, 1500); //milisgegundos
    })
}

async function procesadorDatos() {
    try {
        const misDatos = await obtenerDatos();
        console.log(misDatos);
    } catch (err) {
        console.log(err.message);
    }
}

procesadorDatos();
//console.log(obtenerDatos());