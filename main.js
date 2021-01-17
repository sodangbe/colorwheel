function changeColor(id) {
	const colorArr = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

	const element = document.getElementById(id);
	const color = element.classList[1];

	const currIndex = colorArr.indexOf(color);
	const newColor = colorArr[currIndex + 1 > colorArr.length - 1 ? 0 : currIndex + 1];

	element.classList.remove(color);
	element.classList.add(newColor);
}