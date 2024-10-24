console.log("Hello World");

//function
// COMPUTE computer choice 
    //RETURN choice
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const userScore = document.querySelector('#userScore');
const computerScore = document.querySelector('#computerScore');
const endGame = document.querySelector('#endGame');

rock.addEventListener('click',playRound);
paper.addEventListener('click',playRound);
scissors.addEventListener('click',playRound);



function getComputerChoice()
{
    choicenum = Math.ceil(Math.random()*3);
    switch(choicenum){
    case 1:
        choice = "Rock"
        break;
    case 2:
        choice = "Paper";
        break;
    case 3:
        choice = "Scissors";
        break;
    default:
        choice = "Error returned";
        break;
    }
    return choice;
}

var tempUserScore = 0;
var tempComputerScore = 0;
//PLAY ROUND FUNCTION 
function playRound()
{
userchoice = this.textContent;
console.log(userchoice);
computerchoice = getComputerChoice();
//COMPARE user choice\
//IF user wins THEN return win

console.log(`User Chose `+ userchoice +` Computer chose `+computerchoice);
if(userchoice === computerchoice){
    console.log("The game was a tie!");
}else if((userchoice === `Rock` && computerchoice === `Scissors`)||(userchoice==='Scissors' && computerchoice===`Paper`)||
(userchoice==='Paper'&&computerchoice==='Rock')){
    console.log("User wins!");
    tempUserScore++;
}else if((computerchoice === `Rock` && userchoice === `Scissors`)||(computerchoice==='Scissors' && userchoice===`Paper`)||
(computerchoice==='Paper'&&userchoice==='Rock')){
    console.log("Computer wins!");
    tempComputerScore++;
}else{
    console.log("Error occured");
}
userScore.textContent = `User Score: ` + tempUserScore;
computerScore.textContent = `Computer Score: `+ tempComputerScore;

    
}


