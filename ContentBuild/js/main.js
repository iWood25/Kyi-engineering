$(document).ready(function () {

	$(".header").css("min-height", $(window).height());

})

$(window).load(function () {
	$(".loader-inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

