$(document).ready(function() {		
	
	$("a").click(function() {

		// console.log($(this).attr("href"));

		scrollAmount = $($(this).attr("href")).offset().top - 50;

		$("html, body").animate({
			scrollTop: scrollAmount + "px"
		}, {
			duration: 450,
			easing: "swing"
		});

		$(".navbar-nav li").removeClass("active");
		$(this).parent("li").addClass("active");

		return false;
		
	});

	$(window).scroll(function() {
    windowScrolledAmount = $(window).scrollTop();
  });

});