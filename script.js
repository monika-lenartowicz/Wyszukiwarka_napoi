const searchInput = document.querySelector(".search");
const drinksList = document.querySelectorAll("li");

// const searchValue = e => {
// 	const text = e.target.value.toLowerCase();

// 	drinksList.forEach(element => {
// 		const task = element.textContent;
// 		if (task.toLowerCase().indexOf(text) !== -1) {
// 			element.style.display = "block";
// 		} else {
// 			element.style.display = "none";
// 		}
// 	});
// };

const searchValue = () => {
	drinksList.forEach(drink => {
		const match = new RegExp(searchInput.value, "i").test(drink.textContent);

		if (!match) {
			drink.style.display = "none";
		} else {
			drink.style.display = "block";
		}
	});
};

searchInput.addEventListener("keyup", searchValue);
