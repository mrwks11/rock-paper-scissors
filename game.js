// Starting scores
let playerScore = 0;
let computerScore = 0;

// Select a random input for the computer
function computerPlay() {
    computerSelection = ['rock', 'paper', 'scissors'];
    return computerSelection[Math.floor(Math.random()*computerSelection.length)];
}

// Start a game round
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      console.log('You chose ' + playerSelection);
      console.log('The computer chose ' + computerSelection);
      console.log('So it is a tie!');
      console.log('The current score = You: ' + playerScore + ' - Computer: ' + computerScore);
      console.log('--------------');
    } else if ((computerSelection == 'rock' && playerSelection == 'paper') || (computerSelection == 'paper' && playerSelection == 'scissors') || (computerSelection == 'scissors' && playerSelection == 'rock')) {
      console.log('You chose ' + playerSelection);
      console.log('The computer chose ' + computerSelection);
      console.log('You Win! Because ' + playerSelection + ' beats ' + computerSelection);
      playerScore = playerScore + 1;
      console.log('The current score = You: ' + playerScore + ' - Computer: ' + computerScore);
      console.log('--------------');
    } else {
      console.log('You chose ' + playerSelection);
      console.log('The computer chose ' + computerSelection);
      console.log('You Lose! Because ' + computerSelection + ' beats ' + playerSelection);
      computerScore = computerScore + 1;
      console.log('The current score = You: ' + playerScore + ' - Computer: ' + computerScore);
      console.log('--------------');
    }
}


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    })
});


/*

    // The Rock, Paper, Scissors Game
    function game() {

        // Play the game 5 times in total
        for (let i = 1; i <= 5; i++) {
          let playerSelection = prompt('Rock, Paper or Scissors?');
          playerSelection = playerSelection.toLowerCase();
          const computerSelection = computerPlay();

          // In case the user writes an invalid input
          if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
            playRound(playerSelection, computerSelection);
          } else {
            console.log('You did not enter Rock, Paper or Scissors. The game ends, try again!');
            break;
				  }
        }

        // Display the final result
        if (playerScore > computerScore) {
          console.log('The final score = You: ' + playerScore + ' - Computer: ' + computerScore);
          console.log('You win the game, congratulations!');
        } else if (playerScore < computerScore) {
          console.log('The final score = You: ' + playerScore + ' - Computer: ' + computerScore);
          console.log('You lose the game, try again!');
        } else {
          console.log('The final score = You: ' + playerScore + ' - Computer: ' + computerScore);
          console.log('It is a tie, try again!');
        }

    }

    game();

    */