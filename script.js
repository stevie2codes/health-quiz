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
let next = document.getElementById("next"),count = 0;
const isRight = document.getElementById("is-right");
let timeLeft = 75;
let score = 0;

const questions = [
    {
        question: "What is an important Vitamin for bone Health?",
        choiceA: "Vitamin A",
        choiceB: "Vitamin B",
        choiceC: "Vitamin C",
        choiceD: "Vitamin D",
        correct: "d"
    },
    {
        question: "What percentage of the world is considered Obese?",
        choiceA: "10%",
        choiceB: "20%",
        choiceC: "30%",
        choiceD: "40%",
        correct: "c"
    },
    {
        question: "To lose 1 pound of Fat you need to burn roughly how many calories?",
        choiceA: "2,800",
        choiceB: "3,500",
        choiceC: "5,000",
        choiceD: "2,900",
        correct: "b"
    },
    {
        question: "Drinking this many glasses of water a day can reduce your chances of a heart attack by 40%",
        choiceA: "5",
        choiceB: "2",
        choiceC: "9",
        choiceD: "1",
        correct: "a"
    },
    {
        question: "Which fruit contains more Vitamin C than oranges",
        choiceA: "Apples",
        choiceB: "Peaches",
        choiceC: "raspberrys",
        choiceD: "pear",
        correct: "c"
    },
    
];

const lastQuestion = questions.length -1;
let runningQuestion = 0;




function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

    }


function isCorrect(){
        score += 20
        isRight.textContent = "Correct! Click the next button";
        isRight.style.color = "palegreen";
        next.style.display = "block";
}
function isWrong(){
    timeLeft -= 10;
    isRight.textContent = "Incorrect You lost 10 seconds";
    isRight.style.color = "tomato";
    next.style.display = "block";
}

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        isCorrect();    
    } else {
        isWrong(); 
    }
}


function beginQuiz() {
    let timeInterval = setInterval(function () {
        timer.textContent = `Count Down: ${timeLeft}`;
        timeLeft--;
        start.style.display = "none";
        text.style.display = "none";
        quiz.style.display = "block";
        choices.style.display = "block";
        progress.textContent = `Score: ${score}`;
        renderQuestion();
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            gameOver();
            timer.textContent = "TIME UP!";
        } else
            if(runningQuestion == lastQuestion){
                clearInterval(timeInterval);
                gameOver();
        }
    }, 1000)
}
function nextQuestion(){  
        runningQuestion++;       
    }
    
function gameOver(){
    quiz.style.display = "none";
    choices.style.display = "none";
    text.style.display = "block";
    text.textContent = `Game over! You got ${score}% of the questions right.`   
}


next.addEventListener("click",nextQuestion);
start.addEventListener('click', beginQuiz);