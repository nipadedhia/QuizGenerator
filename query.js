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

//Questions for Quiz Ref:  https://www.w3docs.com/quiz/javascript-basicvar
var questions =
    ["How you can Write "Hello W3docs" with alert ?",
    "How we can call myFunction function in javascript ?",
    "Which is correct way to use "If" in javascript ?",
    "Which is the correct way to use comment in Javascript?",
    "Javascript is the same as Java ?"
    ];

var choices1 = ["alertBox("Hello W3docs");", " alert("Hello W3docs");", "alemsg("Hello W3docs")", "msgBox("Hello W3docs")"];

var choices2 = ["call function myFunction(...)", "funcall myFunction(...)", "myFunction(...)", "call myFunction(...)"];

var choices3 = [" (if ...){...}", " if(...){...}", "call if (...) {...}", "if()"];

var choices4 = ["{# ... #}", "<!--- .... ---!>", "// ....", "\\ ..."];

var choices5 = ["Yes", "No", "Maybe", "Not sure"];