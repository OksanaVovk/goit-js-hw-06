const listEl = document.querySelector('#categories');
console.log('Number of categories: ', listEl.children.length);

const itemsEl = document.querySelectorAll('.item');
for (let i = 0; i < listEl.children.length; i++) {
  console.log('Category: ', itemsEl[i].querySelector('h2').textContent);
  console.log('Elements: ', itemsEl[i].querySelectorAll('li').length);
}
