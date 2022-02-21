let options= ['Rock', 'Paper', 'Scissors']
function ComputerPlay(){
    let computerSelection = options[Math.floor(Math.random()*3)];
    return computerSelection;
}
let winsPc=0;
let winsPlayer=0;

function playRound(event){
    let computerSelection =ComputerPlay() ;
    let player = event.target.innerText;
    let tie =`${player} vs ${computerSelection} is Tie`;
    let win =`${player} beats ${computerSelection}`;
    let loose =`${player} losses to ${computerSelection}`;
    
    player =CapitalizeAll(player);
    if(winsPc === 5 || winsPlayer === 5){
        winsPc=0;
        winsPlayer=0;
    }
    
    if(computerSelection === player)return `${tie} = score: pc-${winsPc} player-${winsPlayer}`;
    else if (computerSelection === 'Rock'     && player === 'Paper'
          || computerSelection === 'Paper'    && player === 'Scissors'
          || computerSelection === 'Scissors' && player === 'Rock'){

              if(winsPlayer === 4) return `${win} = score: pc-${winsPc} player-${++winsPlayer} Player wins!!`;
              else return `${win} = score: pc-${winsPc} player-${++winsPlayer}`
            
        }
    else if(computerSelection === 'Rock' && player === 'Scissors'
         || computerSelection === 'Paper'    && player === 'Rock'
          || computerSelection === 'Scissors' && player === 'Paper'){
              if(winsPc === 4)return `${loose} = score: pc-${++winsPc} player-${winsPlayer} pc wins:(`;
              else return `${loose} = score: pc-${++winsPc} player-${winsPlayer} `;            
        }         
}

function CapitalizeAll(option){
    let capitalized='';
    switch(option[0]){
        case 'R':
        case 'r':
            capitalized = options[0];
            break;
        case 'P':
        case 'p':
            capitalized = options[1];
            break;
        case 'S':
        case 's':
            capitalized = options[2];
            break;
        default:
            capitalized = 'enter valid input'               
    }
    return capitalized
}

const output= document.querySelector('.result');
const result =document.createElement('div');
const count2 =document.createElement('div');

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click',()=> result.innerText=(playRound(event)));
});

output.appendChild(result);