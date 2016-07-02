$(document).ready(function () {


	//when resizing height header = height window 

	function heightDetect() {
		$(".header").css("height", $(window).height());
	};

	heightDetect();
	$(window).resize(function () {
		heightDetect();
	});

	// create mobile menu

	$(".mobile__menu").append("<div class='my-menu'>");
	$(".header__menu").clone().appendTo(".my-menu");
	$(".my-menu").find("ul").attr("class", "mobile__menu-list");
	$(".my-menu").find("li").attr("class", "mobile__menu-item");
	$(".my-menu").find("a").attr("class", "mobile__menu-link");


	// sandwich menu
	$(".toggle-menu, .menu_item").click(function () {
		$(".sandwich").toggleClass("active");
	});

	// mobile menu
	$(".toggle-menu").click(function () {
		if ($(".mobile__menu").is(":visible")) {
			$(".mobile__menu").fadeOut(600);
		} else {
			$(".mobile__menu").fadeIn(600);
		};
	});


})

$(window).load(function () {
	$(".loader-inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

