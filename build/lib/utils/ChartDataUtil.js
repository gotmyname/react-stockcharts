"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getChartOrigin = getChartOrigin;
exports.getDimensions = getDimensions;
exports.shouldShowCrossHairStyle = shouldShowCrossHairStyle;
exports.getNewChartConfig = getNewChartConfig;
exports.getCurrentCharts = getCurrentCharts;
exports.getChartConfigWithUpdatedYScales = getChartConfigWithUpdatedYScales;
exports.getCurrentItem = getCurrentItem;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _lodash = require("lodash.flattendeep");

var _lodash2 = _interopRequireDefault(_lodash);

var _EventCapture = require("../EventCapture");

var _EventCapture2 = _interopRequireDefault(_EventCapture);

var _Chart = require("../Chart");

var _Chart2 = _interopRequireDefault(_Chart);

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getChartOrigin(origin, contextWidth, contextHeight) {
	var originCoordinates = typeof origin === "function" ? origin(contextWidth, contextHeight) : origin;
	return originCoordinates;
};

function getDimensions(_ref, chartProps) {
	var width = _ref.width;
	var height = _ref.height;


	var chartWidth = chartProps.width || width;
	var chartHeight = chartProps.height || height;

	return {
		availableWidth: width,
		availableHeight: height,
		width: chartWidth,
		height: chartHeight
	};
};

function values(func) {
	return function (d) {
		var obj = func(d);
		return (0, _index.isObject)(obj) ? Object.keys(obj).map(function (key) {
			return obj[key];
		}) : obj;
	};
};

function shouldShowCrossHairStyle(children) {
	return _react2.default.Children.map(children, function (each) {
		if (each.type === _EventCapture2.default) {
			return each.props.useCrossHairStyle;
		}
		return undefined;
	}).filter(_index.isDefined)[0];
}

function getNewChartConfig(innerDimension, children) {

	return _react2.default.Children.map(children, function (each) {
		if (each.type === _Chart2.default) {
			var _each$props = each.props;
			var id = _each$props.id;
			var origin = _each$props.origin;
			var padding = _each$props.padding;
			var yExtentsProp = _each$props.yExtents;
			var yScale = _each$props.yScale;
			var flipYScale = _each$props.flipYScale;

			var _getDimensions = getDimensions(innerDimension, each.props);

			var width = _getDimensions.width;
			var height = _getDimensions.height;
			var availableWidth = _getDimensions.availableWidth;
			var availableHeight = _getDimensions.availableHeight;
			var _each$props2 = each.props;
			var at = _each$props2.yMousePointerDisplayLocation;
			var yDisplayFormat = _each$props2.yMousePointerDisplayFormat;
			var _each$props3 = each.props;
			var rectWidth = _each$props3.yMousePointerRectWidth;
			var rectHeight = _each$props3.yMousePointerRectHeight;

			var mouseCoordinates = { at: at, yDisplayFormat: yDisplayFormat, rectHeight: rectHeight, rectWidth: rectWidth };
			var yExtents = (Array.isArray(yExtentsProp) ? yExtentsProp : [yExtentsProp]).map(_d2.default.functor);
			// console.log(yExtentsProp, yExtents);
			return {
				id: id,
				origin: _d2.default.functor(origin)(availableWidth, availableHeight),
				padding: padding,
				yExtents: yExtents,
				flipYScale: flipYScale,
				yScale: yScale,
				mouseCoordinates: mouseCoordinates,
				width: width,
				height: height
			};
		}
		return undefined;
	}).filter(function (each) {
		return (0, _index.isDefined)(each);
	});
};
function getCurrentCharts(chartConfig, mouseXY) {
	var currentCharts = chartConfig.filter(function (eachConfig) {
		var top = eachConfig.origin[1];
		var bottom = top + eachConfig.height;
		return mouseXY[1] > top && mouseXY[1] < bottom;
	}).map(function (config) {
		return config.id;
	});

	return currentCharts;
}

function setRange(scale, height, padding, flipYScale) {
	if (scale.rangeRoundPoints) {
		if (isNaN(padding)) throw new Error("padding has to be a number for ordinal scale");
		scale.rangeRoundPoints(flipYScale ? [0, height] : [height, 0], padding);
	} else {
		var _ref2 = isNaN(padding) ? padding : { top: padding, bottom: padding };

		var top = _ref2.top;
		var bottom = _ref2.bottom;


		scale.range(flipYScale ? [top, height - bottom] : [height - bottom, top]);
	}
	return scale;
}

function getChartConfigWithUpdatedYScales(chartConfig, plotData) {

	var yDomains = chartConfig.map(function (_ref3) {
		var yExtents = _ref3.yExtents;
		var yScale = _ref3.yScale;

		var yValues = yExtents.map(function (eachExtent) {
			return plotData.map(values(eachExtent));
		});
		yValues = (0, _lodash2.default)(yValues);

		var yDomains = yScale.invert ? _d2.default.extent(yValues) : _d2.default.set(yValues).values();

		return yDomains;
	});

	var combine = (0, _index.zipper)().combine(function (config, domain) {
		var padding = config.padding;
		var height = config.height;
		var yScale = config.yScale;
		var flipYScale = config.flipYScale;


		return _extends({}, config, { yScale: setRange(yScale.copy().domain(domain), height, padding, flipYScale) });
		// return { ...config, yScale: yScale.copy().domain(domain).range([height - padding, padding]) };
	});

	var updatedChartConfig = combine(chartConfig, yDomains);
	return updatedChartConfig;
};

function getCurrentItem(xScale, xAccessor, mouseXY, plotData) {
	var xValue, item;
	if (xScale.invert) {
		xValue = xScale.invert(mouseXY[0]);
		item = (0, _index.getClosestItem)(plotData, xValue, xAccessor);
	} else {
		var d = xScale.range().map(function (d, idx) {
			return { x: Math.abs(d - mouseXY[0]), idx: idx };
		}).reduce(function (a, b) {
			return a.x < b.x ? a : b;
		});
		item = (0, _index.isDefined)(d) ? plotData[d.idx] : plotData[0];
		// console.log(d, item);
	}
	return item;
};