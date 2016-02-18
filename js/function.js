jQuery(document).ready(function($){
	$(".hacemosIconos").bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			if (visiblePartY == 'top') {
				alert("Hi!")
			}
		};
	});

	//Sticky menu
	var height = $('.menuPrincipal').offset().top;
	var doStickyMenu = function(){
		var scrollTopvar = $(window).scrollTop();
		
		if (scrollTopvar > height){
			$('.menuPrincipal').addClass("headFixed");
		}else{
			$('.menuPrincipal').removeClass("headFixed");
		}		
	};
	doStickyMenu();

	$(window).scroll(function(){
		doStickyMenu();			
	});
	//End Sticky menu

	$(".slideMIndicators li").click(function(){
		$(".slideMIndicators li.active").removeClass("active");
		$(this).after().addClass("active");		

		$(".mobile .slideM.active").removeClass("active");
		$(".mobile .slideM").next().addClass("active");
		/*
		TODO
		if (!$(".mobile .slideM.one").hasClass("active")) {
			$(".mobile .slideM.active").removeClass("active");
			$(".mobile .slideM.active").removeClass("active");
		};*/

		$(".text .slideT.active").removeClass("active");
		$(".text .slideT").next().addClass("active");
	});
});
