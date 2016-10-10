$('#wrapper-carousel').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	autoplay: false,
	arrows:false,
  	autoplaySpeed: 2000,
  	draggable:false,
	responsive: [
		{	
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}

	]
});


$(".burger").on('click',function(){
		$(this).toggleClass('active');
		$('.mobile-menu').slideToggle(400);
	});

$(window).on('resize', function(){
		if ($(window).width() > 650) {
			$('.mobile-menu').css('display', 'none');
			$('.burger').removeClass('active');
		}
	});