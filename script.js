'use strict';
const dateOne = document.querySelector('.date-one'),
	dateTwo = document.querySelector('.date-two');

function declOfNum(number, words) {  
	return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
}

setInterval(function(){
	const date = new Date(),
		options = {
			month: 'long',
			day: 'numeric',
			weekday: 'long',
			timezone: 'UTC'
		},
		month = date.toLocaleString("ru", options).split(', ').map(word => word[0].toUpperCase() + word.substring(1)).join(' '),
		year = date.getFullYear(),
		hour = date.getHours(),
		minute = date.getMinutes(),
		second = date.getSeconds(),
		hourText = declOfNum(date.getHours(), [ 'час', 'часа', 'часов' ]),
		minuteText = declOfNum(date.getMinutes(), [ 'минута', 'минуты', 'минут' ]),
		secondText = declOfNum(date.getSeconds(), [ 'секунда', 'секунды', 'секунд' ]);

      console.log(options);


	dateOne.innerHTML = `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
	dateTwo.innerHTML = `Сегодня ${month} ${year} года, 
      ${hour} ${hourText}  ${minute} 
      ${minuteText} ${second} 
      ${secondText}`;
}, 1000);