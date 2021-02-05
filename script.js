'use strict';


function foo(name) {
   if (typeof(name) === 'string' && name.length < 30 && name.trim()) {
      console.log(name.trim());
   } else if(typeof(name) === 'string' && name.length >= 30 && name.trim()) {
      console.log(name.trim().slice(0 , 29) + '...' );
   } else {
      console.log('не строка');
   }
}

foo('  sd sd sd   ');
foo('                                             scscs s sd sd s                               ');
foo(5);

