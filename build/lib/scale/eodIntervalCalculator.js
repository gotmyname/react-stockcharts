"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {

	var allowedIntervals = ["D", "W", "M"],
	    doIt = false;

	function calculator(data) {
		var eodMarker = (0, _financeEODCalculator2.default)().dateAccessor(function (d) {
			return d.date;
		});

		if ((0, _utils.isNotDefined)(allowedIntervals)) return doIt ? eodMarker(data) : data;

		var D = eodMarker(data);

		// console.log(data.length, D.length, W.length, M.length);
		if ((0, _utils.isArray)(allowedIntervals)) {
			var response = {};
			if (allowedIntervals.indexOf("D") > -1) response.D = D;
			if (allowedIntervals.indexOf("W") > -1) {
				var W = weeklyData(D);
				response.W = W;
			}
			if (allowedIntervals.indexOf("M") > -1) {
				var M = monthlyData(D);
				response.M = M;
			}
			return response;
		}
		return D;
	}
	calculator.allowedIntervals = function (x) {
		if (!arguments.length) return allowedIntervals;
		allowedIntervals = x;
		return calculator;
	};
	calculator.doIt = function (x) {
		if (!arguments.length) return doIt;
		doIt = x;
		return calculator;
	};
	return calculator;
};

var _financeEODCalculator = require("./financeEODCalculator");

var _financeEODCalculator2 = _interopRequireDefault(_financeEODCalculator);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function accumulator(predicate) {
	return (0, _utils.accumulatingWindow)().accumulateTill(predicate).accumulator(function (values) {
		var open = (0, _utils.first)(values).open;
		var close = (0, _utils.last)(values).close;

		var rest = values.reduce(function (a, b) {
			var high = Math.max(a.high, b.high);
			var low = Math.min(a.low, b.low);

			var startOfWeek = a.startOfWeek || b.startOfWeek;
			var startOfMonth = a.startOfMonth || b.startOfMonth;
			var startOfQuarter = a.startOfQuarter || b.startOfQuarter;
			var startOfYear = a.startOfYear || b.startOfYear;

			var volume = a.volume + b.volume;
			var row = { high: high, low: low, volume: volume, startOfWeek: startOfWeek, startOfMonth: startOfMonth, startOfQuarter: startOfQuarter, startOfYear: startOfYear };
			return row;
		});

		return _extends({}, (0, _utils.last)(values), { open: open, close: close }, rest);
	});
}

function weeklyData(data) {
	return accumulator(function (d) {
		return d.startOfWeek;
	})(data);
}

function monthlyData(data) {
	return accumulator(function (d) {
		return d.startOfMonth;
	})(data);
}