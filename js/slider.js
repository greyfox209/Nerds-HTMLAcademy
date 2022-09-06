const slideSmartphone = document.querySelector('.index-slider-smartphone');
const slideMonitor = document.querySelector('.index-slider-monitor');
const slideTablet = document.querySelector('.index-slider-tablet');
const btnSlideOne = document.querySelector('.index-slider-button-1');
const btnSlideTwo = document.querySelector('.index-slider-button-2');
const btnSlideThree = document.querySelector('.index-slider-button-3');


btnSlideOne.addEventListener ('click', function (evt) {
  evt.preventDefault();
  slideSmartphone.classList.remove('visually-hidden');
  slideMonitor.classList.add('visually-hidden');
  slideTablet.classList.add('visually-hidden');
  btnSlideOne.classList.add('index-slider-button-current');
  btnSlideTwo.classList.remove('index-slider-button-current');
  btnSlideThree.classList.remove('index-slider-button-current');
})

btnSlideTwo.addEventListener ('click', function (evt) {
  evt.preventDefault();
  slideMonitor.classList.remove('visually-hidden');
  slideSmartphone.classList.add('visually-hidden');
  slideTablet.classList.add('visually-hidden');
  btnSlideTwo.classList.add('index-slider-button-current');
  btnSlideOne.classList.remove('index-slider-button-current');
  btnSlideThree.classList.remove('index-slider-button-current');
});

btnSlideThree.addEventListener ('click', function (evt) {
  evt.preventDefault();
  slideTablet.classList.remove('visually-hidden');
  slideSmartphone.classList.add('visually-hidden');
  slideMonitor.classList.add('visually-hidden');
  btnSlideThree.classList.add('index-slider-button-current');
  btnSlideOne.classList.remove('index-slider-button-current');
  btnSlideTwo.classList.remove('index-slider-button-current');
});