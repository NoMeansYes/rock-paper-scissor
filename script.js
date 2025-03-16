var humanScore = 0;
var computerScore = 0;

function getHumanChoice() {
    var h = prompt("Choose Rock, Paper or scissors");

    return h.toLowerCase();
}


function getComputerChoice() {
    var c = Math.floor(Math.random() * 3);
    if (c==0){
        return "rock";
    }
    else if (c==1){
        return "paper";
    }
    else if (c==2){
        return "scissors";
    }
}

function playRound(getHumanChoice, getComputerChoice){
    const hum = getHumanChoice();
    const com =getComputerChoice();

    console.log("Your choice: " + hum);
    console.log("Computer Choice: " + com);
    
    
    if (hum == com){
        return "Tie!";
    }
    else if (hum =="rock" && com =="scissors"){
        return "You Win!";
    }
    else if (hum == "paper" && com =="rock"){
        return "You Win!";
    }
    else if (hum == "scissors" && com =="paper"){
        return "You Win!";
    }
    else{
        return "You Lose!";
    }
}



function playGame(){
    var result = playRound(getHumanChoice, getComputerChoice);
    if (result=="You Win!"){
        humanScore ++;
        console.log("Round 1 Winner: You!");
    }
    else if (result == "You Lose!"){
        computerScore ++;
        console.log("Round Winner: Computer!");
    }
    

    result = playRound(getHumanChoice, getComputerChoice);
    if (result=="You Win!"){
        humanScore ++;
        console.log("Round 2 Winner: You!");
    }
    else if (result == "You Lose!"){
        computerScore ++;
        console.log("Round Winner: Computer!");
    }
    

    result = playRound(getHumanChoice, getComputerChoice);
    if (result=="You Win!"){
        humanScore ++;
        console.log("Round 3 Winner: You!");
    }
    else if (result == "You Lose!"){
        computerScore ++;
        console.log("Round Winner: Computer!");
    }
    

    result = playRound(getHumanChoice, getComputerChoice);
    if (result=="You Win!"){
        humanScore ++;
        console.log("Round 4 Winner: You!");
    }
    else if (result == "You Lose!"){
        computerScore ++;
        console.log("Round Winner: Computer!");
    }
    

    result = playRound(getHumanChoice, getComputerChoice);
    if (result=="You Win!"){
        humanScore ++;
        console.log("Round 5 Winner: You!");
    }
    else if (result == "You Lose!"){
        computerScore ++;
        console.log("Round Winner: Computer!");
    }
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    if (humanScore>computerScore){
        console.log("YOU WON!!!");
    }
    else{
        console.log("YOU LOOSE!!!");
        
    }
}

playGame();