'use strict';

const linksStop = document.querySelectorAll('.footer-links__link');
linksStop.forEach(link => {
	link.addEventListener('click',
		(event) => {
			event.preventDefault();
			link.classList.add('link-stop');
		});
});