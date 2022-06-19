// Меню бургер

const iconMenu = document.querySelector('.header-menu-burger');
if (iconMenu){
    const menuBody = document.querySelector('.header-menu');
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}