let btnFontSizeDecrease = document.getElementById('btnFontSizeDecrease')
let btnFontSizeIncrease = document.getElementById('btnFontSizeIncrease')
let btnLight = document.getElementById('light')
let btnGold = document.getElementById('gold')
let btnDark = document.getElementById('dark')
let inputLineHeight = document.getElementById('inputLineHeight')
let elmLineHeight = document.getElementById('lineHeightDisplayValue')
let btnDecrease = document.getElementById('btnFontSizeDecrease')
let btnIncrease = document.getElementById('btnFontSizeIncrease')
let elmContent = document.getElementById('content')
let inputTextAlign = document.getElementById('slbTextAlign')

function changeBackgroundColor(elm) {
  let backgroundColor = window.getComputedStyle(elm, null).getPropertyValue('background-color');
  elmContent.style.backgroundColor = backgroundColor
}
inputColor.addEventListener('input', function () {
  elmContent.style.color = inputColor.value;
});
inputLineHeight.addEventListener('input', function () {
  let LineHeight = inputLineHeight.value
  elmContent.style.lineHeight = LineHeight
  elmLineHeight.innerText = LineHeight
})
btnDecrease.addEventListener('click', function () {
  changeFontSize("-");
})
btnIncrease.addEventListener('click', function () {
  changeFontSize("+");
})
function changeFontSize(action) {
  let fontSize = window.getComputedStyle(elmContent, null).getPropertyValue('font-size')
  fontSize = parseInt(fontSize)
  if (action == "+") {
    fontSize = fontSize + 1
  } else if (action == "-") {
    fontSize = fontSize - 1
  }
  elmContent.style.fontSize = fontSize + "px"
}
inputTextAlign.addEventListener('input', function () {
  let TextAlign = inputTextAlign.value
  elmContent.style.textAlign = TextAlign
})
