let userscore=0;
let computerscore=0;

const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");


const computerchoices=()=>{
     const options=["rock","paper","scissor"];
     const randomnumber=Math.floor(Math.random()*3);
     return options[randomnumber];
}

const draw=()=>{
    console.log("The game was draw");
    msg.innerText="The game was draw.play again";
     msg.style.backgroundColor="#081b31";


}
const showWinner=(userWin,userChoice,computerchoice)=>{
    if(userWin){
        console.log("You Win");   
        msg.innerText=`You wins! ${userChoice} beats ${computerchoice}`;
        msg.style.backgroundColor="green";
        userscore++;
        userScore_span.innerText=userscore;
    }else{
        console.log("Computer wins");
        msg.innerText=`You lose!${computerchoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        computerscore++;
        computerScore_span.innerText=computerscore;
    }
}

const playGame=(userChoice)=>{
    console.log("User-choice=",userChoice);
    const computerchoice=computerchoices();
    console.log("Computer-choice=",computerchoice);
    if(userChoice===computerchoice){
        draw();
    }else{
        let userWin="true";
        if(userChoice==="rock"){
            userWin=computerchoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=computerchoice==="scissor"?false:true;
        }else{
            userWin=computerchoice==="rock"?false:true;
        }   
       showWinner(userWin,userChoice,computerchoice);

    }

};

choices.forEach((choice) => {
   
    choice.addEventListener("click",()=>{
         const userChoice=choice.getAttribute("id");
         playGame(userChoice) ;
    });
});
