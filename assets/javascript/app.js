


//this is the object which holds the content of the game.
var triviaObject = {
    questions: ["Which of these states extends the farthest west?", "Which of these former US presidents almost took part in a duel with broadswords (before the other guy backed out)?", "Benjamin Franklin thought the Bald Eagle was dishonorable because it is a scavenger and sometimes steals food from other birds. Which bird did he want to be the national bird instead?", "The country of Sri Lanka was known by this name before 1972:", "This ancient Roman ruler was once kidnapped by pirates."],
    answers: [
        ["Virginia", "West Virginia", "Maine", "South Carolina"],
        ["Teddy Roosevelt", "Abe Lincoln", "Thomas Jefferson", "Jimmy Carter"],
        ["Sparrow", "Hummingbird", "Peregrine Falcon", "Turkey"],
        ["Ceylon", "Myanmar", "Siam", "Thucydides"],
        ["Caligula", "Vespasian", "Julius Caesar", "Hadrian"],
    ],
    
    rightAnswers: ["Virginia", "Abe Lincoln", "Turkey", "Ceylon", "Julius Caesar"],
    
    explanations: [ "Despite the name, Virginia actually extends farther West than West Virginia", "A man named James Shields once challenged Abraham Lincoln to a duel. Lincoln got the choice of weapons and chose broadswords. Lincoln's advantage due to his long, lanky arms caused the stocky Shields to call a truce rather than fight", "Franklin preferred the turkey, saying it was a 'Bird of Courage'", "From 1505 to 1972, Sri Lanka was known as 'Ceylon' from the Persian root word which also gave us the word 'serendipity'", "In 75BC, Julius Caesar, on a boat trip from Rome to Greece, was abducted by pirates."
    
    ],
    
    pictures: [
        "assets/images/westvirginia.jpg", "assets/images/coollincoln.jpg", "assets/images/turkey.png", "assets/images/ceylon.jpeg", "assets/images/bestpirate.jpg", 
    ]
    
    };
    
    //variables for scoring
    
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;
    var answerIsCorrect = false;
    //questionSelector is a crucial variable which tracks the index of the current question. used to sync up all the arrays in the triviaObject
    var questionSelector = 0;
    
    
    //function for resetting everything
    function resetAll() {
        questionSelector = 0;
        correctAnswers = 0;
        wrongAnswers = 0;
        unanswered = 0;
        answerIsCorrect = false;
        deleteChildren()
        beginGame()
    }
    
    //this section is for the start screen with a button to begin the game. 
    
    function beginGame() {
    $("#current-question").append("<input type='button' id='start-game' value='Start Game!'>")
    $("#start-game").on("click", function() {
        currentQuestion();
        makeAnswers();
        //start timer as well.
        run();
    })
    };
    //game is begun by default
    beginGame()
    
    //timer section =-===============-=-==-=-=-=-=-=-=-=-=-=-=-=-==-=-=-
    //i set it to 31 instead of 30 so that it looks right on the screen. otherwise it displays 29, which looks wrong
    var timeNumber = 31;
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
            stop();
            alert("out of time");
            resetClock()
            questionResult()
        }
    };
    
    function stop() {
        clearInterval(intervalId);
    }
    
    function resetClock() {
        timeNumber = 31;
        run()
    }
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
    function currentQuestion() {
        $("#current-question").text("");
        $("#current-question").text(triviaObject.questions[questionSelector]);
    };
    
    function makeAnswers() {
        //take the triviaObject.answers[questionSelector] and for that item, loop through the items inside and make divs out of them.
        for (i = 0; i < triviaObject.answers[questionSelector].length; i++) {
            //used a two-dimensional array below. to select the correct set of answer responses. piped in a method to add a data-answer attribute for the scoring system as well.
        var answers = $("<div class='card answer-option'>").text(triviaObject.answers[questionSelector] [i]).attr("data-answer", triviaObject.answers[questionSelector] [i]);
        $("#current-question").append(answers);
        };
    
        $(".answer-option").on("click", function() {
            //stop timer
            stop()
            // I take the data-answer of the blank selected so that I can compare it to the correct answers.
            var thisAnswer = $(this).attr("data-answer");
            //if answer is correct, the program acts accordingly, if incorrect it tells you so.
            if (thisAnswer == triviaObject.rightAnswers[questionSelector]) {
                correctAnswers++;
                answerIsCorrect = true;
            }else {
                wrongAnswers++
                answerIsCorrect = false;
            }
            questionResult()
        })
    }
    //this function deletes everything out of the current-question div. used in lots of ways.
    function deleteChildren() {
        var questionParent = $("#current-question");
        questionParent.html("");
    }
    
    //this is the section for what happens after the player selects a question, right or wrong.
    
    function questionResult() {
        deleteChildren()
        //display the picture--picture displayed depends on the integer in the questionSelector
    var isAnswerCorrect = $("<p>")
    if (answerIsCorrect == true) {
        isAnswerCorrect.text("Correct!");
    } else {
        isAnswerCorrect.text("Nope!");
    }
    var resultText = $("<p>");
    resultText.text(triviaObject.explanations[questionSelector]);
    var brak = $("<br>")
    var resultPic = $("<img>");
    resultPic.attr("src", triviaObject.pictures[questionSelector]);
    //I chose a button instead of a timer, because a timer felt rushed between questions. A button allows the player to play at their own pace.
    var nextButton = $("<button>");
    nextButton.text("Next Question");
    //appends everything in the right order
    $("#current-question").append(isAnswerCorrect, resultText, resultPic, brak, nextButton);
    
    nextButton.on("click", function() {
        if (questionSelector == 4) {
            deleteChildren();
            finalScreen();
        } else {
    
            questionSelector++;
            resetClock();
            currentQuestion();
            makeAnswers();
        };
    });
    };
    
    //============================================================
    //here is my section for the final screen which will display the correct, incorrect, and unanswered questions as well as a reset button
    var finalScreen = function() {
    stop()
    //i could replace the clock text with a done message here.
    var totalCorrect = $("<p>")
    totalCorrect.text("Correct Answers: " + correctAnswers)
    var totalIncorrect = $("<p>")
    totalIncorrect.text("Wrong Answers: " + wrongAnswers)
    var totalUnanswered = $("<p>")
    totalUnanswered.text("Unanswered: " + unanswered)
    var resetButton = $("<button>");
    resetButton.text("Reset").attr("id", "reset-button");
    
    $("#current-question").append(totalCorrect, totalIncorrect, totalUnanswered, resetButton)
    
    $("#reset-button").on("click", function() {
    resetAll()
    });
    };
    
    
    