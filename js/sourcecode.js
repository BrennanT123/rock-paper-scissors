console.log("Hello World");

//function
// COMPUTE computer choice 
    //RETURN choice

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

//function
//OBTAIN user choice
    //RETURN use choice

function getUserChoice(){
    choicenum = parseInt(prompt("Return 1 for rock, 2 for paper, and 3 for scissors",1));
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
var userscore = 0;
var computerscore = 0;
//PLAY ROUND FUNCTION 
function playround()
{
userchoice = getUserChoice();
computerchoice = getComputerChoice();
//COMPARE user choice\
//IF user wins THEN return win

console.log(`User Chose `+ userchoice +` Computer chose `+computerchoice);
if(userchoice === computerchoice){
    console.log("THe game was a tie!");
}else if((userchoice === `Rock` && computerchoice === `Scissors`)||(userchoice==='Scissors' && computerchoice===`Paper`)||
(userchoice==='Paper'&&computerchoice==='Rock')){
    console.log("User wins!");
    userscore++;
}else if((computerchoice === `Rock` && userchoice === `Scissors`)||(computerchoice==='Scissors' && userchoice===`Paper`)||
(computerchoice==='Paper'&&userchoice==='Rock')){
    console.log("Computer wins!");
    computerscore++;
}else{
    console.log("Error occured");
}



}

//Playgame fucntion
function playgame()
{
    playround();
    playround();
    playround();
    playround();
    playround();
    console.log(`Final Score is... \nUSER: `+userscore+`\nCOMPUTER: `+computerscore)
}
playgame();
