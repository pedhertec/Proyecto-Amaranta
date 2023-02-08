//Declaro las variables para trabajar con LocalStorage

const infoALocalS = ( key, value ) => {
    localStorage.setItem( key, JSON.stringify(value))
}

const InfoDeLocalS = ( key ) => {
    return JSON.parse(localStorage.getItem(key))
}

//Declaro variable para trabajar con el boton modo oscuro o claro
const modoOscuro = document.querySelector("#checkModo")

//Creo un evento para el click del boton
modoOscuro.onclick = () => {
    if ( modoOscuro.checked == true ) {
        infoALocalS("modoOscuro", true )
        validarModoOscuro(InfoDeLocalS("modoOscuro"))
    } else { 
        infoALocalS("modoOscuro", false )
        validarModoOscuro(InfoDeLocalS("modoOscuro"))
    }
}

// Creo variable para validar en la función
const validarModo = InfoDeLocalS("modoOscuro")

// Creo una funcion para las acciones de la página con el modo on o off
const validarModoOscuro = ( validarModo ) => {
    if ( validarModo === false ) {
        const cambiarColorLista = document.querySelectorAll(".navbar-nav a")
        cambiarColorLista.forEach(function(cambiaColor) {
            cambiaColor.style.color = "";
        })
        const cambiarColorIcons = document.querySelectorAll(".imgRedesBlanco")
        cambiarColorIcons.forEach(function(cambiaColor) {
            cambiaColor.style.display = "none";
        })
        document.querySelector(".logobar").style.background = ""
        document.querySelector(".footer-containter").style.background = ""
        document.querySelector(".footer-containter").style.color = ""
        document.querySelector(".imglogo").style.display = ""
        document.querySelector(".imglogoblanco").style.display = "none"
        document.querySelector(".logoIcon").style.display = ""
        document.querySelector(".logoIconBlanco").style.display = "none"
        document.querySelector(".redesBar").style.color = ""
        document.querySelector(".title-containter").style.color = ""
        document.querySelector(".title-containter").style.background = ""
    } else {
        const cambiarColorLista = document.querySelectorAll(".navbar-nav a")
        cambiarColorLista.forEach(function(cambiarColor) {
            cambiarColor.style.color = "#ffffff";
        })
        const cambiarColorIcons = document.querySelectorAll(".imgRedesBlanco")
        cambiarColorIcons.forEach(function(cambiarColor) {
            cambiarColor.style.display = "";
        })
        document.querySelector("#checkModo").checked = true
        document.querySelector(".logobar").style.background = "#000000"
        document.querySelector(".footer-containter").style.color = "#ffffff"
        document.querySelector(".footer-containter").style.background = "#000000"
        document.querySelector(".imglogo").style.display = "none"
        document.querySelector(".imglogoblanco").style.display = ""
        document.querySelector(".logoIcon").style.display = "none"
        document.querySelector(".logoIconBlanco").style.display = ""
        document.querySelector(".redesBar").style.color = "#ffffff"
        document.querySelector(".title-containter").style.color = "#ffffff"
        document.querySelector(".title-containter").style.background = "#000000"
    }
}

validarModoOscuro(InfoDeLocalS("modoOscuro"))
