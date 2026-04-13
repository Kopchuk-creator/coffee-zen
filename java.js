const menu = document.querySelector('#mobile_menu');
const navLinks = document.querySelector('.nav_list');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menu.classList.toggle('active');
});