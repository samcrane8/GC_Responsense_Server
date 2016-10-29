var loadTarget = true;
var changed = false;
$(document).ready(function() {
	radialButton();
	$('#main-logo').on('click', function() {
		console.log(1);
		$('.side-bar').toggleClass('side');
	})
	// $('.text#0').html(loadText(window.location.hash.substring(1))).toggleClass('visible');
});
$(window).on('hashchange', function() {
	loadContent();
});
function loadContent() {
	$('.text#' + (loadTarget ? 0 : 1)).toggleClass('visible');
	$('.text#' + (loadTarget ? 1 : 0)).html(loadText(window.location.hash.substring(1))).toggleClass('visible');
	// $('.text#' + (loadTarget ? 1 : 0)).toggleClass('visible');
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
function radialButton() {
	$('.button.cent').each(function(index) {
		$(this).css({
			'left' : (250 - 120*Math.cos(-0.5 * Math.PI - 2*index/5*Math.PI)).toFixed(4) + "px",
			'top'  : (250 + 120*Math.sin(-0.5 * Math.PI - 2*index/5*Math.PI)).toFixed(4) + "px"
		});
		if (index == 0) {
			$(this).css({
				'margin-top' : -0.7*$(this).height(),
				'margin-left' : -$(this).width() / 2
			});
		} else if (index == 1) {
			$(this).css({
				'margin-left' : '0px',
				'text-align'  : 'right'
			});
		} else if (index == 2) {
			$(this).css({
				'margin-left' : '0px',
				'text-align'  : 'right'
			});
		} else if (index == 3) {
			$(this).css({
				'margin-left' : -1*$(this).width(),
				'text-align'  : 'right'
			});
		} else {
			$(this).css({
				'margin-left' : -1*$(this).width(),
				'text-align'  : 'right'
			});
		}
	});
}