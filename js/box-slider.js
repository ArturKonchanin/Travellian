/*
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
*/

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
});

$(document).ready(function(){
	$('.slider2 ul').bxSlider({
		controls: true,
		prevSelector: '.slider2-title-prev',
		nextSelector: '.slider2-title-next',        
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
});

$(document).ready(function(){
	$('.slider3 ul').bxSlider({
		controls: true,
		prevSelector: '.slider3-title-prev',
		nextSelector: '.slider3-title-next',        
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
});

$(document).ready(function(){
	$('.slider4 ul').bxSlider({
		controls: true,
		prevSelector: '.slider4-title-prev',
		nextSelector: '.slider4-title-next',        
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
});





