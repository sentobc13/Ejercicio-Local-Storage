// 1- Traer los inputs y el botón
let inputUserNombre = document.getElementById("nombre");
let inputUserEmail = document.getElementById("correo");
let inputUserMensaje = document.getElementById("mensaje");
console.log(inputUserNombre);
console.log(inputUserEmail);
console.log(inputUserMensaje);

let btn = document.getElementById("btn")
console.log(btn);

//2-Crea la función (con console.log)
function enviarDatos(e) {
    e.preventDefault()


    let userNombreValue = inputUserNombre.value
    let userEmailValue = inputUserEmail.value
    let userMensajeValue = inputUserMensaje.value

    let user = {
        nombre: userNombreValue,
        email: userEmailValue,
        mensaje: userMensajeValue
    }
    //4-Guardar el objeto consoleado en LocalStorage
    localStorage.setItem('user', JSON.stringify(user));


}
//3-Cuando clique el boton se ejecute la función
btn.addEventListener("click", enviarDatos)

let datosLocalStorage = JSON.parse(localStorage.getItem("user"));
console.log(datosLocalStorage);



