"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var base = function base(d) {
		return d.close;
	};
	var mainKeys = [];
	var compareKeys = [];

	function calculator(data) {
		var f = (0, _utils.first)(data);
		var b = base(f);
		var compareData = data.map(function (d) {
			var result = {};

			mainKeys.forEach(function (key) {
				result[key] = (d[key] - b) / b;
			});

			compareKeys.forEach(function (key) {
				result[key] = (d[key] - f[key]) / f[key];
			});
			return result;
		});
		// console.log(compareData[20]);
		return compareData;
	};
	calculator.base = function (x) {
		if (!arguments.length) {
			return base;
		}
		base = x;
		return calculator;
	};
	calculator.mainKeys = function (x) {
		if (!arguments.length) {
			return mainKeys;
		}
		mainKeys = x;
		return calculator;
	};
	calculator.compareKeys = function (x) {
		if (!arguments.length) {
			return compareKeys;
		}
		compareKeys = x;
		return calculator;
	};
	return calculator;
};

var _utils = require("../../utils");