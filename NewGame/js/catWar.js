let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() { 

   let sectionReiniciar = document.getElementById("reiniciar")
   sectionReiniciar.style.display = "none"

   let sectionSeleccionarElemento = document.getElementById("selecciona-elemento")
   sectionSeleccionarElemento.style.display = "none"

   let botonAvatarJugador = document.getElementById('seleccionar-avatar')
   botonAvatarJugador.addEventListener('click', seleccionarAvatarJugador)


   let botonRoca = document.getElementById('seleccionar-roca')
   botonRoca.addEventListener('click', ataqueRoca)
   let botonRayo = document.getElementById('seleccionar-rayo')
   botonRayo.addEventListener('click', ataqueRayo)
   let botonAgua = document.getElementById('seleccionar-agua')
   botonAgua.addEventListener('click', ataqueAgua)

   let botonReiniciar = document.getElementById('boton-reiniciar')
   botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarAvatarJugador() {
   let sectionSeleccionarElemento = document.getElementById("selecciona-elemento")
   sectionSeleccionarElemento.style.display = "block"
   let sectionSeleccionarAvatar = document.getElementById("selecciona-avatar")
   sectionSeleccionarAvatar.style.display = "none"

   let inputCatrock = document.getElementById('Catrock')
   let inputLightningcat = document.getElementById('Lightningcat')
   let inputCatoola = document.getElementById('Catoola')
   let botonseleccionaravatar = document.getElementById('seleccionar-avatar')
   let spanavatarjugador = document.getElementById('avatar-jugador')

   if (inputCatrock.checked) {
      spanavatarjugador.innerHTML = 'Catrock'
   } else if (inputLightningcat.checked) {
      spanavatarjugador.innerHTML = 'Lightningcat'
   } else if (inputCatoola.checked) {
      spanavatarjugador.innerHTML = 'Catoola'
   } else {
      alert('Selecciona avartar')
   }

   seleccionarAvatarEnemigo()
}

function seleccionarAvatarEnemigo() {
   let avatarAleatorio = aleatorio(1, 3)
   let spanAvatarEnemigo = document.getElementById('Avatar-Enemigo')

   if (avatarAleatorio == 1) {
      spanAvatarEnemigo.innerHTML = 'Catrock'
   } else if (avatarAleatorio == 2) {
      spanAvatarEnemigo.innerHTML = 'Lightningcat'
   } else {
      spanAvatarEnemigo.innerHTML = 'Catoola'
   }
}

function ataqueRoca() {
   ataqueJugador = 'ROCA'
   ataqueAleatorioEnemigo()
}
function ataqueRayo() {
   ataqueJugador = 'RAYO'
   ataqueAleatorioEnemigo()
}
function ataqueAgua() {
   ataqueJugador = 'AGUA'
   ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
   let ataqueAleatorio = aleatorio(1,3)
   if(ataqueAleatorio == 1){
      ataqueEnemigo = 'ROCA'
   }else if(ataqueAleatorio == 2){
         ataqueEnemigo = 'RAYO'
      } else {
         ataqueEnemigo = 'AGUA'
      } 
      combate()
   }

 function crearMensaje(resultado) {

      let sectionMensaje = document.getElementById('mensajes')
      let parrafo = document.createElement('p')
      parrafo.innerHTML = 'Tu atacaste con ' + ataqueJugador + ' el enemigo ataco con ' +  ataqueEnemigo + ' ' + resultado
      sectionMensaje.appendChild(parrafo) 
}
   


function combate(){ 
   let spanVidasJugador = document.getElementById('vidas-jugador')
   let spanVidasEnemigo = document.getElementById('vidas-enemigo')

   if(ataqueEnemigo == ataqueJugador) {
      crearMensaje("EMPATE")
  } else if(ataqueJugador == 'ROCA' && ataqueEnemigo == 'RAYO') {
      crearMensaje("GANASTE")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
   
  } else if(ataqueJugador == 'RAYO' && ataqueEnemigo == 'AGUA') {
      crearMensaje("GANASTE")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
   
  } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'ROCA') {
      crearMensaje("GANASTE")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
     } else {
      crearMensaje("PERDISTE")
      vidasJugador--
      spanVidasJugador.innerHTML = vidasJugador
  }  
  
      revisarVidas()
}

function revisarVidas(){
   if(vidasEnemigo == 0){
      crearMensajeFinal("FELICIDADES, Ganaste")
   } else if(vidasJugador == 0){
      crearMensajeFinal("LO SIENTO, Perdiste")
   }
   
}


function crearMensajeFinal(resultadoFinal) {

   let sectionReiniciar = document.getElementById("reiniciar")
   sectionReiniciar.style.display = "block"

   let sectionMensajes = document.getElementById('mensajes')
    
   let parrafo = document.createElement('p')
   parrafo.innerHTML = resultadoFinal

   sectionMensajes.appendChild(parrafo)

   let botonRoca = document.getElementById('seleccionar-roca')
   botonRoca.disabled = true
   let botonRayo = document.getElementById('seleccionar-rayo')
   botonRayo.disabled = true
   let botonAgua = document.getElementById('seleccionar-agua')
   botonAgua.disabled = true

}

function reiniciarJuego(){
   location.reload() 
}

function aleatorio(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)

