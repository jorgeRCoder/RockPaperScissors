//create random variable rock papaer scissor of computer
//create array of options and use random choose
let options= ['Rock', 'Paper', 'Scissors']
function ComputerPlay(){
    let computerSelection = options[Math.floor(Math.random()*3)];
    return computerSelection;
}
//create variable from user


function playRound(computerSelection , player){

    player =CapitalizeAll(player);
    if(computerSelection === player)return 'tie';
    else if (computerSelection === 'Rock'     && player === 'Paper'
          || computerSelection === 'Paper'    && player === 'Scissors'
          || computerSelection === 'Scissors' && player === 'Rock'){
            return `you win! ${player} beats ${computerSelection}`
        }
    else if(computerSelection === 'Rock' && player === 'Scissors'
         || computerSelection === 'Paper'    && player === 'Rock'
          || computerSelection === 'Scissors' && player === 'Paper'){
            return `you loose :( ${computerSelection} beats ${player}`
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

for(let i=0; i<5;i++)
{
    let player2 =prompt(`enter options from: ${options}`)
    let computerSelection=ComputerPlay();
    console.log(`computer vs player: ${computerSelection} vs ${CapitalizeAll(player2)} = ${playRound(computerSelection,player2)}`);
}

