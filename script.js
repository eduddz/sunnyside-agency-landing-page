const menuImg = document.querySelector('.menu-img')

menuImg.addEventListener('click', () => {
    let ul = document.querySelector('nav ul')

    if (ul.className === 'menu') {
        ul.classList.remove('menu')
        ul.classList.add('menuActive')
    } else {
        ul.classList.remove('menuActive')
        ul.classList.add('menu')
    }
})