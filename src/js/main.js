const nav = document.querySelector('.burger-nav')
const navBtn = document.querySelector('.burger-btn')
const burgerItems = document.querySelectorAll('.burger-item')
const headerText = document.querySelector('.header-text')
const choose = document.querySelectorAll('.choose')
const top = document.querySelector('.top')

const handleNav = () => {
	nav.classList.toggle('active')

	burgerItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('active')
		})
	})

	handleNavAnimation()
}

const handleNavAnimation = () => {
	let delayTime = 0

	burgerItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

AOS.init({
	startEvent: 'DOMContentLoaded',
	once: true,
})

navBtn.addEventListener('click', handleNav)
