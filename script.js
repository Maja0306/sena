// ! Labyrint 

const svg = document.querySelector('svg.vector')
const rect = svg.querySelector('rect') 

const scroll = () => {
  const distance = window.scrollY / 2 
  const totalDistance = svg.clientHeight * 1.45

  const percentage = distance / totalDistance

  const rectLenght = rect.getTotalLength() * 2

  rect.style.strokeDasharray = `${rectLenght}`
  rect.style.strokeDashoffset = `${rectLenght * (1 - percentage)} `
} 

scroll()
window.addEventListener("scroll", scroll)


// ! Hængelås som bevæger sig med musen (inspireret af SuperHi på Youtube)

const section = document.querySelector('div.mouse-effect')

const image = section.querySelector('div.img')
const shadow = section.querySelector('div.shadow')

let aimX = 0
let aimY = 0
let imageX = 0
let imageY = 0
let shadowX = 0
let shadowY = 0
let backgroundX = 0
let backgroundY = 0

const move = (event) => {
  aimX = 2 * event.clientX / window.innerWidth - 1
  aimY = 2 * event.clientY / window.innerHeight - 1
} // gør så billede følger musen fra midten af skærmen. 

const animate = () => {
  imageX += (aimX - imageX) * 0.1
  imageY += (aimY - imageY) * 0.1

  shadowX += (aimX - shadowX) * 0.05
  shadowY += (aimY - shadowY) * 0.05

  backgroundX += (aimX - backgroundX) * 0.4
  backgroundY += (aimY - backgroundY) * 0.4

  image.style.transform = `translate(${4 * imageX}rem, ${4 * imageY}rem)` 
  shadow.style.transform = `translate(${4 * shadowX}rem, ${4 * shadowY}rem)`

  requestAnimationFrame(animate)
}

animate()
document.addEventListener('mousemove', move)

// ! Få spørgsmål og svar til at flyve ind på siden

// ! Scroll ned på siden ved hjælp af pilen
// const arrow = document.querySelector('div.arrow-pink')

// const scrollArrow = () => {
 // window.scrollTo(500, document.body.scrollHeight) 
//}

// scrollArrow() 
// document.addEventListener('click', scrollArrow)

// ! En lås der åbner, hvis man svare 'forkert'.

// ! Branching senarios

const questions = [
  {
    question: "1.Du skal lave et kodeord på Facebook, hvad gør du?",
    answers: [
      { text: 'Laver én selv', correct: undefined},
      { text: 'Får Facebook til at generere én kode', correct: undefined},
    ]
  },
  {
    question: "2.Du skal lave et kodeord på Facebook, hvad gør du?",
    answers: [
      { text: 'Laver én selv', correct: undefined},
      { text: 'Får Facebook til at generere én kode', correct: undefined},
    ]
  },
  {
    question: "3. Du skal lave et kodeord på Facebook, hvad gør du?",
    answers: [
      { text: 'Laver én selv', correct: undefined},
      { text: 'Får Facebook til at generere én kode', correct: undefined},
    ]
  }
];

const questionElement = document.getElementById('question');
const answerBtn = document.getElementById('answer-btn');
const box = document.getElementById('box-senarios');

// *antallet af spørgsmål start ved spørgsmål 1 som er betegnet som nul
let currentQuestionIndex = 0; 

startSenarios = () => {
  currentQuestionIndex = 0;
  showQuestion();
}

showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerBtn.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct; 
    }
    button.addEventListener('click', selectAnswer);
    button.addEventListener('click', nextSenario);
  })
}

resetState = () => {
  while(answerBtn.firstChild){
    answerBtn.removeChild(answerBtn.firstChild);
  }
}

selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isUndefined = selectedBtn.dataset.correct === 'true';
  if(isUndefined){
    selectedBtn.classList.add('correct');
  } else {
    selectedBtn.classList.add('undefined');
  }
}

handleNextButton = () => {
  if(currentQuestionIndex < questions.length){
    currentQuestionIndex++;
    showQuestion();
  }
}

nextSenario = () => {
  setTimeout(() => {
    if(currentQuestionIndex < questions.length){
      handleNextButton();
    } else {
      startQuiz();
    }
  }, 500);
}

startSenarios();

// Hvis man klikker på en boks, så skal senarie 1 rykke ud og senarie 3 skal rykke ind