let carrito = []

const contenedorCards = document.querySelector(".cards-container")

let productosEnOferta = productosAmaranta.filter( productosEnOferta => productosEnOferta.novedad === true )
console.log(productosEnOferta);

const productosAHtml = ( array ) => {
    const arrayReducido = array.reduce( (acc, element ) => {
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
                <button class="insertAlCarrito" id="button-${element.id}">Añadir al carrito</button>     
                </div>
            </div>
        `
    }, "")
    return arrayReducido
}

contenedorCards.innerHTML = productosAHtml(productosAmaranta)

const suboAlLs = ( clave, valor ) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}

const pushearAArray = ( array, value ) => {
    array.push(value)
}

const buscarProducto = ( producto, array) => {
    return array.find( product => {
        return product.id === Number(producto)
    })
}

const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

const subirAlCarrito = () => {
    const botonComprar = document.querySelectorAll(".insertAlCarrito")   
    botonComprar.forEach( btn => {
        btn.onclick = () => {     
            const recortarId = btn.id.slice(7) 
            const producto = buscarProducto(recortarId, productosAmaranta)
            pushearAArray(carrito, producto)
            suboAlLs("carrito", carrito)           
        }
    })
}

subirAlCarrito()

const carritoActualizado = obtenerDelLs("carrito") || []
carrito = carritoActualizado


