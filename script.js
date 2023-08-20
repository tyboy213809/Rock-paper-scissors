// human input 
let human = prompt("rock, paper or scissors?");
// check if human put the right thing 
let Lhuman = human.toLowerCase().trim();
function check(checker){
    if (checker === "rock" || checker === "paper" || checker === "scissors"){
    }else {
        return "entered wrong choice";
    }
} 

let result = check(Lhuman)
// function get computer choice randomly chooses rock paper scissors
function computer(){
    const randomNUM = Math.floor(Math.random() *3);

    if (randomNUM === 1){
        return "rock"
    } else if (randomNUM === 2){
        return "paper"
    }else{
        return "scissors"
    }
}
const computerChoice = computer();
// compare the two which one wins 
function win(computerChoice, Lhuman) {
    if ((computerChoice === "rock" && Lhuman === "scissors") ||
        (computerChoice === "paper" && Lhuman === "rock") ||
        (computerChoice === "scissors" && Lhuman === "paper")) {
        return `you lose! ${computerChoice} beats ${Lhuman}`;
    } else if ((Lhuman === "rock" && computerChoice === "scissors") ||
               (Lhuman === "paper" && computerChoice === "rock") ||
               (Lhuman === "scissors" && computerChoice === "paper")) {
        return `you Won! ${Lhuman} beats ${computerChoice}`;
    } else if (computerChoice === Lhuman){
        return "tie";
    }
}
let meow = win(computerChoice, Lhuman)
console.log(meow);
console.log(computerChoice);
console.log(Lhuman);
// count who won 
