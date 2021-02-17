
'use strict';

const btn = document.querySelector('.btn'),
   colorText = document.querySelector('.color');

   function getColor() {
      let num = "0123456789abcdef",
      color = "#";
      for (var i = 0; i < 6; i++) {
         color += num[(Math.floor(Math.random() * 16))];
         document.body.style.background = `${color}`;
      }
      console.log(color);
      colorText.textContent = `${color}`;
      
   }


   btn.addEventListener('click', function() {
      getColor();
   });
