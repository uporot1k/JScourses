let money,
	name,
	time
function start(){
	money = prompt('Ваш бюджет на месяц?');

	while (isNaN(money) || money == '' || money == null){
		money = prompt('Ваш бюджет на месяц?');
	}

	name = prompt('Название вашего магазина?').toUpperCase();
	time = 21;
}
start();


var mainList = {
	moneySum: money,
	nameMain: name,
	shopGoods : [],
	employers:{},
	open: true
}

function chooseGoods(){
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
}
chooseGoods();

function workTime(time){
	if (time < 0 ) {
		console.log('Такого не может быть!')
	} else if (time > 8 && time < 20) {
		console.log('Время работать!')
		} 	else if (time < 24) {
				console.log('Пора спать!')
			} 	else {
				console.log('В сутках только 24 часа!')
				}
}

workTime(time);



console.log(mainList.shopGoods[1]);
console.log(mainList.shopGoods[0]);
console.log(mainList);
console.log(typeof(mainList.shopGoods));
var oneDay = +money/30;

alert('Ваш бюджет на день: ' + oneDay + 'руб');