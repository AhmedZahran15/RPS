const buttons=document.querySelectorAll('button');
const result=document.querySelector('#roundResult');
const reason=document.querySelector('#roundReason');
const playerScore=document.querySelector('#playerScore');
const computerScore=document.querySelector('#computerScore');
const playerChoice=document.querySelector('#playerChoice');
const computerChoice=document.querySelector('#computerChoice');
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')


let playerCount=0;
let computerCount=0;
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
function scoreCheck(computerCount,playerCount){
  if(computerCount===5 ||playerCount===5)
  {
    openEndgameModal()
    setFinalMessage()
    return true;
  }
}

function showIcon(element,selection)
{
  switch (selection) {
    case 'ROCK':
      element.textContent = '✊'
      break
    case 'PAPER':
      element.textContent = '✋'
      break
    case 'SCISSORS':
      element.textContent = '✌'
      break
  }
}

function roundWinner(computerSelection,playerSelection)
{
  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie!";
    reason.textContent=`${playerSelection} ties with ${computerSelection}`
    }
  else if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      result.textContent = "You won!";
      reason.textContent=`${playerSelection} beats ${computerSelection}`
      playerCount++;
      playerScore.textContent=playerCount;
    }
  else if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
      result.textContent = "You lost!";
      reason.textContent=`${computerSelection} beats ${playerSelection}`
      computerCount++;
      computerScore.textContent=computerCount;
    }
}
function GameRound(computerSelection,playerSelection)
{
    playerSelection=playerSelection.toUpperCase();
    if(scoreCheck(computerCount,playerCount))
      return;
    else
    {
      showIcon(playerChoice,playerSelection);
      showIcon(computerChoice,computerSelection);
      roundWinner(computerSelection,playerSelection);
      scoreCheck(computerCount,playerCount);
    }
}

buttons.forEach(button =>{
  button.addEventListener('click',()=>{
    GameRound(getRandomChoice(),button.id);
  })
})

restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function closeEndgameModal() {
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}
function openEndgameModal() {
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}

function setFinalMessage() {
  return playerCount > computerCount
    ? (endgameMsg.textContent = 'You won!')
    : (endgameMsg.textContent = 'You lost...')
}

function restartGame() {
  playerCount = 0
  computerCount = 0
  result.textContent = 'Choose your weapon'
  reason.textContent = 'First to score 5 points wins the game'
  playerScore.textContent = '0'
  computerScore.textContent = '0'
  playerChoice.textContent = '❔'
  computerChoice.textContent = '❔'
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}