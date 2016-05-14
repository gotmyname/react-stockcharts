"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	var allowedIntervals,
	    xAccessor,
	    discontinous = false,
	    useWholeData,
	    indexAccessor,
	    indexMutator,
	    map,
	    scale,
	    calculator = [],
	    intervalCalculator = _eodIntervalCalculator2.default,
	    canShowTheseMany = canShowTheseManyPeriods;

	function evaluate(data) {
		if (discontinous && ((0, _utils.isNotDefined)(scale.isPolyLinear) || (0, _utils.isDefined)(scale.isPolyLinear) && !scale.isPolyLinear())) {
			throw new Error("you need a scale that is capable of handling discontinous data. change the scale prop or set discontinous to false");
		}
		var realXAccessor = discontinous ? indexAccessor : xAccessor;

		var xScale = discontinous && (0, _utils.isDefined)(scale.isPolyLinear) && scale.isPolyLinear() ? scale.copy().indexAccessor(realXAccessor).dateAccessor(xAccessor) : scale;
		// if any calculator gives a discontinious output and discontinous = false throw error

		var calculate = intervalCalculator().doIt((0, _utils.isDefined)(xScale.isPolyLinear)).allowedIntervals(allowedIntervals);

		var mappedData = calculate(data.map(map));

		if (discontinous) {
			calculator.unshift(function (values) {
				return values.map(function (d, i) {
					indexMutator(d, i);
					return d;
				});
			});
		}
		// console.log(mappedData);

		calculator.forEach(function (each) {
			var newData;
			if ((0, _utils.isArray)(mappedData)) {
				newData = each(mappedData);
			} else {
				newData = {};
				Object.keys(mappedData).forEach(function (key) {
					newData[key] = each(mappedData[key]);
				});
			}
			mappedData = newData;
		});

		return {
			fullData: mappedData,
			xAccessor: realXAccessor,
			// inputXAccesor: xAccessor,
			domainCalculator: extentsWrapper(xAccessor, realXAccessor, allowedIntervals, canShowTheseMany, useWholeData)
		};
	}
	evaluate.allowedIntervals = function (x) {
		if (!arguments.length) return allowedIntervals;
		allowedIntervals = x;
		return evaluate;
	};
	evaluate.intervalCalculator = function (x) {
		if (!arguments.length) return intervalCalculator;
		intervalCalculator = x;
		return evaluate;
	};
	evaluate.xAccessor = function (x) {
		if (!arguments.length) return xAccessor;
		xAccessor = x;
		return evaluate;
	};
	evaluate.discontinous = function (x) {
		if (!arguments.length) return discontinous;
		discontinous = x;
		return evaluate;
	};
	evaluate.indexAccessor = function (x) {
		if (!arguments.length) return indexAccessor;
		indexAccessor = x;
		return evaluate;
	};
	evaluate.indexMutator = function (x) {
		if (!arguments.length) return indexMutator;
		indexMutator = x;
		return evaluate;
	};
	evaluate.map = function (x) {
		if (!arguments.length) return map;
		map = x;
		return evaluate;
	};
	evaluate.scale = function (x) {
		if (!arguments.length) return scale;
		scale = x;
		return evaluate;
	};
	evaluate.useWholeData = function (x) {
		if (!arguments.length) return useWholeData;
		useWholeData = x;
		return evaluate;
	};
	evaluate.calculator = function (x) {
		if (!arguments.length) return calculator;
		calculator = x;
		return evaluate;
	};

	return evaluate;
};

var _utils = require("../utils");

var _eodIntervalCalculator = require("./eodIntervalCalculator");

