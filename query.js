var startEL = document.querySelector("#start");
var timeEl = document.querySelector("#timer");
var questionEl = document.querySelector("#quiz");
var optionsEL = document.querySelector("#option1");

var timeLeft = 90;

// Start Quiz -- when click on Start button
startEL.addEventListener("click", function () {
  event.preventDefault();
  startEL.style.display = "none";
});

// Setting up timer when page is loaded

function setTime() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = "Timer: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//Calling timer function
setTime();

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
  corrAns: ["ansOpt3", "ansOpt2", "ansOpt4", "ansOpt3", "ansOpt1"],
};
