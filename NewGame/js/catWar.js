let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
   let botonAvatarJugador = document.getElementById('seleccionar-avatar')
   botonAvatarJugador.addEventListener('click', seleccionarAvatarJugador)


   let botonRoca = document.getElementById('seleccionar-roca')
   botonRoca.addEventListener('click', ataqueRoca)
   let botonRayo = document.getElementById('seleccionar-rayo')
   botonRayo.addEventListener('click', ataqueRayo)
   let botonAgua = document.getElementById('seleccionar-agua')
   botonAgua.addEventListener('click', ataqueAgua)

}

function seleccionarAvatarJugador() {
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
// 1 para roca, 2 para rayo, 3 para agua
   if(ataqueEnemigo == ataqueJugador) {
      crearMensaje("EMPATE")
   } else if(ataqueJugador == 'ROCA' && ataqueEnemigo == 'RAYO'){
      crearMensaje("GANASTE")
   } else if(ataqueJugador == 'RAYO' && ataqueEnemigo == 'AGUA'){
      crearMensaje("GANASTE")
   } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'ROCA') {
      crearMensaje("GANASTE")       
   } else {
      crearMensaje("PERDISTE")
      
   }
}

 
   


function aleatorio(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)
