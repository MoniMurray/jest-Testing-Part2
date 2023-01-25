let game = {
    currentGame: [],
    score: 0,
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
    turnNumber: 0;
};

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    // showScore();
    addTurn();
}

// function showScore() {
//     document.getElementById("score").innerText = game.score;
// }

// needs to do 3 things - clear the playerMoves, add at random one of the buttons from the choices array, and showTurns()
function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random()*4))]);
    // showTurns();
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add(circ + "light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove(circ + "light");
    }, 400);
}

function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber ++;
        if (game.turnNumber>= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}




module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns};