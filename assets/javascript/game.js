//array of possible artists
var artists = ["tupac", "outkast", "redman", "eminem", "wu-tang", "krs-one", "rakim", "mobbdeep", "publicenemy", "dmx"];

//choosing an artist at random from the array
var currentArtist = artists[Math.floor(Math.random() * artists.length)];  

//global variables
var wins = 0;
var remain = 12;
var s;


//empty array to store guesses
var answerArray = [];

//playing music functions
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



function playRakim() {
    var x = document.getElementById("rakim");
    x.play();
}

function pauseRakim() {
    var x = document.getElementById("rakim");
    x.pause();
}



function playMobb() {
    var x = document.getElementById("mobb");
    x.play();
}

function pauseMobb() {
    var x = document.getElementById("mobb");
    x.pause();
}



function playPE() {
    var x = document.getElementById("pe");
    x.play();
}

function pausePE() {
    var x = document.getElementById("pe");
    x.pause();
}



function playDMX() {
    var x = document.getElementById("dmx");
    x.play();
}

function pauseDMX() {
    var x = document.getElementById("dmx");
    x.pause();
}


//activates when New Word button is clicked & picks a new word plus resets guesses remaining & letters already guessed
function reset() {
    
    var getHint = document.getElementById("hint");

    // a new artist is picked
    currentArtist = artists[Math.floor(Math.random() * artists.length)];

    answerArray = [];

    for (var i = 0; i < currentArtist.length; i++) {

        answerArray[i] = "_";

    }

    s = answerArray.join(" ");
    document.getElementById("currentword").innerHTML = s;

    //displays hint based on artist
    if (currentArtist === "tupac") {
        getHint.innerHTML = "All eyes were on him...";
    }

    if (currentArtist === "outkast") {
        getHint.innerHTML = "Just 2 dope boyz in a cadillac.";
    }

    if (currentArtist === "redman") {
        getHint.innerHTML = "Newark's own Funk Doctor Spock...";
    }

    if (currentArtist === "eminem") {
        getHint.innerHTML = "Mom's spaghetti...";
    }

    if (currentArtist === "wu-tang") {
        getHint.innerHTML = "From the slums of Shaolin...";
    }

    if (currentArtist === "krs-one") {
        getHint.innerHTML = "His 9mm went BANG...";
    }

    if (currentArtist === "rakim") {
        getHint.innerHTML = "He aimed to get paid in full...";
    }

    if (currentArtist === "mobbdeep") {
        getHint.innerHTML = "Ain't no such things as Halfway Crooks...";
    }

    if (currentArtist === "publicenemy") {
        getHint.innerHTML = "Yeahhhh boiiii!";
    }

    if (currentArtist === "dmx") {
        getHint.innerHTML = "He's gon' give it to ya!";
    }


    //resets remain back to 12
    remain = 12;
    document.getElementById("guessremaining").innerHTML = remain;

    //clears the Letters Already Guessed div
    document.getElementById("alreadyguessed").innerHTML = "";

}


