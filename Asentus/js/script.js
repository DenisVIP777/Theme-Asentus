$(document).ready(function(){
	$('.slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		pauseOnHover: false
	});
	
	$('.slider_customer').slick({
		arrows: false,
		autoplay: true,
		infinite: false
	});
});

//Меню бургер
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
if(iconMenu) {
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}