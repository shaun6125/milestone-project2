/**
 * @jest-environment jsdom
 */


const { game, newGame, showScore } = require("../simon-script");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("simon.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();    
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });

    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });

    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });

    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["topleft", "topright", "bottomleft", "bottomright"])
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 23;
        game.currentGame = ["topleft", "topright"];
        game.playerMoves = ["topleft", "topright"];
        document.getElementById("score").innerText = "23";
        newGame();
    });

    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });

    test("should clear the computer sequence array", () => {
        expect(game.currentGame.length).toBe(0);
    });

    test("should clear the player moves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });

    test("should display 0 for the element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
})