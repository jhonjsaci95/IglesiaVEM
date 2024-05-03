// Espera 3 segundos y luego desplázate a la sección con el id "seccion1"
setTimeout(function () {
    var seccion = document.getElementById("seccion1");
    seccion.scrollIntoView({ behavior: 'smooth' });
}, 3000); // 3000 milisegundos = 3 segundos