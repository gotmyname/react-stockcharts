"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
	var dateAccessor = function dateAccessor(d) {
		return d.date;
	};

	function calculator(data) {
		var eodScaleCalculator = (0, _utils.slidingWindow)().windowSize(2).undefinedValue(function (d) {
			var row = _extends({}, d, { startOfWeek: false, startOfMonth: false, startOfQuarter: false, startOfYear: false });
			return row;
		}).accumulator(function (_ref) {
			var _ref2 = _slicedToArray(_ref, 2);

			var prev = _ref2[0];
			var now = _ref2[1];

			var prevDate = dateAccessor(prev);
			var nowDate = dateAccessor(now);

			// According to ISO calendar
			// Sunday = 0, Monday = 1, ... Saturday = 6
			// day of week of today < day of week of yesterday then today is start of week
			var startOfWeek = nowDate.getDay() < prevDate.getDay();
			// month of today != month of yesterday then today is start of month
			var startOfMonth = nowDate.getMonth() !== prevDate.getMonth();
			// if start of month and month % 3 === 0 then it is start of quarter
			var startOfQuarter = startOfMonth && nowDate.getMonth() % 3 === 0;
			// year of today != year of yesterday then today is start of year
			var startOfYear = nowDate.getYear() !== prevDate.getYear();

			var row = _extends({}, now, { startOfWeek: startOfWeek, startOfMonth: startOfMonth, startOfQuarter: startOfQuarter, startOfYear: startOfYear });
			return row;
		});
		var newData = eodScaleCalculator(data);
		return newData;
	}
	calculator.dateAccessor = function (x) {
		if (!arguments.length) {
			return dateAccessor;
		}
		dateAccessor = x;
		return calculator;
	};
	return calculator;
};

var _utils = require("../utils");