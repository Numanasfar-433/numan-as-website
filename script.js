'use strict';

const btns = document.querySelectorAll('.btn-player');
const showResult = document.querySelector('.show-winner');
const winsEl = document.querySelector('.wins span');
const loseEl = document.querySelector('.loses span');
const drawEl = document.querySelector('.draw span');
const resetBtn = document.querySelector('.btn-reset');

let userEnter = '';
let randomNumber;
let wins;
let loses;
let draw;

function initialValues(){
    wins = 0;
    loses = 0;
    draw = 0;
    winsEl.textContent = 0;
    loseEl.textContent = 0;
    drawEl.textContent = 0;
    showResult.textContent = "";
}
initialValues();

const computerM = function(){
    let computerMove;
    if(randomNumber === 1){
        computerMove = "Rock";
    } else if(randomNumber === 2){
        computerMove = "Paper";
    } else{
        computerMove = "Scissors";
    }
    return computerMove;
}

function whoWins(computer){
    let result = '';
    if(computer === userEnter){
        result = `${showMessage(userEnter,computer)} It's tie`;
        draw += 1;
    } else if((computer === "Paper" && userEnter === "Scissors") ||
      (computer === "Rock" && userEnter === "Paper") || 
      (computer === "Scissors" && userEnter === "Rock")){
        result =`${showMessage(userEnter,computer)} You win!`;
        wins += 1;
    } else{
        result = `${showMessage(userEnter,computer)} You lose!`;
        loses += 1;
    } 
    return result;
}
    


btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        userEnter = btn.textContent;
        randomNumber = Math.trunc(Math.random() * 3 + 1);
        const computer = computerM();
        showResult.textContent = whoWins(computer);
        updateScoreboard();
    });
});

function updateScoreboard(){
    winsEl.textContent = wins;
    loseEl.textContent = loses;
    drawEl.textContent = draw;
}

resetBtn.addEventListener('click', function(){
    initialValues();
})

function showMessage(user,computer){
    return `You choose ${user} computer choose ${computer}`;
}