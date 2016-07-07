$(document).ready(function () {

	// Animate CSS

	$(".title").animated("zoomIn");
	$(".btn, .mouse-icon, .common__title").animated("fadeInUp");


	// When resizing height header = height window 

	function heightDetect() {
		$(".header").css("height", $(window).height());
	};

	heightDetect();
	$(window).resize(function () {
		heightDetect();
	});


	// Create mobile menu

	function createMenu() {

		$(".mobile__menu").append("<div class='my-menu'>");
		$(".header__menu").clone().appendTo(".my-menu");
		$(".my-menu").find("ul").attr("class", "mobile__menu-list");
		$(".my-menu").find("li").attr("class", "mobile__menu-item");
		$(".my-menu").find("a").attr("class", "mobile__menu-link");

		// When we click on the link - menu is fadeout
		$(".my-menu a").click(function () {
			$(".mobile__menu").fadeOut(600);
			$(".sandwich").toggleClass("active");
			$(".mobile__menu").empty();
		});

	};

	// Sandwich menu
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



	// Equal Heights
	$(".card").equalHeights();


	// Way points
	$(".cards").waypoint(function () {
		$(".card").each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.removeClass("card-off").addClass("card-on");
			}, 250 * index);
		});
	}, {
		offset: "80%"
	});


	// Way points
	$(".arrows").waypoint(function () {
		$(".arrows .arrow").each(function (index) {
			var ths = $(this);
			setTimeout(function () {
				var myAnimation = new DrawFillSVG({
					elementId: "arrow__svg"+index
				});
				ths.children(".arrow__content").addClass("arrow__content-on");
			}, 500 * index);
		}); this.destroy();
	}, {
		offset: "80%"
	});


	// MixItUp
	$('#portfolio__container').mixItUp();

	// Portfolio list item
	$(".portfolio__list-item").click(function () {
		$(".portfolio__list-item").removeClass("active");
		$(this).addClass("active");
	});

	// Magnific Popup
	$('.popup_content').magnificPopup({
		type: "inline",
		midClick: true
	});

	// Distribution id for Magnific Popup
	$(".portfolio__item").each(function (i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".popup__description").attr("id", "work_" + i);
	});


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};


});

$(window).load(function () {
	$(".loader-inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

