let elemento = document.querySelector("#elemento")
let agregar = document.querySelector("#agregar")
let lista = document.querySelector("#listadinamica")

elemento.focus()

agregar.addEventListener("click", () => {
    if (elemento.value.trim() != "") {
        let nuevoElemento = document.createElement("li")
        nuevoElemento.innerText = elemento.value
        lista.appendChild(nuevoElemento)
        elemento.value = ""
        elemento.focus()
    }
});

elemento.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        agregar.click()
    }
});

//Arrastrar y soltar
let arrastra = document.querySelector("#arrastrar")
let soltar = document.querySelector("#zonasoltar")

arrastra.addEventListener("dragstart", function (e) {
    this.style.border = "5px solid red"
});

soltar.addEventListener("dragover", function (e) {
    e.preventDefault()
});

soltar.addEventListener("drop", function (e) {
    arrastra.style.border = "none"
    arrastra.style.display = "block"
    this.appendChild(arrastra)
});