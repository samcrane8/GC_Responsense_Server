var loadTarget = true;
var side = false;
$(document).ready(function() {
	radialButton();
	if (window.location.hash.length > 0) {
		$('.side-bar').toggleClass('side');
		loadTarget = true;
		$('.text#0').html(loadText(window.location.hash.substring(1))).toggleClass('visible');
		side = true;
		$('#cent-buttons').fadeOut();
	}
		// if ($('.side-bar').hasClass('side'))
		// 	$('.side-bar').toggleClass('side');
		// loadTarget = true;
		// if ($('.text#0').hasClass('visible'))
		// 	$('.text#0').html(loadText(window.location.hash.substring(1))).toggleClass('visible');
		// side = false;
	// } else {
	// 	$('.side-bar').toggleClass('side');
	// 	$('.text#' + (loadTarget ? 0 : 1)).html(loadText(window.location.hash.substring(1))).toggleClass('visible');
	// 	loadTarget = !loadTarget;
	// 	side = false;
	// }
	$('.button').on('click', function() {
		if (side) return;
		$('.side-bar').toggleClass('side');
		loadTarget = true;
		$('.text#0').html(loadText(window.location.hash.substring(1))).toggleClass('visible');
		side = true;
	});
	$('#main-logo').on('click', function() {
		if (!side) return;
		removeHash();
		$('#cent-buttons').fadeIn();
		$('.side-bar').toggleClass('side');
		$('.text#' + (loadTarget ? 0 : 1)).toggleClass('visible');
		loadTarget = !loadTarget;
		side = false;
	});
});
$(window).on('hashchange', function() {
	if (window.location.hash.length === 0) {
		$('#cent-buttons').fadeIn();
		if (!side) return;
		$('.side-bar').toggleClass('side');
		$('.text#' + (loadTarget ? 0 : 1)).toggleClass('visible');
		loadTarget = !loadTarget;
		side = false;
	} else {
		if (!side) {
			$('.side-bar').toggleClass('side');
			side = true;
		} else if ($('#cent-buttons').is(':visible')) {
			$('#cent-buttons').fadeOut();
		}
		loadContent();
	}
});
function loadContent() {
	if ($('.text#0').hasClass('visible') !== $('.text#1').hasClass('visible')) 
		$('.text#' + (loadTarget ? 0 : 1)).toggleClass('visible');
	$('.text#' + (loadTarget ? 1 : 0)).html(loadText(window.location.hash.substring(1))).toggleClass('visible');
	loadTarget = !loadTarget;
}
function loadText(button) {
	if (button === 'map') {
		return "map";
	} else if (button === 'contact') {
		return "contact";
	} else if (button === 'team') {
		return "team";
	} else if (button === 'blog') {
		return "blog";
	} else if (button === 'about') {
		return "about";
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
function removeHash () { 
    history.pushState("", document.title, window.location.pathname
                                                       + window.location.search);
}