

const guessedLetters = document.querySelector('.guessed-letters');
const button = document.querySelector('.guess');
const inputLetter = document.querySelector('.letter');
const wordInProgress = document.querySelector('.word-in-progress');
const remainingGuesses = document.querySelector('.remaining');
const span = document.querySelector('span');
const message = document.querySelector('.message');
const hiddenButton = document.querySelector('.play-again hide');

const word = "magnolia";
const lettersGuessed = [];

const updateWordProgress = function (word) {
  const updatedWord = word.split('').map(l => { return '●' });
  wordInProgress.innerText = updatedWord.join('');
};
updateWordProgress(word);

button.addEventListener('click', function (e) {
  e.preventDefault();
  const inputLetterValue = inputLetter.value;
  message.innerText = '';
  const inputCheckResult = inputCheck(inputLetterValue);
  if (inputCheckResult) {
    makeGuess(inputLetterValue);
  };
  inputLetter.value = '';

});

const inputCheck = function (input) {
  const acceptLeter = /[a-zA-Z]/;
  if (!input) {
    message.innerText = 'Please enter a value.';
  } else if (input.length > 1) {
    message.innerText = 'Please only enter one letter.';
  } else if (input.match(acceptLeter) === null) {
    message.innerText = 'Enter a letter from A to Z.';
  } else {
    return input;
  };
};

const makeGuess = function (letter) {
  const letterToUpper = letter.toUpperCase();
  if (lettersGuessed.includes(letterToUpper)) {
    message.innerText = "You've already guessed this letter.";
  } else {
    lettersGuessed.push(letterToUpper);
  };
};