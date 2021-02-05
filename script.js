'use strict';

const arr = ['26', '63', '45', '99', '32', '24', '12'];

for (let i = 0; i < arr.length; i++){
   if(arr[i][0] === '2' || arr[i][0] === '4') {

      console.log(arr[i]);
   }
}


nextPrime:
for (let i = 2; i <= 100; i++) { // Для всех i...

  for (let j = 2; j < Math.sqrt(i); j++) { // проверить, делится ли число..
      if (i % j === 0) {
         continue nextPrime; // не подходит, берём следующее
      } 
   }

   console.log(`${i} делится на 1 и на ${i}`);
}

