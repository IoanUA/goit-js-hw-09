const butStart = document.querySelector("[data-start]");
const butStop = document.querySelector("[data-stop]");
const body = document.querySelector('body')

butStart.addEventListener('click', onStartClickRandomColor);

function onStartClickRandomColor(){
  
  timerId = setInterval(()=>{
    const randomColorFun = getRandomHexColor()
    body.style.backgroundColor = randomColorFun;
        console.log('dawda');
      }, 1000)
      butStart.removeEventListener('click', onStartClickRandomColor);
}

butStop.addEventListener("click", onStopClickRandomColor)
function onStopClickRandomColor(){
clearInterval(timerId)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  