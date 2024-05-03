
document.addEventListener('DOMContentLoaded', function() {
  const questions = {
      start: {
          question: "Du skal lave et kodeord på Facebook, hvad gør du?",
          answers: {
              a: { text: "Jeg laver én selv", next: "1" },
              b: { text: "Jeg får Facebook til at generere en svær kode, hvis dette er muligt", next: "2" }
          }
      },
      1: {
          feedback: "Det kan man også, men lad os sikre, at dit kodeord er stærkt nok!",
          question: "Hvor mange tegn vil du bruge?",
          answers: {
              a: { text: "7 tegn", next: "3" },
              b: { text: "12 tegn", next: "5" }
          }
      },
      2: {
          feedback: "Godt valgt, det er med til at sikre et stærkt kodeord!",
          question: "Hvordan vil du gemme din kode?",
          answers: {
              a: { text: "Jeg skriver det på et stykke papir", next: "6" },
              b: { text: "Jeg bruger min kodemanager", next: "9" }
          }
      },
      3: {
          feedback: "7 tegn er for lidt, til at skabe et stærkt kodeord!",
          question: "Hvad skal din kode indeholde?",
          answers: {
              a: { text: "Det skal være tilfældige tal og bogstaver", next: "8" },
              b: { text: "Det skal være mit navn og min fødselsdag", next: "11" }
          }
      },
      4: {
          feedback: "Det kan man godt, men pas på at det ikke bliver væk!",
          question: "Hvor lægger du det hen?",
          answers: {
              a: { text: "I min pung", next: "10" },
              b: { text: "I mit pengeskab", next: "9" }
          }
      },
      5: {
          feedback: "Når du bruger minimum 12 tegn, er det med til at skabe et stærkt kodeord!",
          question: "Du er bange for at glemme din kode, deler du den med din kæreste?",
          answers: {
              a: { text: "Ja", next: "12" },
              b: { text: "Nej", next: "7" }
          }
      },
      6: {
          feedback: "Det kan man også godt, men pas på, at det ikke bliver væk!", 
          question: "Hvor lægger du det hen?",
          answers: {
              a: { text: "I min køkkenskuffe", next: "14" },
              b: { text: "I mit pengeskab", next: "16" }
          }
      },
      7: {
          feedback: "Godt valgt! Man må aldrig dele sin kode med andre!", 
          question: "Hvordan vil du huske dit kodeord?",
          answers: {
              a: { text: "Jeg har en skarp hukommelse, så jeg kan godt huske den!", next: "13" },
              b: { text: "Jeg bruger min kodemanager", next: "14" }
          }
      },
      8: {
          feedback: "Godt valgt! Det sikre et stærkt kodeord!",
          question: "Hvordan vil du gemme din kode?",
          answers: {
              a: { text: "Jeg skriver det på et stykke papir", next: "4" },
              b: { text: "Jeg bruger min kodemanager", next: "9" }
          }
      },
      9: {
          feedback: "Godt klaret! Du har sikret dig et stærkt kodeord, som du ikke glemmer!",
          question: "",
          answers: {}
      },
      10: {
          feedback: "Øv du har tabt din pung, så din kode kan blive fundet af en anden! Skynd dig at lave din kode om!",
          question: "",
          answers: {}
      },
      11: {
          feedback: "Din kode er for svag, og du er blevet hacket! Lav en ny kode med det samme!",
          question: "",
          answers: {}
      },
      12: {
          feedback: "Du er blevet uvenner med din kæreste, og han har sagt din kode videre til en anden! Skynd dig at lav en ny kode!",
          question: "",
          answers: {}
      },
      13: {
          feedback: "Ejj du har glemt din kode alligevel, så du er nødsaget til at lave en ny!",
          question: "",
          answers: {}
      },
      14: {
          question: "Århh nej dit papir med din kode er blevet taget! Skynd dig at lav en ny kode!",
          answers: {}
      }
  };

  let history = []; // Til at gemme brugernes valg

  function displayQuestion(questionIndex) {
    
    const question = questions[questionIndex];

    document.getElementById('feedback').textContent = question.feedback;
    document.getElementById('question').textContent = question.question;

    const answersUl = document.getElementById('answers');
    answersUl.innerHTML = '';

    Object.keys(question.answers).forEach(key => {
      const answer = question.answers[key];
      const buttons = document.createElement('button');
      buttons.textContent = answer.text;

      buttons.addEventListener('click', function () {
      history.push(questionIndex);  // Gemmer det nuværende spørgsmål i historikken
      if (answer.next) {
        displayQuestion(answer.next);
      }
      });
      answersUl.appendChild(buttons);
    });
  }

    const restartBtn = document.getElementById('restart-button');
    restartBtn.addEventListener('click', function() {
        history = []; // Nulstiller historikken
        displayQuestion('start');
    });

    displayQuestion('start');
});


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

//! Få indhold til at poppe ind på siden, når man scroller
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view')
      }
    })
  }, 
  {
    rootMargin: "0px", 
    threshold: [0, 0.1, 1],
  },
)

const tags = document.querySelectorAll('div.box'); 

tags.forEach((tag) => {
  observer.observe(tag)
})
