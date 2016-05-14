"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _makeInteractive = require("./makeInteractive");

var _makeInteractive2 = _interopRequireDefault(_makeInteractive);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getYValue(values, currentValue) {
	var diff = values.map(function (each) {
		return each - currentValue;
	}).reduce(function (diff1, diff2) {
		return Math.abs(diff1) < Math.abs(diff2) ? diff1 : diff2;
	});
	return currentValue + diff;
}

var TrendLine = function (_Component) {
	_inherits(TrendLine, _Component);

	function TrendLine(props) {
		_classCallCheck(this, TrendLine);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TrendLine).call(this, props));

		_this.onMousemove = _this.onMousemove.bind(_this);
		_this.onClick = _this.onClick.bind(_this);
		return _this;
	}

	_createClass(TrendLine, [{
		key: "removeLast",
		value: function removeLast(interactive) {
			var trends = interactive.trends;
			var start = interactive.start;

			if (!start && trends.length > 0) {
				return _extends({}, interactive, { trends: trends.slice(0, trends.length - 1) });
			}
			return interactive;
		}
	}, {
		key: "terminate",
		value: function terminate(interactive) {
			var start = interactive.start;

			if (start) {
				return _extends({}, interactive, { start: null });
			}
			return interactive;
		}
	}, {
		key: "onMousemove",
		value: function onMousemove(_ref, interactive, _ref2, e) {
			var chartId = _ref.chartId;
			var xAccessor = _ref.xAccessor;
			var mouseXY = _ref2.mouseXY;
			var currentItem = _ref2.currentItem;
			var currentCharts = _ref2.currentCharts;
			var chartConfig = _ref2.chartConfig;
			var _props = this.props;
			var enabled = _props.enabled;
			var snapTo = _props.snapTo;
			var snap = _props.snap;
			var shouldDisableSnap = _props.shouldDisableSnap;

			if (enabled) {
				var yScale = chartConfig.yScale;


				var yValue = snap && !shouldDisableSnap(e) ? getYValue(snapTo(currentItem), yScale.invert(mouseXY[1])) : yScale.invert(mouseXY[1]);
				var xValue = xAccessor(currentItem);

				return { interactive: _extends({}, interactive, { currentPos: [xValue, yValue] }) };
			}
			return { interactive: interactive };
		}
	}, {
		key: "onClick",
		value: function onClick(_ref3, interactive, _ref4, e) {
			var chartId = _ref3.chartId;
			var xAccessor = _ref3.xAccessor;
			var mouseXY = _ref4.mouseXY;
			var currentItem = _ref4.currentItem;
			var currentChartstriggerCallback = _ref4.currentChartstriggerCallback;
			var chartConfig = _ref4.chartConfig;
			var _props2 = this.props;
			var onStart = _props2.onStart;
			var onComplete = _props2.onComplete;
			var enabled = _props2.enabled;
			var snapTo = _props2.snapTo;
			var snap = _props2.snap;
			var shouldDisableSnap = _props2.shouldDisableSnap;


			if (enabled) {
				var start = interactive.start;
				var trends = interactive.trends;
				var yScale = chartConfig.yScale;


				var yValue = snap && !shouldDisableSnap(e) ? getYValue(snapTo(currentItem), yScale.invert(mouseXY[1])) : yScale.invert(mouseXY[1]);
				var xValue = xAccessor(currentItem);
				if (start) {
					return {
						interactive: _extends({}, interactive, {
							start: null,
							trends: trends.concat({ start: start, end: [xValue, yValue] })
						}),
						callback: onComplete.bind(null, { currentItem: currentItem, point: [xValue, yValue] }, e)
					};
				} else if (e.button === 0) {
					return {
						interactive: _extends({}, interactive, { start: [xValue, yValue] }),
						callback: onStart.bind(null, { currentItem: currentItem, point: [xValue, yValue] }, e)
					};
				}
			}
			return { interactive: interactive };
		}
	}, {
		key: "render",
		value: function render() {
			var _props3 = this.props;
			var xScale = _props3.xScale;
			var chartCanvasType = _props3.chartCanvasType;
			var chartConfig = _props3.chartConfig;
			var plotData = _props3.plotData;
			var xAccessor = _props3.xAccessor;
			var interactive = _props3.interactive;
			var enabled = _props3.enabled;
			var show = _props3.show;


			if (chartCanvasType !== "svg") return null;

			var yScale = chartConfig.yScale;
			var currentPos = interactive.currentPos;
			var _props4 = this.props;
			var currentPositionStroke = _props4.currentPositionStroke;
			var currentPositionStrokeWidth = _props4.currentPositionStrokeWidth;
			var currentPositionOpacity = _props4.currentPositionOpacity;
			var currentPositionRadius = _props4.currentPositionRadius;
			var _props5 = this.props;
			var stroke = _props5.stroke;
			var opacity = _props5.opacity;
			var type = _props5.type;


			var circle = currentPos && enabled && show ? _react2.default.createElement("circle", { cx: xScale(currentPos[0]), cy: yScale(currentPos[1]),
				stroke: currentPositionStroke,
				opacity: currentPositionOpacity,
				fill: "none",
				strokeWidth: currentPositionStrokeWidth,
				r: currentPositionRadius }) : null;

			var lines = TrendLine.helper(plotData, type, xAccessor, interactive);
			return _react2.default.createElement(
				"g",
				null,
				circle,
				lines.map(function (coords, idx) {
					return _react2.default.createElement("line", { key: idx, stroke: stroke, opacity: opacity, x1: xScale(coords.x1), y1: yScale(coords.y1),
						x2: xScale(coords.x2), y2: yScale(coords.y2) });
				})
			);
		}
	}]);

	return TrendLine;
}(_react.Component);

TrendLine.drawOnCanvas = function (props, interactive, ctx, _ref5) {
	var show = _ref5.show;
	var xScale = _ref5.xScale;
	var plotData = _ref5.plotData;
	var chartConfig = _ref5.chartConfig;
	var currentPos = interactive.currentPos;
	var type = props.type;
	var xAccessor = props.xAccessor;

	var lines = TrendLine.helper(plotData, type, xAccessor, interactive);

	var yScale = chartConfig.yScale;
	// console.error(show);

	var enabled = props.enabled;
	var currentPositionStroke = props.currentPositionStroke;
	var currentPositionStrokeWidth = props.currentPositionStrokeWidth;
	var currentPositionOpacity = props.currentPositionOpacity;
	var currentPositionRadius = props.currentPositionRadius;

	if (currentPos && enabled && show) {
		ctx.strokeStyle = (0, _utils.hexToRGBA)(currentPositionStroke, currentPositionOpacity);
		ctx.lineWidth = currentPositionStrokeWidth;
		ctx.beginPath();
		ctx.arc(xScale(currentPos[0]), yScale(currentPos[1]), currentPositionRadius, 0, 2 * Math.PI, false);
		ctx.stroke();
	}
	ctx.lineWidth = 1;
	ctx.strokeStyle = (0, _utils.hexToRGBA)(props.stroke, props.opacity);

	lines.forEach(function (each) {
		ctx.beginPath();
		ctx.moveTo(xScale(each.x1), yScale(each.y1));
		ctx.lineTo(xScale(each.x2), yScale(each.y2));
		// console.log(each);
		ctx.stroke();
	});
};

TrendLine.helper = function (plotData, type, xAccessor, interactive /* , chartConfig */) {
	var currentPos = interactive.currentPos;
	var start = interactive.start;
	var trends = interactive.trends;

	var temp = trends;
	if (start && currentPos) {
		temp = temp.concat({ start: start, end: currentPos });
	}
	var lines = temp.filter(function (each) {
		return each.start[0] !== each.end[0];
	}).map(function (each) {
		return generateLine(type, each.start, each.end, xAccessor, plotData);
	});

	return lines;
};

function generateLine(type, start, end, xAccessor, plotData) {
	/* if (end[0] - start[0] === 0) {
 	// vertical line
 	throw new Error("Trendline cannot be a vertical line")
 } */
	var m /* slope */ = (end[1] - start[1]) / (end[0] - start[0]);
	var b /* y intercept */ = -1 * m * end[0] + end[1];
	// y = m * x + b
	var x1 = type === "XLINE" ? xAccessor(plotData[0]) : start[0]; // RAY or LINE start is the same

	var y1 = m * x1 + b;

	var x2 = type === "XLINE" ? xAccessor((0, _utils.last)(plotData)) : type === "RAY" ? end[0] > start[0] ? xAccessor((0, _utils.last)(plotData)) : xAccessor((0, _utils.head)(plotData)) : end[0];
	var y2 = m * x2 + b;
	return { x1: x1, y1: y1, x2: x2, y2: y2 };
}

TrendLine.propTypes = {
	snap: _react.PropTypes.bool.isRequired,
	show: _react.PropTypes.bool,
	enabled: _react.PropTypes.bool.isRequired,
	snapTo: _react.PropTypes.func,
	shouldDisableSnap: _react.PropTypes.func.isRequired,
	chartCanvasType: _react.PropTypes.string,
	chartConfig: _react.PropTypes.object,
	plotData: _react.PropTypes.array,
	xScale: _react.PropTypes.func,
	xAccessor: _react.PropTypes.func,
	onStart: _react.PropTypes.func.isRequired,
	onComplete: _react.PropTypes.func.isRequired,
	interactive: _react.PropTypes.object,
	currentPositionStroke: _react.PropTypes.string,
	currentPositionStrokeWidth: _react.PropTypes.number,
	currentPositionOpacity: _react.PropTypes.number,
	currentPositionRadius: _react.PropTypes.number,
	stroke: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	type: _react.PropTypes.oneOf(["XLINE", // extends from -Infinity to +Infinity
	"RAY", // extends to +/-Infinity in one direction
	"LINE"])
};

// extends between the set bounds
TrendLine.defaultProps = {
	stroke: "#000000",
	type: "XLINE",
	opacity: 0.7,
	onStart: _utils.noop,
	onComplete: _utils.noop,
	shouldDisableSnap: function shouldDisableSnap(e) {
		return e.button === 2 || e.shiftKey;
	},
	currentPositionStroke: "#000000",
	currentPositionOpacity: 1,
	currentPositionStrokeWidth: 3,
	currentPositionRadius: 4
};

exports.default = (0, _makeInteractive2.default)(TrendLine, ["click", "mousemove"], { trends: [] });