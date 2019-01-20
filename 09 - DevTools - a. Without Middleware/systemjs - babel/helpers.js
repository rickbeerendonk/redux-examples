export function addToList(text, cssClass) {
  const textNode = document.createTextNode(text);

  const item = document.createElement('li');
  if (cssClass) {
    item.classList.add(cssClass);
  }
  item.appendChild(textNode);

  const list = document.getElementById('list');
  list.appendChild(item);
}
