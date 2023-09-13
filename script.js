toggle = document.querySelector('#toggle')
mobileNav = document.querySelector('.mobile-nav')
closeBtn = document.querySelector('#closeBtn')

toggle.addEventListener('click', () => {
    mobileNav.classList.remove('hidden')
    closeBtn.classList.remove('hidden')
    toggle.classList.add('hidden')
})
closeBtn.addEventListener('click', () => {
    mobileNav.classList.add('hidden')
    closeBtn.classList.add('hidden')
    toggle.classList.remove('hidden')
})