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


		if ($(window).width() < 1295) {

			$('.grid').masonry({
			  // options
			  itemSelector: '.grid-item',
			  columnWidth: '.grid-item',
			  percentPosition: true
			});

		}
		else {
			$('.grid').masonry({
			  // options
			  itemSelector: '.grid-item',
			  columnWidth: 1
			});

		}


	});

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 1
});
$(window).on('scroll', function() {
	if ($(window).scrollTop() >= $(window).height()) {
		$('.scroll-top').addClass('active')
	} else {
		$('.scroll-top').removeClass('active')

	}
});

$('.scroll-top').on('click', function() {
	$('html, body').stop();
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
});
 // itemSelector: '.grid-item',
 //  columnWidth: '.grid-item',
 //  percentPosition: true