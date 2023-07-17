var homeBtn = document.getElementById("home");
var retryBtn = document.getElementById("retry");
var startBtn = document.getElementById("start");
var question = document.getElementById("question");
var results = document.getElementById("results");
var finalScore = document.getElementById("finalScore");
var score = 0;
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var currentQuestion = 0;
var quizCompleted = false;
var lastQuestion = 4;

var questions = [ 
    {
        question: 'How do you say "Good Morning"?',
            choiceA: "Buenas Noches",
            choiceB: "Buenos Dias",
            choiceC: "Adios",
            choiceD: "Buenas Tardes",
        
            correct: "B"
    },
    {
        question: '"Lo siento" means?:',
            choiceA: "How do you say?",
            choiceB: "I have a question!",
            choiceC: "I am sorry",
            choiceD: "Please",

            correct: "C"
    },
    {
        question: 'Translate "Yo necesito un boligrafo"?',
            choiceA: "I need a book",
            choiceB: "I need a room",
            choiceC: "I need a pen",
            choiceD: "I need a pencil",

            correct: "C"
    },
    {
        question: 'What is the correct translation for "telephone"?',
            choiceA: "el teléfono",
            choiceB: "el agua",
            choiceC: "un paraguas",
            choiceD: "una bicicleta",

            correct: "A"
    },
    {
        question: 'What is the correct translation for "thank you very much"?',
            choiceA: "No sè",
            choiceB: "¡Perdon!",
            choiceC: "¡Salud!",
            choiceD: "Muchas gracias",

            correct: "D"
    }
];

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.style.display = "none";
  quizElement.style.display = "block";
  showQuestion();
}

function showQuestion() {
  const currentQuestionData = questions[currentQuestion];
  questionElement.textContent = currentQuestionData.question;
  choiceAElement.textContent = currentQuestionData.choiceA;
  choiceBElement.textContent = currentQuestionData.choiceB;
  choiceCElement.textContent = currentQuestionData.choiceC;
  choiceDElement.textContent = currentQuestionData.choiceD;
  currentQuestionElement.textContent = `Question ${currentQuestion + 1}`;
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].correct) {
    score += 20;
  }

  currentQuestion++;

  if (currentQuestion > lastQuestion) {
    quizElement.style.display = "none";
    resultsElement.style.display = "block";
    finalScoreElement.textContent = score;
  } else {
    showQuestion();
  }
}

homeBtn.addEventListener("click", redirectToHome);
retryBtn.addEventListener("click", retryLesson);

function redirectToHome() {
  window.location.href = "/";
}

function retryLesson() {
  window.location.reload();
}
