function createParagraph(data) {
  const paragraph = document.createElement("p");

  paragraph.classList.add("mb-4", "text-sm", "text-gray-700", "sm:text-base", "dark:text-gray-300");
  paragraph.textContent = data.content;

  return paragraph;
}

function updateParagraph(element, data) {
  element.textContent = data.content;
}

export { createParagraph, updateParagraph };