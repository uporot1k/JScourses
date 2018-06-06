

var money = prompt('Ваш бюджет на месяц?');
var name = prompt('Название вашего магазина?');

var mainList = {
	moneySum: money,
	nameMain: name,
	shopGoods : [],
	employers:{},
	open: true
}

console.log(typeof(mainList.shopGoods));

mainList.shopGoods[0] = prompt('Какой тип товаров вы будете продавать?');
mainList.shopGoods[1] = prompt('Какой тип товаров вы будете продавать?');
mainList.shopGoods[2] = prompt('Какой тип товаров вы будете продавать?');

console.log(mainList.shopGoods);

var oneDay = +money/30;

alert('Ваш бюджет на день: ' + oneDay + 'руб');