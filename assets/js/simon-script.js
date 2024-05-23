let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["topleft", "topright", "bottomleft", "bottomright"]
    
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
};

module.exports = { game, newGame, showScore, addTurn };


