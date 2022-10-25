let cantidadJugadas = prompt('¿Cuántas veces quieres jugar?')
let player = 'X'
let computer = '0'
let playerWins = 0;
let computerWins = 0;

const combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

game(cantidadJugadas, player)

function game(cant){

    player = prompt('¿Con que quieres jugar "X" o "0"?');

    if(player === 'x' || player === 'X'){
        alert('¡EMPIEZAS TÚ!');
    }else{
        alert('¡EMPIEZA LA COMPUTADORA!')
    }

    for(let i=0; i < cant ; i++){
        alert('Jugada número: ' + (i+1) + '\n');
    }
}