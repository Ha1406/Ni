let elInput1 = document.getElementById("input-password-1");
let elIconEye1 = document.getElementById("icon-eye-1");
let elInput2 = document.getElementById("input-password-2");
let elIconEye2 = document.getElementById("icon-eye-2");
let elmColor = document.getElementById('color');
let elmUppercase = document.getElementById('uppercase');
let elmLowercase = document.getElementById('lowercase');
let elmNumber = document.getElementById('number');
let elmSpecial = document.getElementById('special');

elIconEye1.addEventListener('click', function () {
  if (elInput1.type == "password") {
    elInput1.type = "text";
    elIconEye1.classList.remove('fa-eye-slash');
    elIconEye1.classList.add('fa-eye');
  } else {
    elInput1.type = "password";
    elIconEye1.classList.remove('fa-eye');
    elIconEye1.classList.add('fa-eye-slash');
  }
});
elIconEye2.addEventListener('click', function () {
  if (elInput2.type == "password") {
    elInput2.type = "text";
    elIconEye2.classList.remove('fa-eye-slash');
    elIconEye2.classList.add('fa-eye');
  } else {
    elInput2.type = "password";
    elIconEye2.classList.remove('fa-eye');
    elIconEye2.classList.add('fa-eye-slash');
  }
})
elInput1.addEventListener('input', function () {
  const value = elInput1.value;
  const length = value.length;

  if (length >= 7 && length <= 20) {
    elmColor.style.color = '#38C656';
  } else {
    elmColor.style.color = ' #9BACBB';
  }
  if (value.match(/[A-Z]/)) {
    elmUppercase.style.color = '#38C656';
  } else {
    elmUppercase.style.color = ' #9BACBB';
  }
  if (value.match(/[a-z]/)) {
    elmLowercase.style.color = '#38C656';
  } else {
    elmLowercase.style.color = ' #9BACBB';
  }
  if (value.match(/[0-9]/)) {
    elmNumber.style.color = '#38C656';
  } else {
    elmNumber.style.color = ' #9BACBB';
  }
  if (value.match(/[!@#$%^&*()_+.,]/)) {
    elmSpecial.style.color = '#38C656';
  } else {
    elmSpecial.style.color = ' #9BACBB';
  }
})
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('focus', (event) => {
    event.target.style.borderBottom = '2px solid #DD0071';
  });
  input.addEventListener('blur', (event) => {
    event.target.style.borderBottom = '2px solid #303030';
  });
});