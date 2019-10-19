function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "\n" + "out of 5" + "</h2 > ";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which god is credited with being the co-creator of the world?", ["Benzaiten", "Neptune", "Osiris", "Tezcatlipoca"], "Tezcatlipoca"),
    new Question("Which god is a primordal Norse man, son of Buri?", ["Neptune", "Benzaiten", "Ana or Danu/Dana", "Bor"], "Bor"),
    new Question("Which got fatherd Aphrodite?", ["Zeus", "Yudi", "Osiris", "Benzaiten"], "Zeus"),
    new Question("Which god rode a horse or a dolphin and ruled the sea?", ["Tezcatlipoca", "Benzaiten", "Bor", "Neptune"], "Neptune"),
    new Question("Which god isthe only female among Japan’s “Seven Gods of Fortune", ["Bor", "Benzaiten", "Yudi", "Ana or Danu/Dana"], "Benzaiten")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();


console.log("test");