var _eodIntervalCalculator2 = _interopRequireDefault(_eodIntervalCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFilteredResponse(dataForInterval, left, right, xAccessor) {
	var newLeftIndex = (0, _utils.getClosestItemIndexes)(dataForInterval, left, xAccessor).right;
	var newRightIndex = (0, _utils.getClosestItemIndexes)(dataForInterval, right, xAccessor).left;

	var filteredData = dataForInterval.slice(newLeftIndex, newRightIndex + 1);
	// console.log(right, newRightIndex, dataForInterval.length);

	return filteredData;
}

/*
function getFilteredResponseWhole(dataForInterval, left, right, xAccessor) {
	return dataForInterval;
}
*/

function getDomain(inputDomain, width, filteredData, predicate, currentDomain, canShowTheseMany, realXAccessor) {
	if (canShowTheseMany(width, filteredData.length)) {
		var domain = predicate ? inputDomain : [realXAccessor((0, _utils.first)(filteredData)), realXAccessor((0, _utils.last)(filteredData))]; // TODO fix me later
		return domain;
	}
	if (process.env.NODE_ENV !== "production") {
		console.error("Trying to show " + filteredData.length + " items in a width of " + width + "px. This is either too much or too few points");
	}
	return currentDomain;
}

function extentsWrapper(inputXAccessor, realXAccessor, allowedIntervals, canShowTheseMany) {
	var useWholeData = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];

	var data, inputXAccessor, interval, width, currentInterval, currentDomain, currentPlotData, scale;

	function domain(inputDomain, xAccessor) {
		var left = (0, _utils.first)(inputDomain);
		var right = (0, _utils.last)(inputDomain);
		var plotData = currentPlotData,
		    intervalToShow = currentInterval,
		    domain;

		if (useWholeData) {
			return { plotData: data, scale: scale.copy().domain(inputDomain) };
		}

		if ((0, _utils.isNotDefined)(interval) && (0, _utils.isArray)(allowedIntervals)) {
			var dataForCurrentInterval = data[currentInterval || allowedIntervals[0]];

			var leftIndex = (0, _utils.getClosestItemIndexes)(dataForCurrentInterval, left, xAccessor).right;
			var rightIndex = (0, _utils.getClosestItemIndexes)(dataForCurrentInterval, right, xAccessor).left;

			var newLeft = inputXAccessor(dataForCurrentInterval[leftIndex]);
			var newRight = inputXAccessor(dataForCurrentInterval[rightIndex]);

			for (var i = 0; i < allowedIntervals.length; i++) {
				var eachInterval = allowedIntervals[i];

				var tempLeft = currentInterval === eachInterval ? left : newLeft;
				var tempRight = currentInterval === eachInterval ? right : newRight;
				var tempAccessor = currentInterval === eachInterval ? xAccessor : inputXAccessor;

				var filteredData = getFilteredResponse(data[eachInterval], tempLeft, tempRight, tempAccessor);

				domain = getDomain([tempLeft, tempRight], width, filteredData, currentInterval === eachInterval, currentDomain, canShowTheseMany, realXAccessor);

				if (domain !== currentDomain) {
					plotData = filteredData;
					intervalToShow = eachInterval;
					break;
				}
			}
			if ((0, _utils.isNotDefined)(plotData) && showMax(width) < dataForCurrentInterval.length) {
				plotData = dataForCurrentInterval.slice(dataForCurrentInterval.length - showMax(width));
				domain = [realXAccessor((0, _utils.first)(plotData)), realXAccessor((0, _utils.last)(plotData))];
			}
		} else if ((0, _utils.isDefined)(interval) && allowedIntervals.indexOf(interval) > -1) {
			// if interval is defined and allowedInterval is not defined, it is an error
			var _filteredData = getFilteredResponse(data[interval], left, right, xAccessor);

			domain = getDomain(inputDomain, width, _filteredData, realXAccessor === xAccessor, currentDomain, canShowTheseMany, realXAccessor);

			if (domain !== currentDomain) {
				plotData = _filteredData;
				intervalToShow = interval;
			}
			if ((0, _utils.isNotDefined)(plotData) && showMax(width) < data[interval].length) {
				plotData = data[interval].slice(data[interval].length - showMax(width));
				domain = [realXAccessor((0, _utils.first)(plotData)), realXAccessor((0, _utils.last)(plotData))];
			}
		} else if ((0, _utils.isNotDefined)(interval) && (0, _utils.isNotDefined)(allowedIntervals)) {
			// interval is not defined and allowedInterval is not defined also.
			var _filteredData2 = getFilteredResponse(data, left, right, xAccessor);
			domain = getDomain(inputDomain, width, _filteredData2, realXAccessor === xAccessor, currentDomain, canShowTheseMany, realXAccessor);

			// console.log(filteredData, inputDomain);
			// console.log("HERE", left, right, last(data), last(filteredData));
			if (domain !== currentDomain) {
				plotData = _filteredData2;
				intervalToShow = null;
			}
			if ((0, _utils.isNotDefined)(plotData) && showMax(width) < data.length) {
				plotData = data.slice(data.length - showMax(width));
				domain = [realXAccessor((0, _utils.first)(plotData)), realXAccessor((0, _utils.last)(plotData))];
			}
		}

		if ((0, _utils.isNotDefined)(plotData)) {
			// console.log(currentInterval, currentDomain, currentPlotData)
			throw new Error("Initial render and cannot display any data");
		}
		var updatedScale = scale.isPolyLinear && scale.isPolyLinear() && scale.data ? scale.copy().data(plotData) : scale.copy();

		updatedScale.domain(domain);
		return { plotData: plotData, interval: intervalToShow, scale: updatedScale };
	}
	domain.data = function (x) {
		if (!arguments.length) return data;
		data = x;
		return domain;
	};
	domain.interval = function (x) {
		if (!arguments.length) return interval;
		interval = x;
		return domain;
	};
	domain.width = function (x) {
		if (!arguments.length) return width;
		width = x;
		return domain;
	};
	domain.currentInterval = function (x) {
		if (!arguments.length) return currentInterval;
		currentInterval = x;
		return domain;
	};
	domain.currentDomain = function (x) {
		if (!arguments.length) return currentDomain;
		currentDomain = x;
		return domain;
	};
	domain.currentPlotData = function (x) {
		if (!arguments.length) return currentPlotData;
		currentPlotData = x;
		return domain;
	};
	domain.scale = function (x) {
		if (!arguments.length) return scale;
		scale = x;
		return domain;
	};
	return domain;
}

function canShowTheseManyPeriods(width, arrayLength) {
	var threshold = 0.75; // number of datapoints per 1 px
	return arrayLength < width * threshold && arrayLength > 1;
}

function showMax(width) {
	var threshold = 0.75; // number of datapoints per 1 px
	return Math.floor(width * threshold);
}