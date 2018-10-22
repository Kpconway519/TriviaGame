//this is the array which holds all my answers, and other useful global variables
var triviaObject = {
questions: ["Which of these states extends the farthest west?", "Which of these former US presidents almost took part in a duel with broadswords (before the other guy backed out)?", "Benjamin Franklin thought the Bald Eagle was dishonorable because it is a scavenger and sometimes steals food from other birds. Which bird did he want to be the national bird instead?", "The country of Sri Lanka was known by this name before 1972:", "This ancient Roman ruler was once kidnapped by pirates. (Caesar) (I should include the clip from Pirates of the Caribbean--thats got to be the best pirate I've ever seen"],
//for now, make the first question in each array the correct one.
//is there a better, more scalable way to make these question arrays?
q1answers: ["Virginia", "West Virginia", "Maine", "South Carolina"],
q2answers: ["Abe Lincoln", "Teddy Roosevelt", "Thomas Jefferson", "Jimmy Carter"],
q3answers: ["Turkey", "Sparrow", "Hummingbird", "Peregrine Falcon"],
q4answers: ["Ceylon", "Myanmar", "Siam", "Thucydides"],
q5answers: ["Julius Caesar", "Caligula", "Vespasian", "Hadrian"],
//questionPictures: //Put the pictures here, I need to figure out exactly how to do that.
};

var correctAnswers;
var wrongAnswers;
var unanswered;

//===========================================================

//This is the area for the function which handles the current question.
var questionTime = (currentQuestion, 1000 * 30);

function currentQuestion() {
//make 4 new div cards with the different answers in them.
//make the divs change color when you mouse over them.
//When the correct question is selected, 
};
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
//1. How do I produce the answers? I could procedurally generate them with javascript. I think that would be the best technique to learn to do.
//2. I need to set up a system where the user starts by looking at a start screen with a button to start the game.
//3. use my skills from activity 10 to produce a 30 second timer function and display in the right place
//4. need to make it so when I mouse over the things, it lights up the answer selections
//5. make the picture display after user selects an answer. try to make this scalable and not specific to just that one thing.

//∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑
//there is an important distinction between setInterval and setTimeout. 
//setInterval runs the code/function for a certain amount of time.
//setTimeout does something AFTER a certain amount of time has elapsed.
//∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑∑




//first session: Sunday 10/21 did 3 hours.

