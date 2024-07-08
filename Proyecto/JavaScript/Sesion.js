import { controlador } from "../controlador/controller";

document.getElementById('formu').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('nombre').value;
    const password = document.getElementById('contra').value;

    fetch('http://localhost:3000/usuarios')
        .then(response => response.json())
        .then(usuariosRegistrados => {
            const usuarioValido = usuariosRegistrados.find(usuario => usuario.regNombre === username && usuario.regContra === password);

            if (usuarioValido) {
                alert("Inicio de sesión exitoso");
                // Redireccionar a otra página después del inicio de sesión exitoso
                window.location.href = 'Guias-Minecraft.html'; 
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/usuarios')
        .then(response => response.json())
        .then(usuariosRegistrados => {
        });
});

const validar = document.querySelector(".enviar")
validar.addEventListener("click", (e) => {
    e.preventDefault();
    controlador(validar,e, "usuarios");
})
