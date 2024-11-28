let elmRed = document.getElementById('red')
let elmYellow = document.getElementById('yellow')
let elmGreen = document.getElementById('green')
let btnRed = document.getElementById('red-light')
let btnYellow = document.getElementById('yellow-light')
let btnGreen = document.getElementById('green-light')

function changeColor(color) {
  if (color == 'red') {
    elmRed.style.backgroundColor = "red", btnRed.style.backgroundColor = "red"
    elmYellow.style.backgroundColor = "gray", btnYellow.style.backgroundColor = "gray"
    elmGreen.style.backgroundColor = "gray", btnGreen.style.backgroundColor = "gray"
  } else if (color == 'yellow') {
    elmRed.style.backgroundColor = "gray", btnRed.style.backgroundColor = "gray"
    elmYellow.style.backgroundColor = "yellow", btnYellow.style.backgroundColor = "yellow"
    elmGreen.style.backgroundColor = "gray", btnGreen.style.backgroundColor = "gray"
  } else if (color == 'green') {
    elmRed.style.backgroundColor = "gray", btnRed.style.backgroundColor = "gray"
    elmYellow.style.backgroundColor = "gray", btnYellow.style.backgroundColor = "gray"
    elmGreen.style.backgroundColor = "green", btnGreen.style.backgroundColor = "green"
  }
}

