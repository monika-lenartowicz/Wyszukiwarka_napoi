const searchInput = document.querySelector(".search");
const drinksList = document.querySelectorAll("li");

const searchValue = e => {
	const text = e.target.value.toLowerCase();

	drinksList.forEach(element => {
		const task = element.textContent;
		if (task.toLowerCase().indexOf(text) !== -1) {
			element.style.display = "block";
		} else {
			element.style.display = "none";
		}
	});
};

searchInput.addEventListener("keyup", searchValue);
