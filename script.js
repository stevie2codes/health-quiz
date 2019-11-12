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
let resetBtn = document.getElementById("reset");
const isRight = document.getElementById("is-right");
const wrong = document.getElementById("is-wrong");

let timeLeft = 75;
let score = 0;

//Quiz Questions//
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

const lastQuestion = questions.length;
let runningQuestion = 0;


let rightAnswer = 0;
let wrongAnswer = 0;

function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    
}
//keeping count of amount of questions rendered
function keepCount(){
    if(runningQuestion < lastQuestion){   
        renderQuestion();
    }else{
        gameOver();
        
    }
}

function isCorrect() {
    rightAnswer++;
    runningQuestion++;
    score += 20
}
function isWrong() {
    wrongAnswer++;
    runningQuestion++;
    timeLeft -= 10;
}

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        isCorrect();
    } else {
        isWrong();
    }
}
function gameOver(){ 
    resetBtn.style.display = "block";
    leader.style.display = "block";
    quiz.style.display = "none";
    choices.style.display = "none";
    text.style.display = "block";
    text.textContent = `Game over! You got ${score}% of the questions right.`;
    timer.textContent = "TIME UP!";  
}

function beginQuiz() {
    let timeInterval = setInterval(function () {
        timer.textContent = `Count Down: ${timeLeft}`;
        timeLeft--;
        isRight.textContent = `Correct: ${rightAnswer}`;
        wrong.textContent = `Incorrect: ${wrongAnswer}`;
        start.style.display = "none";
        text.style.display = "none";
        quiz.style.display = "block";
        choices.style.display = "block";
        progress.textContent = `Score: ${score}`;
        keepCount();
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            gameOver();      
        }
    }, 1000);
}

  function startOver(){ 
        window.location.href  = "index.html";
   }

resetBtn.addEventListener('click',startOver);
start.addEventListener('click', beginQuiz);


/* Modal Box */

let modal = document.getElementById("myModal");
let leader = document.getElementById("leader");
let modHeader = document.getElementById("modal-header");

let span = document.getElementsByClassName("close")[0];

leader.onclick = function(){
    modal.style.display = "block";
    modHeader.textContent = `You got ${score} pts!`;
}




span.onclick = function() {
    modal.style.display = "none";
//    modHeader.textContent = `You got ${score} pts!`;
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

