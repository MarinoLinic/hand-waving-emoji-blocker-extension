removeEmoji(document.body)

function removeEmoji(element) {
	if (element.hasChildNodes()) {
		element.childNodes.forEach(removeEmoji)
	} else if (element.nodeType === Text.TEXT_NODE) {
		element.textContent = element.textContent.replace(/👋/gi, '')
	}
}
