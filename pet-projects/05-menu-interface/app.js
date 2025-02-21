let elmMenu = document.getElementById('menu');
let elmLogo = document.getElementById('logo');
let elmOpen = document.getElementById('hide-show');

elmOpen.onclick = function () {
  if (elmMenu.style.display === 'none') {
    elmMenu.style.display = 'flex';
    elmMenu.style.flexDirection = 'column';
    elmLogo.style.display = 'flex';
    elmOpen.style.rotate = '90deg';
  } else {
    elmMenu.style.display = 'none';
    elmLogo.style.display = 'none';
    elmOpen.style.rotate = '0deg';
  }
}
