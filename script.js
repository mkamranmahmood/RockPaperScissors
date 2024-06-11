let arr = ["Rock", "Paper", "Scissors"]
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return arr[Math.round(Math.random()*2)];
}

function getHumanChoice() {
    let input = prompt("Enter your choice");
    return titleCase(input);
    //return prompt("Enter your choice");
}

function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    
    console.log("The computer chose: " + computerChoice)
    console.log("The human chose: " + humanChoice);

    if (humanChoice == "Rock" && computerChoice == "Rock") {
        console.log("Tie")
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("Computer wins")
        computerScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("Human wins")
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("Human wins")
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Paper") {
        console.log("Tie")
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("Computer wins")
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("Computer wins")
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("Human wins")
        humanScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
        console.log("Tie")
    } else {
        console.log("Your entry was invalid ")
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log("Game: " + i);
        playRound()
    }
}

playGame();