"use strict";

/*

Taken from https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/slidingWindow.js

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

	var accumulateTill = _d2.default.functor(false),
	    accumulator = _noop2.default,
	    value = _identity2.default;

	var accumulatingWindow = function accumulatingWindow(data) {
		var accumulatedWindow = [];
		var response = [];
		var accumulatorIdx = 0;
		for (var i = 0; i < data.length; i++) {
			var d = data[i];
			// console.log(d, accumulateTill(d));
			if (accumulateTill(d)) {
				if (accumulatedWindow.length > 0) response.push(accumulator(accumulatedWindow, i, accumulatorIdx++));
				accumulatedWindow = [value(d)];
			} else {
				accumulatedWindow.push(value(d));
			}
		}
		return response;
	};

	accumulatingWindow.accumulateTill = function (x) {
		if (!arguments.length) {
			return accumulateTill;
		}
		accumulateTill = _d2.default.functor(x);
		return accumulatingWindow;
	};
	accumulatingWindow.accumulator = function (x) {
		if (!arguments.length) {
			return accumulator;
		}
		accumulator = x;
		return accumulatingWindow;
	};
	accumulatingWindow.value = function (x) {
		if (!arguments.length) {
			return value;
		}
		value = x;
		return accumulatingWindow;
	};

	return accumulatingWindow;
};

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _noop = require("./noop");

var _noop2 = _interopRequireDefault(_noop);

var _identity = require("./identity");

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }