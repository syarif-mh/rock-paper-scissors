choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let max = choices.length;
    return comChoice = choices[Math.floor(Math.random() * max)];
}


function getHumanChoice() {
    return userChoice = prompt("Enter you choice! (rock, paper, or scissors)").toLowerCase();
}


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, comChoice) {
    humanChoice = humanChoice.replace(humanChoice[0], str => str.toUpperCase())
    console.log('You choose:',humanChoice)
    comChoice = comChoice.replace(comChoice[0], str => str.toUpperCase())
    console.log('Computer choose:',comChoice)

    if ((humanChoice == 'Rock' && comChoice == 'Scissors') || (humanChoice == 'Paper' && comChoice == 'Rock') || (humanChoice == 'Scissors' && comChoice == 'Paper')) {
        console.log(`You won! ${humanChoice} beats ${comChoice}`)
        return humanScore = humanScore + 1;
    } else if ((comChoice == 'Rock' && humanChoice == 'Scissors') || (comChoice == 'Paper' && humanChoice == 'Rock') || (comChoice == 'Scissors' && humanChoice == 'Paper')) {
        console.log(`You lose! ${comChoice} beats ${humanChoice}`)
        return computerScore = computerScore + 1
    } else if (humanChoice == comChoice) {
        return console.log('Tie!')
    } else {
        return alert('invalid Choice! Choice must be rock, paper, or scissors');
    }
}


function playGame() {
    console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)

    if (humanScore > computerScore) {
        console.log('You Won!')
    } else if (computerScore > humanScore) {
        console.log('You Lose!')
    } else {
        console.log('Tie!')
    }
}