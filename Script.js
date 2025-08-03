let userScore = 0;
let compScore = 0;
let com = document.querySelector("#msg")
let choices = document.querySelectorAll(".choice")
let user = document.querySelector("#user-score")
let comp = document.querySelector("#computer-score")

let generateCompChoice = ()=>{
    let options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

let showWinner =(userWin)=>{
    if(userWin){
        // console.log("You Win!...");
        com.innerText="You Win!...";
        com.style.backgroundColor='green'
        userScore++;
        user.innerText = userScore;

    }else{
        // console.log("You Lost!...");
        com.innerText="You Lost!...";
         com.style.backgroundColor='red'
        compScore++;
        comp.innerText=compScore;
    }
}

let drawGame = () =>{
    console.log("Game was Draw!..")
    com.innerText="Game was Draw!..";
     com.style.backgroundColor='yellow'
}

let playGame = (userChoice)=>{
    //Generate Computer Choice 
    const compChoice = generateCompChoice();
    if(userChoice===compChoice){
        drawGame()
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissor paper
            userWind = compChoice ==="paper" ? false : true
        }else if(userChoice==="paper"){
            //rock scissor
            userWin = compChoice === "rock" ? true : false;
        }else{
            //paper rock
            userWin = compChoice ==="paper" ? true : false;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice)=>{
   choice.addEventListener('click',(e)=>{
        const userChoice = choice.getAttribute("id")
        console.log(userChoice)
        playGame(userChoice)
   })
})