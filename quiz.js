function checkAnswer() {
  let correctAnswer = "4";
  let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

  if (userAnswer == correctAnswer) {
    document.querySelector("#feedback").textContent = "Correct! Well done.";
  } else {
    document.querySelector("#feedback").textContent =
      "That's incorrect. Try again!";
  }
  console.log(userAnswer);
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