//filling answer array with underscores when game first starts
function startUp() {

    var getHint = document.getElementById("hint");

    //fills in the right number of remaining guesses & wins
    document.getElementById("guessremaining").innerHTML = remain;
    document.getElementById("wins").innerHTML = wins;

    for (var i = 0; i < currentArtist.length; i++) {

        answerArray[i] = "_";

    }

    //turn the underscore array into a string & puts it into the current word div   
    s = answerArray.join(" ");
    document.getElementById("currentword").innerHTML = s;



    //displays hint based on artist
    if (currentArtist === "tupac") {
        getHint.innerHTML = "All eyes were on him...";
    }

    if (currentArtist === "outkast") {
        getHint.innerHTML = "Just 2 dope boyz in a cadillac.";
    }

    if (currentArtist === "redman") {
        getHint.innerHTML = "Newark's own Funk Doctor Spock...";
    }

    if (currentArtist === "eminem") {
        getHint.innerHTML = "Mom's spaghetti...";
    }

    if (currentArtist === "wu-tang") {
        getHint.innerHTML = "From the slums of Shaolin...";
    }

    if (currentArtist === "krs-one") {
        getHint.innerHTML = "His 9mm went BANG...";
    }

    if (currentArtist === "rakim") {
        getHint.innerHTML = "He aimed to get paid in full...";
    }

    if (currentArtist === "mobbdeep") {
        getHint.innerHTML = "Ain't no such things as Halfway Crooks...";
    }

    if (currentArtist === "publicenemy") {
        getHint.innerHTML = "Yeahhhh boiiii!";
    }

    if (currentArtist === "dmx") {
        getHint.innerHTML = "He's gon' give it to ya!";
    }





    //when a key is pressed, the browser registers what key it is
    document.onkeyup = function (event) {
        var userGuess = event.key;
        var getArtistImage = document.getElementById("artist-image");
        var getWinnerTitle = document.getElementById("winnertitle");

        //cycles thru all the letters in the current random artist
        for (var i = 0; i < currentArtist.length; i++) {

            //if one of the letters in the current artist's name is equal to what user typed in, 
            //it fills in the corresponding item in the array with that letter
            if (currentArtist[i] === userGuess) {

                answerArray[i] = userGuess;
            }

        }

        //makes sure if a letter is already in the "Letters already guessed" section, it doesnt appear again
        var getGuesses = document.getElementById("alreadyguessed");
        var guessContents = getGuesses.innerHTML;
        var guessArray = Array.from(guessContents);

        //sets up array of actual characters that could be in an artist name, so if user accidentally types a random character like "^", it doesn't show up in letters guessed or count towards guesses remaining
        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-", "&"];

        //if user guess doesnt correspond to any letters in current artist's name & isn't already in the "Letters Already Guessed" section...
        if (currentArtist.indexOf(userGuess) === -1 && guessArray.indexOf(userGuess) === -1 && alphabet.indexOf(userGuess) !== -1) {

            //put that user guess into the "letters already guessed section"
            getGuesses.insertAdjacentHTML('beforeend', userGuess + " ");


        }

        //turns the answer array items into a string & puts that string inside the Current Word div
        document.getElementById("currentword").innerHTML = answerArray.join(" ");



        //subtracts a point from remaining guesses if a letter is guessed thats not in current artist name & isn't already in the "Letters Already Guessed" section...
        if (currentArtist.indexOf(userGuess) === -1 && guessArray.indexOf(userGuess) === -1 && alphabet.indexOf(userGuess) !== -1) {
            remain--;
            document.getElementById("guessremaining").innerHTML = remain;
        }





        // WINS & LOSSES


        //if all blanks have been filled in, a win is added
        
        var answerArrayString = answerArray.toString();
        if (answerArrayString.indexOf("_") === -1) {


            //fills in the page's left div with the right info based on which artist was guessed
            if (currentArtist === "tupac") {

                getArtistImage.innerHTML = "<center><img class = 'artistpic' src='assets/images/pac.jpg' height='50%'></center><p>Highly controversial gangsta rapper who was universally accepted as an extraordinary & influential talent after being killed in 1996. <strong>2Pac</strong> became the unlikely martyr of gangsta rap, & a tragic symbol of the toll its lifestyle exacted on urban black America.</p>";
                getWinnerTitle.innerHTML = "'<strong>Dear Mama</strong>' - 2Pac";
                pauseOutkast();
                pauseRedman();
                pauseEminem();
                pauseWuTang();
                pauseKRS();
                pauseRakim();
                pauseMobb();
                pausePE();
                pauseDMX();
                playTupac();

            }

            if (currentArtist === "outkast") {

                getArtistImage.innerHTML = "<center><img class = 'artistpic' src='assets/images/outkast.jpg'></center><p>Atlanta duo whose blend of gritty Southern soul, fluid raps, & low-slung funk epitomized hip-hop's rising force, the Dirty South, during the '90s.</p>";
                getWinnerTitle.innerHTML = "'<strong>Ms. Jackson</strong>' - Outkast";
                pauseTupac();
                pauseRedman();
                pauseEminem();
                pauseWuTang();
                pauseKRS();
                pauseRakim();
                pauseMobb();
                pausePE();
                pauseDMX();
                playOutkast();

            }


            if (currentArtist === "redman") {

                getArtistImage.innerHTML = "<center><img class = 'artistpic' src='assets/images/redman.jpg'></center><p>Never quite a superstar, <strong>Redman</strong> was nonetheless one of the most off-the-wall, beloved, and enduring rappers of the '90s and 2000s. He is known for his fluid vocal style that was sometimes satirical, sometimes silly, and always tough.</p>";
                getWinnerTitle.innerHTML = "'<strong>Can't Wait</strong>' - Redman";
                pauseTupac();
                pauseOutkast();
                pauseEminem();
                pauseWuTang();
                pauseKRS();
                pauseRakim();
                pauseMobb();
                pausePE();
                pauseDMX();
                playRedman();

            }


            if (currentArtist === "eminem") {

                getArtistImage.innerHTML = "<center><img class = 'artistpic' src='assets/images/eminem.jpg'></center><p>The best-selling white rapper of all time, alternately comic & confrontational, both hugely talented & highly controversial. On sheer verbal skills, <strong>Eminem</strong> was one of the greatest MCs of his generation -- rapid, fluid, dexterous, & unpredictable.</p>";
                getWinnerTitle.innerHTML = "'<strong>Lose Yourself</strong>' - Eminem";
                pauseTupac();
                pauseRedman();
                pauseOutkast();
                pauseWuTang();
                pauseKRS();
                pauseRakim();
                pauseMobb();
                pausePE();
                pauseDMX();
                playEminem();

            }


            if (currentArtist === "wu-tang") {

                getArtistImage.innerHTML = "<center><img class = 'artistpic' src='assets/images/wutang.jpg'></center><p>Sprawling group of hip-hop revolutionaries who brought to the rap mainstream their sparse, dark funk & bracingly violent martial-arts imagery. Emerging in 1993, the Staten Island-based <strong>Wu-Tang Clan</strong> proved to be the most revolutionary rap group of the mid-'90s.</p>";
                getWinnerTitle.innerHTML = "'<strong>CREAM</strong>' - Wu-Tang Clan";
                pauseTupac();
                pauseRedman();
                pauseOutkast();
                pauseEminem();
                pauseKRS();
                pauseRakim();
                pauseMobb();
                pausePE();
                pauseDMX();
                playWuTang();

            }



            if (currentArtist === "krs-one") {

                getArtistImage.innerHTML = "<center><img class = 'artistpic' src='assets/images/krsone.jpg'></center><p><strong>KRS-One</strong> was the leader of Boogie Down Productions, one of the most influential hardcore rap groups of the '80s. At the height of his career, KRS-One was known for his furiously political and socially conscious raps, which is the source of his nickname, 'the Teacher.'</p>";
                getWinnerTitle.innerHTML = "'<strong>Sound of Da Police</strong>' - KRS-One";
                pauseTupac();
                pauseRedman();
                pauseOutkast();
                pauseEminem();
                pauseWuTang();
                pauseRakim();
                pauseMobb();
                pausePE();
                pauseDMX();
                playKRS();

            }


            if (currentArtist === "rakim") {

                getArtistImage.innerHTML = "<center><img class = 'artistpic' src='assets/images/rakim.jpg'></center><p>Although he never became a household name, <strong>Rakim</strong> is near-universally acknowledged as one of the greatest MCs -- perhaps the greatest -- of all time within the hip-hop community. His flow is smooth and liquid, inflected with jazz rhythms and carried off with an effortless cool.</p>";
                getWinnerTitle.innerHTML = "'<strong>I Ain't No Joke</strong>' - Rakim";
                pauseTupac();
                pauseRedman();
                pauseOutkast();
                pauseEminem();
                pauseWuTang();
                pauseKRS();
                pauseMobb();
                pausePE();
                pauseDMX();
                playRakim();

            }



            if (currentArtist === "mobbdeep") {

                getArtistImage.innerHTML = "<center><img class = 'artistpic' src='assets/images/mobb.jpg'></center><p>Queensbridge rappers whose stark productions and bleak, poetic depictions of New York street life were responsible for several hip-hop milestones. <strong>Mobb Deep</strong> stood tall as East Coast hardcore rap figureheads on the basis of their classic album <em>The Infamous</em> (1995).</p>";
                getWinnerTitle.innerHTML = "'<strong>Shook Ones Pt. 2</strong>' - Mobb Deep";
                pauseTupac();
                pauseRedman();
                pauseOutkast();
                pauseEminem();
                pauseWuTang();
                pauseKRS();
                pauseRakim();
                pausePE();
                pauseDMX();
                playMobb();

            }



            if (currentArtist === "publicenemy") {

                getArtistImage.innerHTML = "<center><img class = 'artistpic' src='assets/images/public.jpg'></center><p><strong>Public Enemy</strong> pioneered a variation of hardcore rap that was musically & politically revolutionary. With his powerful baritone, lead rapper Chuck D rhymed about all kinds of social problems, often condoning revolutionary tactics and social activism.</p>";
                getWinnerTitle.innerHTML = "'<strong>Bring The Noise</strong>' - Public Enemy";
                pauseTupac();
                pauseRedman();
                pauseOutkast();
                pauseEminem();
                pauseWuTang();
                pauseKRS();
                pauseRakim();
                pauseMobb();
                pauseDMX();
                playPE();

            }



            if (currentArtist === "dmx") {

                getArtistImage.innerHTML = "<center><img class = 'artistpic' src='assets/images/dmx.jpg'></center><p>Following the deaths of 2Pac & Biggie, <strong>DMX</strong> took over as the undisputed king of hardcore rap. Everything about DMX was intense, from his muscular, tattooed physique to his gruff, barking delivery, which made a perfect match for his lyrical obsession with dogs.</p>";
                getWinnerTitle.innerHTML = "'<strong>Ruff Ryders Anthem</strong>' - DMX";
                pauseTupac();
                pauseRedman();
                pauseOutkast();
                pauseEminem();
                pauseWuTang();
                pauseKRS();
                pauseRakim();
                pauseMobb();
                pausePE();
                playDMX();

            }


            //new wins value is recorded
            wins++;
            document.getElementById("wins").innerHTML = wins;




            //after the win is made, a new artist is picked & the "current word" div is filled with the right number of underscores based on how many letters are in that artist's name
            
            currentArtist = artists[Math.floor(Math.random() * artists.length)];

            answerArray = [];

            for (var i = 0; i < currentArtist.length; i++) {

                answerArray[i] = "_";

            }

            s = answerArray.join(" ");
            document.getElementById("currentword").innerHTML = s;

            //displays hint based on artist
            if (currentArtist === "tupac") {
                getHint.innerHTML = "All eyes were on him...";
            }

            if (currentArtist === "outkast") {
                getHint.innerHTML = "Just 2 dope boyz in a cadillac.";
            }

            if (currentArtist === "redman") {
                getHint.innerHTML = "Newark's own Funk Doctor Spock...";
            }

            if (currentArtist === "eminem") {
                getHint.innerHTML = "Mom's spaghetti...";
            }

            if (currentArtist === "wu-tang") {
                getHint.innerHTML = "From the slums of Shaolin...";
            }

            if (currentArtist === "krs-one") {
                getHint.innerHTML = "His 9mm went BANG...";
            }

            if (currentArtist === "rakim") {
                getHint.innerHTML = "He aimed to get paid in full...";
            }

            if (currentArtist === "mobbdeep") {
                getHint.innerHTML = "Ain't no such things as Halfway Crooks...";
            }

            if (currentArtist === "publicenemy") {
                getHint.innerHTML = "Yeahhhh boiiii!";
            }

            if (currentArtist === "dmx") {
                getHint.innerHTML = "He's gon' give it to ya!";
            }



            //resets remain back to 12
            remain = 12;
            document.getElementById("guessremaining").innerHTML = remain;

            //clears the Letters Already Guessed div
            document.getElementById("alreadyguessed").innerHTML = "";


            //Alerts the user when they reach a certain score
            if (wins === 5) {
                alert("Looks like you know your Hip-Hop!")
            }

            if (wins === 10) {
                alert("Damn! You got mad skill!");
            }

            if (wins === 15) {
                alert("You are the true Hip-Hop master!")
            }


        }


        //if no more guesses left, YOU LOST 
        if (remain === 0) {

            //after the loss, a new artist is picked
            currentArtist = artists[Math.floor(Math.random() * artists.length)];

            answerArray = [];

            for (var i = 0; i < currentArtist.length; i++) {

                answerArray[i] = "_";

            }

            s = answerArray.join(" ");
            document.getElementById("currentword").innerHTML = s;

            //displays hint based on artist
            if (currentArtist === "tupac") {
                getHint.innerHTML = "All eyes were on him...";
            }

            if (currentArtist === "outkast") {
                getHint.innerHTML = "Just 2 dope boyz in a cadillac.";
            }

            if (currentArtist === "redman") {
                getHint.innerHTML = "Newark's own Funk Doctor Spock...";
            }

            if (currentArtist === "eminem") {
                getHint.innerHTML = "Mom's spaghetti...";
            }

            if (currentArtist === "wu-tang") {
                getHint.innerHTML = "From the slums of Shaolin...";
            }

            if (currentArtist === "krs-one") {
                getHint.innerHTML = "His 9mm went BANG...";
            }

            if (currentArtist === "rakim") {
                getHint.innerHTML = "He aimed to get paid in full...";
            }

            if (currentArtist === "mobbdeep") {
                getHint.innerHTML = "Ain't no such things as Halfway Crooks...";
            }

            if (currentArtist === "publicenemy") {
                getHint.innerHTML = "Yeahhhh boiiii!";
            }

            if (currentArtist === "dmx") {
                getHint.innerHTML = "He's gon' give it to ya!";
            }


            //resets remain back to 12
            remain = 12;
            document.getElementById("guessremaining").innerHTML = remain;

            //clears the Letters Already Guessed div
            document.getElementById("alreadyguessed").innerHTML = "";
        }


    }

}


