'use strict';
console.log('Привет, мир!');




//отменяет при клике переход у ссылок в футере
const linksStop = document.querySelectorAll('.footer-links__link');
linksStop.forEach(link => {
	link.addEventListener('click',
		(event) => {
			event.preventDefault();
			link.classList.add('link-stop');
		})
});