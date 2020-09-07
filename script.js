var startButton = document.querySelector('#start-btn')
var questionContainerElement = document.querySelector('#question-container')
var questionElement = document.querySelector('#question')
var answerButtonsElement = document.querySelector('#answer-buttons')
var feedback = document.querySelector("#feedback");
var timer = document.querySelector("#timer");
var secondsLeft = 100;


startButton.addEventListener("click", startGame);


function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timer.textContent = "Time: " + secondsLeft ;
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
          }
        }, 1000);
      }



function startGame(){
        setTime();
        setQuestion();
        
};

function setQuestion(){
        for (i = 0; i < questions.length; i++){
                questionElement.textContent = questions[i].question
                answerButtonsElement.textContent = questions[i].answers.text
        }
};
 
function selectAnswer(){

}

function sendMessage(){

}

var questions = [
        {
                question: "What is JavaScript",
                answers: [
                { a1: "A programming language", correct: true },
                { a2: "fruit", correct: false },
                { a3: "Vehicle", correct: false },
                { a4: "A place", correct: false },
                ],
        },
        {
                question: "Which answer is NOT a Javascript Data type",
                answers: [
                { a1: "Number", correct: false },
                { a2: "Boolean", correct: false },
                { a3: "Object", correct: false },
                { a4: "Noun", correct: true },
                ],
        },
        {
                question: "Inside which HTML element do we put the JavaScript?",
                answers: [
                { a1: "<js>", correct: false },
                { a2: "<scripting>", correct: false },
                { a3: "<script>", correct: true },
                { a4: "<javascript>", correct: false },
                ],
        },
        {
                question: "How do you write 'Hello World' in an alert box?",
                answers: [
                { a1: "msgBox('Hellow World')", correct: false },
                { a2: "msg('Hellow World')", correct: false },
                { a3: "alert('Hellow World')", correct: true },
                { a4: "alertBox('Hellow World')", correct: false },
                ],
        },
        {
                question: "How to write an IF statement in JavaScript",
                answers: [
                { a1: "if i = 5", correct: false },
                { a2: "if (i==5)", correct: true },
                { a3: "if i = 5 then", correct: false },
                { a4: "if i == 5 then", correct: false },
                ],
        }
    
  
]