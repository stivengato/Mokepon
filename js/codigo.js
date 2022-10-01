function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
       resultado = "Piedra 👊"
    } else if(jugada == 2) {
       resultado = "Papel 📄"
    } else if(jugada == 3) {
       resultado = "Tigera ✂"
    } else {
       resultado = "Mal Elegido"
    }
    return resultado
}

// 1 es piedra, 2 es papel, 3 es tigera
let jugador = 0
let Pc = 0
let trionfos = 0
let perdidas = 0

while (trionfos < 3 && perdidas < 3) {
    Pc = aleatorio(1,3)
    jugador = prompt("Elige: 1 papa piedra, 2 para papel, 3 para tigera")
    //alert("Eligiste " + jugador)
    alert("Pc elige: " + eleccion(Pc))
    alert("Tu eliges: " + eleccion(jugador))

    // COMBATE
    if(Pc == jugador) {
        alert("Empate")
    } else if(jugador == 1 && Pc == 3) {
        alert("Ganaste")
        trionfos = trionfos + 1
    } else if(jugador == 2 && Pc == 1) {
        alert("Ganaste")
        trionfos = trionfos + 1
    } else if(jugador == 3 && Pc == 2) {
        alert("Ganaste") 
        trionfos = trionfos + 1  
    } else {
        alert("Perdiste")
        perdidas = perdidas + 1
    }
}

alert("Ganastes " + trionfos + " veces. Perdistes " + perdidas + " veces.")