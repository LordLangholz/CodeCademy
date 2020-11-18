const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(); // Dette gøres så folk kan skrive Rock og rock uden betydning.
  if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors' || userInput ==='bomb') {
  return userInput;
} else {
  console.log('Error!');
  }
}

const getComputerChoice = () => {
const randomNumber = Math.floor(Math.random() * 3); // Create a new function named getComputerChoice with no parameters. Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2. Then, depending on the number, return either 'rock', 'paper', or 'scissors'.
switch (randomNumber) {
case 0:
  return 'rock'; 
case 1:
  return 'paper';
case 2:
  return 'scissors';
}};

let determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb'){
    return 'You win nomatter what';
  }
  if (userChoice === computerChoice){
    return 'The game was a tie';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
    return 'The computer won!';
  } else {
    return 'You won';
  } 
  }
  if (userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The computer won';
    } else {
      return 'you won!';
    }
  }
  if (userChoice ==='scissors'){
    if(computerChoice === 'rock'){
      return 'The computer won!';
    } else {
      return 'you won';
   }
  }
};

let playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice)
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();


