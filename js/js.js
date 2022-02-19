document.addEventListener('DOMContentLoaded', () => {
	let data = getImages();
	const url = 'https://react-learnwords-example.herokuapp.com/';
	Promise.resolve(data).then(value => {
		let template = document.getElementById('cardTemplate');
		let cardContainer = document.querySelector('.card-container');
		for (let i = 0; i < 9; i++) {
			let card = template.content.cloneNode(true);
			card.querySelector('img').setAttribute('src', url + value[i].image);
			card.querySelector('img').setAttribute('alt', value[i].textMeaningTranslate);
			card.querySelector('.card').addEventListener('click', modal);
			cardContainer.appendChild(card);
		}
	});

	document.querySelector('#popup .popup__layout').addEventListener('click', function (e) {
		this.parentElement.style.display = 'none';
	});

	document.querySelector('.popup__close').addEventListener('click', function (e) {
		e.preventDefault();
		this.parentElement.parentElement.style.display = 'none';
	});
});

async function getImages() {
	let response = await fetch('https://react-learnwords-example.herokuapp.com/words');
	return await response.json();
}

function modal(e) {
	let popup = document.getElementById('popup'),
		img = this.querySelector('img');

	popup.querySelector('.title').textContent = img.alt;
	popup.querySelector('img').setAttribute('src', img.src);
	popup.style.display = 'block';
}