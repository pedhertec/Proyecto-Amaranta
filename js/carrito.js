const InfoDesdeLocalS = (key) => {
    return JSON.parse(localStorage.getItem("carrito"))
}

let carrito = InfoDesdeLocalS("carrito")

const cardsAHtml = (array) => {
    const arrayReducido = array.reduce((acc, element) => {
        return acc + `
        <div class="cardsOfertas">
            <div class="cardOfertas" id="card-${element.id}">                   
            <div class="tituloCard">
                ${element.producto}
            </div>
            <div class="cuerpoCard">
                <img src=${element.img[0]} alt=${element.producto}>
                <p>
                ${element.description}
                </p>        
                <p>
                $ ${element.precio}
                </p>    
            </div>
            <button class="boton-carrito" id="borrar-${element.id}">Quitar</button>     
            </div>
            </div>
        `
    }, "")
    return arrayReducido
}

const containerCarrito = document.querySelector(".cards-container")
containerCarrito.innerHTML = cardsAHtml(InfoDesdeLocalS("carrito"))

const editarCarrito = () => {
    const elementCarrito = document.querySelectorAll(".cardOfertas")
    for (let i = 0; i < elementCarrito.length; i++) {
        elementCarrito[i].onclick = () => {
            const recortar = elementCarrito[i].id.slice(5)
            const filtrar = carrito.filter((filtrado, index) => {
                return filtrado.id != recortar
            })
            carrito = filtrar
            localStorage.setItem("carrito", JSON.stringify(carrito))
            containerCarrito.innerHTML = cardsAHtml(carrito)
            editarCarrito()
        }
    }
}

editarCarrito()

console.log(carrito);


const borrandoCarrito = () => {
    const borrarCarrito = document.querySelectorAll(".bnt-container")
    for (let i = 0; i < borrarCarrito.length; i++) {
    borrarCarrito[i].onclick = () => {
        const recortar = borrarCarrito[i].id.slice(0)
        const filtrar = carrito.filter((filtrado, index) => {
            return filtrado.id === recortar
        })
        carrito = filtrar
        localStorage.setItem("carrito", JSON.stringify(carrito))
        containerCarrito.innerHTML = cardsAHtml(carrito)
        borrandoCarrito()
    }
}
}
borrandoCarrito()
