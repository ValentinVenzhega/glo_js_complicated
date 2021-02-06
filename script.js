'use strict';


function foo(name) {
   if (typeof(name) === 'string' && name.trim().length < 30) {
      console.log(name.trim());
   } else if(typeof(name) === 'string' && name.trim().length > 30) {
      console.log(name.trim().slice(0 , 29) + '...' );
   } else {
      console.log('не строка');
   }
}

foo('  ss  ');
foo('                                                        s                                       ');
foo(5);

