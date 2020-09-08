var startButton = document.querySelector("#start-btn");
var questionContainerElement = document.querySelector("#question-container");
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

scoreboard.textContent = "Score: " + score;

startButton.addEventListener("click", startGame);

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function startGame() {
  answerButtonsEl.style.display = "block";
  startButton.style.display = "none";
  console.log("GAME ON");
  setTime();
  currentQuestionIndex = 0;
  setQuestion();
}

function setQuestion() {
       
  if (currentQuestionIndex >= questions.length) {
    sendMessage();
    return;
  }
  var currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  console.log(currentQuestion);

  answer1.textContent = currentQuestion.answers[0].a1;
  answer1.addEventListener("click", function () {
    console.log(currentQuestion.answers[0].correct);
    if (currentQuestion.answers[0].correct) {
      score++;
      feedback.textContent = "Correct";
    } else {
      secondsLeft -= 10;
      feedback.textContent = "Wrong";
    }
    setQuestion();
  });
  answer2.textContent = currentQuestion.answers[1].a2;
  answer2.addEventListener("click", function () {
    console.log(currentQuestion.answers[1].correct);
    if (currentQuestion.answers[1].correct) {
      score++;
      feedback.textContent = "Correct";
    } else {
      secondsLeft -= 10;
      feedback.textContent = "Wrong";
    }
    setQuestion();
  });
  answer3.textContent = currentQuestion.answers[2].a3;
  answer3.addEventListener("click", function () {
    console.log(currentQuestion.answers[2].correct);
    if (currentQuestion.answers[2].correct) {
      score++;
      feedback.textContent = "Correct";
    } else {
      secondsLeft -= 10;
      feedback.textContent = "Wrong";
    }
    setQuestion();
  });
  answer4.textContent = currentQuestion.answers[3].a4;
  answer4.addEventListener("click", function () {
    console.log(currentQuestion.answers[3].correct);
    if (currentQuestion.answers[3].correct) {
      score++;
      feedback.textContent = "Correct";
    } else {
      secondsLeft -= 10;
      feedback.textContent = "Wrong";
    }
    setQuestion();
  });
  
  currentQuestionIndex++;
}

function selectAnswer() {}

function sendMessage() {}


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
];
