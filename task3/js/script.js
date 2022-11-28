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

/* 
Смена цвета происходит при клике на любой из них.          									+++
Каждый круг может принимать только один из цветов.												+++ 
При этом, когда один из кругов становится «цветным», остальные становятся черными.  +++
Порядок смены цвета тот же, что и в изначальном задании.       							+++
*/


// получаем коллекцию нужных нам элементов
const trafficLightElements = document.querySelectorAll('.task_2__item');
// присваиваем каждому элементу коллекции константу (Деструктурирующее присваивание)
const [greenCircle, yellowCircle, redCircle] = trafficLightElements;

// создаем функции меняющие цвета у элементов на нужные
function makeColorGreen() {
	greenCircle.style.background = 'green';
	yellowCircle.style.background = 'black';
	redCircle.style.background = 'black';
}

function makeColorYellow() {
	greenCircle.style.background = 'black';
	yellowCircle.style.background = 'yellow';
	redCircle.style.background = 'black';
}

function makeColorRed() {
	greenCircle.style.background = 'black';
	yellowCircle.style.background = 'black';
	redCircle.style.background = 'red';
}

// перебираем коллекцию методом forEach,
trafficLightElements.forEach(element =>
	element.addEventListener('click', // каждому элементу коллекции назначаем событие
		() => {
			// функции смены цветов у элементов выполняются с небольшой задержкой
			setTimeout(makeColorGreen, 300);
			setTimeout(makeColorYellow, 1000);
			setTimeout(makeColorRed, 1500);
		},
		// { once: true } // - обработчик будет автоматически удалён после выполнения 
		// (расскомментировать код выше если нужно, чтобы событие для каждого элемента произошло всего 1 раз)
	));


// ------------Альтернативный вариант выполнения улучшенного светофора ---------- 
// =================== расскоменировать, закомментировать решение выше =============

/*

// получаем коллекцию нужных нам элементов
const trafficLightElements2 = document.querySelectorAll('.task_2__item');
// присваиваем каждому элементу коллекции константу (Деструктурирующее присваивание)
const [greenCircle2, yellowCircle2, redCircle2] = trafficLightElements2;
// получаем родительский элемент нашего светофора
const parentElement = document.querySelector('.task_2__item-container');

// создаем функции меняющие цвета у элементов на нужные
function makeColorGreen() {
	greenCircle2.style.background = 'green';
	yellowCircle2.style.background = 'black';
	redCircle2.style.background = 'black';
}

function makeColorYellow() {
	greenCircle2.style.background = 'black';
	yellowCircle2.style.background = 'yellow';
	redCircle2.style.background = 'black';
}

function makeColorRed() {
	greenCircle2.style.background = 'black';
	yellowCircle2.style.background = 'black';
	redCircle2.style.background = 'red';
}

// создаем событие у родительского элемента
parentElement.addEventListener('click', () => {
	setTimeout(makeColorGreen, 300);
	setTimeout(makeColorYellow, 1000);
	setTimeout(makeColorRed, 1500);
});

*/

// или создаем событие у всего документа и при определенном условии выполняем наш код
// document.addEventListener('click',
//	(event) => {
//		if (event.target.parentElement === parentElement) {
//			setTimeout(makeColorGreen, 300);
//			setTimeout(makeColorYellow, 1000);
//			setTimeout(makeColorRed, 1500);
//		} else {
//			console.log(event);
//			console.log('Что то пошло не так :(');
//		}
//	});













/*отменяет при клике переход у ссылок в футере	*/
const linksStop = document.querySelectorAll('.footer-links__link');
linksStop.forEach(link => {
	link.addEventListener('click',
		(event) => {
			event.preventDefault();
			link.classList.add('link-stop');
		});
});