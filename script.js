'use strict';

let num = 266219;
num = String(num).split('').reduce((sum, current) => sum * current);
console.log(num);

num = num**3;
console.log(num);

num = +String(num).slice(0, 2);
// alert(num);
console.log(num);



// lesson03
const lang = 'en';
const rusLang = 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';
const engLang = 'monday, tuesday, wednesday, thursday, friday, saturday, sunday';


if (lang === 'ru') {
   console.log(rusLang);
}else if (lang === 'en') {
   console.log(engLang);
}


switch(lang) {
   case 'ru': 
      console.log(rusLang);
      break;
   case  'en':
      console.log(engLang);
      break;
}


const arr = [
   ['понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'], 
   ['monday, tuesday, wednesday, thursday, friday, saturday, sunday']
];

const week = (lang === 'en') ? arr[1] : arr[0];
console.log(week);


const namePerson =  prompt('Введите имя').toLowerCase();
const message = (namePerson === 'артем') ? 'Директор' :
   (namePerson === 'максим') ? 'Преподаватель' :
   'Студент';

console.log(message);