const input = document.querySelector('#validation-input');
console.log(input);

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  console.log(input.value.length);
  if (input.value.length === 6) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    console.log(input);
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
    console.log(input);
  }
}
