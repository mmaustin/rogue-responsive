

const guessedLetters = document.querySelector('.guessed-letters');
const button = document.querySelector('.guess');
const inputLetter = document.querySelector('.letter');
const wordInProgress = document.querySelector('.word-in-progress');
const remainingGuesses = document.querySelector('.remaining');
const span = document.querySelector('span');
const message = document.querySelector('.message');
const hiddenButton = document.querySelector('.play-again hide');

const word = "magnolia";

const updateWordProgress = function (word) {
  const updatedWord = word.split('').map(l => { return '● ' });
  wordInProgress.innerText = updatedWord.join('');
};
updateWordProgress(word);

button.addEventListener('click', function (e) {
  e.preventDefault();
  const inputLetterValue = inputLetter.value;
  console.log(inputLetterValue);
});
