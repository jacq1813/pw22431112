const url = 'https://randomuser.me/api/?results=20';

let boton = document.querySelector('button');
let lista = document.querySelector('#lista-personas');
/*
let foto = document.querySelector('#foto');
let nombre = document.querySelector('#nombre');
let direccion = document.querySelector('#direccion');
let telefono = document.querySelector('#telefono');
*/



const agregarPersonasLista = (personas) => {
    lista.classList.add('lista-personas');

    const tarjeta = document.createElement('article');
    tarjeta.classList.add('tarjeta');

    const foto = document.createElement('img');
    foto.setAttribute('src', personas.picture.large);

    const nombre = document.createElement('article');
    nombre.textContent = personas.name.first + ' ' + personas.name.last;

    const direccion = document.createElement('article');
    direccion.textContent = personas.location.street.name + ' ' + personas.location.street.number;

    const telefono = document.createElement('article');
    telefono.textContent = personas.phone;

    tarjeta.appendChild(foto);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(direccion);
    tarjeta.appendChild(telefono);

    lista.appendChild(tarjeta);

}

const obtenerPersona = async () => {
    lista.innerHTML = '';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            respuesta.results.forEach(persona => {
                agregarPersonasLista(persona);
                /*nombre.textContent = persona.name.first + ' ' + persona.name.last;
                foto.setAttribute('src', persona.picture.large);
                direccion.textContent = persona.location.street.name + ' ' + persona.location.street.number;
                telefono.textContent = persona.phone;*/

            });
        })
}

boton.addEventListener('click', () => { obtenerPersona() });

obtenerPersona();