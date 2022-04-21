const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

decrBtn.addEventListener('click', function () {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrBtn.addEventListener('click', function () {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
