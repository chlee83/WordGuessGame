// Array of words for game
var words = ["rutgers", "temple", "villanova", "harvard", "drexel", "bucknell", "swarthmore", "lehigh", "mit", "princeton", "standford", "yale", "columbia", "duke", "dartmouth"];

// Choose words randomly
var randomWord = Math.floor(Math.random() * words.length);
// variable for the random word chosen
var wordPicked = words[randomWord];

// blank arrays to fill
var underScores = [];
var incorrectGuess = [];
var correctGuess = [];

//preset values in game
var wins = 0;
var losses = 0;
var guessesLeft = 12;


// Game starts with chosenWord and underscores for word
function chosenWord() {
    for (var i = 0; i < wordPicked.length; i++) {

        underScores.push("_");
    
        document.getElementById("word-chosen-text").innerHTML = underScores;
    }
    
document.getElementById("word-chosen-text").innerHTML = underScores.join(" ");
document.getElementById("wins-text").innerHTML = wins;
document.getElementById("guesses-left-text").innerHTML = guessesLeft;
document.getElementById("letters-guessed-text").innerHTML = incorrectGuess;
 console.log(wordPicked);
}

chosenWord();

//give each letter a number to be identified with keypress
document.addEventListener("keypress", function (_event){

    var keyPressed = String.fromCharCode(_event.keyCode);

    if (correctGuess.indexOf(keyPressed) > -1 || incorrectGuess.indexOf(keyPressed) > -1) {
        
        return false;
    }
        
        if (wordPicked.indexOf(keyPressed) > -1) {

            for (var i = 0; i < wordPicked.length; i++) {

                if(wordPicked[i] === keyPressed) {
                    underScores[i] = keyPressed;
                    document.getElementById("word-chosen-text").innerHTML = underScores.join(" ");
                    correctGuess.push(keyPressed);
                    
                }
            } console.log(correctGuess);

        } else {
                incorrectGuess.push(keyPressed);
                guessesLeft--;
                document.getElementById("guesses-left-text").innerHTML = guessesLeft;
                document.getElementById("letters-guessed-text").innerHTML = incorrectGuess;
        }
        endGame();
    
});

//Reset game stats
function resetGame() {

    var randomWord = Math.floor(Math.random() * words.length);
    wordPicked = words[randomWord];

    // blank arrays to fill
    underScores = [];
    incorrectGuess = [];
    correctGuess = [];

    //preset values in game
    guessesLeft = 12;

    chosenWord();
}


// End of game: win or lose conditions
function endGame() {

    if(correctGuess.length === wordPicked.length) {
        wins++
        document.getElementById("wins-text").innerHTML = wins;
        resetGame();

    } else if (guessesLeft === 0) {
        resetGame();
    }
}


