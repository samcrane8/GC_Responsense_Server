var hasMoved = false;
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