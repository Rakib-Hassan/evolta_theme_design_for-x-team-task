(function($){
	"use strict";
	jQuery(document).on('ready', function () {

        // Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
        });

        // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
        });

        //Search Popup JS
        $('.search-btn').on('click', function () {
            $(this).hide();
            $('.search-overlay').fadeIn();
            $('.close-btn').addClass('active');
        });
        $('.close-btn').on('click',function() {
            $('.search-overlay').fadeOut();
            $('.search-btn').show();
            $('.close-btn').removeClass('active');
        });

		// Projects Slides
		$('.projects-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			autoplayHoverPause: true,
            autoplay: true,
            mouseDrag: false,
            navText: [
                "<i class='flaticon-arrow-pointing-to-left'></i>",
                "<i class='flaticon-arrow-pointing-to-right'></i>"
            ],
			responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
                1400: {
                    items: 4,
                }
            }
        });
        
        // Popup Video
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
        });

		// Testimonials Slides
		$('.testimonials-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			autoplayHoverPause: true,
            autoplay: true,
            mouseDrag: true,
            items: 1,
            navText: [
                "<i class='flaticon-arrow-pointing-to-left'></i>",
                "<i class='flaticon-arrow-pointing-to-right'></i>"
            ],
        });

        // Progress Bar JS
        $('.circlechart').circlechart();

        

        // Testimonials Slides
		$('.feedback-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			autoHeight: true,
			autoplayHoverPause: true,
            autoplay: false,
            mouseDrag: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
			items: 1,
            navText: [
                "<i class='flaticon-arrow-pointing-to-left'></i>",
                "<i class='flaticon-arrow-pointing-to-right'></i>"
            ]
        });
        
    });

    // WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',     
            animateClass: 'animated', 
            offset:       20,       
            mobile:       true,
            live:         true,
          });
          wow.init();
        }
    });
    
    // Preloader Area
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
}(jQuery));