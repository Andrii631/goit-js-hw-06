function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divEl = document.querySelector('#controls');
const divBoxEl = document.querySelector('#boxes');
const inputEl = divEl.childNodes[1];
const btnCreEl = divEl.childNodes[3];
const btnDesEl = divEl.childNodes[5];
let array = [];
btnCreEl.addEventListener('click',() =>{  
  let item = 20;
  for (let i = 0; i<inputEl.value; i++){
    let newBox = document.createElement('div');
    item += 10;
    newBox.classList.add('box')
    newBox.style.width = `${item}px`;
    newBox.style.height = `${item}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    divBoxEl.append(newBox)
  }
let boxEl = document.querySelectorAll('.box');
array = [...boxEl]
console.log(array)
});
btnDesEl.addEventListener('click',() => {array.forEach(arr => arr.remove())
})



