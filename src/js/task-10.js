function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

inputEl.addEventListener("change", onInputElChange);
function onInputElChange(event) {
  const inputNum = Number(event.currentTarget.value);
  console.log(inputNum);
  console.log(!Number.isInteger(inputNum));
  if (inputNum < inputEl.min
    || inputNum > inputEl.max
    || !Number.isInteger(inputNum)){
    alert(`Please enter an integer from ${inputEl.min} to ${inputEl.max}`);
    event.currentTarget.value = "";
  }
  
  btnCreate.addEventListener("click", onBtnCreateClick);

}



function onBtnCreateClick() {
  console.log(inputEl.value);
  console.log(inputEl.min);
  const devEl = [];
  for (let i = inputEl.min; i <= inputEl.value; i ++){
    const element = document.createElement("div");
    devEl.push(element);
  }
  console.log(devEl);
  boxesEl.append(...devEl);
 
} 

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
  console.log(boxesEl.children);

}
