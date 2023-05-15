const body = document.querySelector('.boddy');
const claro = document.querySelector('.claro');
let posicionImg = 1;
//CAMBIO DE FONDO DE CLARO A OSCURO ***********************************************
claro.addEventListener('click', () => cambio());
function cambio() {
  if (body.style.backgroundColor == 'white') {
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.81)'
    body.style.color = 'white';

  } else {
    body.style.backgroundColor = 'white'
    body.style.color = 'rgba(0, 0, 0, 0.81)'
  }

};














