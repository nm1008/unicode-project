const container = document.getElementById("container");
const key = document.querySelector(".key");
const keyCode = document.querySelector(".keyCode");
const start = document.querySelector(".start")


document.addEventListener('keydown', (e) => {
  start.remove()

  if(e.key === " "){
    key.textContent = "SPACE"; 
    keyCode.textContent = ` Unicode ${e.keyCode}`;
  } else {
    key.textContent = `${e.key} `;
    keyCode.textContent = ` Unicode ${e.keyCode}`;
  }
})