let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroSecreto === numeroDeUsuario) {
    asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} !`);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor!");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor!");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  
  console.log(numeroGenerado);
  console.log(listaNumeros);
  

  if (listaNumeros.length == numeroMaximo) {
    asignarTextoElemento("p", "No hay mas numeros disponibles, reinicia el juego!");
  }else{

      if (listaNumeros.includes(numeroGenerado)){
        return generarNumeroSecreto();
      }
      else {
        listaNumeros.push(numeroGenerado);
        return numeroGenerado;
        
      }
      
    }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del Numero Secreto!");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}!`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  // Limpiar el campo de texto
  limpiarCaja();
  // Indicar mensaje de intervalo de numeros
  condicionesIniciales();
  // Generar un nuevo numero secreto
  // Reiniciar el contador de intentos
  // Deshabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute("disabled", "true");

}

condicionesIniciales();
