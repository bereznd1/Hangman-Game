

//array of possible artists
var artists = ["tupac", "outkast", "redman", "eminem", "wu-tang", "snoop", "krs-one", "run-dmc"];

//choosing an artist at random from the array
var currentArtist = artists[Math.floor(Math.random() * artists.length)];

//global variables
var wins = 0;
var remain = 12;
var s; 

//empty array to store guesses
var answerArray = [];


//filling answer array with underscores when game first starts
function startUp () {

    document.getElementById("guessremaining").innerHTML = remain;

    for (var i = 0; i < currentArtist.length; i++) {

        answerArray[i] = "_";
    
      }
    
      //turn the array into a string
      s = answerArray.join (" ");
      document.getElementById("currentword").innerHTML = s;



      document.onkeyup = function (event) {
        var userGuess = event.key;
    
        for (var i = 0; i < currentArtist.length; i++) {

            if (currentArtist[i] === userGuess) {

                answerArray[i] = userGuess;
            }

        }

        document.getElementById("currentword").innerHTML = answerArray.join (" ");
        remain = remain - 1;

    }
    


}










/*


*/