
if ($('.js-parallax__first-layer').length > 0) {
	$(function () {
		$('.js-parallax__first-layer').plaxmove({ ratioH: 0.055, ratioV: 0.035 })
	});
}
if ($('.js-parallax__second-layer').length > 0) {
	$(function () {
		$('.js-parallax__second-layer').plaxmove({ ratioH: 0.01, ratioV: 0.015 })
	});
}

if ($('.zakupka_animate').length > 0) {
	$(function () {
		$('.zakupka_animate1').plaxmove({ ratioH: 0.01, ratioV: 0.015 })
		$('.zakupka_animate2').plaxmove({ ratioH: 0.009, ratioV: 0.009 })
	});
}

(function ($) {
	$.fn.plaxmove = function (options) {

		this.defaults = {
			ratioH: 0.01,
			ratioV: 0.03,
			invertH: false,
			invertV: false,
			reversed: false
		}

		var settings = $.extend({}, this.defaults, options),
			layer = $(this),
			center = {
				x: $('html').width() / 100 - layer.width() / 1,
				y: $('html').height() / 100 - layer.height() / 1
			},
			y0 = layer.position().top,
			x0 = layer.position().left;

		if (settings.reversed) {

			if (settings.invertH)
				var eqH = function (e) {
					return x0 - (e.pageY - center.y) * settings.ratioH
				}

			else
				var eqH = function (e) {
					return x0 + (e.pageY - center.y) * settings.ratioH
				}

			if (settings.invertV)
				var eqW = function (e) {
					return y0 - (e.pageX - center.x) * settings.ratioV
				}
			else
				var eqW = function (e) {
					return y0 + (e.pageX - center.x) * settings.ratioV
				}

		}

		else {

			if (settings.invertH)
				var eqH = function (e) {
					return x0 - (e.pageX - center.x) * settings.ratioH
				}

			else
				var eqH = function (e) {
					return x0 + (e.pageX - center.x) * settings.ratioH
				}

			if (settings.invertV)
				var eqW = function (e) {
					return y0 - (e.pageY - center.y) * settings.ratioV
				}
			else
				var eqW = function (e) {
					return y0 + (e.pageY - center.y) * settings.ratioV
				}

		}

		$('html').on('mousemove', function (e) {

			x = eqH(e)
			y = eqW(e)

			$(layer).css({ top: y, left: x })

		})

	};
})(jQuery);