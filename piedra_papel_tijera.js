const prompt = require("prompt-sync")({ sigint: true });

let usarioPersona = [];
let usarioPc = [];
let ganadorRonda = [];
//Pc selecciona un número random.
function opcionRandom(){
    let opcionPc = parseInt(Math.random() * 3);
    return opcionPc;
}
//empate
function empate(){
    console.error('Empate, esta ronda no tiene ganador :) ');
}

//Switch para ver quién gana cada ronda
function calcularGanador(){
    switch(usarioPersona[ronda]){
        //piedra
        case 0 : if (usarioPc[ronda] == 2){
            ganadorRonda.push(1);
            console.log("Ganador usuario");
        }else{
            if(usarioPc[ronda] == 1 ){
                ganadorRonda.push(2);
                console.log("Ganador PC");
            }
        }
        break;
        //papel
        case 1: if (usarioPc[ronda] == 0) {
            ganadorRonda.push(1);
            console.log("Ganador usuario");
        }else{ 
            if(usarioPc[ronda] == 2){
                ganadorRonda.push(2);
                console.log("Ganador PC");
            }
        }
        break;
    //tijera
        case 2: if (usarioPc[ronda] == 0) {
            ganadorRonda.push(2);
            console.log("Ganador PC");
            }else if(usarioPc[ronda] == 1){
                ganadorRonda.push(1);
                console.log("Ganador usuario");
            }
            break;
        }
    }
    //Definir quién es el ganador
function ganador(){

    const obj = {};
    // console.log("ganadores " + ganadorRonda);
    ganadorRonda.forEach(number =>{
        if(!obj[number]){
        obj[number] = 1;
        }else{
        obj[number] +=1;
        }
        }); 

    // console.log(obj);
    let numMayor = 0; 
    let mayorKey = 2;
    for( let o in obj){
        const value = obj[o];
        if(  value > numMayor){
            numMayor = value;
            mayorKey = o;
        }
    }
    // console.log("Ganador " + numMayor);
    if(numMayor == 2){
        return "PC"
    }else if(numMayor == 1){
        return "Usuario"
    }else{
        return "Empate"
    }
}

let ronda = parseInt(prompt("Ingrese la cantidad de veces que desea jugar : "));

do{
    // usuario elige una opcion por turno y la guarda en un array.
    //let opcionPersona = parseInt(prompt("Por favor Ingrese un número 0) Piedra 1) Papel 2) Tijera : "));
    do{
        opcionPersona = parseInt(prompt("Vamos a Jugar "+ ronda + " vueltas. Elegí:  0) Piedra 1) Papel 2) Tijera : "));
    }while(opcionPersona > 2);
    usarioPersona.push(opcionPersona);

    console.log("El usuario eligio : " + opcionPersona);

    // opcion pc 
    let opcionComputador = opcionRandom();
    usarioPc.push(opcionComputador);
    console.log("La PC  eligio : " + opcionComputador);

    // Cambia de ronda
    if(opcionComputador == opcionPersona){
        empate();
    }else{
       calcularGanador();
    }
    ronda --;
}
while( ronda != 0 )

//comparo los resultados
console.log("<-----RESUMEN RESPUESTAS ------>");

console.log("Respuestas Usuario : " + usarioPersona);
console.log("Respuestas PC : " + usarioPc);

console.log("<-----GANADOR ------>");

let ganadorFinal =  ganador();

console.log("El usuario ganador es " + ganadorFinal);