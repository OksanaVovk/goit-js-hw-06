const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const elements = images.map(image => {
  const itemEl = document.createElement('li');
  const imageEl = document.createElement('img');

  imageEl.src = image.url;
  imageEl.alt = image.alt;

  itemEl.append(imageEl);
  return itemEl;
});

const listEl = document.querySelector('.gallery');
listEl.append(...elements);

const imageArray = document.querySelectorAll('img');
const itemArray = document.querySelectorAll('li');

for (let i = 0; i < itemArray.length; i++) {
  itemArray[i].insertAdjacentHTML(
    'beforebegin',
    `<h2> ${imageArray[i].alt} </h2>`,
  );
}
