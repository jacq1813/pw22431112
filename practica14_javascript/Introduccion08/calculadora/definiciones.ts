let numeros: number;
numeros = 10;
console.log(numeros);
let arreglosnumeros: number[];
arreglosnumeros = [1, 2, 3, 4, 5, 6];
let arreglostrings = ['cadena', 'string', 'otracadena', '3'];
let decisiones: boolean;
decisiones = true;

let arreglosbooleanos: boolean[];
arreglosbooleanos = [true, false, true, true];


function info(a: number, b: string, c: boolean, d?: number): void {
    console.log(a + " " + b + " " + c + " " + d == undefined ? "-" : d);
}

info(10, 'hola', true);


enum TipoUsuario {
    Administrador,
    Moderador,
    Invitado
}

type Usuario = {
    nombre: string,
    edad: boolean,
    tipo: number,
    readonly ipsecreta: string
}

type UsuarioRedes = Usuario & {
    ip: string,

}

function usuarios(usuarios: UsuarioRedes): void {
    console.log("Nombre: " + usuarios.nombre + " tipo: " + usuarios.tipo + " " + usuarios.edad);
}

console.log(usuarios({ nombre: "Martin", tipo: 1, edad: true, ip: "192.168.4.1", ipsecreta: "ago" }))