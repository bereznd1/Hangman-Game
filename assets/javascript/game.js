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
function playTupac() {
    var x = document.getElementById("tupac");
    x.currentTime = 0;  
    x.play(); 
}

function pauseTupac() {
    var x = document.getElementById("tupac"); 
    x.pause(); 
}



function playOutkast() {
    var x = document.getElementById("outkast");  
    x.currentTime = 0; 
    x.play(); 
}

function pauseOutkast() {
    var x = document.getElementById("outkast");  
    x.pause(); 
}




function playRedman() {
    var x = document.getElementById("redman");  
    x.currentTime = 0; 
    x.play(); 
}

function pauseRedman() {
    var x = document.getElementById("redman");  
    x.pause(); 
}




function playEminem() {
    var x = document.getElementById("eminem");  
    x.currentTime = 0; 
    x.play(); 
}

function pauseEminem() {
    var x = document.getElementById("eminem");  
    x.pause(); 
}





function playWuTang() {
    var x = document.getElementById("wu");  
    x.currentTime = 0; 
    x.play(); 
}

function pauseWuTang() {
    var x = document.getElementById("wu");  
    x.pause(); 
}



function playKRS() {
    var x = document.getElementById("krs");  
    x.play(); 
}

function pauseKRS() {
    var x = document.getElementById("krs");  
    x.pause(); 
}





//filling answer array with underscores when game first starts
function startUp() {

    document.getElementById("guessremaining").innerHTML = remain;
    document.getElementById("wins").innerHTML = wins;

    for (var i = 0; i < currentArtist.length; i++) {

        answerArray[i] = "_";

    }

    //turn the array into a string & puts it into the current word div   
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

        //making sure if a letter is already in the "Letters already guessed" section, it doesnt appear again
        var getGuesses = document.getElementById("alreadyguessed");
        var guessContents = getGuesses.innerHTML;
        var guessArray = Array.from(guessContents);

        //sets up array of actual characters that could be in an artist name, so if user accidentally types a random character like "^", it doesn't show up in letters guessed or count towards guesses remaining
        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","-","&"];

        //if user guess doesnt correspond to any letters in current artist's name...
        if (currentArtist.indexOf(userGuess) === -1 && guessArray.indexOf(userGuess) === -1 && alphabet.indexOf(userGuess) !== -1) {

            //put that user guess into the "letters already guessed section"
            getGuesses.insertAdjacentHTML('beforeend', userGuess + " ");


        }




        //turns the answer array items into a string & puts that string inside the Current Word div
        document.getElementById("currentword").innerHTML = answerArray.join(" ");






        //subtract a point from remaining guesses if a letter is guessed thats not in the word
        if (currentArtist.indexOf(userGuess) === -1 && guessArray.indexOf(userGuess) === -1 && alphabet.indexOf(userGuess) !== -1) {
            remain--;
            document.getElementById("guessremaining").innerHTML = remain;
        }





        // WINS & LOSSES


        //if all blanks have been filled in, a win is added
        var answerArrayString = answerArray.toString();
        if (answerArrayString.indexOf("_") === -1) {
            

            if (currentArtist === "tupac") {

                document.getElementById("artist-image").innerHTML = "<center><img class = 'artistpic' src='assets/images/pac.jpg' height='50%'></center><p>Highly controversial gangsta rapper who was universally accepted as an extraordinary & influential talent after killed 1996. <strong>2Pac</strong> became the unlikely martyr of gangsta rap, & a tragic symbol of the toll its lifestyle exacted on urban black America.</p>";
                document.getElementById("winnertitle").innerHTML = "'<strong>Ambitionz Az A Ridah</strong>' - 2Pac";
                pauseOutkast();
                pauseRedman();
                pauseEminem();
                pauseWuTang();
                pauseKRS();
                playTupac();
             
            }

            if (currentArtist === "outkast") {

                document.getElementById("artist-image").innerHTML = "<center><img class = 'artistpic' src='assets/images/outkast.jpg'></center><p>Atlanta duo whose blend of gritty Southern soul, fluid raps, & low-slung funk epitomized hip-hop's rising force, the Dirty South, during the '90s.</p>";
                document.getElementById("winnertitle").innerHTML = "'<strong>So Fresh So Clean</strong>' - Outkast";
                pauseTupac();
                pauseRedman();
                pauseEminem();
                pauseWuTang();
                pauseKRS();
                playOutkast();
               
            }


            if (currentArtist === "redman") {

                document.getElementById("artist-image").innerHTML = "<center><img class = 'artistpic' src='assets/images/redman.jpg'></center><p>Never quite a superstar, <strong>Redman</strong> was nonetheless one of the most off-the-wall, beloved, and enduring rappers of the '90s and 2000s. He is known for his fluid vocal style that was sometimes satirical, sometimes silly, and always tough.</p>";
                document.getElementById("winnertitle").innerHTML = "'<strong>Pick It Up</strong>' - Redman";
                pauseTupac();
                pauseOutkast();
                pauseEminem();
                pauseWuTang();
                pauseKRS();
                playRedman();
               
            }


            if (currentArtist === "eminem") {

                document.getElementById("artist-image").innerHTML = "<center><img class = 'artistpic' src='assets/images/eminem.jpg'></center><p>The best-selling white rapper of all time, alternately comic & confrontational, both hugely talented & highly controversial. On sheer verbal skills, <strong>Eminem</strong> was one of the greatest MCs of his generation -- rapid, fluid, dexterous, & unpredictable.</p>";
                document.getElementById("winnertitle").innerHTML = "'<strong>My Fault</strong>' - Eminem";
                pauseTupac();
                pauseRedman();
                pauseOutkast(); 
                pauseWuTang();
                pauseKRS();                               
                playEminem();
                
            }


            if (currentArtist === "wu-tang") {

                document.getElementById("artist-image").innerHTML = "<center><img class = 'artistpic' src='assets/images/wutang.jpg'></center><p>Sprawling group of hip-hop revolutionaries who brought to the rap mainstream their sparse, dark funk & bracingly violent martial-arts imagery. Emerging in 1993, the Staten Island-based <strong>Wu-Tang Clan</strong> proved to be the most revolutionary rap group of the mid-'90s.</p>";
                document.getElementById("winnertitle").innerHTML = "'<strong>CREAM</strong>' - Wu-Tang Clan";
                pauseTupac();
                pauseRedman();
                pauseOutkast(); 
                pauseEminem();
                pauseKRS();                
                playWuTang();
               
            }

            if (currentArtist === "krs-one") {

                document.getElementById("artist-image").innerHTML = "<center><img class = 'artistpic' src='assets/images/krsone.jpg'></center><p><strong>KRS-One</strong> was the leader of Boogie Down Productions, one of the most influential hardcore rap groups of the '80s. At the height of his career, KRS-One was known for his furiously political and socially conscious raps, which is the source of his nickname, 'the Teacher.'</p>";
                document.getElementById("winnertitle").innerHTML = "'<strong>Sound of Da Police</strong>' - KRS-One";
                pauseTupac();
                pauseRedman();
                pauseOutkast(); 
                pauseEminem();
                pauseWuTang();               
                playKRS();
                
            }





            
            //new wins value is recorded
            wins++;
            document.getElementById("wins").innerHTML = wins;
            

           

            //after the win is made, a new artist is picked
            currentArtist = artists[Math.floor(Math.random() * artists.length)];

            

            for (var i = 0; i < currentArtist.length; i++) {

                answerArray[i] = "_";

                

            }
           // -- make it clear out the current div before placing new _ _ _ for artist name into it
            s = answerArray.join(" ");
            document.getElementById("currentword").innerHTML = " ";
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