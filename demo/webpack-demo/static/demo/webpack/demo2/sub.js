function generateText() {
	var element = document.createElement('h2');
	element.innerHtml = "Hello h2 world";
	return element;
}

module.exports = generateText;