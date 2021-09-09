let playerScore = 0

const computerPlay = () => {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

const playRound = (playerSelection) => {
    let computerSelection = computerPlay()

    if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') || (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') || (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')) {
        console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
    } else {
        console.log('You lose!');
    }
}

const game = () => {

}