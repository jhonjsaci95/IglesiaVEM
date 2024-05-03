document.addEventListener('DOMContentLoaded', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    var navList = document.getElementById('nav-list');
    var tiempoCerrarMenu = 10000; // Tiempo en milisegundos (5 segundos)

    mobileMenu.addEventListener('click', function (event) {
        event.stopPropagation(); // Evita que se propague el evento de clic al cuerpo (body)
        if (navList.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Cerrar el menú si se hace clic fuera del menú
    document.addEventListener('click', function (event) {
        var isClickInsideMenu = navList.contains(event.target);
        if (!isClickInsideMenu && navList.classList.contains('active')) {
            closeMenu();
        }
    });

    function openMenu() {
        navList.classList.add('active');
        mobileMenu.classList.add('active');
        // Cerrar el menú después del tiempo especificado
        setTimeout(function () {
            closeMenu();
        }, tiempoCerrarMenu);
    }

    function closeMenu() {
        navList.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});
