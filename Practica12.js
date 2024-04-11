document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var asistencia = document.getElementById('asistencia').value;

    if (nombre === '' || email === '' || telefono === '' || asistencia === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduzca una dirección de correo electrónico válida.');
        return;
    }

    var telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)) {
        alert('Por favor, introduzca un número de teléfono válido (10 dígitos sin espacios ni guiones).');
        return;
    }

    alert('Registro exitoso. ¡Gracias por registrarte!');
});