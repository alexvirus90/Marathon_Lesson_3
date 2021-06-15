const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const height = container.clientHeight
const slideCount = mainSlide.querySelectorAll('div').length
let indexActiveSlide = 0

sidebar.style.top = `-${(slideCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
  changeSlide('up')
})
downBtn.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(direction) {
  if (direction === 'up') {
    indexActiveSlide++
    if (indexActiveSlide === slideCount) {
      indexActiveSlide = 0
    }
  } else if (direction === 'down') {
    indexActiveSlide--
    if (indexActiveSlide < 0) {
      indexActiveSlide = slideCount - 1
    }
  }

  mainSlide.style.transform = `translateY(-${indexActiveSlide * height}px)`
  sidebar.style.transform = `translateY(${indexActiveSlide * height}px)`
}
