const formStarter = document.querySelector('.form__starter');
const formContent = document.querySelector('.form__content');
const formTitle = document.querySelector('.form__title');

const formTextFake = document.querySelector('.form__text-fake');
const formText = document.querySelector('.form__text');

// Показать форму добавления задачи
formStarter.onclick = (event) => {
	event.stopPropagation();
	formStarter.hidden = 'true';
	formContent.removeAttribute('hidden');
	formTitle.focus();
};

formContent.onclick = (event) => {
	event.stopPropagation();
};

// Переход от заголовка к тексту задачи
formTitle.addEventListener('keyup', (event) => {
	if (event.key === 'Enter') {
		// event.preventDefault();
		formText.focus();
	}
});

// Скрытие / Показ лейбла для поля с тектом
formText.addEventListener('keyup', (event) => {
	if (formText.textContent !== '') {
		formTextFake.textContent = '';
	} else {
		formTextFake.textContent = 'Текст заметки...';
	}
});

document.addEventListener('click', ()=> {
	formStarter.removeAttribute('hidden');
	formContent.hidden = true;
})