let 
	liList = document.getElementsByTagName('li'),
	titleId = document.getElementById('title'),
	askDiv = document.getElementById('prompt'),
	ulList = document.getElementById('list'),
	i,
	bodyImg,
	falsePoint,
	ask,
	adv;

	
	ulList = document.getElementById('list');
	liList = document.getElementsByTagName('li');
	titleId = document.getElementById('title');
	adv = document.getElementById('adv');
	askDiv = document.getElementById('prompt');

	falsePoint = liList[1].textContent;
	liList[1].textContent = liList[2].textContent;
	liList[2].textContent = falsePoint;

	i = document.createElement('li');
	i.innerHTML = 'Пятый пункт';
	i.className = 'menu-item'
	ulList.appendChild(i);
	document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
	adv.parentNode.removeChild(adv);

	ask = prompt('Какок у вас отношение к технике Aplle','');
	askDiv.textContent = ask;

	

