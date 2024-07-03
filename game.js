let humanScore  = 0 ;
let computerScore = 0;

function getComputerChoice(){
    let computerSelects = "";
    let x = Math.random();
    if (x < 0.34){
      computerSelects = "Rock";
    }
    else if(x > 0.33 && x < 0.67){
       computerSelects = "Paper";
    }
    else {
        computerSelects = "Scissors"
    }
    //console.log(computerSelects);
    return computerSelects;
}

function getHumanChoice(){
    let yourMove = prompt("What is your move??");
    //console.log(yourMove)
    return yourMove;
}

function playRound(humanChoice, computerChoice){

    if (humanChoice == "Rock" && computerChoice == "Paper"){
        ++computerScore;
        console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
        return "Computer Wins this round Paper beats Rock";
       
    }
    else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        ++humanScore;
        console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
        return "Human Wins this round Rock beats Scissors";
       
    }
    else if (humanChoice == "Rock" && computerChoice =="Rock"){
        ++humanScore;
        console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
        return "This is a Tie";
       
    }

    else if(humanChoice == "Paper" && computerChoice == "Rock"){
        ++humanScore;
        console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
        return "Human Wins this round Paper beats Rock";
       
    }
    else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        ++computerScore;
        console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
        return "Computer Wins this round Scissors beats Paper";
       
        
    }
    else if (humanChoice == "Paper" && computerChoice =="Paper") {
        console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
        return "This is a Tie";
    }

    else if (humanChoice == "Scissors" && computerChoice == "Paper"){
        ++humanScore;
        console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
        return "Computer Wins this round Paper beats Rock";
    }
        
    else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
        console.log("This round is a Tie");
    }
    else if (humanChoice == "Scissors" && computerChoice =="Rock"){
        ++computerScore;
        console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
        return "Computer Wins this round Rock beats Scissors";
       
    }

}


//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

function playGame(){
    let i = 0;
    for ( i==0 ; i<=5 ; i++)
        {
            let humanSelection = getHumanChoice();
            let computerSelection = getComputerChoice();
            console.log(playRound(humanSelection, computerSelection));
        }
}
console.log("User Score : " + humanScore + " Computer Score : " + computerScore );
winner(humanScore,computerScore);

function winner(userPoints,computerPoints) {
    if (userPoints > computerPoints)
        console.log(`Congrats! You win! Celebrate!`);

    else if (userPoints < computerPoints)
        console.log(`You lose!\nBetter luck next time`);
    else
        console.log("Its a tie!");
}


playGame(); 
