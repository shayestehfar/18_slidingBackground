const body = document.body
const slides = document.querySelectorAll('.slide')
const leftArrow = document.getElementById('left')
const rightArrow = document.getElementById('right')

let activeSlide = 0

// Evenlistner
leftArrow.addEventListener('click', () => {
  activeSlide--
  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }
  setBackGround()
  setSlideImg()
})

rightArrow.addEventListener('click', () => {
  activeSlide++
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  setBackGround()
  setSlideImg()
})

// set body background image as the active slide image
function setBackGround() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

// add active class to slide
function setSlideImg() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
    slides[activeSlide].classList.add('active')
  })
}
