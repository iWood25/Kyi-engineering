﻿$(document).ready(function () {


	//when resizing height header = height window 

	function heightDetect() {
		$(".header").css("height", $(window).height());
	};

	heightDetect();
	$(window).resize(function () {
		heightDetect();
	});

	// create mobile menu

	function createMenu() {

		$(".mobile__menu").append("<div class='my-menu'>");
		$(".header__menu").clone().appendTo(".my-menu");
		$(".my-menu").find("ul").attr("class", "mobile__menu-list");
		$(".my-menu").find("li").attr("class", "mobile__menu-item");
		$(".my-menu").find("a").attr("class", "mobile__menu-link");

		// when we click on the link - menu is fadeout
		$(".my-menu a").click(function () {
			$(".mobile__menu").fadeOut(600);
			$(".sandwich").toggleClass("active");
			$(".mobile__menu").empty();
		});

	};

	// sandwich menu
	$(".toggle-menu").click(function () {
		$(".sandwich").toggleClass("active");

		if ($(".mobile__menu").is(":visible")) {
			$(".mobile__menu").fadeOut(600);
			$(".mobile__menu").empty();
		} else {
			$(".mobile__menu").fadeIn(600);
			createMenu(); // create mobile menu
			$(".mobile__menu li a").addClass("fadeInUp animated");
		};
	});
	

})

$(window).load(function () {
	$(".loader-inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

