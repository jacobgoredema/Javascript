let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function () {
    if (e.target.className === 'play-again') {
        window.location.reload();

    }
    console.log(1);

})

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');

    }

    // check if won
    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, YOU WON!`);

    } else {
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);

        } else {
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);

        }
    }
});

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg);

    // Play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

}

function setMessage(msg, color) {
    message.getElementsByClassName.color = color;
    message.textContent = msg;

}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}