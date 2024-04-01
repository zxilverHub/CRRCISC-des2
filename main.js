const links = document.querySelector('header nav ul'),
    menu = document.querySelector('header nav .hamburger'),
    li = links.querySelectorAll('li'),
    overlay = document.querySelector('header .mobile-overlay')

menu.addEventListener('click', ()=> {
    toggles()
})

overlay.addEventListener('click', ()=> {
    toggles()
})

window.addEventListener('scroll', ()=> {
    document.querySelector('header nav').classList.toggle('scrolled', window.scrollY > 0)
})

li.forEach((l)=> {
    l.addEventListener('click', ()=> {
        overlay.classList.add('none');
    })
})


function toggles() {
    links.classList.toggle('expand');
    menu.querySelector('img').src = links.classList.contains('expand')? './Assets/CLose.svg' : './Assets/Hamburger.svg'
    if(links.classList.contains('expand'))
        overlay.classList.remove('none')
    else overlay.classList.add('none')
}