// Находим элементы на странице
const addNoteForm = document.querySelector('#addNoteForm');
const noteTitleInput = document.querySelector('#noteTitleInput');
const noteTextInput = document.querySelector('#noteTextInput');
const cardsWrapper = document.querySelector('#cardsWrapper');


// Массив с заметками
let notes = [];

// Работа с localStorage.
// Проверка LS на старте
if (localStorage.getItem('notes')) {
	notes = JSON.parse(localStorage.getItem('notes'));
}

console.log(notes);

// Массив с заметками
// const notes = [
// 	{
// 		id: 1,
// 		title: 'Основы JS',
// 		text: 'Lorem ipsum dolor sit amet...',
// 	},
// 	{
// 		id: 2,
// 		title: 'DOM дерево',
// 		text: 'Lorem ipsum dolor sit amet...',
// 	},
// 	{
// 		id: 3,
// 		title: 'События в JavaScript',
// 		text: 'Lorem ipsum dolor sit amet...',
// 	},
// ];

// Слушаем отправку формы
addNoteForm.addEventListener('submit', (event) => {
	event.preventDefault();

	// Добавляем текст заметки в массив с заметками
	let id = 1;
	if (notes.length > 0) {
		id = notes[notes.length - 1]['id'] + 1;
	}

	notes.push({
		id: id,
		title: noteTitleInput.value,
		text: noteTextInput.innerHTML,
	});

	localStorage.setItem('notes', JSON.stringify(notes));

	// Очищаем поле ввода, сбрасывая всю форму
	addNoteForm.reset();
	noteTextInput.innerHTML = '';
	formTextFake.textContent = 'Текст заметки...';
	noteTitleInput.focus();

	// Обращаемся к последнему элементу массива
	// Выводим последнюю заметку на страницу
	const lastNote = notes[notes.length - 1];
	const html = `<section class="card">
					<div class="card-body">
						<h5 class="card-title">${lastNote.title}</h5>
						<p class="card-text">${lastNote.text}</p>
						<button data-action="delete" data-id="${lastNote.id}" class="btn btn-dark btn-sm">Удалить</button>
					</div>
				</section>`;
	cardsWrapper.insertAdjacentHTML('afterbegin', html);
});

// Отображаем заметки на основе списка заметок
notes.forEach((item, index) => {
	const html = `<section class="card">
					<div class="card-body">
					 	<h5 class="card-title">${item.title}</h5>
						<p class="card-text">${item.text}</p>
						<button data-action="delete" data-id="${item.id}" class="btn btn-dark btn-sm">Удалить</button>
					</div>
				</section>`;
	cardsWrapper.insertAdjacentHTML('afterbegin', html);
});

// Удаление задач
document.addEventListener('click', (event)=> {
	if (event.target.dataset.action === 'delete'){
		const id = event.target.dataset.id;

		const index = notes.findIndex((item)=>{
			return item.id == id
		})

		notes.splice(index, 1);
		localStorage.setItem('notes', JSON.stringify(notes));
		event.target.closest('.card').remove();
	}
})
