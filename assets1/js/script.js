/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Itsource = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.Animation();
				this.BackgroundImage();
				this.MobileStickyMenu();
				this.Arc5ServiceSlider();
				this.Arc5TeamToggle(); 
				this.Arc5TestimonialSlider();  
				this.Arc5BrandSlider(); 
				this.Arc5VideoPopup();
				this.Arc5CounterUp(); 
				
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
			},

			MobileStickyMenu: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.main-header-area').addClass('sticky-on')
					} else {
						jQuery('.main-header-area').removeClass('sticky-on')
					}
				})
				$('.str-open_mobile_menu').on("click", function() {
					$('.str-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.str-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.str-mobile_menu li.dropdown ul').length){
					$('.str-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.str-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
			},

			Arc5ServiceSlider: function (){
				$(".arc5-service-slider").owlCarousel({
					loop: true,
					margin: 30,
					dots: true,
					autoplay: true,
					autoplaySpeed: 1500,
					smartSpeed: 1500,
					responsive:{
						0:{
							items:1
						},
						767:{
							items:2
						}
					}
				});
			}, 
			Arc5TeamToggle: function (){
				$(".arc5-toggle").each(function(){
					$(this).click(function(){
						$(this).toggleClass("arc5-icon-rotate");
						$(this).siblings(".arc5-team-social").toggleClass("team-social-active");
						
					});
				});
			},

			Arc5TestimonialSlider: function (){
				$(".arc5-testimonial-slider").owlCarousel({
					loop: true,
					items: 1,
					margin: 10,
					autoplay: true,
					autoplaySpeed: 1500,
					smartSpeed: 1500,
				});
			},
			Arc5BrandSlider: function (){
				$(".arc5-brand-list").owlCarousel({
					loop: true,
					items: 5, 
					margin: 100,
					autoplay: true,
					autoplaySpeed: 1500,
					responsive: {
						0: {
							items: 3,
						},
						768: {
							items: 4,
						},
						992: {
							items: 5
						}
					}
				});
			}, 
			Arc5VideoPopup: function (){
				$(".arc5-video-play-btn a").magnificPopup({
					type: 'iframe',
					iframe: {
						patterns: {
						  youtube: {
							index: 'youtube.com/',
					  
							id: 'v=',
							src: 'https://www.youtube.com/embed/%id%?autoplay=1'
						  },
						  vimeo: {
							index: 'vimeo.com/',
							id: '/',
							src: '//player.vimeo.com/video/%id%?autoplay=1'
						  },
						  gmaps: {
							index: '//maps.google.',
							src: '%id%&output=embed'
						  }
						},
						srcAction: 'iframe_src',
					  }
				});
			}, 
			Arc5CounterUp: function (){
				$(".arc5-counterup").counterUp();
			}
			

		}
	}
	jQuery(document).ready(function (){
		Itsource.init();
	});

})();