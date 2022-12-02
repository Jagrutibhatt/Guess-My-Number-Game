'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Number is correct';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔No Number';
    displayMessage('⛔No Number');
    // When the number is correct
  } else if (guess == secretNumber) {
    // document.querySelector('.message').textContent =
    //   'Congratulation 🎉 correct number';
    displayMessage('Congratulation 🎉 correct number');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When the number is high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Number is high. Try again!'
          : 'Number is low. Try again!'
      );
      // document.querySelector('.message').textContent =
      //   score > secretNumber
      //     ? 'Number is high. Try again!'
      //     : 'Number is low. Try again!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the Game!');
      // document.querySelector('.message').textContent = 'You lost the Game!';

      document.querySelector('.score').textContent = 0;
    }
  }
});

//   (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         'Number is high. Try again!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the Game!';
//       document.querySelector('.score').textContent = 0;
//     }

//     // when the number is low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         'Number is low. Try again!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the Game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  // const secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.number').textContent = '?';
  // const newGuess = Number(document.querySelector('.guess').value);
});
