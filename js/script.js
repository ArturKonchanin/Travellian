
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

$(function(){
	$("#check_in").datepicker({
		minDate: 0,
		changeMonth: true,
      	changeYear: true
	});
});

$(function(){
	$("#check_out").datepicker({
		minDate: 0,
		changeMonth: true,
      	changeYear: true
	});
});

$(document).ready(function(){
	$('.slider ul').bxSlider({
		controls: true,
		prevSelector: '.slider-title-prev',
		nextSelector: '.slider-title-next',        
		pager: false,		
		auto: false,
		pause: 0,
		infiniteLoop: true,
		adaptiveHeight: true,
		responsive: true,
		nextText: '',
		prevText: '',
		moveSlides: 1,
		minSlides: 3,
		maxSlides: 3,
		slideMargin: 32,  
		slideWidth: 394      
	});
	
	$(".bx-pager:first").addClass("first");
	$(".bx-pager:last").addClass("last");
	$(".bx-controls-direction:first").addClass("one");
	$(".bx-controls-direction:last").addClass("three");
});

