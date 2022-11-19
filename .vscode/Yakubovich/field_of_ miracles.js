'use strict';
const HIDDEN_BACKGROUND_COLOR = "black";
const FOUND_BACKGROUND_COLOR = "white";
const INITIAL_TRIES = 6;
const QUESTIONS_ANSWERS = [
    [
        "Vopros", "otvet"
    ],
    [
        "Sheila", "tshuva"
    ],
    [
        "Question", "answer"
    ]
];
const answerElement = document.querySelector(".word-guess");
const questionElement = document.querySelector(".current-answer");
const messageOfTriesElement = document.querySelector(".guess-trials");
const gameOverMessageElement = document.querySelector(".game-over-message");
const playAgainElement = document.getElementById("play-again");

let isGameOver;
let currentTries;
let currentQuestion;
let currentAnswer;
let currentTry;
let closedCellsCounter;
let answerCellsElements;
let lastUsedQuestionAnswerIndex = -1;

startGame();

function startGame() {
    isGameOver = false;
    playAgainElement.style.display='none';
    gameOverMessageElement.innerHTML = "";

    currentTry = INITIAL_TRIES;
    showTrialsMessage();
    

    let index = getQuestionAnswerIndex();

    currentQuestion = QUESTIONS_ANSWERS[index][0];
    currentAnswer = QUESTIONS_ANSWERS[index][1];

    questionElement.innerHTML = currentQuestion;
    const arrCurrentAnswer = Array.from(currentAnswer);
    closedCellsCounter = currentAnswer.length;

    answerElement.innerHTML = buildCellsByAnswer(arrCurrentAnswer);
    answerCellsElements = document.querySelectorAll(".letter-guess");
    answerCellsElements.forEach(element => {
        element.style.background = HIDDEN_BACKGROUND_COLOR;              
    });

    arrCurrentAnswer.forEach((l,i) => {
        answerCellsElements[i].innerHTML = l;
     } );

}

function getQuestionAnswerIndex(){
    let index;
    do {
        index = Math.floor(Math.random() * QUESTIONS_ANSWERS.length);
    } while (index == lastUsedQuestionAnswerIndex);
    lastUsedQuestionAnswerIndex = index;
    return index;
}

function showTrialsMessage() {  
    messageOfTriesElement.innerHTML = 
        `remained ${currentTry} guess trials`;
}

function isTheWordAcceptable(wordInputed){
    if(!isNaN(wordInputed)){
        alert(`The answer should not contain numbers`);
        return false;
    }

    if(wordInputed.length != currentAnswer.length){
        alert(`The answer should contain ${currentAnswer.length} letters`);
        return false;
    }

    return true;
}

function checkSameLetters(wordInputed){
    answerCellsElements
    .forEach(element => {
        if(element.style.background == HIDDEN_BACKGROUND_COLOR){
            let elementLetter = element.innerHTML;
            if (wordInputed.toLowerCase().includes(elementLetter.toLowerCase())){
                element.style.background = FOUND_BACKGROUND_COLOR;
                closedCellsCounter--;
            }  
        }                 
    });
}

function gameOver(isWin){
    if (isWin) {
        gameOverMessageElement.innerHTML =  "WINNER";
        gameOverMessageElement.style.color = "green";
    } else {
        gameOverMessageElement.innerHTML =  "LOSER";
        gameOverMessageElement.style.color = "red";
    }
   
   playAgainElement.style.display='block';
   messageOfTriesElement.innerHTML = '';
   isGameOver = true;
}

function removeTry(){
    currentTry--;
    showTrialsMessage();
    if(currentTry == 0){
        gameOver(false);
        alert("LOSE");
    }
}

function onChange(event) {
    if (isGameOver) {
        alert("The game is already over");
    }
    else{
        const wordInputed = event.target.value;
        if(isTheWordAcceptable(wordInputed)){
            checkSameLetters(wordInputed);
            if(closedCellsCounter == 0){
                gameOver(true);
                alert("WIN");
            }
            else{
                removeTry();
            }
        }
        else{
            removeTry();
        }  
    }  
}

function buildCellsByAnswer(arrCurrentAnswer) {
    let res = arrCurrentAnswer.map(letter => `<div class="letter-guess">${letter}</div>`);
    return res.join('');
}