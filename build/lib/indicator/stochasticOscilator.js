"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var K = _defaultOptions.FullStochasticOscillator.K;
	var D = _defaultOptions.FullStochasticOscillator.D;
	var source = _defaultOptions.FullStochasticOscillator.source;
	var period = _defaultOptions.FullStochasticOscillator.period;
	var overSold = _defaultOptions.FullStochasticOscillator.overSold;
	var overBought = _defaultOptions.FullStochasticOscillator.overBought;
	var middle = _defaultOptions.FullStochasticOscillator.middle;
	var stroke = _defaultOptions.FullStochasticOscillator.stroke;


	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).stroke(stroke).accessor(function (d) {
		return d.sto;
	});

	var underlyingAlgorithm = (0, _algorithm.sto)().windowSize(period).kWindowSize(K).dWindowSize(D).source(source);

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.sto = indicator;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
		return mergedAlgorithm(data);
	};
	base.tooltipLabel(function () {
		return ALGORITHM_TYPE + " (" + underlyingAlgorithm.windowSize() + (", " + underlyingAlgorithm.kWindowSize() + ", " + underlyingAlgorithm.dWindowSize() + "): ");
	});

	base.domain([0, 100]);
	base.tickValues([overSold, middle, overBought]);

	indicator.overSold = function (x) {
		if (!arguments.length) return overSold;
		overSold = x;
		base.tickValues([overSold, middle, overBought]);
		return indicator;
	};
	indicator.middle = function (x) {
		if (!arguments.length) return middle;
		middle = x;
		base.tickValues([overSold, middle, overBought]);
		return indicator;
	};
	indicator.overBought = function (x) {
		if (!arguments.length) return overBought;
		overBought = x;
		base.tickValues([overSold, middle, overBought]);
		return indicator;
	};

	_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel", "domain", "tickValues");
	_d2.default.rebind(indicator, underlyingAlgorithm, "source", "windowSize", "kWindowSize", "dWindowSize");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");

	return indicator;
};

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _utils = require("../utils");

var _algorithm = require("./algorithm");

var _baseIndicator = require("./baseIndicator");

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

var _defaultOptions = require("./defaultOptions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "RSI";