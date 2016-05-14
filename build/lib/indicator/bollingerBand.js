"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.bollingerBand;
	}).stroke({
		top: "#964B00",
		middle: "#000000",
		bottom: "#964B00"
	}).fill("#4682B4");

	var underlyingAlgorithm = (0, _algorithm.bollingerband)().windowSize(_defaultOptions.BollingerBand.period).movingAverageType(_defaultOptions.BollingerBand.movingAverageType).multiplier(_defaultOptions.BollingerBand.multiplier).source(_defaultOptions.BollingerBand.source);

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.bollingerBand = indicator;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");

		var newData = mergedAlgorithm(data);
		return newData;
	};

	base.tooltipLabel(function () {
		return "BB (" + underlyingAlgorithm.windowSize() + ", " + underlyingAlgorithm.multiplier() + (", " + underlyingAlgorithm.movingAverageType() + "): ");
	});

	_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
	_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "movingAverageType", "multiplier", "source");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _utils = require("../utils");

var _defaultOptions = require("./defaultOptions");

var _baseIndicator = require("./baseIndicator");

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

var _algorithm = require("./algorithm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "BollingerBand";