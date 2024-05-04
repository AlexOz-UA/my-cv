let loader = document.getElementsByClassName('components__loader')[0];
let loaderBg = document.getElementsByClassName('components__loader__bg')[0];
let contentBox = document.getElementsByClassName('content')[0];
const slides = document.querySelectorAll('.slide');
let navbar = document.getElementsByClassName('navbar__components')[0].clientHeight;
const totalSlides = slides.length;
let currentIndex = 1;

contentBox.style.height = `calc(99dvh - ${navbar}px)`

function moveToNextSlide() {
    slides[currentIndex].classList.remove('centre__slide');
    slides[currentIndex].classList.add('left__slide');
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.remove('right__slide');
    slides[currentIndex].classList.add('centre__slide');
    const nextIndex = (currentIndex + 1) % totalSlides;
    slides[nextIndex].classList.remove('left__slide');
    slides[nextIndex].classList.add('right__slide');
  }
  
  function moveToPrevSlide() {
    slides[currentIndex].classList.remove('centre__slide');
    slides[currentIndex].classList.add('right__slide');
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slides[currentIndex].classList.remove('left__slide');
    slides[currentIndex].classList.add('centre__slide');
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slides[prevIndex].classList.remove('right__slide');
    slides[prevIndex].classList.add('left__slide');
  }

let hideLoader = () => {
    setTimeout(() => {
        loader.classList.add('loader__hidden');
        loaderBg.classList.add('loader__hidden');
    }, 1000);
}

let changeScreen = (e) => {
  loader.classList.add('change__screen__show');
  loaderBg.classList.add('change__screen__show');
  setTimeout(() => {
     window.location.pathname = `./${e.id}`;
  }, 1500);
}

