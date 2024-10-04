let imagenes = document.querySelectorAll('.slider img');
let indice = 0;

imagenes[indice].classList.add('activo');

document.querySelector('.anterior').addEventListener('click', () => {
  imagenes[indice].classList.remove('activo');
  indice--;
  if (indice < 0) {
    indice = imagenes.length - 1;
  }
  imagenes[indice].classList.add('activo');
});

document.querySelector('.siguiente').addEventListener('click', () => {
  imagenes[indice].classList.remove('activo');
  indice++;
  if (indice >= imagenes.length) {
    indice = 0;
  }
  imagenes[indice].classList.add('activo');
});