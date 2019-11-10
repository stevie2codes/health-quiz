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
const next = document.getElementById("next");
const prog = document.querySelector(".prog");

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
    }
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;


function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function nextQuestion(){
    runningQuestion++;
}

function isCorrect(){
        score += 20
        prog.textContent = `Correct!`;
        
        next.style.display = "block";
}
function isWrong(){
    timeLeft -= 10;
    progress.textContent = `Incorrect!`
    next.style.display = "block";
}


function checkAnswer(answer) {

    if (answer == questions[runningQuestion].correct) {
        isCorrect();  
    } else {
        isWrong();    
    }
}


let timeLeft = 75;
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
            timer.textContent = "TIME UP!";
            clearInterval(timeInterval);
        }
    }, 1000)
}



next.addEventListener("click",nextQuestion);
start.addEventListener('click', beginQuiz);