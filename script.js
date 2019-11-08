const timer = document.getElementById("timer");
const text = document.getElementById("main-text");
const quiz = document.getElementById("quiz");
const start = document.getElementById("start");
const question = document.getElementById("question");
const progress = document.getElementById("progress");

const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');





const  questions = [
    {
        question: "What is an important Vitamin for bone Health?",
        choiceA: "Vitamin A",
        choiceB: "Vitamin B",
        choiceC: "Vitamin C",
        choiceD: "Vitamin D",
        correct: "D"
    },
    {
        question: "What percentage of the world is Obese?",
        choiceA: "10%",
        choiceB: "20%",
        choiceC: "30%",
        choiceD: "40%",
        correct: "C"
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





function beginQuiz(){
   let timeLeft = 75;

   let timeInterval = setInterval(function(){
    timer.textContent = `Count Down: ${timeLeft}`;
    timeLeft--;
    start.style.display = "none";
    text.style.display = "none";
    quiz.style.display = "block";
    renderQuestion();
   
    if(timeLeft === 0){
        timer.textContent = "TIME UP!";
        clearInterval(timeInterval);
    }
   },1000)
}

    


start.addEventListener('click', beginQuiz);