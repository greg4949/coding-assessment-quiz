var startContent = document.getElementById('start');
var quizContent = document.getElementById('quiz');
var response = document.getElementById('response');
var quizEnd = document.getElementById('quiz-end')
var timerEl = document.getElementById('timer');
var scoresShow = document.getElementById('highscores');
var cardheader = document.getElementById('card-header');
var subButton = document.getElementById('submit');
var initialsInput = document.getElementById('initials');
var startBtn = document.getElementById('start-btn');
var startOverBtn = document.getElementById('start-over');
var scoreLink = document.getElementById('score-click');
var secondsLeft = 60;
var score = 0;
var currentQuest = 0;
var highscoreArr = JSON.parse(localStorage.getItem('savedResult')) || [];
//list of questions for the quiz
var questions = [
    {
        question: 'Commonly used data types do not include __________.',
        answers: ['strings', 'booleans', 'alerts', 'numbers'],
        correct: 'alerts',
    },

    {
        question: 'The condition of an if/else statement is enclosed with __________.',
        answers: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        correct: 'parenthesis',
    },
    {
        question: 'Arrays in JavaScript can be used to store __________.',
        answers: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        correct: 'all of the above',

    },
    {
        question: 'String values must be enclosed within __________ when being assigned to variables.',
        answers: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        correct: 'quotes',

    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is __________.',
        answers: ['Javascript', 'terminal/bash', 'for loops', 'console.log'],
        correct: 'console.log',

    }
]

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.innerHTML = "Time Remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            endQuiz();
        }

    }, 1000);
}

function startQuiz() {
    
    //starts timer
    setTime();
    //hides quiz start page and displays first questions
    startContent.style.display = 'none';
    quizContent.id = 'quiz-show'
}

function endQuiz() {

    //hides quiz questions
    quizContent.id = 'quiz'
    //displays quiz results
    quizEnd.id = 'quiz-end-show'
}


//display first set of questions

function displayQuestion() {
    var currentQuestText = questions[currentQuest].question;
    document.getElementById('prntQuestion').innerHTML = currentQuestText;

    var ans1Button = document.getElementById('ans1')
    var ans2Button = document.getElementById('ans2')
    var ans3Button = document.getElementById('ans3')
    var ans4Button = document.getElementById('ans4')

    var ans1 = questions[currentQuest].answers[0];
    var ans2 = questions[currentQuest].answers[1];
    var ans3 = questions[currentQuest].answers[2];
    var ans4 = questions[currentQuest].answers[3];

    ans1Button.innerHTML = ans1;
    ans2Button.innerHTML = ans2;
    ans3Button.innerHTML = ans3;
    ans4Button.innerHTML = ans4;

    var answerBtn = document.querySelectorAll(".answerBtn")

    answerBtn.forEach(function (btn) {
        console.log(btn)
        btn.addEventListener("click", nextQuestion)
    }) 
}

//check if answer to previous question is correct and display next question

function nextQuestion() {

    var ansCorrect = questions[currentQuest].correct;
    var ansSelected = this.textContent
 
    if (ansCorrect === ansSelected) {
        document.getElementById('response-text').innerHTML = 'Correct!';
        score++;
        document.getElementById('score').innerHTML = score;
    } else {
        document.getElementById('response-text').innerHTML = 'Wrong!';
        secondsLeft=secondsLeft-10;
    };
    
    response.id = 'response-show';

    if (currentQuest < questions.length - 1) {
        currentQuest++;
        displayQuestion();    
    } else { endQuiz() };
}


//pulls scores and initials from local storage and creates high score list
function listScores() {
    var scoreArray= JSON.parse(window.localStorage.getItem('savedResult'));
    var scoreList = document.getElementById('score-list');

    for (let i=0; i<scoreArray.length; i++) {
        var scoreItem = document.createElement('p');
        var scoreDetail = document.createTextNode(scoreArray[i].initials + ':  ' +scoreArray[i].finalScore)
        scoreItem.appendChild(scoreDetail);
        document.getElementById('score-list').appendChild(scoreItem);
    }
}


//displays high score page with list of high scores
function showScores() {   

    endQuiz();
    startContent.style.display = 'none';
    cardheader.style.display = 'none';
    quizEnd.id = 'quiz-end'; 
    scoresShow.id= 'highscores-show';   
    listScores();    
}

// refresh page to go back to quiz start page
function startOver() {
    console.log('start over')
    window.location.reload();
    
 }

//displays first question set when start button is clicked
startBtn.addEventListener('click', function () {
    startQuiz();
    displayQuestion();
});

//stores score and initials of quiz to local storage when submit button is clicked on quiz end page
subButton.addEventListener('click', function (event) {

    var savedResult = {
        initials: initialsInput.value,
        finalScore: score
    };

    highscoreArr.push(savedResult);

    localStorage.setItem('savedResult', JSON.stringify(highscoreArr));
})

//diplays high score page when high scores link is clicked
scoreLink.addEventListener('click',showScores)

//returns user to quiz start page when Start Over button is clicked on high score page
startOverBtn.addEventListener('click',startOver);