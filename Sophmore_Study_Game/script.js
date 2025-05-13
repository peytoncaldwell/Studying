let score = 0;
let timeLeft = 60;
let timer;
let currentCategory = '';

let questions = {
  trig: [
  { question: 'What is the sine of 30°?', answer: '0.5' },
  { question: 'What is the cosine of 60°?', answer: '0.5' },
  { question: 'What is the tangent of 45°?', answer: '1' },
  { question: 'Convert 90° to radians.', answer: 'π/2' },
  { question: 'Convert π/2 radians to degrees.', answer: '90' },
  { question: 'Find a coterminal angle for 30° by adding 360°.', answer: '390' },
  { question: 'Which trig ratio is opposite/hypotenuse?', answer: 'sine' },
  { question: 'A right triangle has legs of 3 and 4. Find the hypotenuse.', answer: '5' },
  { question: 'What is sin(0°)?', answer: '0' },
  { question: 'What is cos(180°)?', answer: '-1' },
  { question: 'A triangle has sides 7 and 9, with an included angle of 60°. Find its area.', answer: '27.23' },
  { question: 'Convert 270° to radians.', answer: '3π/2' },
  { question: 'What is the reference angle for 210°?', answer: '30' },
  { question: 'What is the secant of 0°?', answer: '1' },
  { question: 'Use the Law of Sines to solve for angle A: a=7, b=9, A=30°.', answer: '38.68' },
  { question: 'Which ratio is adjacent/hypotenuse?', answer: 'cosine' },
  { question: 'Find the angle if sin(θ) = 0.5.', answer: '30' },
  { question: 'A triangle has sides 10 and 8 with an included angle of 45°. Find its area.', answer: '28.28' },
  { question: 'What’s the tangent of 0°?', answer: '0' },
  { question: 'What is sin(π)?', answer: '0' },
  { question: 'A dilation with scale factor 2 doubles the size of a square. What happens to the perimeter?', answer: 'doubles' },
  { question: 'Find the scale factor if a triangle’s side grows from 5 to 20.', answer: '4' },
  { question: 'Are two squares always similar?', answer: 'yes' },
  { question: 'Write a similarity statement for ΔABC ∼ ΔDEF.', answer: 'ΔABC ∼ ΔDEF' },
  { question: 'What’s the cosine of 270°?', answer: '0' },
  { question: 'Find the coterminal angle of -30°.', answer: '330' },
  { question: 'What is sin(π/6)?', answer: '0.5' },
  { question: 'How many degrees are in a full circle?', answer: '360' },
  { question: 'What’s the area formula for a triangle using sine?', answer: '0.5ab sinC' },
  { question: 'What is the cotangent of 45°?', answer: '1' },
  { question: 'What is the hypotenuse of a 5-12-13 triangle?', answer: '13' },
  { question: 'Convert -90° to radians.', answer: '-π/2' },
  { question: 'Which quadrant is 135° in?', answer: 'II' },
  { question: 'Find the missing side: leg=3, hypotenuse=5.', answer: '4' },
  { question: 'What is tan(π/4)?', answer: '1' },
  { question: 'A polygon is dilated by a scale factor of 0.5. Is this an enlargement or reduction?', answer: 'reduction' },
  { question: 'Which angles on the Unit Circle are positive in Quadrant II?', answer: 'sine' },
  { question: 'Find cos(0°).', answer: '1' },
  { question: 'What’s the perimeter ratio of similar triangles with sides 3 and 6?', answer: '1:2' },
  { question: 'Solve for x: sin(x)=√3/2', answer: '60' },
  { question: 'What’s the law of sines formula?', answer: 'a/sinA = b/sinB = c/sinC' },
  { question: 'Convert 3π/4 radians to degrees.', answer: '135' },
  { question: 'Which trig ratio is reciprocal of sine?', answer: 'cosecant' },
  { question: 'A dilation multiplies all sides by 3. What happens to the area?', answer: 'multiplies by 9' },
  { question: 'What is the sine of 150°?', answer: '0.5' },
  { question: 'Find the cosine of 45° without a calculator.', answer: '√2/2' },
  { question: 'What’s the area of a triangle with sides 10, 6, and included angle 30°?', answer: '15' },
  { question: 'Which ratios are defined in a right triangle only?', answer: 'sine, cosine, tangent' },
  { question: 'What’s the secant of 90°?', answer: 'undefined' },
  { question: 'What is the formula for coterminal angles?', answer: 'θ ± 360n' }
   // Add 95 more
];
  chem: [
  { question: 'What is the oxidation number of oxygen in H2O?', answer: '-2' },
  { question: 'What is the density of an object with mass 50g and volume 10mL?', answer: '5 g/mL' },
  { question: 'Which is a functional group in organic chemistry?', answer: 'Alkene' },
  { question: 'What’s the molar mass of CO2?', answer: '44.01 g/mol' },
  { question: 'Which of these is a physical change?', answer: 'Boiling water' },
  { question: 'What’s the oxidation number of hydrogen in H2?', answer: '0' },
  { question: 'What is the molarity of a solution that contains 2 moles of solute in 1 liter of solution?', answer: '2 M' },
  { question: 'Which of these is a chemical change?', answer: 'Rusting iron' },
  { question: 'How many atoms are in 1 mole of NaCl?', answer: '6.022 × 10²³ atoms' },
  { question: 'What’s the molar mass of H2O?', answer: '18.015 g/mol' },
  { question: 'What is the empirical formula of C6H12O6?', answer: 'CH2O' },
  { question: 'What is the activity series?', answer: 'A table that ranks metals by their ability to displace other metals in reactions.' },
  { question: 'What is a net ionic equation?', answer: 'An equation that shows only the ions involved in a chemical reaction, excluding spectator ions.' },
  { question: 'How many significant figures are in 0.00456?', answer: '3' },
  { question: 'What is the atomic number of oxygen?', answer: '8' },
  { question: 'How do you calculate molar volume at STP for a gas?', answer: '22.4 L/mol' },
  { question: 'What is the formula for calculating percent composition?', answer: '(mass of element / molar mass of compound) × 100' },
  { question: 'What’s the balanced equation for the combustion of methane (CH4)?', answer: 'CH4 + 2O2 → CO2 + 2H2O' },
  { question: 'What is the mole ratio in the equation 2H2 + O2 → 2H2O?', answer: '2:1:2' },
  { question: 'What’s the pH of a neutral solution?', answer: '7' },
  { question: 'What is the difference between a physical and chemical change?', answer: 'A physical change doesn’t alter the chemical composition, while a chemical change does.' },
  { question: 'How many grams are in 2 moles of NaCl?', answer: '117.0 g' },
  { question: 'What is the law of conservation of mass?', answer: 'Mass is neither created nor destroyed in a chemical reaction.' },
  { question: 'What’s the formula for finding the number of moles?', answer: 'moles = mass / molar mass' },
  { question: 'What is the difference between an ionic and covalent bond?', answer: 'Ionic bonds involve the transfer of electrons, while covalent bonds involve sharing electrons.' },
  { question: 'What is the molecular weight of NaCl?', answer: '58.44 g/mol' },
  { question: 'What are the three main types of radioactive decay?', answer: 'Alpha, beta, and gamma decay' },
  { question: 'What is an anion?', answer: 'A negatively charged ion.' },
  { question: 'What is the formula for calculating molarity?', answer: 'M = moles of solute / liters of solution' },
  { question: 'What are the main types of intermolecular forces?', answer: 'Hydrogen bonds, dipole-dipole interactions, and London dispersion forces.' },
  { question: 'What’s the molarity of a solution containing 1.5 moles of solute in 3 liters of solution?', answer: '0.5 M' },
  { question: 'What is Avogadro’s number?', answer: '6.022 × 10²³' },
  { question: 'What is the difference between a compound and a mixture?', answer: 'A compound is chemically bonded, while a mixture is physically combined.' },
  { question: 'What is a buffer solution?', answer: 'A solution that resists changes in pH when an acid or base is added.' },
  { question: 'What is the ideal gas law?', answer: 'PV = nRT' },
  { question: 'What is the standard temperature and pressure (STP) for gases?', answer: '0°C and 1 atm' },
  { question: 'What is the formula for the volume of a gas at STP?', answer: '22.4 L/mol' },
  { question: 'How do you find the number of moles in a sample?', answer: 'Moles = Mass / Molar mass' },
  { question: 'What is the difference between an acid and a base?', answer: 'Acids donate protons, while bases accept protons.' },
  { question: 'What is an isotopic mixture?', answer: 'A mixture containing different isotopes of the same element.' },
  { question: 'What is the half-life of a substance?', answer: 'The time it takes for half of the substance to decay.' },
  { question: 'What is a galvanic cell?', answer: 'A device that uses spontaneous chemical reactions to produce electrical energy.' },
  { question: 'What are allotropes?', answer: 'Different forms of the same element in the same physical state.' },
  { question: 'What is the empirical formula for C6H12?', answer: 'CH2' },
  { question: 'What is the process of distillation?', answer: 'A method to separate components of a mixture based on differences in boiling points.' },
  { question: 'What is a precipitate?', answer: 'A solid formed from a solution during a chemical reaction.' },
  { question: 'What is an example of a homogeneous mixture?', answer: 'Saltwater' },
  { question: 'What does a catalyst do in a chemical reaction?', answer: 'It speeds up the reaction without being consumed.' },
  { question: 'What is the formula for calculating percent yield?', answer: 'Percent yield = (actual yield / theoretical yield) × 100' }
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
