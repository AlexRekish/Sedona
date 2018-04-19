var burger = document.querySelector('.burger-toggler');
var menu = document.querySelector('.main-nav');
var burgerLine = document.querySelector('.burger-toggler__sprite');
burger.addEventListener('click', function(evt) {
	evt.preventDefault();
	burgerLine.classList.toggle('burger-toggler__sprite--isOpen');
	menu.classList.toggle('main-nav--isClose');
});


