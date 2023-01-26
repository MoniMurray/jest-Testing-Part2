let game = {
    currentGame: [],
    score: 0,
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
    turnNumber: 0,
    lastButton: "",
    turnInProgress: false,
};

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                if (game.currentGame.length > 0 && !game.turnInProgress) {
                    let move = e.target.getAttribute("id");
                    game.lastButton = move;
                    lightsOn(move);
                    game.playerMoves.push(move);
                    playerTurn();
                }
                     circle.setAttribute("data-listener", "true");
            });
        }
        showScore();
        addTurn();
    }
}



// needs to do 3 things - clear the playerMoves, add at random one of the buttons from the choices array, and showTurns()
function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    showTurns();
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add(circ + "light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove(circ + "light")
    }, 400);
}

function showTurns() {
    game.turnInProgress = true;
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
            game.turnInProgress = false;
        }
    }, 800);
}

// function playerTurn() {
//     if (game.playerMoves == game.currentGame) {
//         game.score++;
//         addTurn();
//     } else {
//         error;
//         newGame();
//     }
// }

function playerTurn() {
    let i = game.playerMoves.length - 1; 
    if (game.currentGame[i] == game.playerMoves[i]) {
        if (game.currentGame.length == game.playerMoves.length) {
        game.score++;
        showScore();
        addTurn();
        }
    } else {
        alert("Wrong move!");
        newGame();
    }
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}


module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn};