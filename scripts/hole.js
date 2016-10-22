var hasMoved = false;
$(document).mousemove(function(e){
    $("#hole").css({'left': e.pageX - 1500, 'top':e.pageY - 1500});
    if (!hasMoved) {
    	$("#hole-blocker").css({'opacity': '.2'});
    	hasMoved = true;
    }
});