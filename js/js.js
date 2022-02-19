let card = document.querySelectorAll(".card__item");
for (let i = 0; i < card.lenght; i++) {
	card[i].addEventListener("click", e => {
		document.location.href = "https://vk.com/";
	});
}
console.log(card);
