// Streg igennem siden

const svg = document.querySelector('svg.vector')
const path = svg.querySelector('path') 

const scroll = () => {
  const distance = window.scrollY
  const totalDistance = svg.clientHeight - window.innerHeight 

  const percentage = distance / totalDistance

  const pathLenght = path.getTotalLength()

  path.style.strokeDasharray = `${pathLenght}`
  path.style.strokeDashoffset = `${pathLenght * (0.83 - percentage)} ` 
} 

scroll()
window.addEventListener("scroll", scroll)
