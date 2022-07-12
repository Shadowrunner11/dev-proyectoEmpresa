const menu = document.querySelector('.hamburger');

const activeMenu = () => {
    menu.classList.toggle('active')
}
menu.addEventListener('click', activeMenu)