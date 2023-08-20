// human input 

// check if human put the right thing 



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
let cc = 0;
let Lh = 0;
// compare the two which one wins 
function win(computerChoice, Lhuman) {


    if ((computerChoice === "rock" && Lhuman === "scissors") ||
        (computerChoice === "paper" && Lhuman === "rock") ||
        (computerChoice === "scissors" && Lhuman === "paper")) {
            cc += 1;
        return `you lose! ${computerChoice} beats ${Lhuman} `;
        
    } else if ((Lhuman === "rock" && computerChoice === "scissors") ||
               (Lhuman === "paper" && computerChoice === "rock") ||
               (Lhuman === "scissors" && computerChoice === "paper")) {
                Lh += 1;
        return `you Won! ${Lhuman} beats ${computerChoice} `;
    } else if (computerChoice === Lhuman){
        return "tie";
    }
}





// count who won 

for (let i = 0 ; i < 5; i++){
        let human = prompt("rock, paper or scissors?");
        let Lhuman = human.toLowerCase().trim();
    function check(checker){
    if (checker === "rock" || checker === "paper" || checker === "scissors"){
    }else {
        return "entered wrong choice";
    }
    } 
        let result = check(Lhuman)

        const computerChoice = computer();
        let meow = win(computerChoice, Lhuman)
        console.log(meow);
        console.log(`your score:${Lh} , computer score: ${cc}`)
        
}    


