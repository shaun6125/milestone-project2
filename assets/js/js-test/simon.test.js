/**
 * @jest-environment jsdom
 */


const { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn } = require("../simon-script");

jest.spyOn(window, "alert").mockImplementation(() => { });

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
        expect(game.choices).toEqual(["topleft", "topright", "bottomleft", "bottomright"]);
    });

    test("turnNumber key exists", () => {
        expect("turnNumber" in game).toBe(true);
    });

    test("lastButton key exists", () => {
        expect("lastButton" in game).toBe(true);
    });

    test("turnInProgress key exists", () => {
        expect("turnInProgress" in game).toBe(true);
    });

    test("turnInProgress key value is false", () => {
        expect("turnInProgress" in game).toBe(true);
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

    test("should be one move in the computers game array", () => {
        expect(game.currentGame.length).toBe(1);
    });

    test("should clear the player moves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });

    test("should display 0 for the element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });

    test("expect data-listener to be true", () => {
        newGame();
        const elements = document.getElementsByClassName("circle");
        for (let element of elements) {
            expect(element.getAttribute("data-listener")).toEqual("true");
        }
    });

});

describe("gameplay works correctly", () => {
    beforeEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn();
    });

    afterEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
    });

    test("addTurn adds a new turn to the game", () => {
        addTurn();
        expect(game.currentGame.length).toBe(2);
    });

    test("showTurns should update game.turnNumber", () => {
        game.turnNumber = 42;
        showTurns();
        expect(game.turnNumber).toBe(0);
    });

    test("should increment the score if the turn is correct", () => {
        game.playerMoves.push(game.currentGame[0]);
        playerTurn();
        expect(game.score).toBe(1);
    });

    test("should call an alert if the move is wrong", () => {
        game.playerMoves.push("wrong");
        playerTurn();
        expect(window.alert).toBeCalledWith("Wrong Move!");
    });

     
});