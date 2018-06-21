let
	open = document.getElementById('open-btn'),
	nameValue = document.getElementsByClassName('name-value')[0],
	budgetValue = document.getElementsByClassName('budget-value')[0],
	goodsValue = document.getElementsByClassName('goods-value')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	employersValue = document.getElementsByClassName('employers-value')[0],
	dicountValue = document.getElementsByClassName('discount-value')[0],
	isopenValue = document.getElementsByClassName('isopen-value')[0],
	goodsItem = document.getElementsByClassName('goods-item'),
	goodsBtn = document.getElementsByTagName('button')[1],
	budgetBtn = document.getElementsByTagName('button')[2],
	employersBtn = document.getElementsByTagName('button')[3],
	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudget = document.querySelector('.count-budget-value'),
	hireEmployersItem = document.querySelectorAll('.hire-employers-item');

let money,
	price;

open.addEventListener('click', () => {
	money = prompt('Ваш бюджет на месяц?');

	while (isNaN(money) || money == '' || money == null){
		money = prompt('Ваш бюджет на месяц?');
	}
	budgetValue.textContent = money;

	let name = prompt('Название вашего магазина?').toUpperCase();

	nameValue.textContent = name;
	
});

goodsBtn.addEventListener('click', () => {
	console.log(typeof(goodsItem[0].value));
	for (let i = 0; i < goodsItem.length; i++) {
		let a = goodsItem[i].value;

		if (typeof(a) === 'string' && typeof(a) != null && a.length <50) {
			mainList.shopGoods[i] = a;
			goodsValue.textContent = mainList.shopGoods;
		}else  {
			i = i - 1;
		}
	}
	
});

chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;
		if( isNaN(items) || items != ''){
			
			mainList.shopItems = items.split(', ');
			mainList.shopItems.sort();
			
			itemsValue.textContent = mainList.shopItems;
		}	
			mainList.shopItems = items.split(', ');
			mainList.shopItems.sort();
			
			itemsValue.textContent = mainList.shopItems;
			
			
				// statements
});

timeValue.addEventListener('change', () => {
	 let time = timeValue.value 
	if (time < 0 ) {
		mainList.open = false;
			console.log('Такого не может быть!')
		} else if (time > 8 && time < 20) {
			console.log('Время работать!')
			mainList.open = true;
			} 	else if (time < 24) {
				mainList.open = false;
					console.log('Пора спать!')
				} 	else {
					mainList.open = false;
					console.log('В сутках только 24 часа!')
					}

	if (mainList.open == true ) {
		isopenValue.style.backgroundColor = 'green'
	}else{
		isopenValue.style.backgroundColor = 'red'
	}
});

budgetBtn.addEventListener('click', () => {
	countBudget.value = +money/30; 
});

employersBtn.addEventListener('click', () => {
	for( let i = 0; i < hireEmployersItem.length; i++ ) {
			let nameWorker = hireEmployersItem[i].value;
			mainList.employers[i] =nameWorker;
			employersValue.textContent += mainList.employers[i] + ', ';
			
		}
});

isopenValue.addEventListener('change',()=>{
	if(isopenValue.style.backgroundColor === 'green'){
		console.log(1);
	}else{
		console.log(2);
	}
});





var mainList = {
	moneySum: money,
	nameMain: name,
	shopGoods : [],
	employers:{},
	shopItems:[],
	open: false,
	discount: false,
	askDiscount: function askDiscount(){
		let ask = confirm("Хотите подключить дисконтную систему?");
		if(ask==true){
			mainList.discount = true;
			makeDiscount();
		}
	},
	makeDiscount: function makeDiscount(price){
		return price * 0.2
	},
	chooseGoods: function chooseGoods(){
		
	},
	workTime: function workTime(time){
		
	},
	calcMoney: function calcMoney(){
		let oneDay = +money/30;
		alert('Ваш бюджет на день: ' + oneDay + 'руб');
	},
	hireEmployers: function hireEmployers(){
		
	},
	chooseShopItems: function chooseShopItems(){
		
		}
		
}	//Конец mainList


function start(){
	
}


//start();
//askDiscount();
//chooseGoods();
//workTime(time);
//calcMoney();



console.log(mainList);

