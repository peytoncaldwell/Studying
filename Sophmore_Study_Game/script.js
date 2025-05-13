let score = 0;
let timeLeft = 60;
let timer;
let currentCategory = '';

let questions = {
  trig: [
    { q: "Convert 180° to radians.", a: "π" },
    { q: "Find sin(90°).", a: "1" },
    { q: "Find coterminal angle of 30° + 360°.", a: "390" },
    { q: "Exact value of cos(π).", a: "-1" },
    { q: "Use law of sines: a/sinA = b/sinB. What is this called?", a: "law of sines" },
    { q: "What’s sin(30°)?", a: "0.5" },
    // Add 95 more
  ],
  dilations: [
    { q: "If a shape doubles in size, what’s the scale factor?", a: "2" },
    { q: "Determine if 3,4,5 and 6,8,10 triangles are similar.", a: "Yes" },
    { q: "Is a scale factor of 0.5 an enlargement?", a: "No" },
    { q: "What does a scale factor >1 do?", a: "enlarges" },
    { q: "Similar polygons have equal _____?", a: "angles" },
    // Add 95 more
  ],
  quadratics: [
    { q: "Vertex of y = (x-2)² + 3?", a: "(2, 3)" },
    { q: "Solve x² = 9.", a: "3 or -3" },
    { q: "Quadratic formula discriminant is b²-4ac. True/False?", a: "True" },
    { q: "Shape of a quadratic graph?", a: "parabola" },
    { q: "Axis of symmetry for y = x² + 4x + 3?", a: "-2" },
    // Add 95 more
  ],
  chem: [
    { q: "Molar mass of H2O?", a: "18.02" },
    { q: "0.5 mol to particles (6.022e23)?", a: "3.011e23" },
    { q: "What’s a net ionic equation?", a: "ions that form precipitate" },
    { q: "Oxidation number of O in H2O?", a: "-2" },
    { q: "Sig figs in 0.00340?", a: "3" },
    // Add 95 more
  ]
};

function startGame(category) {
  currentCategory = category;
  document.getElementById('category-select').style.display = 'none';
  document.getElementById('question-area').style.display = 'block';
  document.getElementById('category-title').innerText = category.toUpperCase();
  startTimer();
  askQuestion();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('time-left').innerText = timeLeft;
    if (timeLeft <= 0) endGame();
  }, 1000);
}

function askQuestion() {
  let qList = questions[currentCategory];
  let randomIndex = Math.floor(Math.random() * qList.length);
  let qObj = qList[randomIndex];
  document.getElementById('question').innerText = qObj.q;
  document.getElementById('question').dataset.answer = qObj.a;
  document.getElementById('answer').value = '';
}

function checkAnswer() {
  let userAnswer = document.getElementById('answer').value.trim();
  let correctAnswer = document.getElementById('question').dataset.answer;
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    timeLeft += 5;
    document.getElementById('score').innerText = score;
  }
  askQuestion();
}

function endGame() {
  clearInterval(timer);
  document.getElementById('question-area').style.display = 'none';
  document.getElementById('end-screen').style.display = 'block';
  document.getElementById('final-score').innerText = `Final Score: ${score}`;
  document.getElementById('final-time').innerText = `Time Remaining: ${timeLeft}s`;
}
function toggleMode() {
  document.body.classList.toggle('dark-mode');
  let modeButton = document.getElementById('toggle-mode');
  if (document.body.classList.contains('dark-mode')) {
    modeButton.innerText = '☀️ Light Mode';
  } else {
    modeButton.innerText = '🌙 Dark Mode';
  }
}