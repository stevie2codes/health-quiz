const timer = document.getElementById("timer");
const text = document.getElementById("main-text");
const quiz = document.getElementById("quiz");
const start = document.getElementById("start");
const question = document.getElementById("question");
const progress = document.getElementById("progress");

const choiceA = document.getElementById('A');
const choiceA = document.getElementById('B');
const choiceA = document.getElementById('C');
const choiceA = document.getElementById('D');


const  questions = [
    {
        title: "What is an important Vitamin for bone Health?",
        choices: ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin B"],
        answers: "Vitamin D"
    },
    {
        title: "What percentage of the worlds population is Obese?",
        choices: ["60%", "20%", "15%", "30%"],
        answers: "30%"
    }
];
    

function beginQuiz(){
   let timeLeft = 75;

   let timeInterval = setInterval(function(){
    timer.textContent = `Count Down: ${timeLeft}`;
    timeLeft--;
    start.style.display = "none";
    text.textContent = questions[0].question;
   
    if(timeLeft === 0){
        timer.textContent = "TIME UP!";
        clearInterval(timeInterval);
    }
   },1000)
}




start.addEventListener('click', beginQuiz);