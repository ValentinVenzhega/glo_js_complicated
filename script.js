
'use strict';
const input = document.querySelector('.input'),
	text = document.querySelector('.text');

const debounce = (fn, ms) => {
	let timeout;
	return function() {
		const fnCall = () => fn.apply(this, arguments);
		clearTimeout(timeout);
		timeout = setTimeout(fnCall, ms);
	};
};

function onChange() {
	text.innerHTML = input.value;
}

onChange = debounce(onChange, 300);

input.addEventListener('keyup', onChange);
