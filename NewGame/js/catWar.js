const sectionReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarElemento = document.getElementById("selecciona-elemento")
const botonAvatarJugador = document.getElementById('seleccionar-avatar')

const sectionSeleccionarAvatar = document.getElementById("selecciona-avatar")
const inputCatrock = document.getElementById('Catrock')
const inputCatoola = document.getElementById('Catoola')
const botonseleccionaravatar = document.getElementById('seleccionar-avatar')
const spanavatarjugador = document.getElementById('avatar-jugador')
const inputLightningcat = document.getElementById('Lightningcat')

const spanAvatarEnemigo = document.getElementById('avatar-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugardor = document.getElementById('ataque-del-jugardor')
const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')
const botonRoca = document.getElementById('seleccionar-roca')
const botonRayo = document.getElementById('seleccionar-rayo')
const botonAgua = document.getElementById('seleccionar-agua')
const botonReiniciar = document.getElementById('boton-reiniciar')

const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')

let catswarrior = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Catwar {
   constructor(nombre, foto, vida) {
      this.nombre = nombre
      this.foto = foto
      this.vida = vida 
      this.ataques = []
   }
}

let catrock = new Catwar('Catrock', './imagen/rock.png', 5)
let lightningcat = new Catwar('Lightningcat', './imagen/lightningcat.png', 5)
let catoola = new Catwar('Catoola', './imagen/Catoola.png', 5)

catrock.ataques.push(
   {nombre: '🪨', id: 'seleccionar-roca'},
   {nombre: '🪨', id: 'seleccionar-roca'},
   {nombre: '🪨', id: 'seleccionar-roca'},
   {nombre: '⚡',  id: 'seleccionar-rayo'},
   {nombre: '🌊', id: 'seleccionar-agua'},
)
lightningcat.ataques.push(
   {nombre: '⚡',  id: 'seleccionar-rayo'},
   {nombre: '⚡',  id: 'seleccionar-rayo'},
   {nombre: '⚡',  id: 'seleccionar-rayo'},
   {nombre: '🪨', id: 'seleccionar-roca'},   
   {nombre: '🌊', id: 'seleccionar-agua'},
)
catoola.ataques.push(
   {nombre: '🌊', id: 'seleccionar-agua'},
   {nombre: '🌊', id: 'seleccionar-agua'},
   {nombre: '🌊', id: 'seleccionar-agua'},
   {nombre: '🪨', id: 'seleccionar-roca'},
   {nombre: '⚡',  id: 'seleccionar-rayo'},   
)

catswarrior.push(catrock,lightningcat,catoola)


function iniciarJuego() { 

   
   sectionReiniciar.style.display = "none"
   sectionSeleccionarElemento.style.display = "none"

   catswarrior.forEach((catswarrior) => {
         
   })

   botonAvatarJugador.addEventListener('click', seleccionarAvatarJugador)
   botonRoca.addEventListener('click', ataqueRoca)
   botonRayo.addEventListener('click', ataqueRayo)  
   botonAgua.addEventListener('click', ataqueAgua)

   botonReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionarAvatarJugador() {
   sectionSeleccionarElemento.style.display = "flex"
   sectionSeleccionarAvatar.style.display = "none"
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
      let nuevoAtaqueJugador = document.createElement('p')
      let nuevoAtaqueEnemigo = document.createElement('p') 
      
      sectionMensajes.innerHTML = resultado
      nuevoAtaqueJugador.innerHTML = ataqueJugador
      nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
      ataqueDelJugardor.appendChild(nuevoAtaqueJugador)
      ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)

}
function combate(){ 
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

   sectionReiniciar.style.display = "block"    
   sectionMensajes.innerHTML = resultadoFinal
   
   botonRoca.disabled = true   
   botonRayo.disabled = true  
   botonAgua.disabled = true

}
function reiniciarJuego(){
   location.reload() 
}
function aleatorio(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)

