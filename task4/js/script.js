'use strict';

let link = document.querySelector('.task__link');

function addLinkContent() {
	// запрашиваем значение у пользователя
	link.textContent = prompt('Введите текст ссылки', 'Ссылка');
	// добавляем атрибут title (описание). Текст описание == введенный пользователем текст
	link.setAttribute('title', `${link.textContent}`);
	// для выполнения разных ветвей кода, в зависимости от введенных данных используем if .. else
	if (link.textContent === '' || link.textContent === null) {
		return link.textContent = 'Noname';
	} else if (link.textContent.length > 35) {
		return link.textContent = link.textContent.slice(0, 35) + '...';
	} else {
		return link.textContent;
	}
}

link.addEventListener('click', (event) => {
	event.preventDefault();
	addLinkContent();
});























//отменяет при клике переход у ссылок в футере
const linksStop = document.querySelectorAll('.footer-links__link');
linksStop.forEach(link => {
	link.addEventListener('click',
		(event) => {
			event.preventDefault();
			link.classList.add('link-stop');
		})
});