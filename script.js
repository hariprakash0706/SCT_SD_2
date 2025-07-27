let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const resultText = document.getElementById("resultText");

  if (isNaN(guess)) {
    resultText.textContent = "Please enter a valid number.";
    return;
  }

  if (guess < secretNumber) {
    resultText.textContent = "Too low! Try again.";
  } else if (guess > secretNumber) {
    resultText.textContent = "Too high! Try again.";
  } else {
    resultText.textContent = `🎉 Correct! The number was ${secretNumber}.`;
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("guessInput").value = "";
  document.getElementById("resultText").textContent = "";
}

