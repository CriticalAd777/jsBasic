'use strict';
// document.getElementsByClassName('spinWheel')[0].addEventListener("click",function(e){
//     e.target.style.transform = 'rotate('+Math.random()*1000 +'rad)';

//     return false;
// });

const INITIAL_TRIES = 6;
const QUESTIONS_ANSWERS = [
    [
        "Vopros 1", "otvetRaz"
    ],
    [
        "Vopros 2", "otvetZwei"
    ],
    [
        "Vopros 3", "otvetShalosh"
    ]
];
const answerElement = document.querySelector(".word-guess");
const questionElement = document.querySelector(".current-answer");
const messageOfTriesElement = document.querySelector(".guess-trials");
let isGameOver = false;
let currentTries = INITIAL_TRIES;

let currentQuestion;
let currentAnswer;

startGame();

function startGame() {
    let index = Math.floor(Math.random() * QUESTIONS_ANSWERS.length);

    currentQuestion = QUESTIONS_ANSWERS[index][0];
    currentAnswer = QUESTIONS_ANSWERS[index][1];

    questionElement.innerHTML = currentQuestion;
    const arrCurrentAnswer = Array.from(currentAnswer);

    answerElement.innerHTML = buildCellsByAnswer(arrCurrentAnswer);
    const answerCellsElements = document.querySelectorAll(".letter-guess");

    arrCurrentAnswer.forEach((l,i) => {
        answerCellsElements[i].innerHTML = l;
     } );

     

    // answerCellsElements[0].innerHTML = 'n';
    // answerCellsElements[1].innerHTML = 'i';
    // answerCellsElements[2].innerHTML = 'g';
    // answerCellsElements[3].innerHTML = 'e';
    // answerCellsElements[4].innerHTML = 'r';

    // word = words[index];
    // trials = INITIAL_TRIALS
    // showTrialsMessage(trials);
    // gameOverElement.innerHTML ='';
    // playAgainElement.style.display='none';
    // letterElements.forEach(e => e.innerHTML='');
    // flGameOver = false;
}

function buildCellsByAnswer(arrCurrentAnswer) {
    let res = arrCurrentAnswer.map(letter => `<div class="letter-guess">${letter}</div>`);
    return res.join('');
}