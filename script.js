'use strict';


function foo(name) {
   if (name.length < 30) {
      console.log(name.trim());
   } else if(name.length >= 30) {
      console.log(name.slice(0 , 29).trim() + "...");
   } else {
      console.log('не строка');
   }
}

foo('     ssscscsc    ');