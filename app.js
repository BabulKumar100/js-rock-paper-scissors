let userScore = 0;
let compScore = 0;
let choicesCount = 0;
let totalTurns = 0;


const choices = document.querySelectorAll(".choice");
const msg1 = document.querySelector("#msg1");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const totalTurnsSelect = document.querySelector("#total-turns");

const msg2 = document.querySelector("#msg2");

const restartButton = document.querySelector("#Restart-btn");

const turnDisplay = document.querySelector("#turn-display");

const updateTurnDisplay = () => {
     turnDisplay.innerText = `Turn: ${choicesCount}/${totalTurns}`;
}

const drawGame = () => {
};

const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
     if(userWin) {
        userScore ++;
        userScorePara.innerText = userScore;
        msg1.innerText = ` You: ${userChoice}
                          Computer: ${compChoice}
                          You win!`;
        msg1.style.backgroundColor = "green";
     } else {
        compScore++;
        compScorePara.innerText = compScore;
         msg1.innerText = ` You: ${userChoice}
                          Computer: ${compChoice}
                          You Lose!`;
        msg1.style.backgroundColor = "orange";
     }
}

const playGame = (userChoice) => {
    const compChoice = gencompChoice();

    if(compChoice === userChoice) {
        drawGame();
        msg1.innerText = `Both selected ${userChoice}. It's a Draw!`;
        msg1.style.backgroundColor = "grey";
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
             userWin = compChoice === "scissors" ? false : true;
        } else{
             userWin = compChoice === "rock"? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}



 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        if(totalTurns === 0) {
            msg1.innerText = "Please select total turns first.";
            msg1.style.backgroundColor = "red";
            return;

        }
        
        if(choicesCount >= totalTurns) {
            msg1.innerText = `Game Over! Total turns ${totalTurns} reached.`;
            msg1.style.backgroundColor = "red";
            return;
        }

        
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        choicesCount++;

        updateTurnDisplay();


        if(totalTurns === choicesCount) {
    if (userScore > compScore) {
        msg2.innerText = "Series Over! You Win the Game!";
        msg2.style.backgroundColor = "gold";
        msg2.style.color = "black";
    } else if (compScore > userScore) {
        msg2.innerText = "Series Over! Computer wins the Game!";
        msg2.style.backgroundColor = "crimson";
        msg2.style.color = "white";
    } else {
        msg2.innerText = "Series Over! It's a Tie!";
        msg2.style.backgroundColor = "gray";
        msg2.style.color = "green";
    }
}

    })
})

totalTurnsSelect.addEventListener("change", (event) => {
         totalTurns = parseInt(event.target.value);
         updateTurnDisplay();
 })

 restartButton.onclick = () => {
  window.location.reload();
 };



 








