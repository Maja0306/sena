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


// ! Hængelås som bevæger sig med musen

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
const arrow = document.querySelector('div.arrow-pink')

const scrollArrow = () => {
  window.scrollTo(500, document.body.scrollHeight);
}

scrollArrow() 
document.addEventListener('click', scrollArrow)
