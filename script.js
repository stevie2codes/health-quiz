const timer = document.getElementById("timer");
const text = document.getElementById("main-text");
const quiz = document.getElementById("quiz");
const start = document.getElementById("start");
let question = document.getElementById("question");
let progress = document.getElementById("progress");
const choices = document.getElementById("choices");
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
let score = 0;

const  questions = [
    {
        question: "What is an important Vitamin for bone Health?",
        choiceA: "Vitamin A",
        choiceB: "Vitamin B",
        choiceC: "Vitamin C",
        choiceD: "Vitamin D",
        correct: "d"
    },
    {
        question: "What percentage of the world is Obese?",
        choiceA: "10%",
        choiceB: "20%",
        choiceC: "30%",
        choiceD: "40%",
        correct: "c"
    }
];
 
const lastQuestion = questions.length -1;
let runningQuestion = 0;


function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+q.question+"</p>";

    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}


function checkAnswer(answer){
    
    if(answer == questions[runningQuestion].correct){
        choiceD.style.backgroundColor = "springGreen";
        score+= 20;
        progress.textContent = `Correct! You have ${score} points!`
    } else{
        timeLeft -= 10;
        choiceA.style.backgroundColor = "#e14b32";
        choiceB.style.backgroundColor = "#e14b32";
        choiceC.style.backgroundColor = "#e14b32";
        choiceD.style.backgroundColor = "springGreen"
        progress.textContent = `Incorrect! You have ${score} points!`
    }
}


let timeLeft = 75;
function beginQuiz(){
   

   let timeInterval = setInterval(function(){
    timer.textContent = `Count Down: ${timeLeft}`;
    timeLeft--;
    start.style.display = "none";
    text.style.display = "none";
    quiz.style.display = "block";
    choices.style.display = "block";
   renderQuestion();
   
    if(timeLeft === 0){
        timer.textContent = "TIME UP!";
        clearInterval(timeInterval);
    }
   },1000)
}

    


start.addEventListener('click', beginQuiz);