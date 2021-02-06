'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
   dayCurrent = document.querySelector('.days'),
   data = new Date(),
   days = () => {
   week.forEach((item, i) => {
      let div = document.createElement('div');
      if (i === data.getDay()-1) { // -1 так как массив
         div.classList.add('weight');
         div.textContent = week[i]; 
      } else if (item === 'Суббота' || item === 'Воскресенье') { 
         div.classList.add('italic'); 
         div.textContent = week[i];
      } else {
         div.textContent = week[i];
      }
      dayCurrent.append(div); 
   });
};
days();

