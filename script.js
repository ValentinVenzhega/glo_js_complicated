'use strict';

let num = 266219;
num = String(num).split('').reduce((sum, current) => sum * current);
console.log(num);

num = num**3;
console.log(num);

num = +String(num).slice(0, 2);
alert(num);