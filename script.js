'use strict';
const dateOne = document.querySelector('.date-one'),
	dateTwo = document.querySelector('.date-two');

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

function declOfNum(number, words) {  
	return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
}

setInterval(function(){
	let date = new Date(),
      options = {
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC'
      };

	dateOne.innerHTML = `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}
                        .${addZero(date.getFullYear())} - ${addZero(date.getHours())}
                        :${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
	dateTwo.innerHTML = `Сегодня ${date.toLocaleString("ru", options)} ${date.getFullYear()} года, 
                        ${date.getHours()} ${declOfNum(date.getHours(), [ 'час', 'часа', 'часов' ])}  ${date.getMinutes()} 
                        ${declOfNum(date.getMinutes(), [ 'минута', 'минуты', 'минут' ])} ${date.getSeconds()} 
                        ${declOfNum(date.getSeconds(), [ 'секунда', 'секунды', 'секунд' ])}`;
}, 1000);