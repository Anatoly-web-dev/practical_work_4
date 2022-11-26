'use strict';

// При вводе текста в ПОЛЕ ВВОДА (input) текст должен дублироваться в ТЕКСТОВЫЙ БЛОК
// При нажатии КНОПКИ текст из INPUT, должен быть выведен В КОНСОЛИ, а ПОЛЕ ВВОДА и ТЕКСТОВЫЙ БЛОК быть ОЧИЩЕНЫ.
// 2 СОБЫТИЯ!!! нажатие клавиши на клавиатуре для поля ввода и нажатие левой клавиши мыши для кнопки.

const inputField = document.querySelector('.form__input-field');
const button = document.querySelector('.form__button');
const textField = document.querySelector('.form__textarea');

// получаем текст из инпута и передаем в поле ввода
function makeTextDouble() {
	textField.textContent = inputField.value;
}

// создаем событие, при вводе текста в инпут дублируется текст в текстовый блок
inputField.addEventListener('input', makeTextDouble);

// выводит в консоль текст из инпута
function showInputValue() {
	console.log(inputField.value);
}

// очищает инпут и текстовый блок
function clearFields() {
	inputField.value = '';
	textField.textContent = '';
}

// создаем событие при клике на кнопку :
button.addEventListener('click', (event) => {
	event.preventDefault();	// сбрасываем поведение кнопки отправки формы
	showInputValue();			// выводим в консоль значение инпута
	clearFields();				// очищаем инпут и текстовый блок
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