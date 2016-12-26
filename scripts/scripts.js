var hasMoved = false;

var buttons = [ 'about', 'map', 'contact', 'team', 'blog' ]

$(document).ready(function() {
	radial_button();
	$('.button.side').each(function(index) {
		$('.button.side').fadeOut(0);
	});
	$('#main-logo').on('click', function() {
		if ($('.logo-nav').hasClass('side')){
			transition_views();
		}
	});
	$('#about').on('click', function() {
		$('.text.content.about').css('display','block');
		transition_views();
	});
	$('#map').on('click', function() {
		$('.text.content.map').css('display','block');
		transition_views();
	});
	$('#contact').on('click', function() {
		$('.text.content.contact').css('display','block');
		transition_views();
	});
	$('#team').on('click', function() {
		$('.text.content.team').css('display','block');
		transition_views();
	});
	$('#blog').on('click', function() {
		$('.text.content.blog').css('display','block');
		transition_views();
	});

	$('#nb-map').on('click', function(){
		makeContentInvisible();
		$('.text.content.map').css('display','block');
	});
	$('#nb-about').on('click', function(){
		makeContentInvisible();
		$('.text.content.about').css('display','block');
	});
	$('#nb-contact').on('click', function(){
		makeContentInvisible();
		$('.text.content.contact').css('display','block');
	});
	$('#nb-team').on('click', function(){
		makeContentInvisible();
		$('.text.content.team').css('display','block');
	});
	$('#nb-blog').on('click', function(){
		makeContentInvisible();
		$('.text.content.blog').css('display','block');
	});
});

function makeContentInvisible(){
	for (i = 0; i < buttons.length; i++){
		$('.text.content.'+buttons[i]).css('display','none');
	}
}

$(document).mousemove(function(e){
    $("#hole").css({'left': e.pageX - 300, 'top':e.pageY - 300});
    $("#hm-left").css({'width' : (e.pageX - 200) + 'px'});
    $("#hm-right").css({'left' : (e.pageX + 200) + 'px', 'width' : $(document).width() - (e.pageX + 200) });
    $("#hm-up").css({'left' : (e.pageX - 200) + 'px', 'height' : (e.pageY - 200)});
    $("#hm-down").css({'top' : (e.pageY + 200) + 'px', 'left' : (e.pageX - 200) + 'px', 'height' : $(document).height() - (e.pageY + 200)});
    if (!hasMoved) {
    	$("#hole-blocker").css({'opacity': '.15'});
    	hasMoved = true;
    }
});

/*
*	This function transitions from the beginning radial view to the side view with
	content on the right and a directional bar on the left. It can also transfer back
	if already in the side view state.
*/
function transition_views(){
	if ($('.logo-nav').hasClass('side')) {
			$('.text').toggleClass('side');
			setTimeout(function() {
				$('.logo-nav').toggleClass('side');
				$('#nav-buttons').fadeIn( "fast");
				$('.button.cent').each(function(index) {
					$(this).delay(170).fadeIn( "slow");
				});
				$('.button.side').each(function(index) {
					$(this).fadeOut( "fast");
				});
			}, 500);
		makeContentInvisible();
	} else {
		$('.logo-nav').toggleClass('side');
		setTimeout(function() { 
	        $('.text').toggleClass('side');
	    }, 800);
		$('#nav-buttons').fadeOut( "fast");
		$('.button.cent').each(function(index) {
			$(this).fadeOut( "fast");
		});
		$('.button.side').each(function(index) {
			$(this).delay(170).fadeIn( "slow");
		});
	}
}

function radial_button() {
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