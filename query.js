var startEL = document.querySelector("#start");
var timeEl = document.querySelector("#timer");
var questionEl = document.querySelector("#questions");
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

