// $(document).ready(function() {
// 	$('.button').each(function(index) {
// 		$(this).css({
// 			'left' : (50 - 120*Math.cos(-0.5 * Math.PI - 2*index/5*Math.PI)).toFixed(4) + "%",
// 			'top'  : (50 + 120*Math.sin(-0.5 * Math.PI - 2*index/5*Math.PI)).toFixed(4) + "%"
// 		});
// 		if (index == 0) {
// 			$(this).css({
// 				'margin-top' : -0.7*$(this).height()
// 			});
// 		}
// 		else if (index < 3) {
// 			$(this).css({
// 				'margin-left' : 0,
// 				'text-align'  : 'left'
// 			});
// 		}
// 		else {
// 			$(this).css({
// 				'margin-left' : -1*$(this).width(),
// 				'text-align'  : 'right'
// 			});
// 		}
// 	});
// })