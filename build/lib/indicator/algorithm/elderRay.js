"use strict";

/*
https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/elderRay.js

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
	var windowSize = _defaultOptions.ElderRay.period;
	var source = _defaultOptions.ElderRay.source;
	var movingAverageType = _defaultOptions.ElderRay.movingAverageType;
	var ohlc = _defaultOptions.ElderRay.ohlc;

	var source = _d2.default.functor(source);

	function calculator(data) {

		var meanAlgorithm = movingAverageType === "ema" ? (0, _ema2.default)().windowSize(windowSize).source(source) : (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
			return _d2.default.mean(values);
		}).source(source);

		var zip = (0, _utils.zipper)().combine(function (datum, mean) {
			var bullPower = (0, _utils.isDefined)(mean) ? ohlc(datum).high - mean : undefined;
			var bearPower = (0, _utils.isDefined)(mean) ? ohlc(datum).low - mean : undefined;
			return { bullPower: bullPower, bearPower: bearPower };
		});

		var newData = zip(data, meanAlgorithm(data));
		return newData;
	};

	calculator.windowSize = function (x) {
		if (!arguments.length) {
			return windowSize;
		}
		windowSize = x;
		return calculator;
	};

	calculator.ohlc = function (x) {
		if (!arguments.length) {
			return ohlc;
		}
		ohlc = x;
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

var _defaultOptions = require("../defaultOptions");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }