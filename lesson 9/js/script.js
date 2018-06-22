window.addEventListener('DOMContentLoaded', () => {

	let 
		tab = document.getElementsByClassName('info-header-tab'),
		contentToTab = document.getElementsByClassName('info-tabcontent'),
		firstContent = document.getElementsByClassName('info-header')[0];

	function hideContent(x){
		for(let i = x; i < contentToTab.length; i++){
			contentToTab[i].classList.remove('show');
			contentToTab[i].classList.add('hide');
		}
	}

	hideContent(1);

	function showContent(y){
		if (contentToTab[y].classList.contains('hide')) {
			hideContent(0);
			contentToTab[y].classList.remove('hide');
			contentToTab[y].classList.add('show');
		}
	}

	firstContent.addEventListener('click', (e) => {
			let target = e.target;
			if (target.className == 'info-header-tab') {
				for (let i = 0; i < tab.length; i++ ){
					if(target == tab[i]){
						showContent(i);
						break;
					}
				}
			}
		});

	



	function getTimeRemaining(endtime) {
	  var t = Date.parse(endtime) - Date.parse(new Date());
	  var seconds = Math.floor((t / 1000) % 60);
	  var minutes = Math.floor((t / 1000 / 60) % 60);
	  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	  var days = Math.floor(t / (1000 * 60 * 60 * 24));
	  return {
	    'total': t,
	    'hours': hours,
	    'minutes': minutes,
	    'seconds': seconds
	  };
}
 
	function initializeClock(id, endtime) {
	  let 	clock = document.getElementById('timer');
	  		hoursText = document.getElementsByClassName('hours')[0],
			minutesText = document.getElementsByClassName('minutes')[0],
			secondsText = document.getElementsByClassName('seconds')[0];
	 
	  function updateClock() {
	    var t = getTimeRemaining(endtime);
	 
	 
	    hoursText.innerHTML = ('0' + t.hours).slice(-2);
	    minutesText.innerHTML = ('0' + t.minutes).slice(-2);
	    secondsText.innerHTML = ('0' + t.seconds).slice(-2);
	 
	    if (t.total <= 0) {
	      clearInterval(timeinterval);
	    }
	  }
	 
	  updateClock();
	  var timeinterval = setInterval(updateClock, 1000);
	}
	 
	var deadline="January 01 2018 00:00:00"; //for Ukraine
	var deadline = new Date(Date.parse(new Date()) + 14*60*60 * 1000 + 26*60*1000+ 50*1000); // for endless timer
	initializeClock('timer', deadline);

	let
		more = document.querySelector('.more'),
		close = document.querySelector('.popup-close'),
		overlay = document.querySelector('.overlay'),
		description = document.querySelectorAll('.description-btn');

		more.addEventListener('click', function(){
				this.classList.add('more-splash');
				overlay.style.display = 'block';
				document.body.style.overflow = 'hidden';
		});

		close.addEventListener('click', function(){
			more.classList.remove('more-splash');
			overlay.style.display = 'none';
			document.body.style.overflow = '';
		});

		for(let i = 0; i < description.length; i++){
			description[i].addEventListener('click', function(){
				event.preventDefault();
				overlay.style.display = 'block';
				document.body.style.overflow = 'hidden';
			});
		}

		for(let i = 0; i < description.length; i++){
			close.addEventListener('click', function(){
				event.preventDefault();
				overlay.style.display = 'none';
				document.body.style.overflow = '';
			});
		}




});