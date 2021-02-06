'use strict';


function foo(name) {
   if (typeof(name) === 'string' && name.trim().length < 30) {
      console.log(name.trim());
   } else if(typeof(name) === 'string' && name.trim().length > 30) {
      console.log(name.trim().slice(0 , 30) + '...' );
   } else {
      console.log('не строка');
   }
}

foo('  ss  ');
foo('                                                        12345678901234567890123456789012                                       ');
foo(5);

