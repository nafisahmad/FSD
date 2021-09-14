let words =
    [
        {
            jumbled: "papel",
            correct: "apple"
        },
        {
            jumbled: "mputcoer",
            correct: "computer"
        },
        {
            jumbled: "letobt",
            correct: "bottle"
        },
        {
            jumbled: "boilem",
            correct: "mobile"
        },
        {
            jumbled: "arphenoe",
            correct: "earphone"
        },
        {
            jumbled: "ybldo",
            correct: "dobly"
        }
    ]

let currentWord = 0;
let score = 0;

function displayWord() {
    document.querySelector("#j-word").innerText = words[currentWord].jumbled;
    document.querySelector('#score').innerText = score;
}

displayWord();

function checkAnswer() {

    if (currentWord == words.length ) {
        let msg = "";

        if (score === 5) {
            msg = "Perfectly Splendid, Your score is: " + score;
        }
        if (score === 4) {
            msg = "Splendid, Your score is: " + score;
        }
        if (score === 3) {
            msg = "Fantastic, Your score is: " + score;
        }
        if (score === 2) {
            msg = "Good Game, Your score is: " + score;
        }
        if (score < 2) {
            msg = "Good try, Your score is: " + score;
        }

        alert(msg);
        location.reload;
    }
    else {
        let answer = document.querySelector("#inp").value;
        if (answer.toLowerCase() === words[currentWord].correct) {
            // console.log("Correct");
            score++;
        }
        currentWord++;

        displayWord();
        document.querySelector("#inp").value = "";

        // else{
        //     console.log("Incorrect");
        // }
    }
}