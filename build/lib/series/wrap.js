"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _pure = require("../pure");

var _pure2 = _interopRequireDefault(_pure);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getDisplayName(Series) {
	var name = Series.displayName || Series.name || "Series";
	return name;
}

function wrap(WrappedSeries) {
	var BaseCanvasSeries = function (_Component) {
		_inherits(BaseCanvasSeries, _Component);

		function BaseCanvasSeries() {
			_classCallCheck(this, BaseCanvasSeries);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseCanvasSeries).apply(this, arguments));
		}

		_createClass(BaseCanvasSeries, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var callback = WrappedSeries.drawOnCanvas;
				if (callback) {
					var _props = this.props;
					var chartCanvasType = _props.chartCanvasType;
					var getCanvasContexts = _props.getCanvasContexts;


					if (chartCanvasType !== "svg" && (0, _utils.isDefined)(getCanvasContexts)) {
						var contexts = getCanvasContexts();
						var props = _extends({}, WrappedSeries.defaultProps, this.props);

						if (contexts) BaseCanvasSeries.baseReStockDrawOnCanvasHelper(contexts.axes, props, callback);
					}
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
				// console.log("HERE1");
				var chartCanvasType = nextProps.chartCanvasType;

				var callback = WrappedSeries.drawOnCanvas;

				if (callback && chartCanvasType !== "svg") {
					var canvasOriginX = nextProps.canvasOriginX;
					var canvasOriginY = nextProps.canvasOriginY;
					var height = nextProps.height;
					var width = nextProps.width;
					var xAccessor = nextProps.xAccessor;
					var yAccessor = nextProps.yAccessor;
					var chartId = nextProps.chartId;


					var canvasOrigin = [canvasOriginX, canvasOriginY];

					var props = _extends({}, WrappedSeries.defaultProps, nextProps);

					var draw = BaseCanvasSeries.baseReStockDrawOnCanvas.bind(null, props, callback, canvasOrigin, height, width, xAccessor, yAccessor);

					nextProps.callbackForCanvasDraw({
						chartId: chartId,
						type: "series",
						// seriesId: seriesId,
						draw: draw
					});
				}
			}
		}, {
			key: "render",
			value: function render() {
				var callback = WrappedSeries.drawOnCanvas;
				var _props2 = this.props;
				var clip = _props2.clip;
				var chartCanvasType = _props2.chartCanvasType;
				var chartConfig = _props2.chartConfig;


				if (chartCanvasType !== "svg" && (0, _utils.isDefined)(callback)) return null;
				var style = clip ? { "clipPath": "url(#chart-area-clip)" } : null;

				return _react2.default.createElement(
					"g",
					{ style: style },
					_react2.default.createElement(WrappedSeries, _extends({ ref: "wrappedSeries",
						yScale: chartConfig.yScale
					}, this.props))
				);
			}
		}]);

		return BaseCanvasSeries;
	}(_react.Component);

	;

	BaseCanvasSeries.displayName = "wrap(" + getDisplayName(WrappedSeries) + ")";

	BaseCanvasSeries.baseReStockDrawOnCanvasHelper = function (canvasContext, props, callback) {
		var height = props.height;
		var width = props.width;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var xScale = props.xScale;
		var chartConfig = props.chartConfig;
		var yScale = props.yScale;
		var plotData = props.plotData;
		var canvasOriginX = props.canvasOriginX;
		var canvasOriginY = props.canvasOriginY;

		var canvasOrigin = [canvasOriginX, canvasOriginY];

		BaseCanvasSeries.baseReStockDrawOnCanvas(props, callback, canvasOrigin, height, width, xAccessor, yAccessor, canvasContext, xScale, yScale || chartConfig.yScale, plotData);
	};

	BaseCanvasSeries.baseReStockDrawOnCanvas = function (props, callback, canvasOrigin, height, width, xAccessor, yAccessor, ctx, xScale, yScale, plotData) {

		ctx.save();

		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(canvasOrigin[0], canvasOrigin[1]);

		if (props.clip) {
			ctx.beginPath();
			ctx.rect(-1, -1, width + 1, height + 1);
			ctx.clip();
		}

		// console.log(canvasOrigin, width, height);

		// console.log("HERE");
		if (callback) {
			var newProps = _extends({ height: height, width: width, xAccessor: xAccessor, yAccessor: yAccessor }, props);

			callback(newProps, ctx, xScale, yScale, plotData);
		}

		ctx.restore();
	};

	BaseCanvasSeries.defaultProps = _extends({}, WrappedSeries.defaultProps, {
		clip: true
	});

	BaseCanvasSeries.propTypes = {
		getCanvasContexts: _react.PropTypes.func,
		chartConfig: _react.PropTypes.object,
		chartCanvasType: _react.PropTypes.string,
		clip: _react.PropTypes.bool.isRequired
	};

	// console.log(Object.keys(BaseCanvasSeries))
	return (0, _pure2.default)(BaseCanvasSeries, {
		getCanvasContexts: _react.PropTypes.func,
		canvasOriginX: _react.PropTypes.number,
		canvasOriginY: _react.PropTypes.number,
		height: _react.PropTypes.number.isRequired,
		width: _react.PropTypes.number.isRequired,
		callbackForCanvasDraw: _react.PropTypes.func.isRequired,
		chartId: _react.PropTypes.number.isRequired,
		// seriesId: PropTypes.number.isRequired,
		stroke: _react.PropTypes.string,
		fill: _react.PropTypes.string,
		chartConfig: _react.PropTypes.object.isRequired,
		chartCanvasType: _react.PropTypes.string,
		xScale: _react.PropTypes.func.isRequired,
		// yScale: PropTypes.func.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		plotData: _react.PropTypes.array.isRequired
	});
}

exports.default = wrap;