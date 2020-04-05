var startEl = document.querySelector("#start");
var timeEl = document.querySelector("#timer");
var questList = document.querySelector("#question");
var ansList = document.querySelector("#ans-list");
var ansOpt1 = document.querySelector("#ans-opt1");
var ansOpt2 = document.querySelector("#ans-opt2");
var ansOpt3 = document.querySelector("#ans-opt3");
var ansOpt4 = document.querySelector("#ans-opt4");
var answerEl = document.querySelector("#answer");
var questionSection = document.querySelector("#question-section");
var finalScoreEl = document.querySelector("#finalScore");
var submitEL = document.querySelector("#submit");
var initialText = document.querySelector("#initial-text");
var initialForm = document.querySelector("#initial-form");
var boxEL = document.querySelector("#box");
var lastEL = document.querySelector("#last");
var showHighScoreEL = document.querySelector("#showHighScore");

var timeLeft;
var timerInterval;

// Setting up timer when page is loaded
function setTime() {
  timerInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = "Timer: " + timeLeft;

    if (timeLeft === 0) {
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

//Quiz Ref:  Asset -- Demo gif
//object to save the questions and answers. Last key value is used for saving the correct answers
var quiz = {
  question: [
    "Commonly used Data types DO NOT include:",
    "The condition in an if / else statement is enclosed within:",
    "Arrays in JavaScript can be used to store:",
    "String values must be enclosed within _____ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:",
  ],
  ansOpt1: [
    "strings",
    "quotes",
    "numbers and strings",
    "commas",
    "console log",
  ],
  ansOpt2: [
    "booleans",
    "parentheses",
    "other arrays",
    "curly brackets",
    "JavaScript",
  ],
  ansOpt3: ["alerts", "curly brackets", "booleans", "quotes", "for loops"],
  ansOpt4: [
    "numbers",
    "square brackets",
    "all of the above",
    "parentheses",
    "terminal / bash",
  ],
  corrAns: ["ans-opt3", "ans-opt2", "ans-opt4", "ans-opt3", "ans-opt1"],
};

questionSection.style.display = "none";
initialText.style.display = "none";
lastEL.style.display = "none";

// calling function for displaying questions when click on start button
startEl.addEventListener("click", function () {
  startQuiz(); //calling startQuiz function
});

//start quiz upon clicking start button
function startQuiz() {
  startEl.style.display = "none";
  questionSection.style.display = "block";
  initialText.style.display = "none";
  renderQuiz();
  timeLeft = 90;
  setTime();
}

// var i = 0 is for index 0 is array. Function renderQuiz is to call out questions and 4 options from arrays
var i = 0;
function renderQuiz() {
  lastEL.style.display = "none";
  if (i < 5) {
    questList.textContent = quiz.question[i];
    ansOpt1.textContent = quiz.ansOpt1[i];
    ansOpt2.textContent = quiz.ansOpt2[i];
    ansOpt3.textContent = quiz.ansOpt3[i];
    ansOpt4.textContent = quiz.ansOpt4[i];
    checkAnswer();
    i++;
  } else {
    checkAnswer();
    questionSection.style.display = "none";

    scoreRender(); // calling scoreRender function
  }
}

var score = 0;
//defining scoreRender function for displaying final score
function scoreRender() {
  score = timeLeft;
  i = 0;
  finalScoreEl.textContent = "Your final score is  " + score;
  initialText.style.display = "block";
  stopTimer();
}

// Checking answer
function checkAnswer() {
  if (event.srcElement.id == quiz.corrAns[i - 1]) {
    answerEl.textContent = "Your answer is correct";
  } else if (i != 0) {
    answerEl.textContent = "Your answer is wrong";
    timeLeft -= 10;
  }
}

//defining object for saving score
var listInitialScore = {
  initial: [],
  scores: [],
};

//endQuiz function
function endQuiz() {
  listInitialScore.initial.push(boxEL.value.trim());
  listInitialScore.scores.push(score);

  renderHighScore();
}

//When initials is submitted
initialForm.addEventListener("submit", function (event) {
  event.preventDefault();
  endQuiz();
});

function renderHighScore() {
  initialText.style.display = "none";
  lastEL.style.display = "block";

  var p;
  showHighScoreEL.textContent = "";
  for (var j = 0; j < listInitialScore.initial.length; j++) {
    p = document.createElement("p");
    p.textContent =
      listInitialScore.initial[j] + "  " + listInitialScore.scores[j];
    showHighScoreEL.appendChild(p);
  }
}

function clearScore() {
  showHighScoreEL.textContent = "";
  listInitialScore.initial = [];
  listInitialScore.scores = [];
}
