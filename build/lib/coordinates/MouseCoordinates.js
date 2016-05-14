"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _pure = require("../pure");

var _pure2 = _interopRequireDefault(_pure);

var _CrossHair = require("./CrossHair");

var _CrossHair2 = _interopRequireDefault(_CrossHair);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MouseCoordinates = function (_Component) {
	_inherits(MouseCoordinates, _Component);

	function MouseCoordinates() {
		_classCallCheck(this, MouseCoordinates);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MouseCoordinates).apply(this, arguments));
	}

	_createClass(MouseCoordinates, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _props = this.props;
			var chartCanvasType = _props.chartCanvasType;
			var getCanvasContexts = _props.getCanvasContexts;


			if (chartCanvasType !== "svg" && (0, _utils.isDefined)(getCanvasContexts)) {
				var contexts = getCanvasContexts();
				if (contexts) MouseCoordinates.drawOnCanvas(contexts.mouseCoord, this.props);
			}
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			this.componentDidMount();
		}
	}, {
		key: "componentWillMount",
		value: function componentWillMount() {
			this.componentWillReceiveProps(this.props, this.props);
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			var draw = MouseCoordinates.drawOnCanvasStatic.bind(null, nextProps);

			var temp = nextProps.getAllCanvasDrawCallback().filter(function (each) {
				return each.type === "mouse";
			});
			if (temp.length === 0) {
				nextProps.callbackForCanvasDraw({
					type: "mouse",
					draw: draw
				});
			} else {
				nextProps.callbackForCanvasDraw(temp[0], {
					type: "mouse",
					draw: draw
				});
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _props2 = this.props;
			var chartCanvasType = _props2.chartCanvasType;
			var mouseXY = _props2.mouseXY;
			var xScale = _props2.xScale;
			var currentCharts = _props2.currentCharts;
			var chartConfig = _props2.chartConfig;
			var currentItem = _props2.currentItem;
			var show = _props2.show;
			var _props3 = this.props;
			var stroke = _props3.stroke;
			var opacity = _props3.opacity;
			var textStroke = _props3.textStroke;
			var textBGFill = _props3.textBGFill;
			var textBGopacity = _props3.textBGopacity;
			var fontFamily = _props3.fontFamily;
			var fontSize = _props3.fontSize;


			if (chartCanvasType !== "svg") return null;

			var pointer = MouseCoordinates.helper(this.props, show, xScale, mouseXY, currentCharts, chartConfig, currentItem);

			if (!pointer) return null;

			return _react2.default.createElement(_CrossHair2.default, { height: pointer.height, width: pointer.width, mouseXY: pointer.mouseXY,
				xDisplayValue: pointer.xDisplayValue, edges: pointer.edges,
				stroke: stroke, opacity: opacity, textStroke: textStroke,
				textBGFill: textBGFill, textBGopacity: textBGopacity,
				fontFamily: fontFamily, fontSize: fontSize });
		}
	}]);

	return MouseCoordinates;
}(_react.Component);

MouseCoordinates.propTypes = {
	xDisplayFormat: _react.PropTypes.func.isRequired,
	type: _react.PropTypes.oneOf(["crosshair"]).isRequired,

	xScale: _react.PropTypes.func.isRequired,
	xAccessor: _react.PropTypes.func.isRequired,
	displayXAccessor: _react.PropTypes.func.isRequired,
	chartCanvasType: _react.PropTypes.string,
	getCanvasContexts: _react.PropTypes.func,
	mouseXY: _react.PropTypes.array,
	currentCharts: _react.PropTypes.arrayOf(_react.PropTypes.number),
	chartConfig: _react.PropTypes.array.isRequired,
	currentItem: _react.PropTypes.object.isRequired,
	show: _react.PropTypes.bool,
	stroke: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	textStroke: _react.PropTypes.string,
	textBGFill: _react.PropTypes.string,
	textBGopacity: _react.PropTypes.number,
	fontFamily: _react.PropTypes.string,
	fontSize: _react.PropTypes.number
};

MouseCoordinates.defaultProps = {
	// show: false,
	snapX: true,
	showX: true,
	type: "crosshair",
	xDisplayFormat: _d2.default.time.format("%Y-%m-%d"),
	stroke: "#000000",
	opacity: 0.2,
	textStroke: "#ffffff",
	textBGFill: "#8a8a8a",
	textBGopacity: 1,
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 13,
	rectWidth: 100,
	rectHeight: 20
};

