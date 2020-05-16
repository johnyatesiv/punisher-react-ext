console.log('Content script running');

function frankify() {
	const els = document.querySelectorAll('.q9uorilb.fv0vnmcu');
	els.forEach(el => {
		//if (!el.data['franked']) {
			el.src = chrome.extension.getURL('/images/frankface128.png');
			//el.data['franked'] = true;
		//}
	});

	const textEls = document.querySelectorAll('.e71nayrh._18vj');
	textEls.forEach(el => {
		el.innerHTML = el.innerHTML.replace('Care', 'Frank');
	});

	const alreadyEls = document.querySelectorAll('.j1lvzwm4');
	alreadyEls.forEach(el => {
		el.src = chrome.extension.getURL('/images/frankface128.png');
	});

}

setTimeout(() => {
	frankify();
}, 1000);

setInterval(() => {
	frankify();
}, 10000);