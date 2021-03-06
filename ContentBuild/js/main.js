﻿$(document).ready(function () {

	// Animate CSS
	$(".title").animated("zoomIn");
	$(".header .btn").animated("fadeInUp");
	$(".mouse-icon").animated("fadeInUp");
	$(".common__title").animated("zoomIn");
	$(".h3").animated("zoomIn");
	$(".portfolio__filter").animated("fadeInUp");
		$(".p").animated("fadeInUp");
	$(".list").animated("fadeInUp");
	$(".contacts__adds").animated("fadeInLeft");
	$(".contacts__form").animated("fadeInRight");

	// Way points
	$(".cards").waypoint(function () {
		$(".card").each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.removeClass("card-off").addClass("card-on");
			}, 250 * index);
		});
	}, {
		offset: "70%"
	});

	// Way points
	$(".arrows").waypoint(function () {
		$(".arrows .arrow").each(function (index) {
			var ths = $(this);
			setTimeout(function () {
				var myAnimation = new DrawFillSVG({
					elementId: "arrow__svg" + index
				});
				ths.children(".arrow__content").addClass("arrow__content-on");
			}, 700 * index);
		}); this.destroy();
	}, {
		offset: "70%"
	});

	// Way points
	$(".portfolio").waypoint(function () {
		$(".portfolio__item ").each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.removeClass("portfolio__item-off").addClass("portfolio__item-on");
			}, 200 * index);
		});
	}, {
		offset: "70%"
	});


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

	// MixItUp
	$("#portfolio__container").mixItUp();

	// Portfolio list item
	$(".portfolio__list-item").click(function () {
		$(".portfolio__list-item").removeClass("active");
		$(this).addClass("active");
	});

	// Magnific Popup
	$(".popup_content").magnificPopup({
		type: "inline",
		midClick: true
	});

	$(".btn-m").click(function () {
		$("#callback h4").html($(this).text());
	}).magnificPopup({
		type: "inline"
	});

	$(".header__callback").click(function () {
		$("#requestСall h4").html($(this).text());
	}).magnificPopup({
		type: "inline"
	});

	// Distribution id for Magnific Popup
	$(".portfolio__item").each(function (i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".popup__description").attr("id", "work_" + i);
	});

	/* Page scroll to id
	/*-------------------------------------------------*/
	$(".header__menu li a").mPageScroll2id();

	/* Mouse icon
	/*-------------------------------------------------*/
	$(".mouse-icon").click(function () {
		$("html, body").animate({
			scrollTop: $(".about").offset().top
		}, 800);
	});


	/* Validation form
	/*-------------------------------------------------*/
	var name_field = false;
	var phone_field = false;
	var email_field = false;

	var form = $('.form');

 // flag required fields
	$('input#name, input#phone, input#email').unbind().blur(function () {

		var id = $(this).attr('id');
		var val = $(this).val();

		switch (id) {
			// Checking name
			case 'name':
				var re_name = /^[a-zA-Zа-яА-Я]+$/;

				if (val.length > 2 && val != '' && re_name.test(val)) {
					name_field = true;
					$(this).addClass('not_error');
					$(this).next('.input-error').addClass("input-ok").text('Принято')
																		.animate({ 'paddingLeft': '15px' }, 400)
																		.animate({ 'paddingLeft': '5px' }, 400);
				}

				else {
					name_field = false;
					$(this).removeClass('not_error').addClass('error');
					$(this).next('.input-error').removeClass("input-ok").html('Поле обязательно для заполнения')
																		 .animate({ 'paddingLeft': '15px' }, 400)
																		 .animate({ 'paddingLeft': '5px' }, 400);
				}
				break;

			// Checking phone
			case 'phone':
				var re_phone = /^([\+]+)*[0-9\x20\x28\x29\-]{10,20}$/;
				if (re_phone.test(val) && val != '') {
					phone_field = true;
					$(this).addClass('not_error');
					$(this).next('.input-error').addClass("input-ok").text('Принято')
																		.animate({ 'paddingLeft': '15px' }, 400)
																		.animate({ 'paddingLeft': '5px' }, 400);
				}
				else {
					phone_field = false;
					$(this).removeClass('not_error').addClass('error');
					$(this).next('.input-error').removeClass("input-ok").html('Поле обязательно для заполнения')
																		 .animate({ 'paddingLeft': '15px' }, 400)
																		 .animate({ 'paddingLeft': '5px' }, 400);
				}
				break;

				// Checking email
			case 'email':
				var re_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
				if (re_email.test(val) && val != '') {
					email_field = true;
					$(this).addClass('not_error');
					$(this).next('.input-error').addClass("input-ok").text('Принято')
																		.animate({ 'paddingLeft': '15px' }, 400)
																		.animate({ 'paddingLeft': '5px' }, 400);
				}
				else {
					email_field = false;
					$(this).removeClass('not_error').addClass('error');
					$(this).next('.input-error').removeClass("input-ok").html('Поле обязательно для заполнения')
																		 .animate({ 'paddingLeft': '15px' }, 400)
																		 .animate({ 'paddingLeft': '5px' }, 400);
				}
				break;

		} // end switch(...)

	}); // end blur()


	/* Submit
	/*-------------------------------------------------*/


	var fields = ["name", "phone", "email"];

	$(form).submit(function (e) {

		$(form).find(":input").each(function () { // going for all inputs
			for (var i = 0; i < fields.length; i++) { // going for all required inputs
				if ($(this).attr("name") == fields[i]) {
					if (!$.trim($(this).val())) {  // if true
						$(this).trigger('blur');
					} else {
						continue;
					}
				}
			}
		});

		if (name_field == true && phone_field == true && email_field == true) {
			// if don't error then send form
			return true;

		} else {
			return false;
		}
	});
	/* End validation form
  /*-------------------------------------------------*/

	/* End validation form
  /*-------------------------------------------------*/
	//Ajax sending forms
	//Documentation: http://api.jquery.com/jquery.ajax/
	$(".form").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			alert("Спасибо за заявку!");
			setTimeout(function () {
				$.magnificPopup.close();
				$(".form").trigger("reset");
			}, 1000);
		});
		return false;
	});
});

$(window).load(function () {
	$(".loader-inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

