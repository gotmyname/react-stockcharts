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

var Brush = function (_Component) {
	_inherits(Brush, _Component);

	function Brush(props) {
		_classCallCheck(this, Brush);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Brush).call(this, props));

		_this.onMousemove = _this.onMousemove.bind(_this);
		_this.onClick = _this.onClick.bind(_this);
		return _this;
	}

	_createClass(Brush, [{
		key: "terminate",
		value: function terminate() {
			return {
				x1: null, y1: null,
				x2: null, y2: null,
				startItem: null,
				startClick: null
			};
		}
	}, {
		key: "onMousemove",
		value: function onMousemove(_ref, interactive, _ref2 /* , e */) {
			var chartId = _ref.chartId;
			var xAccessor = _ref.xAccessor;
			var currentItem = _ref2.currentItem;
			var chartConfig = _ref2.chartConfig;
			var mouseXY = _ref2.mouseXY;
			var enabled = this.props.enabled;
			var x1 = interactive.x1;
			var y1 = interactive.y1;


			if (enabled && (0, _utils.isDefined)(x1) && (0, _utils.isDefined)(y1)) {
				var yScale = chartConfig.yScale;


				var x2 = xAccessor(currentItem);
				var y2 = yScale.invert(mouseXY[1]);

				return { interactive: _extends({}, interactive, { x2: x2, y2: y2 }) };
			}
			return { interactive: interactive };
		}
	}, {
		key: "onClick",
		value: function onClick(props, interactive, state, e) {
			var displayXAccessor = props.displayXAccessor;
			var xAccessor = props.xAccessor;
			var mouseXY = state.mouseXY;
			var currentItem = state.currentItem;
			var chartConfig = state.chartConfig;
			var _props = this.props;
			var enabled = _props.enabled;
			var onStart = _props.onStart;
			var onBrush = _props.onBrush;


			if (enabled) {
				var x1 = interactive.x1;
				var y1 = interactive.y1;
				var startItem = interactive.startItem;
				var startClick = interactive.startClick;
				var yScale = chartConfig.yScale;


				var xValue = xAccessor(currentItem);
				var yValue = yScale.invert(mouseXY[1]);

				if ((0, _utils.isDefined)(x1)) {
					var onCompleteCallback = onBrush.bind(null, {
						x1: displayXAccessor(startItem),
						y1: y1,
						x2: displayXAccessor(currentItem),
						y2: yValue
					}, [startItem, currentItem], [startClick, mouseXY], e);

					var onCompleteBrushCoords = _extends({}, interactive, {
						x1: null, y1: null,
						x2: null, y2: null,
						startItem: null,
						startClick: null
					});
					return { interactive: onCompleteBrushCoords, callback: onCompleteCallback };
				} else if (e.button === 0) {

					var onStartCallback = onStart.bind(null, { currentItem: currentItem, point: [xValue, yValue] }, e);

					var onStartBrushCoords = _extends({}, interactive, {
						x1: xValue,
						y1: yValue,
						startItem: currentItem,
						startClick: mouseXY,
						x2: null,
						y2: null
					});
					return { interactive: onStartBrushCoords, callback: onStartCallback };
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
			var enabled = _props2.enabled;
			var _props3 = this.props;
			var type = _props3.type;
			var fill = _props3.fill;
			var stroke = _props3.stroke;
			var opacity = _props3.opacity;


			if (chartCanvasType !== "svg") return null;

			var x1 = interactive.x1;
			var y1 = interactive.y1;
			var x2 = interactive.x2;
			var y2 = interactive.y2;


			if (enabled && (0, _utils.isDefined)(x1) && (0, _utils.isDefined)(y1) && (0, _utils.isDefined)(x2) && (0, _utils.isDefined)(y2)) {
				var brush = Brush.helper(type, plotData, xScale, xAccessor, chartConfig, { x1: x1, y1: y1, x2: x2, y2: y2 });
				return _react2.default.createElement("rect", _extends({}, brush, { fill: fill, stroke: stroke, fillOpacity: opacity }));
			}
			return null;
		}
	}]);

	return Brush;
}(_react.Component);

Brush.drawOnCanvas = function (props, interactive, ctx, _ref3) {
	var xScale = _ref3.xScale;
	var plotData = _ref3.plotData;
	var chartConfig = _ref3.chartConfig;
	var x1 = interactive.x1;
	var y1 = interactive.y1;
	var x2 = interactive.x2;
	var y2 = interactive.y2;
	var xAccessor = props.xAccessor;
	var enabled = props.enabled;
	var stroke = props.stroke;
	var opacity = props.opacity;
	var fill = props.fill;
	var type = props.type;


	if (enabled && x1 && x2) {
		var rect = Brush.helper(type, plotData, xScale, xAccessor, chartConfig, { x1: x1, y1: y1, x2: x2, y2: y2 });

		ctx.strokeStyle = stroke;
		ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
		ctx.beginPath();
		ctx.rect(rect.x, rect.y, rect.width, rect.height);
		ctx.stroke();
		ctx.fill();
	}
};

Brush.helper = function (type, plotData, xScale, xAccessor, chartConfig, _ref4) {
	var x1 = _ref4.x1;
	var y1 = _ref4.y1;
	var x2 = _ref4.x2;
	var y2 = _ref4.y2;
	var yScale = chartConfig.yScale;


	var left = Math.min(x1, x2);
	var right = Math.max(x1, x2);

	var top = Math.max(y1, y2);
	var bottom = Math.min(y1, y2);

	var x = xScale(left);
	var width = xScale(right) - xScale(left);

	var y = type === "1D" ? 0 : yScale(top);
	var height = type === "1D" ? chartConfig.height : yScale(bottom) - yScale(top);

	// console.log(chartConfig);
	return {
		x: x,
		y: y,
		width: width,
		height: height
	};
};

Brush.propTypes = {
	enabled: _react.PropTypes.bool.isRequired,
	onStart: _react.PropTypes.func.isRequired,
	onBrush: _react.PropTypes.func.isRequired,

	type: _react.PropTypes.oneOf(["1D", "2D"]),
	chartCanvasType: _react.PropTypes.string,
	chartConfig: _react.PropTypes.object,
	plotData: _react.PropTypes.array,
	xAccessor: _react.PropTypes.func,
	xScale: _react.PropTypes.func,
	interactive: _react.PropTypes.object,
	stroke: _react.PropTypes.string,
	fill: _react.PropTypes.string,
	opacity: _react.PropTypes.number
};

Brush.defaultProps = {
	type: "2D",
	stroke: "#000000",
	opacity: 0.3,
	fill: "#3h3h3h",
	onBrush: _utils.noop,
	onStart: _utils.noop
};

exports.default = (0, _makeInteractive2.default)(Brush, ["click", "mousemove"], {});