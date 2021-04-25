const slide = document.querySelector('.slides');
var speed = 1000;
var slidePosition = 1;
let slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
let counter = 0;

console.log(slideWidth);

function slideBackground() {
	if (slidePosition % slideWidth === 0) {
		console.log(counter);
		slides = document.querySelectorAll('.slide');
		var newSlide = slides[counter].cloneNode(true);
		slides[0].remove();
		slide.appendChild(newSlide);
		slidePosition = slidePosition - slideWidth;
	}
	slide.style.transform = `translateX(${-slidePosition}px)`;
	slidePosition++;
}

setInterval(slideBackground, 1000 / speed);
