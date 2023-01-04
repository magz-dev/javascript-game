const { game } = require("../game"); // import

// load the html file 
beforeAll(() => {
    let fs = require("fs");                                     
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

// jest testing
describe("game object contains correct keys", () => {  
    
    test("possibleChoices key exists", () => {
        expect("possibleChoices" in game).toBe(true);
    });
    test(" randomNumber key exists", () => {
        expect("randomNumber" in game).toBe(true);
    });
    test("possibleChoices contains correct ids", () => {
        expect(game.possibleChoices).toEqual(['Rock', 'Paper', 'Scissors']);
    }); 
});


