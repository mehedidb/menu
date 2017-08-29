(function ($, window, document, undefined) {
	'use strict';

	$(window).load(function () {
		// Animate loader off screen
		$('.se-pre-con').fadeOut('slow');;
	});


	var searchbtn = $('.cd-search-btn');
	var searchbtnc = $('.cd-search-close');
	$('.cd-search-btn-wrap').click(function () {
		searchbtn.addClass('open'), $('.cd-search-btn > form > input[type="search"]').focus()
	});
	searchbtnc.click(function () {
		searchbtn.removeClass('open')
	});






})(jQuery, window, document);
