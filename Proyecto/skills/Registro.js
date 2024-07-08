// ./skills/Registro.js

import { controlador } from "../controlador/controller.js";
import { post } from "../modelos/post.js";

document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    const form = event.target;
    const URL = "http://localhost:3000/";
    const usuarios = "usuarios";

    const datos = form !== null ? Object.fromEntries(new FormData(form)) : null;

    // Utilizar la función post del modelo
    post(URL + usuarios, datos)
        .then(data => {
            // Mostrar alerta de registro exitoso
            alert('¡Registro exitoso!');

            // Redirigir a la página de inicio de sesión
            window.location.href = './Inicio-Sesion.html';
        })
        .catch(error => {
            console.error('Error al registrar:', error);
        });

    controlador(form, event, usuarios);
});



