const container = document.getElementById("container");
const key = document.querySelector(".key");
const keyCode = document.querySelector(".keyCode");
const start = document.querySelector(".start")




document.addEventListener('keydown', (e) => {
  start.remove()
  key.textContent = `${e.key} `;
  keyCode.textContent = ` Unicode ${e.keyCode}`;
})