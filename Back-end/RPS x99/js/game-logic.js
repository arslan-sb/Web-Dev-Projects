// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;

//Player 2
let playerTwoMoveOneValue;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue){
    if(!moveOneType||!moveTwoType||!moveThreeType||!moveOneValue||!moveTwoValue||!moveThreeValue){
        return;
    }
    if(moveOneType==='rock'||moveOneType==='scissors'||moveOneType==='paper'){
        if(moveTwoType==='rock'||moveTwoType==='scissors'||moveTwoType==='paper'){
            if(moveThreeType==='rock'||moveThreeType==='scissors'||moveThreeType==='paper'){
                if(moveOneValue<1||moveTwoValue<1||moveThreeValue<1 || (moveOneValue+moveTwoValue+moveThreeValue) > 99){
                    return;
                }
            }
            else{
                return;
            }
        }
        else{
            return;
        }
    }
    else{
        return;
    }
    
    if(player === 'Player One'){
        if(moveOneType){
            playerOneMoveOneType=moveOneType;
        }
        if(moveOneValue){
            playerOneMoveOneValue=moveOneValue;
        }
        if(moveTwoType){
            playerOneMoveTwoType=moveTwoType;
        }
        if(moveTwoValue){
            playerOneMoveTwoValue=moveTwoValue;
        }
        if(moveThreeType){
            playerOneMoveThreeType=moveThreeType;
        }
        if(moveThreeValue){
            playerOneMoveThreeValue=moveThreeValue;
        }
    }
    else if(player === 'Player Two'){
        if(moveOneType){
            playerTwoMoveOneType=moveOneType;
        }
        if(moveOneValue){
            playerTwoMoveOneValue=moveOneValue;
        }
        if(moveTwoType){
            playerTwoMoveTwoType=moveTwoType;
        }
        if(moveTwoValue){
            playerTwoMoveTwoValue=moveTwoValue;
        }
        if(moveThreeType){
            playerTwoMoveThreeType=moveThreeType;
        }
        if(moveThreeValue){
            playerTwoMoveThreeValue=moveThreeValue;
        }
    }
}

function getRoundWinner(round){
    if (!playerOneMoveOneType || !playerOneMoveTwoType ||
        !playerOneMoveThreeType || !playerOneMoveOneValue ||
        !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
        !playerTwoMoveOneType || !playerTwoMoveTwoType ||
        !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
        !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
      return null;
    }
    if(round===1){
        if((playerOneMoveOneType==='rock'&&playerTwoMoveOneType==='scissors')||(playerOneMoveOneType==='scissors'&&playerTwoMoveOneType==='paper')
        ||(playerOneMoveOneType==='paper'&&playerTwoMoveOneType==='rock')){
            return 'Player One';
        }
        else if(playerOneMoveOneType===playerTwoMoveOneType){
            if(playerOneMoveOneValue>playerTwoMoveOneValue){
                return 'Player One';
            }
            else if(playerOneMoveOneValue===playerTwoMoveOneValue){
                return "Tie";
            }
            else{
                return "Player Two";
            }
        }
        else{
            return "Player Two";
        }
    }
    else if(round===2){
        if((playerOneMoveTwoType==='rock'&&playerTwoMoveTwoType==='scissors')||(playerOneMoveTwoType==='scissors'&&playerTwoMoveTwoType==='paper')
        ||(playerOneMoveTwoType==='paper'&&playerTwoMoveTwoType==='rock')){
            return 'Player One';
        }
        else if(playerOneMoveTwoType===playerTwoMoveTwoType){
            if(playerOneMoveTwoValue>playerTwoMoveTwoValue){
                return 'Player One';
            }
            else if(playerOneMoveTwoValue===playerTwoMoveTwoValue){
                return "Tie";
            }
            else{
                return "Player Two";
            }
        }
        else{
            return "Player Two";
        }
    }
    else if(round===3){
        if((playerOneMoveThreeType==='rock'&&playerTwoMoveThreeType==='scissors')||(playerOneMoveThreeType==='scissors'&&playerTwoMoveThreeType==='paper')
        ||(playerOneMoveThreeType==='paper'&&playerTwoMoveThreeType==='rock')){
            return 'Player One';
        }
        else if(playerOneMoveThreeType===playerTwoMoveThreeType){
            if(playerOneMoveThreeValue>playerTwoMoveThreeValue){
                return 'Player One';
            }
            else if(playerOneMoveThreeValue===playerTwoMoveThreeValue){
                return "Tie";
            }
            else{
                return "Player Two";
            }
        }
        else{
            return "Player Two";
        }
    }
    else{
        return null;
    }
}


function getGameWinner(){
    let playerOneCounter=0;
    let playerTwoCounter=0;
    for(let i=1;i<=3;i++){
        let winner=getRoundWinner(i);
        if(winner===null){
            return null;
        }
        if(winner==='Player One'){
            playerOneCounter++;
        }
        else if(winner==='Player Two'){
            playerTwoCounter++;
        }
    }
    if(playerOneCounter>playerTwoCounter){
        return 'Player One';
    }
    else if(playerOneCounter<playerTwoCounter){
        return "Player Two";
    }
    else if(playerOneCounter===playerTwoCounter){
        return 'Tie';
    }
    else{
        return null;
    }
}
let random=(min=1,max=99)=>{
    let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt;
}
 
function generateMoves(){
    let ran=random(1,3);
    if(ran===1){
        return 'rock';
    }
    else if(ran===2){
        return "paper";
    }
    else{
        return "scissors"
    }
}

let values=(min,max)=>{
    return random(min,max);
}

function setComputerMoves(){
    let max=99;
    playerTwoMoveOneType=generateMoves();
    playerTwoMoveOneValue=random(1,max);
    max-=playerTwoMoveOneValue;
    playerTwoMoveTwoType=generateMoves();
    playerTwoMoveTwoValue=random(1,max);
    max-=playerTwoMoveTwoValue;
    playerTwoMoveThreeType=generateMoves();
    playerTwoMoveThreeValue=max;
    
}