//Haz tú validación en javascript acá
let nombre = document.getElementById('#nombre');
let email = document.getElementById('#email');
let asunto = document.getElementById('#asunto');
let mensaje = document.getElementById('#mensaje');
let boton = document.getElementById('boton');

nombre.addEventListener("input", validacion);
email.addEventListener("input", validacion);
asunto.addEventListener("input", validacion);
mensaje.addEventListener("input", validacion);

function habilitarBoton(){
    if (nombre.value.trim() !== "" && email.value.trim() !== "" && asunto.value.trim() !== "" && mensaje.value.trim() !== ""){
        boton.disabled = false;
    }else{
        boton.disabled = true;
    }
}

function validacion() {

    let name = document.getElementById("nombre").value.trim();
    if (!name) {
        alert("El campo nombre esta vacio, Por favor, Ingrese su nombre.");
        event.preventDefault();
    } else if (name.length > 50) {
        alert("Error: El campo Nombre debe contener máximo 50 caracteres.");
        event.preventDefault();
    }

    let email = document.getElementById("email").value.trim();
    if (!email) {
        alert("El campo Email esta vacio, Por favor, Ingrese su Email.");
        event.preventDefault();
    }

    let asunto = document.getElementById("asunto").value.trim();
    if (!asunto) {
        alert("El campo Asunto esta vacio, Por favor, Ingrese su mensaje.");
        event.preventDefault();
    } else if (asunto.length > 50) {
        alert("Error: El campo Asunto debe contener máximo 50 caracteres.");
        event.preventDefault();
    }

    let mensaje = document.getElementById("mensaje").value.trim();
    if (!mensaje) {
        alert("El campo Mensaje esta vacio, Por favor, Ingrese su Mensaje.");
        event.preventDefault();
    } else if (mensaje.length > 300) {
        alert("Error: El campo Mensaje debe contener máximo 300 caracteres.");
        event.preventDefault();
    }
}
