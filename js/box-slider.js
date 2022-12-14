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
/*
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
*/
/*

 var windowWidth = $(window).width();  
	var obxSettings = {
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
	};
 $('.slider ul').bxSlider(obxSettings);

 $(window).resize(function() {
    windowWidth = $(window).width();
	 if (windowWidth < 1000) {
		 console.log(obxSettings.minSlides);
		obxSettings.minSlides = 2;  
		obxSettings.maxSlides = 2;
		obxSettings.slideMargin = 60;  
		obxSettings.slideWidth = 200;
	 } else {
		 console.log(windowWidth);
		obxSettings.minSlides = 3;  
		obxSettings.maxSlides = 3;
		 
 }

 });
*/
 // Use the conventional $ prefix for variables that hold jQuery objects.
var $slider;

// If the only purpose of the windowWidth() function is to set the slide variables,
// it can be renamed and rewritten to supply the full configuration object instead.
function buildSliderConfiguration() {

    // When possible, you should cache calls to jQuery functions to improve performance.
    var windowWidth = $(window).width();
    var numberOfVisibleSlides;

    if (windowWidth < 420) {
        numberOfVisibleSlides = 1;
    } else if (windowWidth < 768) {
        numberOfVisibleSlides = 2;
    } else  {
        numberOfVisibleSlides = 3;
    } 

    return {
        pager: false,
		controls: true,
		prevSelector: '.slider-title-prev',
		nextSelector: '.slider-title-next',
        auto: false,
        slideWidth: 5000,
        startSlide: 0,
        nextText: ' ',
        prevText: ' ',
        adaptiveHeight: true,
        moveSlides: 1,
        slideMargin: 20,
        minSlides: numberOfVisibleSlides,
        maxSlides: numberOfVisibleSlides
    };
}

// This function can be called either to initialize the slider for the first time
// or to reload the slider when its size changes.
function configureSlider() {
    var config = buildSliderConfiguration();

    if ($slider && $slider.reloadSlider) {
        // If the slider has already been initialized, reload it.
        $slider.reloadSlider(config);
    } else {
        // Otherwise, initialize the slider.
        $slider = $('.slider ul').bxSlider(config);
    }
}

$('.slider-prev').click(function () {
    var current = $slider.getCurrentSlide();
    $slider.goToPrevSlide(current) - 1;
});

$('.slider-next').click(function () {
    var current = $slider.getCurrentSlide();
    $slider.goToNextSlide(current) + 1;
});

// Configure the slider every time its size changes.
$(window).on("orientationchange resize", configureSlider);
// Configure the slider once on page load.
configureSlider();


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





