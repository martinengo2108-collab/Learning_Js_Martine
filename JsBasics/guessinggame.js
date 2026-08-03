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

        message.style.color = "#2b29256e";

        return;
    }
    attempts++;

    attemptsEl.textContent = attempts;
    if(guess === randomNumber){
            message.textContent = "🎉Great! The number was $(randomNumber)";

            message.style.color ="#22c55e"

            if(!bestScore || attempts < bestScore){

                localStorage.setItem(
                    "bestScore" , attempts
                );
            
            document.getElementById("bestScore").textContent = attempts;
            }

    }

    else if(guess >randomNumber){
        message.textContent = "📈 Too high";

        message.style.color = "#ef4444"
    }
    else{
        message.textContent ="📈Too low ";

        message.style.color = "#38bdf8";


    }

});


document.getElementById("restartBtn").addEventListener("click" ,()=>{
    randomNumber = Math.floor(Math.random()*100 )+1;

    attempts = 0;

    attemptsEl.textContent =0;

    message.textContent = "Start Guessing...";

    message.style.color = "#fff";
    guessInput.value ="";
});