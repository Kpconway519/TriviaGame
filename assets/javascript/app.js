//stopping point. I still need to:
//1. Increment the scoring system
//2. figure out how to go through the different questions and go to the final screen once all of them are done.
//3. do my afterQuestion screen with the picture and the text. 
//I think I can just do a bunch of true/false switches for most of the control stuff. 
//4. make a mouseover function which lights up the answer when i hover over it.
//5. make a system which can tell if a selected answer is correct or not.





//this is the array which holds all my answers, and other useful global variables
var triviaObject = {
questions: ["Which of these states extends the farthest west?", "Which of these former US presidents almost took part in a duel with broadswords (before the other guy backed out)?", "Benjamin Franklin thought the Bald Eagle was dishonorable because it is a scavenger and sometimes steals food from other birds. Which bird did he want to be the national bird instead?", "The country of Sri Lanka was known by this name before 1972:", "This ancient Roman ruler was once kidnapped by pirates. (Caesar) (I should include the clip from Pirates of the Caribbean--thats got to be the best pirate I've ever seen"],
answers: [
    ["Virginia", "West Virginia", "Maine", "South Carolina"],
    ["Abe Lincoln", "Teddy Roosevelt", "Thomas Jefferson", "Jimmy Carter"],
    ["Turkey", "Sparrow", "Hummingbird", "Peregrine Falcon"],
    ["Ceylon", "Myanmar", "Siam", "Thucydides"],
    ["Julius Caesar", "Caligula", "Vespasian", "Hadrian"],
]
//questionPictures: //Put the pictures here, I need to figure out exactly how to do that.
};

var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;

//===========================================================
//this section is for the start screen with a button to begin the game. 
//current-question.append button
//button runs the functions to run the game.
function beginGame() {
$("#current-question").append("<input type='button' id='start-game' value='Start Game!'>")
$("#start-game").on("click", function() {
    currentQuestion();
    makeAnswers();
    //start timer as well.
    run()
})
}
beginGame()
//========================================================
//This is the area for the function which handles the current question.

//mini section for the timer=-===============-=-==-=-=-=-=-=-=-=-=-=-=-=-==-=-=-
var timeNumber = 30;
var intervalId;
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    
};

function decrement() {
    timeNumber--;
    $("#time-remaining").text("Time Remaining: " + timeNumber);
    if (timeNumber === 0) {
        unanswered++;
        //replace stop with go to next thing function
        stop();
        alert("out of time");
        console.log(unanswered);
        resetClock()
    }
};

function stop() {
    clearInterval(intervalId);
}

function resetClock() {
    timeNumber = 30;
    run()
}
//will run when the time is right.



//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//make a section for the question selector. first I am going to have a var questionSelector. it is going to be tied to the index of triviaObject.questions. when the start button is pressed at the beginning of the game, or Whenever a question is over with, currentQuestion() will run with the new question. whenever it is out of questions, it will display the final results screen. 

var questionSelector = 0;

function currentQuestion() {
    $("#current-question").text("");
    $("#current-question").text(triviaObject.questions[questionSelector]);
//make the divs change color when you mouse over them.
//When the correct question is selected, go to the next question
};

function makeAnswers() {
    //take the triviaObject.answers[questionSelector] and for that item, loop through the items inside and make divs out of them.
    for (i = 0; i < triviaObject.answers[questionSelector].length; i++) {
    var answers = $("<div class='card answer-option'>").text(triviaObject.answers[questionSelector] [i]);
    $("#current-question").append(answers);
    }

    $(".answer-option").on("click", function() {
        alert("you clicked an answer");
        deleteChildren()
    })
}

//need to make a click function for the answers. start with on click alert("you clicked an answer")


function deleteChildren() {
    var questionParent = $("#current-question");
    questionParent.html("");
}

//============================================================

//this is the section for what happens after the player selects a question, right or wrong.
var afterQuestion = (questionResult, 1000 * 5); //after 5 seconds, go to next question

function questionResult() {
//display the picture
//write "correct" or "incorrect" in the place where the question used to be
//if wrong, say "the correct answer was: <correct answer>"
};

//============================================================
//here is my section for the final screen which will display the correct, incorrect, and unanswered questions
var finalScreen = function() {
//make div for correct: <number>
//make div for incorrect: <number>
//make div for unanswered: <number>
//make a button at the bottom to start the game over again without reloading the page
};
//============================================================

//TODO: 
//4. need to make it so when I mouse over the things, it lights up the answer selections
//5. make the picture display after user selects an answer. try to make this scalable and not specific to just that one thing.

//∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑
//there is an important distinction between setInterval and setTimeout. 
//setInterval runs the code/function for a certain amount of time.
//setTimeout does something AFTER a certain amount of time has elapsed.
//∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑




//first session: Sunday 10/21 did 3 hours.
//second session: Friday 10/27 did 3 more hours.

