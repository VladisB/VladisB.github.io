$(function() {
	var a = prompt("Who you are?", "");
	 if (a != 'Chebyrechek') {alert("Goodbye!");}
	 else{

	$("#owl-slider-one").owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			580:{
				items:2,				 
			},
			768:{
				items:3,
			},
			992:{
				items:4,
			},
			1200:{
				items:5,
			}
		}
	});

	$("#owl-slider-two").owlCarousel({
		loop:true,
		margin:40,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:1,				 
			},
			768:{
				items:1,
			},
			992:{
				items:2,
			},
			1200:{
				items:2,
			}
		}
	});

	$("#owl-slider-three").owlCarousel({
		loop:true,
		margin:40,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:2,				 
			},
			768:{
				items:3,
			},
			992:{
				items:4,
			},
			1200:{
				items:4,
			}
		}
	});


	function heightses(){
		$(".testimonials").height('auto').equalHeights();
	}
	
	heightses();

	$(window).resize(function (){
		heightses();	
	});
	//-----------------------------------
   
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('.mobile-mnu').toggleClass('active');
	});

/*
 * Replace all SVG images with inline SVG
 */
jQuery('img.svg').each(function(){
	var $img = jQuery(this);
	var imgID = $img.attr('id');
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');

	jQuery.get(imgURL, function(data) {
		// Get the SVG tag, ignore the rest
		var $svg = jQuery(data).find('svg');

		// Add replaced image's ID to the new SVG
		if(typeof imgID !== 'undefined') {
			$svg = $svg.attr('id', imgID);
		}
		// Add replaced image's classes to the new SVG
		if(typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass+' replaced-svg');
		}

		// Remove any invalid XML tags as per http://validator.w3.org
		$svg = $svg.removeAttr('xmlns:a');

		// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
		if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
			$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
		}

		// Replace image with new SVG
		$img.replaceWith($svg);

	}, 'xml');

});

}
});
