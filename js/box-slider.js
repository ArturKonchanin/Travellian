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

/*
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
*/

 // Use the conventional $ prefix for variables that hold jQuery objects.
var $slider2;

// If the only purpose of the windowWidth() function is to set the slide variables,
// it can be renamed and rewritten to supply the full configuration object instead.
function buildSliderConfiguration2() {

    // When possible, you should cache calls to jQuery functions to improve performance.
    var windowWidth = $(window).width();
    var numberOfVisibleSlides;

    if (windowWidth < 768) {
        numberOfVisibleSlides = 1;
    } else if (windowWidth < 1350) {
        numberOfVisibleSlides = 2;
    } else  {
        numberOfVisibleSlides = 3;
    } 

    return {
        pager: false,
		controls: true,
		prevSelector: '.slider2-title-prev',
		nextSelector: '.slider2-title-next',
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
function configureSlider2() {
    var config = buildSliderConfiguration2();

    if ($slider2 && $slider2.reloadSlider) {
        // If the slider has already been initialized, reload it.
        $slider2.reloadSlider(config);
    } else {
        // Otherwise, initialize the slider.
        $slider2 = $('.slider2 ul').bxSlider(config);
    }
}

$('.slider2-prev').click(function () {
    var current = $slider2.getCurrentSlide();
    $slider2.goToPrevSlide(current) - 1;
});

$('.slider2-next').click(function () {
    var current = $slider2.getCurrentSlide();
    $slider2.goToNextSlide(current) + 1;
});

// Configure the slider every time its size changes.
$(window).on("orientationchange resize", configureSlider2);
// Configure the slider once on page load.
configureSlider2();


/*
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
*/

 // Use the conventional $ prefix for variables that hold jQuery objects.
var $slider3;

// If the only purpose of the windowWidth() function is to set the slide variables,
// it can be renamed and rewritten to supply the full configuration object instead.
function buildSliderConfiguration3() {

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
		prevSelector: '.slider3-title-prev',
		nextSelector: '.slider3-title-next',
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
function configureSlider3() {
    var config = buildSliderConfiguration3();

    if ($slider3 && $slider3.reloadSlider) {
        // If the slider has already been initialized, reload it.
        $slider3.reloadSlider(config);
    } else {
        // Otherwise, initialize the slider.
        $slider3 = $('.slider3 ul').bxSlider(config);
    }
}

$('.slider3-prev').click(function () {
    var current = $slider3.getCurrentSlide();
    $slider3.goToPrevSlide(current) - 1;
});

$('.slider3-next').click(function () {
    var current = $slider3.getCurrentSlide();
    $slider3.goToNextSlide(current) + 1;
});

// Configure the slider every time its size changes.
$(window).on("orientationchange resize", configureSlider3);
// Configure the slider once on page load.
configureSlider3();


/*
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
*/

 // Use the conventional $ prefix for variables that hold jQuery objects.
var $slider4;

// If the only purpose of the windowWidth() function is to set the slide variables,
// it can be renamed and rewritten to supply the full configuration object instead.
function buildSliderConfiguration4() {

    // When possible, you should cache calls to jQuery functions to improve performance.
    var windowWidth = $(window).width();
    var numberOfVisibleSlides;

    if (windowWidth < 850) {
        numberOfVisibleSlides = 1;
    } else if (windowWidth < 1300) {
        numberOfVisibleSlides = 2;
    } else  {
        numberOfVisibleSlides = 3;
    } 

    return {
        pager: false,
		controls: true,
		prevSelector: '.slider4-title-prev',
		nextSelector: '.slider4-title-next',
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
function configureSlider4() {
    var config = buildSliderConfiguration4();

    if ($slider4 && $slider4.reloadSlider) {
        // If the slider has already been initialized, reload it.
        $slider4.reloadSlider(config);
    } else {
        // Otherwise, initialize the slider.
        $slider4 = $('.slider4 ul').bxSlider(config);
    }
}

$('.slider4-prev').click(function () {
    var current = $slider4.getCurrentSlide();
    $slider4.goToPrevSlide(current) - 1;
});

$('.slider4-next').click(function () {
    var current = $slider4.getCurrentSlide();
    $slider4.goToNextSlide(current) + 1;
});

// Configure the slider every time its size changes.
$(window).on("orientationchange resize", configureSlider4);
// Configure the slider once on page load.
configureSlider4();





