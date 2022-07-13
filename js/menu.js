const menu = document.querySelector('.hamburger');

const activeMenu = () => {
    menu.classList.toggle('active')
}
menu.addEventListener('click', activeMenu)

const scrollTop = document.querySelector('#scrollTop')
scrollTop.onclick = () => {
    window.scroll(0, 0)
}