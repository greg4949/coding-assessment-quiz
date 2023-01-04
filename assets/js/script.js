var startContent = document.getElementById('start');
var quizContent = document.getElementById('quiz');
var response = document.getElementById('response');
var quizEnd = document.getElementById('quiz-end')
var timerEl = document.getElementById('timer');
var secondsLeft = 60;
var score = 0;



function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.innerHTML = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            endQuiz();
        }

    }, 1000);
}


function endQuiz() {
    quizContent.id = 'quiz'
    quizEnd.id = 'quiz-end-show'
}
var startBtn = document.getElementById('start-btn');

function startQuiz() {
    setTime();
    startContent.style.display = 'none';
    quizContent.id = 'quiz-show'


}



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

var currentQuest = 0;


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

        //  btn.onclick = nextQuestion;

    })

    // ans1Button.addEventListener('click', () => {
    //     ansSelected = ans1
    //     console.log(ansSelected)
    //     nextQuestion();
    // });
    // ans2Button.addEventListener('click', async () => {
    //     ansSelected = await ans2
    //     console.log(ansSelected)
    //     nextQuestion();
    // });
    // ans3Button.addEventListener('click', () => { ansSelected = ans3 });
    // ans4Button.addEventListener('click', () => { ansSelected = ans4 });

    // ans1Button.addEventListener('click', nextQuestion);
    // ans2Button.addEventListener('click', nextQuestion);
    // ans3Button.addEventListener('click', nextQuestion);
    // ans4Button.addEventListener('click', nextQuestion);

}

function nextQuestion() {

    var ansCorrect = questions[currentQuest].correct;
    var ansSelected = this.textContent
    console.log(this.textContent)


    console.log(currentQuest);
    console.log(ansSelected);
    console.log(ansCorrect);

    /*console.log(ans1);
    console.log(ans2);
    console.log(ans3);
    console.log(ans4);

    */




    if (ansCorrect === ansSelected) {
        document.getElementById('response-text').innerHTML = 'Correct!';
        score++;
        document.getElementById('score').innerHTML = score;
    } else {
        document.getElementById('response-text').innerHTML = 'Wrong!';
    };
    response.id = 'response-show';

    if (currentQuest < questions.length - 1) {
        currentQuest++;
        displayQuestion();
        // document.getElementById('prntQuestion').innerHTML = questions[currentQuest].question;
        // document.getElementById('ans1').innerHTML = questions[currentQuest].answers[0];
        // document.getElementById('ans2').innerHTML = questions[currentQuest].answers[1];
        // document.getElementById('ans3').innerHTML = questions[currentQuest].answers[2];
        // document.getElementById('ans4').innerHTML = questions[currentQuest].answers[3];

    } else { endQuiz() };



}

var subButton = document.getElementById('submit');
var initialsInput = document.getElementById('initials');
var highscoreArr = JSON.parse(localStorage.getItem('savedResult')) || [];


startBtn.addEventListener('click', function () {
    startQuiz();
    displayQuestion();
});

subButton.addEventListener('click', function (event) {



    var savedResult = {
        initials: initialsInput.value,
        finalScore: score
    }

    highscoreArr.push(savedResult)

    localStorage.setItem('savedResult', JSON.stringify(highscoreArr));
})
