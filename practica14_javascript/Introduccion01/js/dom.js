let titulo = document.getElementById('titulo');
console.log(titulo);

let principal = document.querySelector('.principal');
console.log(principal);

let lista = document.querySelectorAll('ul.lista > li');
console.log(lista);

titulo.innerText = "Estructurando el dom";
titulo.innerHTML = "<em>Estructurando el dom</em>";

let foto = document.querySelector('img');
foto.setAttribute("src", "img/logo_javascript2.png");
//cambia una clase dentro del mismo script desde el dom de css
foto.classList.add('img_cambio');

principal.style.backgroundColor = "#FFCC00";
//elimina un elemento del dom
let extra = document.querySelector('.extra');
document.body.removeChild(extra);

//agrega un elemento al dom
let nuevoarticle = document.createElement('article');
nuevoarticle.innerText = "Nuevo articulo";
nuevoarticle.style.color = "whie";
nuevoarticle.style.backgroundColor = "purple";
nuevoarticle.style.padding = "20px";
document.body.appendChild(nuevoarticle);

//Eventos
let boton = document.querySelector('button');
// boton.addEventListener('click', () => {
//     alert('Hola mundo');
// });

muestramensaje = (mensaje) => {
    alert(mensaje);
}

boton.addEventListener('click', muestramensaje.bind(null, "hola"));