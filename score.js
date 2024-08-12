document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const score = params.get("score");
  const scoreBoardElement = document.getElementById("score-board");

  scoreBoardElement.textContent = score;

  const playAgainButton = document.getElementById("play-again-button");
  playAgainButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
});
