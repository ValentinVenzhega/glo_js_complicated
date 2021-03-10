
const rates = {},// новый объект с нашими валютами
   elementUSD = document.querySelector('.course-usd'),
   elementEUR = document.querySelector('.course-eur'),
   inputOne = document.querySelector('#input-one'),
   resultOne = document.querySelector('#result-one'),
   inputTwo = document.querySelector('#input-two'),
   resultTwo = document.querySelector('#result-two'),
   selectOne = document.querySelector('#select-one'),
   selectTwo = document.querySelector('#select-two'),
   spanOne = document.querySelector('.span-one'),
   spanTwo = document.querySelector('.span-two');

function getCurrencies () {
   fetch('https://www.cbr-xml-daily.ru/daily_json.js')
   .then((response) => {
      if (response.status !== 200) {
         throw new Error('status networking not 200');
      } 
      return (response.json());
   })
   .then((data) => {
      rates.USD = data.Valute.USD;
      rates.EUR = data.Valute.EUR;

      elementUSD.textContent = rates.USD.Value.toFixed(2);
      elementEUR.textContent = rates.EUR.Value.toFixed(2);

      // меняет цвет при уменьшении или увеличении
      if (rates.USD.Value > rates.USD.Previus) {
         elementUSD.classList.add('top');
      } else {
         elementUSD.classList.add('bottom');
      }

      if (rates.EUR.Value > rates.EUR.Previus) {
         elementEUR.classList.add('top');
      } else {
         elementEUR.classList.add('bottom');
      }
   });
}
getCurrencies ();

const convertValue = () => {
   spanOne.textContent = selectOne.value;
   spanTwo.textContent = selectTwo.value;
   
   if (inputOne.value === '') {
      resultOne.value = '';
   } else {
      resultOne.value = (+inputOne.value / rates[selectOne.value].Value).toFixed(2);
   }

   if (inputTwo.value === '') {
      resultTwo.value = '';
   } else {
      resultTwo.value = (+inputTwo.value * rates[selectTwo.value].Value).toFixed(2);
   }

};

inputOne.addEventListener('change',  convertValue);
selectOne.addEventListener('change',  convertValue);

selectTwo.addEventListener('change',  convertValue);
inputTwo.addEventListener('change',  convertValue);
















// получаем корсы валют
// async function getCurrencies () {
//    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');

//    const data = await response.json();

//    const result = await data;

//    rates.USD = result.Valute.USD;
//    rates.EUR = result.Valute.EUR;

//    console.log(rates);

//    elementUSD.textContent = rates.USD.Value.toFixed(2);
//    elementEUR.textContent = rates.EUR.Value.toFixed(2);

//    // меняет цвет при уменьшении или увеличении
//    if (rates.USD.Value > rates.USD.Previus) {
//       elementUSD.classList.add('top');
//    } else {
//       elementUSD.classList.add('bottom');
//    }

//    if (rates.EUR.Value > rates.EUR.Previus) {
//       elementEUR.classList.add('top');
//    } else {
//       elementEUR.classList.add('bottom');
//    }

// }
// getCurrencies ();












