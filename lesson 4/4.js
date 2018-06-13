let money,
	name,
	time,
	price

var mainList = {
	moneySum: money,
	nameMain: name,
	shopGoods : [],
	employers:{},
	shopItems:[],
	open: true,
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
		for (var i = 0; i < 5; i++) {
			var a = prompt('Какой тип товаров вы будуете продавать?');
			console.log(typeof(a));
			
			if ((typeof(a)) === 'string' && typeof(a) != null && a !='' && a.length <50){
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
			}else {
				i = i - 1
			}	
		}
	},
	workTime: function workTime(time){
		if (time < 0 ) {
			console.log('Такого не может быть!')
		} else if (time > 8 && time < 20) {
			console.log('Время работать!')
			mainList.open = true;
			} 	else if (time < 24) {
					console.log('Пора спать!')
				} 	else {
					console.log('В сутках только 24 часа!')
					}
	},
	calcMoney: function calcMoney(){
		let oneDay = +money/30;
		alert('Ваш бюджет на день: ' + oneDay + 'руб');
	},
	hireEmployers: function hireEmployers(){
		for( let i = 1; i < 4; i++ ) {
			let nameWorker = prompt('Введите имя сотрудника');
			mainList.employers[i] =nameWorker;
			
		}
	},
	chooseShopItems: function chooseShopItems(){
		let items = prompt('Введите через запятую ваши товары','');

		while( !(typeof(items) ==='string') || items == null || items.length == 0 ){
			items = prompt('Введите через запятую ваши товары','');
		}
			
			mainList.shopItems[] = items.split(',');
			mainList.shopItems.push(prompt('Подождите еще один', ''));
			mainList.shopItems.sort();
			
			mainList.shopItems.forEach( function(element, index) {
				alert('У нас вы можете купить: ' + element);
				// statements
			});
		}
		
}	//Конец mainList


function start(){
	money = prompt('Ваш бюджет на месяц?');

	while (isNaN(money) || money == '' || money == null){
		money = prompt('Ваш бюджет на месяц?');
	}

	name = prompt('Название вашего магазина?').toUpperCase();
	time = 21;
}


//start();
//askDiscount();
//chooseGoods();
//workTime(time);
//calcMoney();



console.log(mainList);

