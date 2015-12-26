$(document).ready(function() {

	var $window = $(window);
	var imageWidth = $window.width();
	var imageHeight = $window.height();

	$('background').on('load', function() {
		$('background').css({
			'width': imageWidth
			'height': imageHeight
		});
	});
});