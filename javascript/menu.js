$(function(){
    $(".menu").click(function(){
        $(".menu1").toggleClass("menuclick1")
    });
    $(".menu").click(function(){
        $(".menu2").toggleClass("menuclick2")
    });
    $(".menu").click(function(){
        $(".menu3").toggleClass("menuclick3")
    });
  	$('.menu').click(function(){
  			 if ($('#menu').css('display') == 'none') {
      	$('#menu').slideDown('fast');
  		} else {
     		 $('#menu').slideUp('fast');
  			 }
  	});
});
