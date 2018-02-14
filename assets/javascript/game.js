

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


      //when a key is pressed, the browser registers what key it is
      document.onkeyup = function (event) {
        var userGuess = event.key;
    
        //cycles thru all the letters in the current random artist
        for (var i = 0; i < currentArtist.length; i++) {

            //if one of the letters in the current artist's name is equal to what user typed in, 
            //it fills in the corresponding item in the array with that letter
            if (currentArtist[i] === userGuess) {

                answerArray[i] = userGuess;
            }

            //if user guess doesnt correspond to any letters in current artist's name...
            if (userGuess !== currentArtist[i]) {           
                
                var guessedLetter = userGuess;     
                
            }

           

        }

        document.getElementById("alreadyguessed").insertAdjacentHTML('beforeend', userGuess + " ");



        //turns the array items into a string & puts that string inside the Current Word div
        document.getElementById("currentword").innerHTML = answerArray.join (" ");

        
            //subtract a point from remaining guesses
            remain--;
            document.getElementById("guessremaining").innerHTML = remain;

            //if no more guesses left, a You Lost message pops up
            if (remain === 0) {
                document.getElementById("lost").innerHTML = "You lost! Refresh page to try again."
            }


            //if all blanks have been filled in, a win is added
            for (var i = 0; i < answerArray.length; i++) {

                if (answerArray[i].charAt(i) !== "_") {
                    wins++;
                    document.getElementById("wins").innerHTML = wins;
                }
            }




        


        

    }
    


}










/*


*/