

		$(document).ready(function() {
				// scroll ke target
				$('a[href^="#"]').on('click',function (e) {
					e.preventDefault();

					var target = this.hash,
					$target = $(target);

					$('html,body').stop().animate({'scrollTop':$target.offset().top},2000,'swing',function(){
						window.location.hash =target;
					});
				});
				// end scroll

					

				// burger+toggle menu
				$('.burger').click(function() {
					$('.burger').toggleClass('active');
				});

				
				$('.burger').click(function() {
					$('.menu1').slideToggle(800);
				});
				// end toggle


		}); 
		// end document

		// sticky navbar
		$(window).on('scroll',function () {
			if ($(window).scrollTop()) {
				$('nav').addClass('shrink');
			}
			else{
				$('nav').removeClass('shrink');
			}
		});
		// end sticky

		// back to top
		function scrolltotop(){
			$('html,body').animate({scrollTop :0},2000);
		}
	
