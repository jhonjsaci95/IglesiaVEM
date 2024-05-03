document.getElementById('mobile-menu').addEventListener('click', function () {
    var navList = document.getElementById('nav-list');
    if (navList.classList.contains('active')) {
        // Si el menú está activo, lo contrae después de 3 segundos
        setTimeout(function () {
            navList.classList.remove('active');
            document.getElementById('mobile-menu').classList.remove('active');
        }, 5000); // Cambia este valor a la cantidad de segundos que desees
    } else {
        // Si el menú no está activo, lo activa
        navList.classList.add('active');
        this.classList.add('active');
    }
});
