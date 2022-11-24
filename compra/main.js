const toggle = document.querySelector('.toggle')
const links = document.querySelector('.links')
const VerCarrito = document.querySelector('.ver-carrito')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('rotate')
    links.classList.toggle('active')
})