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
        question: `やまださんは学生でわありません。What does "学生" mean?`,
            choiceA: "Teacher",
            choiceB: "Student",
            choiceC: "Doctor",
            choiceD: "Lawyer",
        
            correct: "B"
    },
    {
        question: "What is 100 in Japanese?",
            choiceA: "百",
            choiceB: "千",
            choiceC: "十",
            choiceD: "一",

            correct: "A"
    },
    {
        question: "初めまして。What does this mean?",
            choiceA: "Hello",
            choiceB: "Good day",
            choiceC: "It is nice to meet you",
            choiceD: "Good night",

            correct: "C"
    },
    {
        question: `私はきのう京都に行きました。Which city is "京都（きょうと）"?`,
            choiceA: "Osaka",
            choiceB: "Tokyo",
            choiceC: "Sendai",
            choiceD: "Kyoto",

            correct: "D"
    },
    {
        question: `あれは日本の映画じゃないかったです。What does the Kanji "えいが"　mean?`,
            choiceA: "Book",
            choiceB: "Manga",
            choiceC: "Game",
            choiceD: "Movie",

            correct: "D"
    }
];

startBtn.addEventListener("click", function () {
    startQuiz();
    showQuestions();
  });
  
  function startQuiz() {
    startBtn.style.display = "none";
    quizElement.style.display = "block";
  }
  
  function showQuestions() {
    questionElement.textContent = questions[currentQuestion].question;
    choiceAElement.textContent = questions[currentQuestion].choiceA;
    choiceBElement.textContent = questions[currentQuestion].choiceB;
    choiceCElement.textContent = questions[currentQuestion].choiceC;
    choiceDElement.textContent = questions[currentQuestion].choiceD;
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
      showQuestions();
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