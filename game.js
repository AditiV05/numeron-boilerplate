document.addEventListener("DOMContentLoaded", () => {
  const number1Element = document.getElementById("number1");
  const number2Element = document.getElementById("number2");
  const timerElement = document.getElementById("timer");

  let score = 0;
  let timeRemaining = 30;

  const generateNumbers = () => {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;
    number1Element.textContent = number1;
    number2Element.textContent = number2;
  };

  generateNumbers();

  const checkGuess = (operator) => {
    const number1 = parseInt(number1Element.textContent, 10);
    const number2 = parseInt(number2Element.textContent, 10);
    let result = false;
    if (operator === "greater") {
      result = number1 > number2;
    } else if (operator === "equal") {
      result = number1 === number2;
    } else if (operator === "lesser") {
      result = number1 < number2;
    }

    if (result) {
      score += 10;
    }

    generateNumbers();
  };

  document
    .getElementById("greater-than")
    .addEventListener("click", () => checkGuess("greater"));
  document
    .getElementById("equal-to")
    .addEventListener("click", () => checkGuess("equal"));
  document
    .getElementById("lesser-than")
    .addEventListener("click", () => checkGuess("lesser"));

  const updateTimer = () => {
    timerElement.textContent = `Time: ${timeRemaining}s`;
    if (timeRemaining > 0) {
      timeRemaining--;
    } else {
      clearInterval(timerInterval);
      window.location.href = `./gameover.html?score=${score}`;
    }
  };

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
});
