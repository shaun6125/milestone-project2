let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["topleft", "topright", "bottomleft", "bottomright"]
    
}

function newGame() {
    game.score = 0;
}

module.exports = { game, newGame };


