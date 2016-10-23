$(document).ready(function () {
	$('#main-logo').on('click', function() {
		console.log(1);
		$('.logo-nav').toggleClass('side');
	});
});