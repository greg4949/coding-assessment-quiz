var startContent = document.getElementById('start');
var quizContent = document.getElementById('quiz');
var response =document.getElementById('response');
var quizEnd = document.getElementById('quiz-end')
var timerEl=document.getElementById('timer');
var secondsLeft = 10;


function setTime(){
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.innerHTML = "Time: "+ secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        endQuiz();
      }
  
    }, 1000);
  }


function endQuiz() {
    quizContent.id='quiz'
    quizEnd.id='quiz-end-show'
 }
var startBtn = document.getElementById('start-btn');

function startQuiz() {
    setTime();
    startContent.style.display = 'none';
    quizContent.id = 'quiz-show'
    

}



startBtn.addEventListener('click', startQuiz);




//list of questions for the quiz
var questions= [
    {
        question: 'Commonly used data types do not include __________.',
        answers: ['strings','booleans','alerts','numbers'],
        correct: 3
    },

    {
        question: 'The condition of an if/else statement is enclosed with __________.',
        answers: [
            {text: 'quotes', correct: false}, 
            {text: 'curly brackets', correct: false}, 
            {text: 'parenthesis', correct: true}, 
            {text: 'square brackets', correct: false}, 
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store __________.',
        answers: [
            {text: 'numbers and strings', correct: false}, 
            {text: 'other arrays', correct: false}, 
            {text: 'booleans', correct: false}, 
            {text: 'all of the above', correct: true}, 
        ]
    },
    {
        question: 'String values must be enclosed within __________ when being assigned to variables.',
        answers: [
            {text: 'commas', correct: false}, 
            {text: 'curly brackets', correct: false}, 
            {text: 'quotes', correct: true}, 
            {text: 'parenthesis', correct: false}, 
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is __________.',
        answers: [
            {text: 'Javascript', correct: false}, 
            {text: 'terminal/bash', correct: false}, 
            {text: 'for loops', correct: false}, 
            {text: 'console.log', correct: true}, 
        ]
    }
]

var currentQuest =0;
var ans1 = questions[currentQuest].answers[0];
var ans2 = questions[currentQuest].answers[1].text;
var ans3 = questions[currentQuest].answers[2].text;
var ans4 = questions[currentQuest].answers[3].text;
var currentQuestText=questions[currentQuest].question;
var prntQuestText=document.getElementById('prntQuestion').innerHTML = currentQuestText;
var prntAns1Text=document.getElementById('ans1').innerHTML = ans1;
var prntAns2Text=document.getElementById('ans2').innerHTML = ans2;
var prntAns3Text=document.getElementById('ans3').innerHTML = ans3;
var prntAns4Text=document.getElementById('ans4').innerHTML = ans4;

console.log(prntAns1Text)




var ans1Button = document.getElementById('ans1')
var ans2Button = document.getElementById('ans2')
var ans3Button = document.getElementById('ans3')
var ans4Button = document.getElementById('ans4')



ans1Button.addEventListener('click', nextQuestion);
ans1Button.addEventListener('click', ansSelected);
ans2Button.addEventListener('click', nextQuestion);
ans3Button.addEventListener('click', nextQuestion);
ans4Button.addEventListener('click', nextQuestion);

function ansSelected(event) {
   
    var id=event.target; 
    console.log(prntAns1Text)
}

console.log(ansSelected)



    
function nextQuestion() {
    
    var correct = true;
    if (correct===true){
        document.getElementById('response-text').innerHTML='Correct!'
    } else {'Wrong!'
};   
    response.id='response-show'
    currentQuest++;
    console.log(currentQuest);
    document.getElementById('prntQuestion').innerHTML = questions[currentQuest].question;
    document.getElementById('ans1').innerHTML = questions[currentQuest].answers[0].text;
    document.getElementById('ans2').innerHTML = questions[currentQuest].answers[1].text;
    document.getElementById('ans3').innerHTML = questions[currentQuest].answers[2].text;
    document.getElementById('ans4').innerHTML = questions[currentQuest].answers[3].text;
 
    
}
  


