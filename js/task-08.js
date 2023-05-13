











//При натисканні на кнопку міняти фоновий колір елемента з класом .play на прозорий.
//Примітка: використовуйте CSS-властивість opacity.

{
    /* <button class="add-btn">add</button>
      <div class="play"></div> */
  }
  {
    /* <style>
    .play {
      background: pink;
    }
  </style> */
  }
  
  // const btmEl = document.querySelector('.add-btn');
  // const divEl = document.querySelector('.play');
  // let opacity = 1;
  // btmEl.addEventListener("click", onClick);
  // function onClick () {
  //   opacity -= 0.1;
  //   divEl.style.opacity = opacity;
  //   console.dir(divEl.style)
  // }
  
  
  
  /*
  
  Кнопка "Приховати" ховає текст і замінює назву кнопки на
  "Розкрити", при повторному натисканні текст знову стає доступним
  і кнопка набуває початкового вигляду.
  
    <div>
          <input id="passwordInput" type="text">
          <button id="passwordButton">Приховати</button>
      </div>
  
  */
  
//   const inputEl = document.getElementById('passwordInput')
//   const btmEl = document.getElementById('passwordButton')
//   btmEl.addEventListener('click', onClick)
  
//   function onClick (){
//   inputEl.type = inputEl.type === "text" ? "password" : "text"
//   btmEl.textContent = btmEl.textContent === "Приховати" ? "Розкрити" : "Приховати"
//   }