const refs = {
  textEl: document.querySelector('#name-input'),
  spanEl: document.querySelector('#name-output'),
};

refs.textEl.addEventListener('input', onTextInput);

function onTextInput(event) {
  refs.spanEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    refs.spanEl.textContent = 'Anonymous';
  }
}
