
'use strict';

let car = document.querySelector('.car'),
start = document.querySelector('.start'),
reset = document.querySelector('.reset'),
count = 0;

let carInterval;
let carAnimation = () => {
	
	count++;
	if (count < 100) {
		carInterval = requestAnimationFrame(carAnimation);
		car.style.left = count*10 + 'px';
	} else {
		start.disabled = true;
		cancelAnimationFrame(carInterval);
	}
	console.log(count);
};
let animate = false;
start.addEventListener('click', () => {
	if(!animate) {
		carInterval = requestAnimationFrame(carAnimation);
		animate = true;
	} else {
		cancelAnimationFrame(carInterval);
		animate = false;
	}
	
});

reset.addEventListener('click', () => {
	count = 0;
	car.style.left = count + 'px';
	carAnimation();
	cancelAnimationFrame(carInterval);
	start.disabled = false;
	animate = false;
	
});