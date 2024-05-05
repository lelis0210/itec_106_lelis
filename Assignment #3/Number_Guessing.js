const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    attempts++;

    const userGuess = parseInt(document.getElementById('guessInput').value);
  
    const message = document.getElementById('message');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        message.textContent = 'Invalid input: Please Input number between 1 - 10';
        message.style.color = 'black';
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts!`;
        message.style.color = 'green';
        document.getElementById('guessInput').disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try a higher number.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Too high! Try a lower number.';
        message.style.color = 'red';
    }

    document.getElementById('guessInput').value = '';
}