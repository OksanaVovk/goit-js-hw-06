const rangeEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

console.log(rangeEl);
console.log(spanEl);

console.log(spanEl.style.fontSize);
console.log(rangeEl.value);

rangeEl.addEventListener('input', onRangeElinput);
function onRangeElinput() {
  console.log(rangeEl.value);
  spanEl.style.fontSize = rangeEl.value + 'px';
  console.log(spanEl.style.fontSize);
}
