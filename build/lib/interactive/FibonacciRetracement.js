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

var FibonacciRetracement = function (_Component) {
	_inherits(FibonacciRetracement, _Component);

	function FibonacciRetracement(props) {
		_classCallCheck(this, FibonacciRetracement);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FibonacciRetracement).call(this, props));

		_this.onMousemove = _this.onMousemove.bind(_this);
		_this.onClick = _this.onClick.bind(_this);
		return _this;
	}

	_createClass(FibonacciRetracement, [{
		key: "removeLast",
		value: function removeLast(interactive) {
			var retracements = interactive.retracements;
			var start = interactive.start;

			if (!start && retracements.length > 0) {
				return _extends({}, interactive, { retracements: retracements.slice(0, retracements.length - 1) });
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
		value: function onMousemove(_ref, interactive, _ref2 /* , e */) {
			var chartId = _ref.chartId;
			var xAccessor = _ref.xAccessor;
			var mouseXY = _ref2.mouseXY;
			var currentItem = _ref2.currentItem;
			var chartConfig = _ref2.chartConfig;
			var enabled = this.props.enabled;

			if (enabled) {
				var yScale = chartConfig.yScale;


				var yValue = yScale.invert(mouseXY[1]);
				var xValue = xAccessor(currentItem);

				if (interactive.start) {
					return { interactive: _extends({}, interactive, { tempEnd: [xValue, yValue] }) };
				}
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
			var _props = this.props;
			var enabled = _props.enabled;
			var onStart = _props.onStart;
			var onComplete = _props.onComplete;

			if (enabled) {
				var start = interactive.start;
				var retracements = interactive.retracements;
				var yScale = chartConfig.yScale;


				var yValue = yScale.invert(mouseXY[1]);
				var xValue = xAccessor(currentItem);

				if (start) {
					return {
						interactive: _extends({}, interactive, {
							start: null,
							tempEnd: null,
							retracements: retracements.concat({ start: start, end: [xValue, yValue] })
						}),
						callback: onComplete.bind(null, { currentItem: currentItem, point: [xValue, yValue] }, e)
					};
				} else if (e.button === 0) {
					return {
						interactive: _extends({}, interactive, {
							start: [xValue, yValue],
							tempEnd: null
						}),
						callback: onStart.bind(null, { currentItem: currentItem, point: [xValue, yValue] }, e)
					};
				}
			}
			return { interactive: interactive };
		}
	}, {
		key: "render",
		value: function render() {
			var _props2 = this.props;
			var chartCanvasType = _props2.chartCanvasType;
			var chartConfig = _props2.chartConfig;
			var plotData = _props2.plotData;
			var xScale = _props2.xScale;
			var xAccessor = _props2.xAccessor;
			var interactive = _props2.interactive;
			var _props3 = this.props;
			var stroke = _props3.stroke;
			var opacity = _props3.opacity;
			var fontFamily = _props3.fontFamily;
			var fontSize = _props3.fontSize;
			var fontStroke = _props3.fontStroke;
			var type = _props3.type;


			if (chartCanvasType !== "svg") return null;

			var yScale = chartConfig.yScale;

			var retracements = FibonacciRetracement.helper(plotData, type, xAccessor, interactive, chartConfig);

			return _react2.default.createElement(
				"g",
				null,
				retracements.map(function (eachRetracement, idx) {
					var dir = eachRetracement[0].y1 > eachRetracement[eachRetracement.length - 1].y1 ? 3 : -1.3;
					return _react2.default.createElement(
						"g",
						{ key: idx },
						eachRetracement.map(function (line, i) {
							var text = line.y.toFixed(2) + " (" + line.percent.toFixed(2) + "%)";

							return _react2.default.createElement(
								"g",
								{ key: i },
								_react2.default.createElement("line", {
									x1: xScale(line.x1), y1: yScale(line.y),
									x2: xScale(line.x2), y2: yScale(line.y),
									stroke: stroke, opacity: opacity }),
								_react2.default.createElement(
									"text",
									{ x: xScale(Math.min(line.x1, line.x2)) + 10, y: yScale(line.y) + dir * 4,
										fontFamily: fontFamily, fontSize: fontSize, fill: fontStroke },
									text
								)
							);
						})
					);
				})
			);
		}
	}]);

	return FibonacciRetracement;
}(_react.Component);

FibonacciRetracement.drawOnCanvas = function (props, interactive, ctx, _ref5) {
	var xScale = _ref5.xScale;
	var plotData = _ref5.plotData;
	var chartConfig = _ref5.chartConfig;
	var xAccessor = props.xAccessor;
	var yScale = chartConfig.yScale;
	var fontSize = props.fontSize;
	var fontFamily = props.fontFamily;
	var fontStroke = props.fontStroke;
	var type = props.type;

	var lines = FibonacciRetracement.helper(plotData, type, xAccessor, interactive, chartConfig);

	ctx.strokeStyle = (0, _utils.hexToRGBA)(props.stroke, props.opacity);
	ctx.font = fontSize + "px " + fontFamily;
	ctx.fillStyle = fontStroke;

	lines.forEach(function (retracements) {
		var dir = retracements[0].y1 > retracements[retracements.length - 1].y1 ? 3 : -1.3;

		retracements.forEach(function (each) {
			ctx.beginPath();
			ctx.moveTo(xScale(each.x1), yScale(each.y));
			ctx.lineTo(xScale(each.x2), yScale(each.y));

			var text = each.y.toFixed(2) + " (" + each.percent.toFixed(2) + "%)";
			ctx.fillText(text, xScale(Math.min(each.x1, each.x2)) + 10, yScale(each.y) + dir * 4);

			ctx.stroke();
		});
	});
};

FibonacciRetracement.helper = function (plotData, type, xAccessor, interactive /* , chartConfig */) {
	var retracements = interactive.retracements;
	var start = interactive.start;
	var tempEnd = interactive.tempEnd;


	var temp = retracements;

	if (start && tempEnd) {
		temp = temp.concat({ start: start, end: tempEnd });
	}
	var lines = temp.map(function (each) {
		return generateLine(type, each.start, each.end, xAccessor, plotData);
	});

	return lines;
};

function generateLine(type, start, end, xAccessor, plotData) {
	var dy = end[1] - start[1];
	return [100, 61.8, 50, 38.2, 23.6, 0].map(function (each) {
		return {
			percent: each,
			x1: type === "EXTEND" ? xAccessor((0, _utils.head)(plotData)) : start[0],
			x2: type === "EXTEND" ? xAccessor((0, _utils.last)(plotData)) : end[0],
			y: end[1] - each / 100 * dy
		};
	});
}

FibonacciRetracement.propTypes = {
	snap: _react.PropTypes.bool.isRequired,
	enabled: _react.PropTypes.bool.isRequired,
	snapTo: _react.PropTypes.func,
	fontFamily: _react.PropTypes.string.isRequired,
	fontSize: _react.PropTypes.number.isRequired,
	chartCanvasType: _react.PropTypes.string,
	chartConfig: _react.PropTypes.object,
	plotData: _react.PropTypes.array,
	xAccessor: _react.PropTypes.func,
	xScale: _react.PropTypes.func,
	interactive: _react.PropTypes.object,
	width: _react.PropTypes.number,
	stroke: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	fontStroke: _react.PropTypes.string,
	onStart: _react.PropTypes.func,
	onComplete: _react.PropTypes.func,
	type: _react.PropTypes.oneOf(["EXTEND", // extends from -Infinity to +Infinity
	"BOUND"]). // extends between the set bounds
	isRequired
};

FibonacciRetracement.defaultProps = {
	snap: true,
	enabled: true,
	stroke: "#000000",
	opacity: 0.4,
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 10,
	fontStroke: "#000000",
	type: "EXTEND"

};

exports.default = (0, _makeInteractive2.default)(FibonacciRetracement, ["click", "mousemove"], { retracements: [] });