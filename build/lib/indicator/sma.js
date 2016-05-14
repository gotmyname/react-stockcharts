"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.sma;
	});

	var underlyingAlgorithm = (0, _utils.slidingWindow)().windowSize(_defaultOptions.SMA.period).source(_defaultOptions.SMA.source).accumulator(function (values) {
		return _d2.default.mean(values);
	});

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.sma = indicator;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
		var newData = mergedAlgorithm(data);
		return newData;
	};

	base.tooltipLabel(function () {
		return ALGORITHM_TYPE + "(" + underlyingAlgorithm.windowSize() + ")";
	});

	_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
	_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "source", "undefinedValue", "skipInitial");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _utils = require("../utils");

var _defaultOptions = require("./defaultOptions");

var _baseIndicator = require("./baseIndicator");

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "SMA";