MouseCoordinates.drawOnCanvas = function (canvasContext, props) {
	var mouseXY = props.mouseXY;
	var currentCharts = props.currentCharts;
	var chartConfig = props.chartConfig;
	var currentItem = props.currentItem;
	var xScale = props.xScale;
	var show = props.show;

	// console.log(props.currentCharts);

	MouseCoordinates.drawOnCanvasStatic(props, canvasContext, show, xScale, mouseXY, currentCharts, chartConfig, currentItem);
};
MouseCoordinates.drawOnCanvasStatic = function (props, ctx, show, xScale, mouseXY, currentCharts, chartConfig, currentItem) {
	var margin = props.margin;

	var pointer = MouseCoordinates.helper(props, show, xScale, mouseXY, currentCharts, chartConfig, currentItem);

	if (!pointer) return null;

	var originX = 0.5 + margin.left;
	var originY = 0.5 + margin.top;

	ctx.save();

	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.translate(originX, originY);

	// console.log(pointer);
	_CrossHair2.default.drawOnCanvasStatic(ctx, pointer);
	ctx.restore();
};

MouseCoordinates.helper = function (props, show, xScale, mouseXY, currentCharts, chartConfig, currentItem) {
	var displayXAccessor = props.displayXAccessor;
	var xAccessor = props.xAccessor;
	var height = props.height;
	var width = props.width;
	var snapX = props.snapX;
	var xDisplayFormat = props.xDisplayFormat;


	var xValue = xAccessor(currentItem);
	var x = snapX ? Math.round(xScale(xValue)) : mouseXY[0];
	var y = mouseXY[1];

	var displayValue = snapX ? displayXAccessor(currentItem) : xScale.invert(x);

	if (!show || !displayValue) return;

	var edges = chartConfig.filter(function (eachChartConfig) {
		return currentCharts.indexOf(eachChartConfig.id) > -1;
	}).filter(function (eachChartConfig) {
		return (0, _utils.isDefined)(eachChartConfig.mouseCoordinates.at);
	}).filter(function (eachChartConfig) {
		return (0, _utils.isDefined)(eachChartConfig.mouseCoordinates.yDisplayFormat);
	}).map(function (eachChartConfig) {
		var mouseY = mouseXY[1] - eachChartConfig.origin[1];
		var yValue = eachChartConfig.yScale.invert(mouseY);
		return _extends({
			id: eachChartConfig.id,
			yDisplayValue: eachChartConfig.mouseCoordinates.yDisplayFormat(yValue)
		}, eachChartConfig.mouseCoordinates, {
			yValue: yValue
		});
	});

	var stroke = props.stroke;
	var opacity = props.opacity;
	var textStroke = props.textStroke;
	var textBGFill = props.textBGFill;
	var textBGopacity = props.textBGopacity;
	var fontFamily = props.fontFamily;
	var fontSize = props.fontSize;
	var showX = props.showX;
	var rectHeight = props.rectHeight;
	var rectWidth = props.rectWidth;

	return { showX: showX, rectHeight: rectHeight, rectWidth: rectWidth, height: height, width: width, mouseXY: [x, y], xDisplayValue: xDisplayFormat(displayValue), edges: edges,
		stroke: stroke, opacity: opacity, textStroke: textStroke, textBGFill: textBGFill, textBGopacity: textBGopacity, fontFamily: fontFamily, fontSize: fontSize };
};

// export default MouseCoordinates;
exports.default = (0, _pure2.default)(MouseCoordinates, {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired,
	margin: _react.PropTypes.object.isRequired,
	show: _react.PropTypes.bool,
	mouseXY: _react.PropTypes.array,

	xScale: _react.PropTypes.func.isRequired,
	xAccessor: _react.PropTypes.func.isRequired,
	displayXAccessor: _react.PropTypes.func.isRequired,
	chartCanvasType: _react.PropTypes.string.isRequired,
	chartConfig: _react.PropTypes.array.isRequired,
	currentItem: _react.PropTypes.object.isRequired,
	currentCharts: _react.PropTypes.arrayOf(_react.PropTypes.number),

	getCanvasContexts: _react.PropTypes.func,
	callbackForCanvasDraw: _react.PropTypes.func.isRequired,
	getAllCanvasDrawCallback: _react.PropTypes.func
});