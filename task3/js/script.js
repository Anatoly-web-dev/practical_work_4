'use strict';
// ---------------------------- Задача 1 -----------------------------------
const trafficLightEl = document.querySelector('.task_1__item');

function makeGreen() {
	trafficLightEl.style.background = 'green';
	trafficLightEl.removeEventListener('click', makeGreen);
	trafficLightEl.addEventListener('click', makeYellow);
}

function makeYellow() {
	trafficLightEl.style.background = 'yellow';
	trafficLightEl.removeEventListener('click', makeYellow);
	trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
	trafficLightEl.style.background = 'red';
	trafficLightEl.removeEventListener('click', makeRed);
	trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen);

// ---------------------------- Задача 2 -----------------------------------

/* смена цвета происходит при клике на любой из них. 
Каждый круг может принимать только один из цветов.
При этом, когда один из кругов становится «цветным», остальные становятся черными. 
Порядок смены цвета тот же, что и в изначальном задании. 
*/
const trafficLightElements = document.querySelectorAll('.task_2__item');

























//отменяет при клике переход у ссылок в футере
const linksStop = document.querySelectorAll('.footer-links__link');
linksStop.forEach(link => {
	link.addEventListener('click',
		(event) => {
			event.preventDefault();
			link.classList.add('link-stop');
		})
});
