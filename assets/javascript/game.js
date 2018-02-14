

//array of possible artists
var artists = ["tupac", "outkast", "redman", "eminem", "wu-tang", "krs-one"];

//choosing an artist at random from the array
var currentArtist = artists[Math.floor(Math.random() * artists.length)];

//global variables
var wins = 0;
var remain = 12;
var s;

//empty array to store guesses
var answerArray = [];

//playing music
var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
}

playAudio();

//filling answer array with underscores when game first starts
function startUp() {

    document.getElementById("guessremaining").innerHTML = remain;
    document.getElementById("wins").innerHTML = wins;

    for (var i = 0; i < currentArtist.length; i++) {

        answerArray[i] = "_";

    }

    //turn the array into a string
    s = answerArray.join(" ");
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

        }

        //if user guess doesnt correspond to any letters in current artist's name...
        if (currentArtist.indexOf(userGuess) === -1) {

            //put that user guess into the "letters already guessed section"
            document.getElementById("alreadyguessed").insertAdjacentHTML('beforeend', userGuess + " ");

            //making sure if a letter is already in the "Letters already guessed" section, it doesnt appear again



        }




        //turns the array items into a string & puts that string inside the Current Word div
        document.getElementById("currentword").innerHTML = answerArray.join(" ");






        //subtract a point from remaining guesses if a letter is guessed thats not in the word
        if (currentArtist.indexOf(userGuess) === -1) {
            remain--;
            document.getElementById("guessremaining").innerHTML = remain;
        }





        // WINS & LOSSES


        //if all blanks have been filled in, a win is added
        var answerArrayString = answerArray.toString();
        if (answerArrayString.indexOf("_") === -1) {


            if (currentArtist === "tupac") {

                document.getElementById("artist-image").innerHTML = "<center><img class = 'artistpic' src='assets/images/pac.jpg'></center>";
                document.getElementById("winnertitle").innerHTML = "'<strong>Ambitionz Az A Ridah</strong>' - Tupac Shakur!";
             
            }

            if (currentArtist === "outkast") {

                document.getElementById("artist-image").innerHTML = "<center><img class = 'artistpic' src='assets/images/outkast.jpg'></center>";
                document.getElementById("winnertitle").innerHTML = "'<strong>So Fresh So Clean</strong>' - Outkast!";
               
            }


            if (currentArtist === "redman") {

                document.getElementById("artist-image").innerHTML = "<center><img class = 'artistpic' src='assets/images/redman.jpg'></center>";
                document.getElementById("winnertitle").innerHTML = "'<strong>Pick It Up</strong>' - Redman!";
               
            }


            if (currentArtist === "eminem") {

                document.getElementById("artist-image").innerHTML = "<center><img class = 'artistpic' src='assets/images/eminem.jpg'></center>";
                document.getElementById("winnertitle").innerHTML = "'<strong>My Fault</strong>' - Eminem!";
                
            }


            if (currentArtist === "wu-tang") {

                document.getElementById("artist-image").innerHTML = "<center><img class = 'artistpic' src='assets/images/wutang.jpg'></center>";
                document.getElementById("winnertitle").innerHTML = "'<strong>CREAM</strong>' - Wu-Tang Clan!";
               
            }

            if (currentArtist === "krs-one") {

                document.getElementById("artist-image").innerHTML = "<center><img class = 'artistpic' src='assets/images/krsone.jpg'></center>";
                document.getElementById("winnertitle").innerHTML = "'<strong>Sound of Da Police</strong>' - KRS-One!";
                
            }





            
            //new wins value is recorded
            wins++;
            document.getElementById("wins").innerHTML = wins;

            //after the win is made, a new artist is picked
            currentArtist = artists[Math.floor(Math.random() * artists.length)];

            for (var i = 0; i < currentArtist.length; i++) {

                answerArray[i] = "_";

            }

            s = answerArray.join(" ");
            document.getElementById("currentword").innerHTML = s;


            //reset remain back to 12
            remain = 12;
            document.getElementById("guessremaining").innerHTML = remain;

            //clear the Letters Already Guessed div
            document.getElementById("alreadyguessed").innerHTML = "";
            

        }


        //if no more guesses left, YOU LOST 
        if (remain === 0) {

            //after the loss, a new artist is picked
            currentArtist = artists[Math.floor(Math.random() * artists.length)];

            for (var i = 0; i < currentArtist.length; i++) {

                answerArray[i] = "_";

            }

            s = answerArray.join(" ");
            document.getElementById("currentword").innerHTML = s;


            //reset remain back to 12
            remain = 12;
            document.getElementById("guessremaining").innerHTML = remain;

            //clear the Letters Already Guessed div
            document.getElementById("alreadyguessed").innerHTML = "";
        }












    }



}










/*


*/