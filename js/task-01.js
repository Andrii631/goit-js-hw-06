const ulEl = document.querySelector('#categories');
let childEl = ulEl.children;
console.log(`Number of categories: ${childEl.length}`)
const liEl= document.querySelectorAll('.item');
liEl.forEach(a =>{
    console.group(`Category: ${a.firstElementChild.textContent}`)
    console.log(`Elements: ${a.lastElementChild.children.length}`)
    console.groupEnd()
})