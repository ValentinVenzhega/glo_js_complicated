'use strict';


function foo(name) {
   if (typeof(name) === 'string' && name.length < 30 && name.trim()) {
      console.log(name.trim());
   } else if(typeof(name) === 'string' && name.length >= 30 && name.trim()) {
      console.log(name.slice(0 , 29).trim() + "...");
   } else {
      console.log('не строка');
   }
}

foo('  sd sd sd   ');
foo('scscs s sd sd sd sd s s sd s s sd sd sdsd sd sd  sd ');
foo(5);

