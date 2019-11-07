const timer = document.getElementById("timer");
const text = document.getElementById("main-text");

const start = document.getElementById("start");

const  questions = [
    {
        question: "What Vitamin is important for bone health?",
        answers: {
            a: "Vitamin C",
            b: "Vitamin D",
            c: "Vitamin A",
            d: "Vitamin B"
        },
        correctAnswer: "b"
    },
    {
         question:"What percentage of the world is Obese?",
         answer: {
             a: "10%",
             b: "40%",
             c: "30%",
             d: "20%"
         },
         correctAnswer: "c"
    }
];


function beginQuiz()




start.addEventListener('click', beginQuiz);