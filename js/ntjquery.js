$(document).ready(function($) {

	// Slide show about - START
	$('#custom_carousel').on('slide.bs.carousel', function (evt) {
	    $('#custom_carousel .controls li.active').removeClass('active');
	    $('#custom_carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
    });
	// Slide show about - END

	$(window).scroll(function() {
		/* Act on the event */
		var distanceToTop = $(window).scrollTop();
		if(distanceToTop > 500) {
			$('.todoContent').hide();
		}
		if(distanceToTop == 0  ) {
			$('.nt-title').hide();
			$('.todoContent').slideDown();
		}
	});
});