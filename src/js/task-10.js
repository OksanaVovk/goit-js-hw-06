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
    || !Number.isInteger(inputNum)
  ) {
    alert(`Please enter an integer from ${inputEl.min} to ${inputEl.max}`);
    event.currentTarget.value = "";
  }
  
  btnCreate.addEventListener("click", createBoxes(inputEl.value));
}

btnDestroy.addEventListener("click", destroyBoxes);

function clearInput() {
  inputEl.value = "";
}
 
function createBoxes(amount) {
  const devEl = [];
  let sizeDiv = 0;
  for (let i = inputEl.min; i <= amount; i ++){
    const element = document.createElement("div");
    let incrSizeDiv = sizeDiv + 30;
    element.style.width = `${incrSizeDiv}px`;
    element.style.height = `${incrSizeDiv}px`;;
    element.style.backgroundColor = getRandomHexColor();
    devEl.push(element);
    sizeDiv = incrSizeDiv;
  }
 boxesEl.append(...devEl);
}


function destroyBoxes() {
  boxesEl.innerHTML = ""; 
  clearInput();
}
