document.getElementById('mobile-menu').addEventListener('click', function () {
    var navList = document.getElementById('nav-list');
    if (navList.className === 'nav-list') {
        navList.className += ' active';
    } else {
        navList.className = 'nav-list';
    }
    this.classList.toggle('active');
});
