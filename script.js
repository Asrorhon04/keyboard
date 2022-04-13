function t1(event) {
   console.log(event.key);
	const keyboard =  document.querySelectorAll('.keyboard');
	const sym = {
	"Control" : "ctrl",
	" " : "space",
	"Alt" : "alt",
	"Enter" : "enter",
	"Shift" : "shift",
	"Backspace" : "backspace",
}
	let k = event.key;
	if ( sym[k] !== undefined) k = sym[k];
	keyboard.forEach(item => {
		item.classList.remove("active");
	});
	let atr = document.querySelector(`.keyboard[data="${k}"]`);
	if (atr) atr.classList.add('active');
}

document.querySelector('.i-1').onkeydown = t1;
