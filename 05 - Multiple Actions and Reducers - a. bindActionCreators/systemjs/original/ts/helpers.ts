/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

export function addToList(text: string, cssClass?: string): void {
  const textNode: Text = document.createTextNode(text);

  const item: HTMLElement = document.createElement('li');
  if (cssClass) {
    item.classList.add(cssClass);
  }
  item.appendChild(textNode);

  const list: HTMLElement = document.getElementById('list');
  list.appendChild(item);
}
