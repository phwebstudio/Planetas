$(function(){
	$('.tab-title li').not('.active').click(function(){
    	var index = $(this).index();
    	var content = $('.tab-content li').eq(index);
    	$(this).addClass('active').siblings().removeClass('active');
    	$('.tab-content li').css('visibility', 'hidden').eq(index).css('visibility', 'visible');
	})
	
    $('.tab-title li:first').addClass('active');
   	$('.tab-content li:first').css('visibility', 'visible');
})

$(document).ready(function () {
 	$("#pl1, #pl2, #pl3, #pl4, #pl5, #pl6, #pl7, #pl8").on("click", "a", function (event) {
 		event.preventDefault();
		var id = $(this).attr('href');
 		var	top = $(id).offset().top
 		$('body,html').animate({
 			scrollTop: top
 		}, 500);
	});
});