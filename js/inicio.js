
//CAMBIO DE COLOR DEL FONDO DE CLARO A OSCURO Y DE OSCURO A CLARO
const body = document.querySelector('.boddy');
const claro = document.querySelector('.claro');

claro.addEventListener('click', () => cambio());
function cambio() {
  if (body.style.backgroundColor == 'white') {
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.81)'
    body.style.color = 'white'
  } else {
    body.style.backgroundColor = 'white'
    body.style.color = 'rgba(0, 0, 0, 0.81)'
  }
}

//****************************************GARGA DE ACHIVO JSON SECTION NOTICIA ****************************************************
function cargarNoticias() {
  $.ajax({
    url: "../json/noticia.json",
    type: "GET",
    success: function (dato) {
      let cadena = '';
      for (i = 0; i < dato.noticias1.length; i++) {
        cadena += dato.noticias1[i].titulo + "<br>";
        cadena += dato.noticias1[i].subTitulo + "<br>";
        cadena += dato.noticias1[i].parrafo + "<br>";
        cadena += 'Editor : ' + dato.noticias1[i].editor + "<br>";
        cadena += dato.noticias1[i].date + "<br>";
      }
      $('#jsonNoticia').html(cadena)
    },
    error: function (xhr, status) {
      alert('error');
    }
  })
}

function cargarNoticias2() {
  $.ajax({
    url: "../json/noticia.json",
    type: "GET",
    success: function (datos) {
      let cadenas = '';
      for (i = 0; i < datos.noticias2.length; i++) {
        cadenas += datos.noticias2[i].titulo + '<br>';
        cadenas += datos.noticias2[i].subTitulo + "<br>";
        cadenas += datos.noticias2[i].parrafo + "<br>";
        cadenas += 'Editor : ' + datos.noticias2[i].editor + "<br>";
        cadenas += datos.noticias2[i].date + "<br>";
      }
      $('#jsonNoticia2').html(cadenas)
    },
    error: function (xhr, status) {
      alert('error')
    }
  })
}

function cargarNoticias3() {
  $.ajax({
    url: "../json/noticia.json",
    type: "GET",
    success: function (datos) {
      let cadenas = '';
      for (i = 0; i < datos.noticias3.length; i++) {
        cadenas += datos.noticias3[i].titulo + '<br>';
        cadenas += datos.noticias3[i].subTitulo + "<br>";
        cadenas += datos.noticias3[i].parrafo + "<br>";
        cadenas += 'Editor : ' + datos.noticias3[i].editor + "<br>";
        cadenas += datos.noticias3[i].date + "<br>";
      }
      $('#jsonNoticia3').html(cadenas)
    },
    error: function (xhr, status) {
      alert('error')
    }
  })
}

//OCULTALOS EL DIV QUE CONTIENE EL JSON NOTICIAS *************************************************
let ver1 = document.querySelector('#ver-1')
let ver2 = document.querySelector('#ver-2')
let ver3 = document.querySelector('#ver-3')
let jsonNoticia = document.querySelector('#jsonNoticia');
let jsonNoticia2 = document.querySelector('#jsonNoticia2');
let jsonNoticia3 = document.querySelector('#jsonNoticia3');

ver1.addEventListener('click', () => ocultar());
ver2.addEventListener('click', () => ocultar2());
ver3.addEventListener('click', () => ocultar3());

function ocultar() {
  if (jsonNoticia.style.display == 'none') {
    jsonNoticia.style.display = 'block';
  } else {
    jsonNoticia.style.display = 'none';
  }
}

function ocultar2() {
  if (jsonNoticia2.style.display == 'none') {
    jsonNoticia2.style.display = 'block';
  } else {
    jsonNoticia2.style.display = 'none';
  }
}

function ocultar3() {
  if (jsonNoticia3.style.display == 'none') {
    jsonNoticia3.style.display = 'block';
  } else {
    jsonNoticia3.style.display = 'none';
  }
} 











