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
      { text: 'Får Facebook til at generere én kode', correct: undefined},
    ]
  }
];

const questionElement = document.getElementById('question');
const answerBtn = document.getElementById('answer-btn');

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

  currentQuestion.answers.forEach(answer => { // ! kig her 
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

nextSenario = () => {
  setTimeout(() => {
    const senarios = document.getElementById('answer-btn');
    const firstButton = senarios.getElementsByClassName('btn')[0];
    const secondButton = senarios.getElementsByClassName('btn')[1];
    const thirdButton = senarios.getElementsByClassName('btn')[2];

    firstButton.addEventListener('click', () => {
      if (currentQuestionIndex === 0) {
        currentQuestionIndex = 2;
        showQuestion();
      } else {
        currentQuestionIndex++;
        showQuestion();
      }
    }); 
  }, 1);
}

hello = () => {

}

startSenarios();

document.addEventListener('click', e => {
  console.log(e)
})

// Hvis man klikker på en boks, så skal senarie 1 rykke ud og senarie 3 skal rykke ind


//! Knapper i headeren

const buttonQuestion = document.querySelector('.button-header-question');
const pTagInsideButtonQuestion = buttonQuestion.querySelector('p');
const imgTagInsideButtonQuestion = buttonQuestion.querySelector('img');  
const boxQuestion = document.querySelector('.question-box');

buttonQuestion.addEventListener('click', rotateAndColorChange = () => {
  pTagInsideButtonQuestion.classList.toggle('active');
  imgTagInsideButtonQuestion.classList.toggle('active-2'); 
  boxQuestion.classList.toggle('active-3');
  setTimeout(() => {
    if (pTagInsideButtonQuestion.classList.contains('active')) {
      boxQuestion.style.height = 'auto';
      const fullHeight = boxQuestion.scrollHeight + 'px';
      boxQuestion.style.height = '0';
      requestAnimationFrame(() => {
        boxQuestion.style.transition = 'height 0.2s ease-in-out';
        boxQuestion.style.height = fullHeight;
      });
    } else {
      boxQuestion.style.transition = 'height 0.1s ease-in-out';
      boxQuestion.style.height = '0';
    }
  }, 500);
});