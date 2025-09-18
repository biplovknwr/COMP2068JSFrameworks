const prompt = require("prompt");

console.log("choose rock,paper or scissors");
prompt.start();


prompt.get(["userSelection"], function(err,result){

    if(err){
        console.error(err);
        return;
    }

    let userSelection = result.userSelection.toUpperCase();
    let randomNum = Math.random();
  let computerSelection;

  if (randomNum <= 0.34) {
    computerSelection = "PAPER";
  } else if (randomNum >=0.35 && randomNum<=0.67) {
    computerSelection = "SCISSORS";
  } else {
    computerSelection = "ROCK";
  }

  console.log(`\nUser selected: ${userSelection}`);
  console.log(`Computer selected: ${computerSelection}`);


  if (userSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "PAPER" && computerSelection === "ROCK") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    console.log("User Wins!");
  } else {
    console.log("Computer Wins!");
  }
});


