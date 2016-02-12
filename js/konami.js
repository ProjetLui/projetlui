$(document).ready(function () {

	if (window.addEventListener) {
		var kkeys = [],
			konami = "38,38,40,40,37,39,37,39,66,65";
		window.addEventListener("keydown", function (e) {
			kkeys.push(e.keyCode);
			if (kkeys.toString().indexOf(konami) >= 0) {
				$('.container').addClass('konami');
			}
		}, true);
	}

});