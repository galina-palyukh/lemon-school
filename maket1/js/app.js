$('#slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	autoplay: true,
  	autoplaySpeed: 2000
  	// fade:true
	// responsive: [
	// 	{	
	// 		breakpoint: 1024,
	// 		settings: {
	// 			slidesToShow: 2
	// 		}
	// 	}

	// ]
});
$(".burger").on('click',function(){
		$(this).toggleClass('active');
		$('.mobile-menu').slideToggle(400);
	});

$(window).on('resize', function(){
		if ($(window).width() > 550) {
			$('.mobile-menu').css('display', 'none');
			$('.burger').removeClass('active');
		}
	});