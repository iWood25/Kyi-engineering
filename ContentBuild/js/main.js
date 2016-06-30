$(document).ready(function () {


	//when resizing height header = height window 

	function heightDetect() {
		$(".header").css("height", $(window).height());
	};

	heightDetect();
	$(window).resize(function () {
		heightDetect();
	});

})

$(window).load(function () {
	$(".loader-inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

