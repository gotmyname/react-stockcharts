"use strict";

/*
https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/bollingerBands.js

The MIT License (MIT)

Copyright (c) 2014-2015 Scott Logic Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var windowSize = _defaultOptions.BollingerBand.period;
	var multiplier = _defaultOptions.BollingerBand.multiplier;
	var movingAverageType = _defaultOptions.BollingerBand.movingAverageType;

	var source = _utils.identity;

	function calculator(data) {

		var meanAlgorithm = movingAverageType === "ema" ? (0, _ema2.default)().windowSize(windowSize).source(source) : (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
			return _d2.default.mean(values);
		}).source(source);

		var bollingerBandAlgorithm = (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
			var avg = (0, _utils.last)(values).mean;
			var stdDev = _d2.default.deviation(values, function (each) {
				return source(each.datum);
			});
			return {
				top: avg + multiplier * stdDev,
				middle: avg,
				bottom: avg - multiplier * stdDev
			};
		});

		var zip = (0, _utils.zipper)().combine(function (datum, mean) {
			return { datum: datum, mean: mean };
		});

		var tuples = zip(data, meanAlgorithm(data));
		return bollingerBandAlgorithm(tuples);
	};

	calculator.windowSize = function (x) {
		if (!arguments.length) {
			return windowSize;
		}
		windowSize = x;
		return calculator;
	};

	calculator.multiplier = function (x) {
		if (!arguments.length) {
			return multiplier;
		}
		multiplier = x;
		return calculator;
	};

	calculator.movingAverageType = function (x) {
		if (!arguments.length) {
			return movingAverageType;
		}
		movingAverageType = x;
		return calculator;
	};

	calculator.source = function (x) {
		if (!arguments.length) {
			return source;
		}
		source = x;
		return calculator;
	};

	return calculator;
};

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _ema = require("./ema");

var _ema2 = _interopRequireDefault(_ema);

var _utils = require("../../utils");

var _defaultOptions = require("../defaultOptions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }