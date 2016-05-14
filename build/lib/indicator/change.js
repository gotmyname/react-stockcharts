"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.elderRay;
	});

	var underlyingAlgorithm = (0, _utils.slidingWindow)().windowSize(2).source(function (d) {
		return d.close;
	}).accumulator(function (_ref) {
		var _ref2 = _slicedToArray(_ref, 2);

		var prev = _ref2[0];
		var curr = _ref2[1];

		var absoluteChange = prev - curr;
		var percentChange = absoluteChange * 100 / prev;
		return { absoluteChange: absoluteChange, percentChange: percentChange };
	});

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.absoluteChange = indicator.absoluteChange;
		datum.percentChange = indicator.percentChange;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
		return mergedAlgorithm(data);
	};

	_d3.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	_d3.default.rebind(indicator, underlyingAlgorithm, "windowSize", "source");
	_d3.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d2 = require("d3");

var _d3 = _interopRequireDefault(_d2);

var _utils = require("../utils");

var _baseIndicator = require("./baseIndicator");

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "Change";