// Game Code

let playerScore = 0;
let cpuScore = 0;
let roundWinner = '';
let rounds = 0;

function playRound(playerSelection, cpuSelection) {
  if (playerSelection === cpuSelection) {
    roundWinner = 'tie';
    rounds++;
  }
  
  if (
    (playerSelection === 'rock' && cpuSelection === 'scissors') ||
    (playerSelection === 'scissors' && cpuSelection === 'paper') ||
    (playerSelection === 'paper' && cpuSelection === 'rock') 
    ) {
      playerScore++;
      rounds++;
      roundWinner = 'player';
    }
    if (
      (playerSelection === 'scissors' && cpuSelection === 'rock') ||
      (playerSelection === 'paper' && cpuSelection === 'scissors') ||
      (playerSelection === 'rock' && cpuSelection === 'paper') 
      ) {
        cpuScore++;
        rounds++;
        roundWinner = 'cpu';
      }
}

function genCpuMove() {
  let randomNum = Math.floor(Math.random() * 3)
  switch (randomNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2: 
      return 'scissors';
  }
}

function isGameOver() {
  return playerScore === 5 || cpuScore === 5;
}

//UI code

const overlay = document.getElementById('overlay');
const numrounds = document.getElementById('numrounds');
const playerscore = document.getElementById('numplayerscore');
const cpuscore = document.getElementById('numcpuscore');
const prompt = document.getElementById('prompt');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');
const restart = document.getElementById('restartbtn');

rock.addEventListener('click', () => handleClick('rock'));
scissors.addEventListener('click', () => handleClick('scissors'));
paper.addEventListener('click', () => handleClick('paper'));
restart.addEventListener('click', restartGame);

function handleClick(playerSelection) {
  if (isGameOver()) {
    if (playerScore === 5) {
      alert("You Win! Congratulations!");
    }
    else {
      alert("You Lose! Better Luck Next Time!");
    }
    restartGame();
  }

  const cpuSelect = genCpuMove();
  playRound(playerSelection, cpuSelect);
  updateScore();

  if (isGameOver()) {
    if (playerScore === 5) {
      alert("You Win! Congratulations!");
    }
    else {
      alert("You Lose! Better Luck Next Time!");
    }
    restartGame();
  }

}

function updateScore() {
  if (roundWinner === 'tie') {
    prompt.textContent = "It's a tie!";
  }
  else if (roundWinner === 'player') {
    prompt.textContent = "You Won!";
  }
  else if (roundWinner === 'cpu') {
    prompt.textContent = "You Lost!";
  }

  playerscore.textContent = `${playerScore}`;
  cpuscore.textContent = `${cpuScore}`;
  numrounds.textContent = `${rounds}`;
}

function restartGame() {
  playerScore = 0;
  cpuScore = 0;
  rounds = 0;
  prompt.textContent = "Play Rock Paper Scissors against a CPU! First to five wins.";
  playerscore.textContent = `${playerScore}`;
  cpuscore.textContent = `${cpuScore}`;
  numrounds.textContent = `${rounds}`;
  
}



