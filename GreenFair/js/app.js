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
		},
		{	
			breakpoint: 960,
			settings: {
				draggable:true
			}
		}
		


	]
});



$(".burger").on('click',function(){
		$(this).toggleClass('active');
		$('.mobile-nav').slideToggle(400);
	});

$(window).on('resize', function(){
		if ($(window).width() > 780) {
			$('.mobile-nav').css('display', 'none');
			$('.burger').removeClass('active');
		}
});



var container = $('.masonry-items');

// container.imagesLoaded(function() {

    container.masonry({
        itemSelector: '.masonry-item',
		columnWidth: 1,
    });
// })