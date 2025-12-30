choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let max = choices.length;
    return comChoice = choices[Math.floor(Math.random() * max)];
}
