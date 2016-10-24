var hasMoved = false;
$(document).ready(function() {
	radial_button();
	$('.button.side').each(function(index) {
		$('.button.side').fadeOut(0);
	});
	$('#main-logo').on('click', function() {
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
		} else {
			$('.logo-nav').toggleClass('side');
			setTimeout(function() { 
		        $('.text').toggleClass('side');
		    }, 500);
			$('#nav-buttons').fadeOut( "fast");
			$('.button.cent').each(function(index) {
				$(this).fadeOut( "fast");
			});
			$('.button.side').each(function(index) {
				$(this).delay(170).fadeIn( "slow");
			});
		}
		
	});
});
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
