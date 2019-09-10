var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randomBtn = document.getElementById('random');
// var randomColor1 = '0123456789ABCDEF';
// var randomColor2 = '0123456789ABCDEF';
// for (var i = 0; i < 6; i++)
//   randomColor1[Math.floor(Math.random() * 16)] &&
//     randomColor2[Math.floor(Math.random() * 16)];

function setGradient() {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

  css.textContent = body.style.background + ';';
}

function setRandomGradient() {
  var randomColor1 = ((Math.random() * (1 << 24)) | 0).toString(16);
  var randomColor2 = ((Math.random() * (1 << 24)) | 0).toString(16);
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

  css.textContent = body.style.background + ';';
  color1.value = '#' + randomColor1;
  color2.value = '#' + randomColor2;
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

window.addEventListener('load', setGradient);

randomBtn.addEventListener('click', setRandomGradient);
