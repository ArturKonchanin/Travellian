$(function () {
	$("#check_in").datepicker({
		minDate: 0,
		changeMonth: true,
		changeYear: true,
		dateFormat: 'd MM yy',
		firstDay: 1,
		showAnim: "slideDown",
	});
});

$(function(){
	$("#check_out").datepicker({
		minDate: 0,
		changeMonth: true,
		changeYear: true,
		dateFormat: 'd MM yy',
		defaultDate: +7,
		firstDay: 1,
		showAnim: "slideDown",
	});
});