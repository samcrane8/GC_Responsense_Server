var loadTarget = true;
$(document).ready(function() {
	$('.text#0').html(loadText(window.location.hash.substring(1)));
	$('.text#0').toggleClass('visible');
});
$(window).on('hashchange', function() {
	loadContent();
});
function loadContent() {
	// console.log('.text' + (loadTarget ? 0 : 1));
	$('.text#' + (loadTarget ? 0 : 1)).toggleClass('visible');

	// console.log('.text' + (loadTarget ? 1 : 0));
	$('.text#' + (loadTarget ? 1 : 0)).html(loadText(window.location.hash.substring(1)));
	$('.text#' + (loadTarget ? 1 : 0)).toggleClass('visible');
	loadTarget = !loadTarget;
}
function loadText(button) {
	if (button === 'a') {
		return "a";
	} else if (button === 'b') {
		return "b";
	} else if (button === 'c') {
		return "c";
	} else if (button === 'd') {
		return "d";
	} else if (button === 'e') {
		return "e";
	}
}