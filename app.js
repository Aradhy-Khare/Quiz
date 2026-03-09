let input = 0;
let score = 0;

function loadQuestion(input) {
  currentQ = input;
  const q = quizData[currentQ];
  document.getElementById("question-text").innerText = `${q.id}. ${q.question}`;
  document.getElementById("q-count").innerText =
    `${currentQ + 1}/${quizData.length}`;
  document.getElementById("progress-bar").style.width =
    `${((currentQ + 1) / quizData.length) * 100}%`;

  const mcqContainer = document.getElementById("options-container");
  const subjContainer = document.getElementById("subjective-container");
  const subjAnswer = document.getElementById("subjective-answer");
  const selfScoreContainer = document.getElementById("self-score-container");
  const revealBtn = document.getElementById("btn-reveal");

  mcqContainer.innerHTML = "";

  if (!q.type) {
    // MCQ Logic
    mcqContainer.style.display = "grid";
    subjContainer.style.display = "none";

    Object.keys(q.options).forEach((key) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerText = q.options[key];
      btn.onclick = () => checkAnswer(key, btn);
      mcqContainer.appendChild(btn);
    });
  } else {
    // Subjective Question Logic
    mcqContainer.style.display = "none";
    subjContainer.style.display = "block";
    subjAnswer.style.display = "none";
    selfScoreContainer.style.display = "none";
    revealBtn.style.display = "block";
    subjAnswer.innerHTML = `<strong>Marking Scheme Answer:</strong><br><br>${q.answer}`;
  }
}

// Handler for MCQs
function checkAnswer(choice, btn) {
  const correct = quizData[currentQ].answer;
  const btns = document.querySelectorAll(".option-btn");
  btns.forEach((b) => (b.style.pointerEvents = "none"));

  if (choice === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    btns.forEach((b) => {
      if (quizData[currentQ].options[correct] === b.innerText)
        b.classList.add("correct");
    });
  }

  setTimeout(() => {
    nextQuestion();
  }, 1500);
}

// Handlers for Subjective Questions
function revealAnswer() {
  document.getElementById("btn-reveal").style.display = "none";
  document.getElementById("subjective-answer").style.display = "block";
  document.getElementById("self-score-container").style.display = "grid";
}

function selfScore(isCorrect) {
  if (isCorrect) score++;
  nextQuestion();
}

// Shared Navigation
function nextQuestion() {
  input = currentQ + 1;
  if (input < quizData.length) {
    loadQuestion(input);
  } else {
    showResults();
  }
}

function jumpToQuestion() {
  const inputValue = document.getElementById("question-number-input").value;
  const questionNumber = parseInt(inputValue);
  
  if (!inputValue || isNaN(questionNumber) || questionNumber < 1 || questionNumber > quizData.length) {
    alert(`Please enter a valid question number between 1 and ${quizData.length}`);
    return;
  }
  
  loadQuestion(questionNumber - 1);
  document.getElementById("question-number-input").value = "";
}

function showResults() {
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";
  document.getElementById("final-score").innerText =
    `${score}/${quizData.length}`;
}

// Start the app
loadQuestion(input);
