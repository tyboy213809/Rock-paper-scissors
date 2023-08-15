// human input 
let human = prompt("rock, paper or scissors?");
// check if human put the right thing 
let Lhuman = human.toLowerCase().trim();
function check(checker){
    if (checker === "rock" || checker === "paper" || checker === "scissors"){
        console.log("true")
    }else {
        return "entered wrong choice";
    }
} 

let result = check(Lhuman);
console.log(result);

// function get computerchoice randomly chooses rock paper scissors
// compare the two which one wins 
// count who won 
