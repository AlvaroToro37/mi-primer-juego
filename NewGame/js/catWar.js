
function iniciarJuego(){
    let botonAvatarJugador = document.getElementById('seleccionar-avatar')
    botonAvatarJugador.addEventListener('click' , seleccionarAvatarJugador)
}

function seleccionarAvatarJugador(){
    let inputCatrock = document.getElementById('Catrock')
    let inputLightningcat = document.getElementById('Lightningcat')
    let inputCatoola = document.getElementById('Catoola')
    let botonseleccionaravatar = document.getElementById('seleccionar-avatar')
    let spanavatarjugador = document.getElementById('avatar-jugador')

     if(inputCatrock.checked){
        spanavatarjugador.innerHTML = 'Catrock'
     }else if(inputLightningcat.checked){
      spanavatarjugador.innerHTML = 'Lightningcat'
     }else if(inputCatoola.checked){
      spanavatarjugador.innerHTML = 'Catoola'
     }else {
        alert('Selecciona avartar')
     }
         
     seleccionarAvatarEnemigo()
}

function seleccionarAvatarEnemigo(){
   let avatarAleatorio= aleatorio(1,3)
   let spanAvatarEnemigo= document.getElementById('Avatar-Enemigo')

      if(avatarAleatorio == 1) {
      spanAvatarEnemigo.innerHTML = 'Catrock'
   } else if(avatarAleatorio == 2) {
      spanAvatarEnemigo.innerHTML = 'Lightningcat'
   } else { 
      spanAvatarEnemigo.innerHTML = 'Catoola'
   }
}

function aleatorio(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)
