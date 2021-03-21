function displayIcons(){
    for(let i=0; i<3; i++){
        document.getElementsByClassName('fa-icon')[i].style.display = 'block';
    }
}

// Computer Choice Array
var computerCoice = ['rock', 'paper', 'scissors'];
for(let i=0; i<3; i++){
    // Player Choice
    document.getElementsByClassName('fa-icon')[i].addEventListener('click', function(){
        for(let j=0; j<3; j++){
            if(j!=i){
                document.getElementsByClassName('fa-icon')[j].style.display = 'none';
            }
        }
        // Computer Choice
        var randomItem = computerCoice[Math.floor(Math.random()*computerCoice.length)];
        console.log(randomItem);
        appendComputerChoice(randomItem);
        decideTheWinner(i, randomItem);
        updateRound();
    });
}

function appendComputerChoice(rand){
    let computerIconsContainer = document.getElementsByClassName('images-container')[1];
    if(rand == 'rock'){
        let rock = document.createElement('i');
        rock.setAttribute('class', "fa-icon fa fa-hand-rock-o");
        rock.setAttribute('aria-hidden',"true");
        computerIconsContainer.appendChild(rock);
    }
    else if(rand == 'paper'){
        let paper = document.createElement('i');
        paper.setAttribute('class', "fa-icon fa fa-hand-paper-o");
        paper.setAttribute('aria-hidden',"true");
        computerIconsContainer.appendChild(paper);
    }
    else if(rand == 'scissors'){
        let scissors = document.createElement('i');
        scissors.setAttribute('class', "fa-icon fa fa-hand-scissors-o");
        scissors.setAttribute('aria-hidden',"true");
        computerIconsContainer.appendChild(scissors);
    }
}


let playerScore = 0;
let computerScore = 0;
function decideTheWinner(player,computer){
    console.log(player,computer);
    let result;
    // Player choose rock
    if(player == 0){
        if(computer == 'rock')
            result = 0;
        else if(computer == 'paper')
            result = -1;
        else if(computer == 'scissors')
            result = 1;
    // Player choose paper
    }else if(player == 1){
        if(computer == 'rock')
            result = 1;
        else if(computer == 'paper')
            result = 0;
        else if(computer == 'scissors')
            result = -1;
    // Player choose scissors
    }else if(player == 2){
        if(computer == 'rock')
            result = -1;
        else if(computer == 'paper')
            result = 1;
        else if(computer == 'scissors')
            result = 0;
    }
    
    if(result == 0){
        console.log("Tie!");
        document.getElementsByClassName('winner-p')[0].style.display = 'flex';
        document.getElementsByClassName('winner-p')[0].style.color = '#1d3ffd';
        document.getElementsByClassName('winner-p')[0].innerHTML = "TIE!";
    }else if(result == 1){
        console.log("You Win");
        document.getElementsByClassName('winner-p')[0].style.display = 'flex';
        document.getElementsByClassName('winner-p')[0].style.color = '#1eaa02';
        document.getElementsByClassName('winner-p')[0].innerHTML = "You Win!";
        playerScore++;
        document.getElementById('player-score').innerHTML = playerScore;
    }else{
        console.log("You Lose");
        document.getElementsByClassName('winner-p')[0].style.display = 'flex';
        document.getElementsByClassName('winner-p')[0].style.color = '#fa0202';
        document.getElementsByClassName('winner-p')[0].innerHTML = "You Lose!";
        computerScore++;
        document.getElementById('computer-score').innerHTML = computerScore;
    }
}

let round = 1;
function updateRound(){
    round++;
    document.getElementById('round-value').innerHTML = round;
    setTimeout(()=>{
        displayIcons();
        document.getElementsByClassName('images-container')[1].removeChild(document.getElementsByClassName('images-container')[1].childNodes[0]);
    },1300);
}


// When Play Again button clicked, reset or refresh the page
document.getElementById("reset-btn").addEventListener('click', function(){
    window.location.reload();
});