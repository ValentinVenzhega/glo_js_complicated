'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
   dayCurrent = document.querySelector('.days'),
   date = new Date(),
   days = () => {
   week.forEach((item, i) => {
      let div = document.createElement('div');
      if (i === date.getDay() - 1) { // -1 так как массив
         if (item === 'Суббота' || item === 'Воскресенье') {
            div.style.fontStyle = 'italic'; 
         }
         div.style.fontWeight = '600';
      }
      if ((item === 'Суббота' || item === 'Воскресенье')) { 
         div.style.fontStyle = 'italic'; 
         div.textContent = week[i];
      }  else {
         div.textContent = week[i];
      }
      dayCurrent.append(div); 
   });
};
days();

