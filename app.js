const prompt = require("prompt-sync")({ sigint: true });

let opcionUsuario;
let opcionPc;
const opciones = ['piedra','papel','tijera'];
let ganador;

function pedirOpcion(){
    const numero = parseInt(prompt('Elija piedra(1), papel(2) o tijera(3)'));
    opcionUsuario = opciones[numero - 1];
}

function elegirOpcion(){
    const random = Math.random() * 3;
    opcionPc = opciones[random];
}

function calcularGanador(){
    switch (opcionUsuario){
        case opcionPc:
            ganador = 'ninguno :/';
            break;
        case 'piedra':
            if( opcionPc == 'tijera'){
                ganador = 'Usuario :)';
            }else{
                ganador = 'PC :(';
            }
            break;
        
        case 'papel':
            if( opcionPc == 'piedra'){
                ganador = 'Usuario :)';
            }else{
                ganador = 'PC :(';
            }
            break;
        case 'tijrts':
            if( opcionPc == 'papel'){
                ganador = 'Usuario :)';
            }else{
                ganador = 'PC :(';
            }
            break;        
    }
}

function mostrarGanador(){
    alert('Usted eligió '+ opcionUsuario + ' y la pc ' + opcionPc +'. El ganador es '+ ganador)
}


pedirOpcion();
elegirOpcion();
calcularGanador();
mostrarGanador();

// do while --> ronda de 3 partidas.
