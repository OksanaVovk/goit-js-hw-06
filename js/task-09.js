function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');
const BtnEl = document.querySelector('.change-color');

BtnEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  const currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  spanEl.textContent = currentColor;
}
