let randomNumber = Math.floor(Math.random()*100) + 1 ;

let attempts = 0;

let bestScore = localStorage.getItem("bestScore");

if(bestScore){
    document.getElementById("bestScore")
    .textContent = bestScore;

}
const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");

const attemptsEl = document.getElementById("attempts");

document.getElementById("guessBtn").addEventListener("click" , ()=>{
    const guess = Number(guessInput.value);

    if(!guess || guess<1 || guess>100){
        message.textContent =" Enter a number between 1 and 100";

        message.style.color = "#facc15";

        return;
    }
    attempts++;

    attemptsEl.textContent = attempts;
    if(guess === randomNumber){
            message.textContent = "🎉Great! The number was $(randomNumber)";

            message.style.color ="#22c55e"

            if(!bestScore || attempts < bestScore){

                localStorage.set
            }


    }


})