function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'ROCK'
    case 1:
      return 'PAPER'
    case 2:
      return 'SCISSORS'
  }
}
function GameRound(computerSelection,playerSelection)
{
    playerSelection=playerSelection.toUpperCase();
    let roundWinner;
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
      }
    else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
      ) {
        roundWinner = 'player'
      }
    else if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        roundWinner = 'computer'
      }
    return roundWinner;
}

function Game()
{
    let playerCount=0;
    let computerCount=0;
    while(playerCount<5&&computerCount<5)
    {
        let playerSelection=null;
        playerSelection=prompt("Enter your Choice (Rock, Paper,Scissors)");
        let round=GameRound(getRandomChoice(),playerSelection);
        if(round=='player')
        playerCount++;
        else if(round=='computer')
        computerCount++;
    }
    if(playerCount==5)
        return `Player Won the game with score of ${playerCount} to ${computerCount}`;
    else
        return `Computer Won the game with score of ${computerCount} to ${playerCount}`;
}

console.log(Game());