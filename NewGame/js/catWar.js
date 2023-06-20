const sectionReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarElemento = document.getElementById("selecciona-elemento")
const botonAvatarJugador = document.getElementById('seleccionar-avatar')

const sectionSeleccionarAvatar = document.getElementById("selecciona-avatar")
const botonseleccionaravatar = document.getElementById('seleccionar-avatar')
const spanAvatarjugador = document.getElementById('avatar-jugador')
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
const contenedorTarjetas = document.getElementById('contenedorTarjetas')


let catswarrior = []
let ataqueJugador
let ataqueEnemigo
let opcionesDeCatwar
let inputCatrock 
let inputCatoola
let inputLightningcat
let avatarJugador 
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
         opcionesDeCatwar = `
         <input type="radio" name="avatar" id=${catswarrior.nombre} />
            <label class="tarjeta-de-catwar" for=${catswarrior.nombre} >
            <p>${catswarrior.nombre} </p>
                <img src=${catswarrior.foto} alt=${catswarrior.nombre} > 
         </label>`

   contenedorTarjetas.innerHTML += opcionesDeCatwar 

      inputCatrock = document.getElementById('Catrock')
      inputLightningcat = document.getElementById('Lightningcat')
      inputCatoola = document.getElementById('Catoola')
      
   })

   botonAvatarJugador.addEventListener('click', seleccionarAvatarJugador)

   botonRoca.addEventListener('click', ataqueRoca)

   botonRayo.addEventListener('click', ataqueRayo)  

   botonAgua.addEventListener('click', ataqueAgua)


   botonReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionarAvatarJugador() {
   
   sectionSeleccionarAvatar.style.display = "none"

   sectionSeleccionarElemento.style.display = "flex"
          
   if (inputCatrock.checked) {
      spanAvatarjugador.innerHTML = inputCatrock.id
      avatarJugador = inputCatrock.id
   } else if (inputLightningcat.checked) {
      spanAvatarjugador.innerHTML = inputLightningcat.id
      avatarJugador = inputLightningcat.id
   } else if (inputCatoola.checked) {
      spanAvatarjugador.innerHTML = inputCatoola.id
      avatarJugador = inputCatoola.id
   } else {
      alert('Selecciona un avartar')
   }
   extraerAtaques(avatarJugador)

   seleccionarAvatarEnemigo()
}

function extraerAtaques(avatarJugador) {
   let ataques 
   for (let i = 0; i < catswarrior.length; i++) {
      if (avatarJugador === catswarrior[i].nombre) {
         ataques = catswarrior[i].ataques
      }
      
      
   }
}

function seleccionarAvatarEnemigo() {
   let avatarAleatorio = aleatorio(0, catswarrior.length -1)
   
   spanAvatarEnemigo.innerHTML = catswarrior[avatarAleatorio].nombre
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

