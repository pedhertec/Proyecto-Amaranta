// creo constantes para tomar valores ingresados
const formComentarios = document.querySelector("#contact-form")
const inputNombre = document.querySelector("#inputNombre")
const inputMail = document.querySelector("#inputMail")
const inputText = document.querySelector("#inputMensaje")

// creo funcion para las notificaciones y configuro el estilo
const notificar = ( text ) => {
    Toastify({
        text: text,
        duration: 2000,
        close: true,
        style: {
            background: "linear-gradient(to right, #f9e2dc, #c9deda8f)",
            color: "#000000",
        }
    }).showToast()
}

// funcion para controlar los datos ingresados en el form
formComentarios.onsubmit = ( e ) => {
    e.preventDefault()
    for (let i = 0; i < inputMail.value.length; i++) {
        if ( inputMail.value.charAt(i) ==! "@" ) {
            notificar(" Por favor verifique su correo")
            break
        } else if ( inputNombre.value.length <= 2 ){
            notificar(" Por favor verifique su nombre")
            break
        } else if ( inputText.value.length <= 15 ){
            notificar("Su texto debe tener al menos 15 caracteres")
            break
        } else {
            notificar(" ✓ Su mensaje ha sido enviado")
            break
        } 
}
}