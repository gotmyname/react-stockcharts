"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _EdgeCoordinate = require("./EdgeCoordinate");

var _EdgeCoordinate2 = _interopRequireDefault(_EdgeCoordinate);

var _pure = require("../pure");

var _pure2 = _interopRequireDefault(_pure);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EdgeIndicator = function (_Component) {
	_inherits(EdgeIndicator, _Component);

	function EdgeIndicator() {
		_classCallCheck(this, EdgeIndicator);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(EdgeIndicator).apply(this, arguments));
	}

	_createClass(EdgeIndicator, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _props = this.props;
			var chartCanvasType = _props.chartCanvasType;
			var getCanvasContexts = _props.getCanvasContexts;


			if (chartCanvasType !== "svg" && (0, _utils.isDefined)(getCanvasContexts)) {
				var contexts = getCanvasContexts();
				if (contexts) EdgeIndicator.drawOnCanvas(this.props, contexts.axes);
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
			this.componentWillReceiveProps(this.props);
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			var draw = EdgeIndicator.drawOnCanvasStatic.bind(null, nextProps);

			var chartId = nextProps.chartId;


			nextProps.callbackForCanvasDraw({
				type: "edge",
				chartId: chartId, draw: draw
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _props2 = this.props;
			var xScale = _props2.xScale;
			var chartConfig = _props2.chartConfig;
			var plotData = _props2.plotData;
			var chartCanvasType = _props2.chartCanvasType;


			if (chartCanvasType !== "svg") return null;

			var edge = EdgeIndicator.helper(this.props, xScale, chartConfig.yScale, plotData);

			if ((0, _utils.isNotDefined)(edge)) return null;
			return _react2.default.createElement(_EdgeCoordinate2.default, _extends({
				className: "react-stockcharts-edge-coordinate"
			}, edge));
		}
	}]);

	return EdgeIndicator;
}(_react.Component);

EdgeIndicator.propTypes = {
	yAccessor: _react.PropTypes.func,

	type: _react.PropTypes.oneOf(["horizontal"]).isRequired,
	className: _react.PropTypes.string,
	fill: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,
	textFill: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,
	itemType: _react.PropTypes.oneOf(["first", "last"]).isRequired,
	orient: _react.PropTypes.oneOf(["left", "right"]),
	edgeAt: _react.PropTypes.oneOf(["left", "right"]),
	displayFormat: _react.PropTypes.func.isRequired
};

EdgeIndicator.defaultProps = {
	type: "horizontal",
	orient: "left",
	edgeAt: "left",
	textFill: "#FFFFFF",
	displayFormat: _d2.default.format(".2f"),
	yAxisPad: 5
};

EdgeIndicator.drawOnCanvas = function (props, canvasContext) {
	var chartConfig = props.chartConfig;
	var xScale = props.xScale;
	var plotData = props.plotData;

	EdgeIndicator.drawOnCanvasStatic(props, canvasContext, xScale, chartConfig.yScale, plotData);
};

EdgeIndicator.drawOnCanvasStatic = function (props, ctx, xScale, yScale, plotData) {
	var canvasOriginX = props.canvasOriginX;
	var canvasOriginY = props.canvasOriginY;

	var edge = EdgeIndicator.helper(props, xScale, yScale, plotData);

	if ((0, _utils.isNotDefined)(edge)) return null;

	ctx.save();

	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.translate(canvasOriginX, canvasOriginY);

	_EdgeCoordinate2.default.drawOnCanvasStatic(ctx, edge);
	ctx.restore();
};

EdgeIndicator.helper = function (props, xScale, yScale, plotData) {
	var edgeType = props.type;
	var displayFormat = props.displayFormat;
	var itemType = props.itemType;
	var edgeAt = props.edgeAt;
	var yAxisPad = props.yAxisPad;
	var orient = props.orient;
	var yAccessor = props.yAccessor;
	var xAccessor = props.xAccessor;
	var fill = props.fill;
	var textFill = props.textFill;

	// var currentItem = ChartDataUtil.getCurrentItemForChartNew(currentItems, forChart);

	var edge = null,
	    item,
	    yAccessor;
	// console.log(chartData.config.compareSeries.length);

	var item = itemType === "first" ? (0, _utils.first)(plotData, yAccessor) : (0, _utils.last)(plotData, yAccessor);

	if ((0, _utils.isDefined)(item)) {
		var yValue = yAccessor(item),
		    xValue = xAccessor(item);

		var x1 = Math.round(xScale(xValue)),
		    y1 = Math.round(yScale(yValue));

		var _xScale$range = xScale.range();

		var _xScale$range2 = _slicedToArray(_xScale$range, 2);

		var left = _xScale$range2[0];
		var right = _xScale$range2[1];

		var edgeX = edgeAt === "left" ? left - yAxisPad : right + yAxisPad;

		edge = {
			// ...props,
			type: edgeType,
			fill: _d2.default.functor(fill)(item),
			textFill: _d2.default.functor(textFill)(item),
			show: true,
			x1: x1,
			y1: y1,
			x2: edgeX,
			y2: y1,
			coordinate: displayFormat(yValue),
			edgeAt: edgeX,
			orient: orient
		};
	}
	return edge;
};

EdgeIndicator.propTypes = {
	canvasOriginX: _react.PropTypes.number,
	canvasOriginY: _react.PropTypes.number,
	chartConfig: _react.PropTypes.object.isRequired,
	xAccessor: _react.PropTypes.func.isRequired,
	xScale: _react.PropTypes.func.isRequired,
	chartId: _react.PropTypes.number.isRequired,
	getCanvasContexts: _react.PropTypes.func,
	margin: _react.PropTypes.object.isRequired,
	callbackForCanvasDraw: _react.PropTypes.func.isRequired,
	getAllCanvasDrawCallback: _react.PropTypes.func,
	chartCanvasType: _react.PropTypes.string.isRequired,
	plotData: _react.PropTypes.array.isRequired
};

exports.default = (0, _pure2.default)(EdgeIndicator, {
	// width: PropTypes.number.isRequired,
	canvasOriginX: _react.PropTypes.number,
	canvasOriginY: _react.PropTypes.number,
	chartConfig: _react.PropTypes.object.isRequired,
	xAccessor: _react.PropTypes.func.isRequired,
	xScale: _react.PropTypes.func.isRequired,
	chartId: _react.PropTypes.number.isRequired,
	getCanvasContexts: _react.PropTypes.func,
	margin: _react.PropTypes.object.isRequired,
	callbackForCanvasDraw: _react.PropTypes.func.isRequired,
	getAllCanvasDrawCallback: _react.PropTypes.func,
	chartCanvasType: _react.PropTypes.string.isRequired,
	plotData: _react.PropTypes.array.isRequired
});