let money,
	name,
	time,
	price;
function start(){
	money = prompt('Ваш бюджет на месяц?','');

	while (isNaN(money) || money == '' || money == null){
		money = prompt('Ваш бюджет на месяц?','');
	}

	name = prompt('Название вашего магазина?','').toUpperCase();
	time = 21;
}
//start();


var mainList = {
	moneySum: money,
	nameMain: name,
	shopGoods : [],
	employers : [],
	open: true,
	discount: false,
	shopItems:[],
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
					console.log('Время работать!');
					mainList.open = true
					} 	else if (time < 24) {
							console.log('Пора спать!')
						} 	else {
							console.log('В сутках только 24 часа!')
							}
			  },
	calcMoney: function calcMoney(money){
					return +money/30;
				},
	makeDiscount: function makeDiscount(discount, price ){
					if (discount==true) 
						return price*0.2
					else return price;
				},
	recruiting:	function recruiting(){
					for (let i = 0;i<4;i++){
						mainList.employers[i] = i+1 + " - " + prompt("Введите имя работника",'');
						}					
				},
	chooseShopItems: function chooseShopItems(){
						let items = '';
						while(items == ''){
							items = prompt("Перечислите через запятую ваши товары",'');
							if (typeof(items) === 'string' && items != null && items != ''){
								mainList.shopItems = items.split(',');
								mainList.shopItems.push(prompt('Подождите, ещё ',''));
								mainList.shopItems.sort();
							} else
								items = '';
						}
					}				
}
mainList.chooseShopItems();
mainList.shopItems.forEach(function(item, i, arr) {
  alert("У нас вы можете купить: " + (i + 1) + " : " + item );
});
console.log('Наш магазин включает в себя :');
for(let key in mainList){
	console.log(key + " : " + mainList[key]);
}




