let elmDisplay = document.querySelectorAll('.button')
let elmShow = document.querySelectorAll('.show')
let currentIndexActive = 0;
elmShow[currentIndexActive].style.display = 'block';
elmDisplay[currentIndexActive].style.borderBottom = '2px solid #3F78E0'
elmDisplay[currentIndexActive].style.color = '#3F78E0'

for (let i = 0; i < elmDisplay.length; i++) {
  elmDisplay[i].addEventListener('click', function () {
    elmShow[currentIndexActive].style.display = 'none';
    elmShow[i].style.display = 'block';
    elmDisplay[currentIndexActive].style.borderBottom = '2px solid rgba(164, 174, 198, 0.25)'
    elmDisplay[i].style.borderBottom = '2px solid #3F78E0'
    elmDisplay[i].style.color = '#3F78E0'
    elmDisplay[currentIndexActive].style.color = '#343F52'
    currentIndexActive = i;
  })
}
