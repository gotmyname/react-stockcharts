"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
		return d.compare;
	});

	var underlyingAlgorithm = (0, _algorithm.compare)().base(function (d) {
		return d.close;
	}).mainKeys(["open", "high", "low", "close"]);

	var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
		datum.compare = indicator;
	});

	var indicator = function indicator(data) {
		if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
		return mergedAlgorithm(data);
	};

	_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
	_d2.default.rebind(indicator, underlyingAlgorithm, "base", "mainKeys", "compareKeys");
	_d2.default.rebind(indicator, mergedAlgorithm, "merge");

	return indicator;
};

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _utils = require("../utils");

var _algorithm = require("./algorithm");

var _baseIndicator = require("./baseIndicator");

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "Compare";