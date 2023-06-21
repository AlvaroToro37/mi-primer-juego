const sectionReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarElemento = document.getElementById("selecciona-elemento")
const botonAvatarJugador = document.getElementById('seleccionar-avatar')
const botonReiniciar = document.getElementById('boton-reiniciar')


const sectionSeleccionarAvatar = document.getElementById("selecciona-avatar")
const spanAvatarjugador = document.getElementById('avatar-jugador')

const spanAvatarEnemigo = document.getElementById('avatar-enemigo')

const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')

const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugardor = document.getElementById('ataque-del-jugardor')
const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let catswarrior = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionesDeCatwar
let inputCatrock 
let inputCatoola
let inputLightningcat
let avatarJugador 
let ataquesCatwar 
let ataquesCatwarEnemigo
let botonRoca 
let botonRayo 
let botonAgua 
let botones = []
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
   
   sectionSeleccionarElemento.style.display = "none"

   catswarrior.forEach((catswarrior) => {
         opcionesDeCatwar = `
         <input type="radio" name="avatar" id=${catswarrior.nombre} />
            <label class="tarjeta-de-catwar" for=${catswarrior.nombre} >
            <p>${catswarrior.nombre} </p>
                <img src=${catswarrior.foto} alt=${catswarrior.nombre} > 
         </label>
         `
   contenedorTarjetas.innerHTML += opcionesDeCatwar 

      inputCatrock = document.getElementById('Catrock')
      inputLightningcat = document.getElementById('Lightningcat')
      inputCatoola = document.getElementById('Catoola')
      
   })

   botonAvatarJugador.addEventListener('click', seleccionarAvatarJugador)

  



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
   mostrarAtaques(ataques)
}  

   function mostrarAtaques(ataques) {
      ataques.forEach((ataque) => {
         ataquesCatwar = `
         <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
         `
         contenedorAtaques.innerHTML += ataquesCatwar
   })

      botonRoca = document.getElementById('boton-roca')
      botonRayo = document.getElementById('boton-rayo')
      botonAgua = document.getElementById('boton-agua')
      botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
   botones.forEach((boton) => {
       boton.addEventListener('click', (e) => {
           if (e.target.textContent === '🪨') {
               ataqueJugador.push('ROCA')
               console.log(ataqueJugador)
               boton.style.background = '#112f58'   
           } else if (e.target.textContent === '⚡') {
               ataqueJugador.push('RAYO')
               console.log(ataqueJugador)
               boton.style.background = '#112f58'
           } else {
               ataqueJugador.push('AGUA')
               console.log(ataqueJugador)
               boton.style.background = '#112f58'
           }
           ataqueAleatorioEnemigo()
       })
   })
   
   
}

function seleccionarAvatarEnemigo() {
   let avatarAleatorio = aleatorio(0, catswarrior.length -1)
   
   spanAvatarEnemigo.innerHTML = catswarrior[avatarAleatorio].nombre
   ataquesCatwarEnemigo = catswarrior[avatarAleatorio].ataque
   secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
   let ataqueAleatorio = aleatorio(0,ataquesCatwarEnemigo.length -1)
   
   if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
       ataqueEnemigo.push('ROCA')
   } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
       ataqueEnemigo.push('RAYO')
   } else {
       ataqueEnemigo.push('AGUA')
   }
   console.log(ataqueEnemigo)
   combate()
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

function crearMensaje(resultado) {


   let nuevoAtaqueJugador = document.createElement('p')
   let nuevoAtaqueEnemigo = document.createElement('p') 
   
   sectionMensajes.innerHTML = resultado
   nuevoAtaqueJugador.innerHTML = ataqueJugador
   nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

   ataqueDelJugardor.appendChild(nuevoAtaqueJugador)
   ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {


      sectionMensajes.innerHTML = resultadoFinal
   

   botonRoca.disabled = true  

   botonRayo.disabled = true  
   
   botonAgua.disabled = true


   sectionReiniciar.style.display = "block"  
}

function reiniciarJuego(){
   location.reload() 
}

function aleatorio(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)

