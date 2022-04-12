function t1(event) {
   console.log(event.key);
	let block =	document.querySelectorAll('.keyboard');
	for (let i = 0; i < block.length; i++) {
		block[i].classList.remove('active');
	}
	for (let i = 0; i < block.length; i++) {
		let atr = block[i].getAttribute('data');
		if (event.key.toLowerCase() == atr || event.code.toLowerCase() == atr){
			block[i].classList.add('active');
		}
	}
}

document.querySelector('.i-1').onkeydown = t1;
