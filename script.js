
const filterButtons = document.querySelectorAll(".filter_box button");
const filterableCards = document.querySelectorAll(".filterable_card .card");

const filterCard = e => {
	document.querySelector(".button_active").classList.remove("button_active");
	e.target.classList.add("button_active");
	console.log(e.target);

	filterableCards.forEach(function (card) {
		card.classList.add("hide");

		if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
			card.classList.remove("hide");
		};
	})
};

filterButtons.forEach(button => button.addEventListener('click', filterCard));




