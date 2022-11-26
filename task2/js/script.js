'use strict';

const consoleLogCommand = document.querySelector('#consoleLog');
consoleLogCommand.addEventListener('click', () => {
	alert('Метод для вывода сообщений в браузерную консоль');
});

const alertCommand = document.querySelector('#alert');
alertCommand.addEventListener('click', () => {
	alert('Метод, который показывает диалоговое окно с сообщением и кнопкой OK');
});

const promptCommand = document.querySelector('#prompt');
promptCommand.addEventListener('click', () => {
	alert('Метод, который отображает диалоговое окно с запросом на ввод текста и кнопками OK/Отмена');
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

