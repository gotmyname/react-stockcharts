"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE);

	var underlyingAlgorithm = (0, _algorithm.pointAndFigure)();

	var indicator = function indicator(data) {
		return underlyingAlgorithm(data);
	};

	_d2.default.rebind(indicator, base, "id", "stroke", "fill", "echo", "type", "tooltipLabel");
	_d2.default.rebind(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator", "indexMutator", "indexAccessor");
	_d2.default.rebind(indicator, underlyingAlgorithm, "reversal", "boxSize", "source");
	// d3.rebind(indicator, mergedAlgorithm, "merge"/*, "skipUndefined"*/);

	return indicator;
};

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _algorithm = require("./algorithm");

var _baseIndicator = require("./baseIndicator");

var _baseIndicator2 = _interopRequireDefault(_baseIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM_TYPE = "PointAndFigure";