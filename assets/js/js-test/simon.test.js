/**
 * @jest-environment jsdom
 */

const { game, newGame } = require("../simon-script");

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
        newGame();
    });

    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
})