//cambio de color de fondo de claro a oscuro *******************************
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

//*****************************************************FORMULARO DE PRESPUESTO*********************************************************
//contacto
const miform = document.querySelector('.formulario');
const btnEnviar = document.querySelector('.enviar');
const reset = document.querySelector('.borrar');

const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const numero = document.querySelector('#numero');
const correo = document.querySelector('#correo');
const select = document.querySelector('#select');
const plazo = document.querySelector('#pazo');
const check = document.querySelectorAll('.check')



let validar = {
  nombre: false,
  apellido: false,
  numero: false,
  correo: false,
  select: false,
  plazo: false
}

function setError(input, mensaje) {
  const controlF = input.parentElement;
  controlF.className = 'form-control error';
  const small = controlF.querySelector('small');
  small.innerText = mensaje;

  const controlSelect = select.parentElement;
  controlSelect.className = 'form-control error';
  const smallS = controlSelect.querySelector('small')
  smallS.innerText = mensaje;

}

function setSuccess(input) {
  const controlF = input.parentElement;
  controlF.className = 'form-control success';

  const controlSelect = select.parentElement;
  controlSelect.className = 'form-control success';

}

nombre.addEventListener('blur', () => {
  let nombre_re = /^[a-zA-Z ]{3,15}$/;

  if (nombre.value == "" || nombre.value == null) {
    setError(nombre, 'El campo "nombre" no puede estar en blanco!!');
    validar.nombre = false;
  } else {
    if (!nombre_re.exec(nombre.value)) {
      setError(nombre, 'El campo "nombre" solo puede tener letras!!');
      validar.nombre = false;
    } else {
      validar.nombre = true;
      setSuccess(nombre);
    }
  }
});

apellido.addEventListener('blur', () => {
  let apellido_re = /^[a-zA-Z ]{3,40}$/;
  if (apellido.value == "" || apellido.value == null) {
    validar.apellido = false;
    setError(apellido, 'el campo "apellido" no puede estar en blanco!!')
  } else {
    if (!apellido_re.exec(apellido.value)) {
      validar.apellido = false;
      setError(apellido, 'el campo "apellido" solo puede tener letras entre 3 y 40 caracter!!')
    } else {
      validar.apellido = true;
      setSuccess(apellido);
    }
  }
})

numero.addEventListener('blur', () => {
  let numero_re = /^\d{9}$/;
  if (numero.value == "" || numero.value == null) {
    validar.numero = false;
    setError(numero, 'el campo "telefono" no puede estar en blanco!!');
  } else {
    if (!numero_re.exec(numero.value)) {
      validar.numero = false;
      setError(numero, 'el campo "telefono" solo puede tener 9 numeros!!')
    } else {
      validar.numero = true;
      setSuccess(numero);
    }
  }
});

correo.addEventListener('blur', () => {
  let correo_re = /^ [-\w.% +]{ 1, 64}@(?: [A - Z0 - 9 -]{ 1, 63 } \.){ 1, 125 } [A - Z]{ 2, 63 } $ /;
  if (correo.value == "" || correo.value == null) {
    validar.correo = false;
    setError(correo, 'el campo "correo" no puede estar en blanco!!');
  } else {
    if (correo_re.exec(correo.value)) {
      validar.correo = false;
      setError(correo, 'el campo "correo" es incorrecto!!');
    } else {
      validar.correo = true;
      setSuccess(correo)
    }
  }
});


//SELECCION DE PASTELES **********************************************************
select.addEventListener('click', () => {
  if (select.value == 0 || select.value == "" || select.value == null) {
    setError(select, 'selecione un postre!!')
    validar.select = false;
  } else {
    setSuccess(select)
    validar.select = true;
  }
})

//pazo para la entraga del producto *********************************************************
plazo.addEventListener('blur', () => {
  if (plazo.value == "" || plazo.value == null) {
    setError(plazo, 'Marque los dias para retirar su pastel!!')
    validar.plazo = false;

  } else {
    setSuccess(plazo);
    validar.plazo = true;
  }
})

//CHECKBOX EXTRA y PRECIO TOTAL ***********************************************
function sumar() {
  let resultado = document.getElementById('precio');
  resultado.value = select.value;
  if (select.value == 6 || select.value == 6.50 || select.value == 7 || select.value == 7.50 || select.value == 8) {
    check.forEach((item) => {
      item.checked = false;
    })
  }
}

//precio final del producto******************************************
function actualizarValor(estaChequeado, valor) {
  // Variables.
  var suma_actual = 0;
  var resultado = document.getElementById('precio');
  valor = parseFloat(valor);

  if (resultado != null) {

    if (isNaN(resultado.value)) {
      resultado.value = 0;
    }
    suma_actual = parseFloat(resultado.value);
  }

  // Determinar que: si el check está seleccionado "checked"
  if (estaChequeado == true) {
    suma_actual = suma_actual + valor;
  } else {
    suma_actual = suma_actual - valor;
  }

  // Colocar el resultado de las operaciones anteriores de vuelta
  resultado.value = suma_actual;

}

miform.addEventListener('submit', (e) => {
  e.preventDefault();

  let errorF = false;
  for (const property in validar) {
    if (validar[property] == false) {
      errorF = true;
    }
  }
  if (!errorF) {
    miform.submit()
  }
})





