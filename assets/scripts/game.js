let game = {
    currentGame: [],
    score: 0,
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
};

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
    addTurn();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

// needs to do 3 things - clear the playerMoves, add at random one of the buttons from the choices array, and showTurns()
function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random()*4))]);
    // showTurns();
}

module.exports = { game, newGame, showScore, addTurn };