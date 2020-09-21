// Starting scores
let playerScore = 0;
let computerScore = 0;

// check number of rounds status
function checkScore() {

    if (playerScore === 5) {

        content.classList.add('content');
        content.textContent = `The final score is... \r\nYOU: ${playerScore} - Computer: ${computerScore} \r\nYOU WIN!`;
        results.appendChild(content);
        playerScore = 0;
        computerScore = 0;

    } else if (computerScore === 5) {

        content.classList.add('content');
        content.textContent = `The final score is... \r\nYOU: ${playerScore} - Computer: ${computerScore} \r\nYOU LOSE!`;
        results.appendChild(content);
        playerScore = 0;
        computerScore = 0;

    }
}

// Select a random input for the computer
function computerPlay() {

    computerSelection = ['rock', 'paper', 'scissors'];
    return computerSelection[Math.floor(Math.random()*computerSelection.length)];

}

// Start a game round
function playRound(playerSelection, computerSelection) {   
        
    if (playerSelection == computerSelection) {
        content.classList.add('content');
        content.textContent = `You chose "${playerSelection}" || The computer chose "${computerSelection}" \r\nSo it's a tie! \r\nThe current score is... \r\nYou: ${playerScore} - Computer: ${computerScore}`;
        results.appendChild(content);
        checkScore();

    } else if ((computerSelection == 'rock' && playerSelection == 'paper') || (computerSelection == 'paper' && playerSelection == 'scissors') || (computerSelection == 'scissors' && playerSelection == 'rock')) {
        playerScore = playerScore + 1;
        content.classList.add('content');
        content.textContent = `You chose "${playerSelection}" || The computer chose "${computerSelection}" \r\nYou WIN! Because "${playerSelection}" beats "${computerSelection}" \r\nThe current score is... \r\nYou: ${playerScore} - Computer: ${computerScore}`;
        results.appendChild(content);
        checkScore();

    } else {
        computerScore = computerScore + 1;
        content.classList.add('content');
        content.textContent = `You chose "${playerSelection}" || The computer chose "${computerSelection}" \r\nYou LOSE! Because "${computerSelection}" beats "${playerSelection}" \r\nThe current score is... \r\nYou: ${playerScore} - Computer: ${computerScore}`;
        results.appendChild(content);
        checkScore();

    }

}

// select all buttons
const buttons = document.querySelectorAll('button');

// select results class and create div
const results = document.querySelector('.results');
let content = document.createElement('div');

// check clicked button and assign selection, start a game round
buttons.forEach((button) => {

    button.addEventListener('click', () => {

        let playerSelection = button.id;
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);

    })

});