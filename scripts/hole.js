$(document).mousemove(function(e){
    $("#hole").css({'left': e.pageX - 1500, 'top':e.pageY - 1500});
});