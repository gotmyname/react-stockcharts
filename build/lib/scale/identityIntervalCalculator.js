"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var dataPreProcessor, forIntervals, startingWith;
	function calculator(_data) {
		return {
			data: function data() {
				return _data;
			}
		};
	}
	calculator.dataPreProcessor = function (x) {
		if (!arguments.length) {
			return dataPreProcessor;
		}
		dataPreProcessor = x;
		return calculator;
	};
	calculator.forIntervals = function (x) {
		if (!arguments.length) {
			return forIntervals;
		}
		forIntervals = x;
		return calculator;
	};
	calculator.startingWith = function (x) {
		if (!arguments.length) {
			return startingWith;
		}
		startingWith = x;
		return calculator;
	};

	return calculator;
};