let arr = ["Rock", "Paper", "Scissors"]
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
    });
});


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

function playRound(string) {
    let computerChoice = getComputerChoice();
    let humanChoice = string[0].toUpperCase() + string.slice(1).toLowerCase();
    let result="";

    //console.log("The computer chose: " + computerChoice)
    document.getElementById("humanchoice").innerHTML = humanChoice;
    //console.log("The human chose: " + humanChoice);
    document.getElementById("computerchoice").innerHTML = computerChoice;

    if (humanChoice == "Rock" && computerChoice == "Rock") {
        //console.log("Tie")
        result="Tie"
        document.getElementById("result").innerHTML = result;
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        //console.log("Computer wins")
        result="Computer wins"
        document.getElementById("result").innerHTML = result;
        computerScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        //console.log("Human wins")
        result="Human wins"
        document.getElementById("result").innerHTML = result;
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        //console.log("Human wins")
        result="Human wins"
        document.getElementById("result").innerHTML = result;
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Paper") {
        //console.log("Tie")
        result="Tie"
        document.getElementById("result").innerHTML = result;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        //console.log("Computer wins")
        result="Computer wins"
        document.getElementById("result").innerHTML = result;
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        //console.log("Computer wins")
        result="Computer wins"
        document.getElementById("result").innerHTML = result;
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        //console.log("Human wins")
        result="Human wins"
        document.getElementById("result").innerHTML = result;
        humanScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
        //console.log("Tie")
        result="Tie"
        document.getElementById("result").innerHTML = result;
    } else {
        //console.log("Your entry was invalid ")
        result="Your entry was invalid"
        document.getElementById("result").innerHTML = result;
    }

    //console.log("Human Score: " + humanScore);
    document.getElementById("humanscore").innerHTML = humanScore;
    //console.log("Computer Score: " + computerScore);
    document.getElementById("computerscore").innerHTML = computerScore;

    if (humanScore >= 5) {
        alert("Game over! You have won!")
    } else if (computerScore >= 5) {
        alert("Game over! The computer has won!")
    }

}

function playGame() {
    /*for (let i = 1; i <= 5; i++) {
        console.log("Game: " + i);*/
        playRound()
    /*}*/
}

//playGame();

