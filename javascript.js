choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let max = choices.length;
    return comChoice = choices[Math.floor(Math.random() * max)];
}

function getHumanChoice() {
    return userChoice = prompt("Enter you choice! (rock, paper, or scissors)").toLowerCase();
}