'use strict';


function foo(name) {
   if (typeof(name) === 'string' && name.trim.length < 30) {
      console.log(name.trim());
   } else if(typeof(name) === 'string' && name.trim.length >= 30) {
      console.log(name.slice(0 , 29).trim() + "...");
   } else {
      console.log('не строка');
   }
}

foo('  dfb     ');


