"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var windowSize = 9,
	    source = function source(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};

	function atr(data) {

		var trueRangeAlgorithm = (0, _utils.slidingWindow)().windowSize(2).source(source).undefinedValue(function (d) {
			return d.high - d.low;
		}) // the first TR value is simply the High minus the Low
		.accumulator(function (values) {
			var prev = values[0];
			var d = values[1];
			return Math.max(d.high - d.low, d.high - prev.close, d.low - prev.close);
		});

		var prevATR;

		var atrAlgorithm = (0, _utils.slidingWindow)().skipInitial(1) // trueRange starts from index 1 so ATR starts from 1
		.windowSize(windowSize).accumulator(function (values) {
			var tr = (0, _utils.last)(values);
			var atr = (0, _utils.isDefined)(prevATR) ? (prevATR * (windowSize - 1) + tr) / windowSize : _d2.default.sum(values) / windowSize;

			prevATR = atr;
			return atr;
		});

		var newData = atrAlgorithm(trueRangeAlgorithm(data));

		return newData;
	};

	atr.windowSize = function (x) {
		if (!arguments.length) {
			return windowSize;
		}
		windowSize = x;
		return atr;
	};

	atr.source = function (x) {
		if (!arguments.length) {
			return source;
		}
		source = x;
		return atr;
	};

	return atr;
};

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }