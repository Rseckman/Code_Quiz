var startButton = document.querySelector("#start-btn");
var questionContainerEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerButtonsEl = document.querySelector("#answer-buttons");
var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var answer4 = document.querySelector("#a4");
var feedback = document.querySelector("#feedback");
var timer = document.querySelector("#timer");
var scoreboard = document.querySelector("#score");
var secondsLeft = 100;
var score = 0;
var currentQuestionIndex; 
var timerInterval;
var leaderBoardbtn = document.querySelector("#leader-btn");
var submitButton = document.querySelector("#submit-btn");
var storedScores = document.createElement("p");
var lastPlayer = localStorage.getItem("player");
var lastScore = localStorage.getItem("finalScore");


leaderBoardbtn.addEventListener("click", leaderboardButtonLogic);

startButton.addEventListener("click", startGame);

function setTime() {
    timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
};

function startGame() {
  storedScores.textContent = ""
  leaderBoardbtn.style.display = "none"
  answerButtonsEl.style.display = "block";
  startButton.style.display = "none";
  console.log("GAME ON");
  setTime();
  currentQuestionIndex = 0;
  setQuestion();
};


function setQuestion() {  
  if (currentQuestionIndex >= questions.length) {
    sendMessage();
    return;
  }

  scoreboard.textContent = "Score: " + score;

  var currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  console.log(currentQuestion);

  function button1Logic() {
    console.log(currentQuestion.answers[0].correct);
    if (currentQuestion.answers[0].correct) {
      score++;
      feedback.textContent = "Correct";
    } else {
      secondsLeft -= 10;
      feedback.textContent = "Wrong";
    }
    

    answer1.removeEventListener('click', button1Logic);
    answer2.removeEventListener('click', button2Logic);
    answer3.removeEventListener('click', button3Logic);
    answer4.removeEventListener('click', button4Logic);

    setQuestion();
  }

  answer1.textContent = currentQuestion.answers[0].a1;
  answer1.addEventListener("click", button1Logic);


  function button2Logic() {
    console.log(currentQuestion.answers[1].correct);
    if (currentQuestion.answers[1].correct) {
      score++;
      feedback.textContent = "Correct";
    } else {
      secondsLeft -= 10;
      feedback.textContent = "Wrong";
    }
    

    answer1.removeEventListener('click', button1Logic);
    answer2.removeEventListener('click', button2Logic);
    answer3.removeEventListener('click', button3Logic);
    answer4.removeEventListener('click', button4Logic);

    setQuestion();
  }

  answer2.textContent = currentQuestion.answers[1].a2;
  answer2.addEventListener("click", button2Logic);


  function button3Logic() {
    console.log(currentQuestion.answers[2].correct);
    if (currentQuestion.answers[2].correct) {
      score++;
      feedback.textContent = "Correct";
    } else {
      secondsLeft -= 10;
      feedback.textContent = "Wrong";
    }
    

    answer1.removeEventListener('click', button1Logic);
    answer2.removeEventListener('click', button2Logic);
    answer3.removeEventListener('click', button3Logic);
    answer4.removeEventListener('click', button4Logic);

    setQuestion();
  }

  answer3.textContent = currentQuestion.answers[2].a3;
  answer3.addEventListener("click", button3Logic);

  function button4Logic() {
    console.log(currentQuestion.answers[3].correct);
    if (currentQuestion.answers[3].correct) {
      score++;
      feedback.textContent = "Correct";
    } else {
      secondsLeft -= 10;
      feedback.textContent = "Wrong";
    }
    
    answer1.removeEventListener('click', button1Logic);
    answer2.removeEventListener('click', button2Logic);
    answer3.removeEventListener('click', button3Logic);
    answer4.removeEventListener('click', button4Logic);

    setQuestion();
  }
  
  answer4.textContent = currentQuestion.answers[3].a4;
  answer4.addEventListener("click", button4Logic);
  
  console.log(currentQuestionIndex)
  currentQuestionIndex++;
};

function sendMessage() {
  var finalScore = parseInt(score + secondsLeft);
  var newEl = document.createElement("h2");
  submitButton.style.visibility = "visible";
  answerButtonsEl.style.display = "none";
  scoreboard.style.display = "none";
  questionEl.style.color = "Orange"
  questionEl.textContent="You have completed the quiz!  Submit your score to our leaderboard!";
  newEl.textContent= "You scored a: " + finalScore;
  clearInterval(timerInterval);
  questionContainerEl.appendChild(newEl);
  feedback.remove()
  localStorage.setItem("finalScore", finalScore);
  submitButton.addEventListener("click", submitButtonLogic);
}


function submitButtonLogic(){
  var player = prompt("enter initials");
  localStorage.setItem("player", player);
  questionEl.style.display = "none";
  leaderBoardbtn.style.display = "block";

}


function leaderboardButtonLogic(){
  var leaderEl = document.createElement("h3");
  questionContainerEl.appendChild(leaderEl);
  storedScores.textContent = lastPlayer + ": " + lastScore;
  questionContainerEl.appendChild(storedScores);
  submitButton.style.visibility = "hidden";
  
}

var questions = [
  {
    question: "What is JavaScript?",
    answers: [
      { a1: "A programming language", correct: true },
      { a2: "fruit", correct: false },
      { a3: "Vehicle", correct: false },
      { a4: "A place", correct: false },
    ],
  },
  {
    question: "Which answer is NOT a Javascript Data type?",
    answers: [
      { a1: "Number", correct: false },
      { a2: "Boolean", correct: false },
      { a3: "Object", correct: false },
      { a4: "Noun", correct: true },
    ],
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { a1: "msgBox('Hello World')", correct: false },
      { a2: "msg('Hello World')", correct: false },
      { a3: "alert('Hello World')", correct: true },
      { a4: "alertBox('Hello World')", correct: false },
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
    question: "How does a FOR loop start?",
    answers: [
      { a1: "for (i = 0; i <= 5)", correct: false },
      { a2: "for (i = 0; i <= 5; i++)", correct: true },
      { a3: "for i = 1 to 5", correct: false },
      { a4: "for (i <= 5; i++)", correct: false },
    ],
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: [
      { a1: "*", correct: false },
      { a2: "-", correct: false },
      { a3: "=", correct: true },
      { a4: "x", correct: false },
    ],
  },
  {
    question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    answers: [
      { a1: "if (i !=5)", correct: true },
      { a2: "if (i <> 5)", correct: false },
      { a3: "if i =! 5 then", correct: false },
      { a4: "if i <> 5", correct: false },
    ],
  },
];
