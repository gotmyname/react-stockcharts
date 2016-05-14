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

var _utils = require("./utils");

var _ChartDataUtil = require("./utils/ChartDataUtil");

var _EventHandler = require("./EventHandler");

var _EventHandler2 = _interopRequireDefault(_EventHandler);

var _CanvasContainer = require("./CanvasContainer");

var _CanvasContainer2 = _interopRequireDefault(_CanvasContainer);

var _eodIntervalCalculator = require("./scale/eodIntervalCalculator");

var _eodIntervalCalculator2 = _interopRequireDefault(_eodIntervalCalculator);

var _evaluator = require("./scale/evaluator");

var _evaluator2 = _interopRequireDefault(_evaluator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CANDIDATES_FOR_RESET = ["seriesName", /* "data",*/"interval", "discontinous", "intervalCalculator", "allowedIntervals", "xScale", /* "xAccessor",*/"map", "dataEvaluator", "indexAccessor", "indexMutator"];

function shouldResetChart(thisProps, nextProps) {
	return !CANDIDATES_FOR_RESET.every(function (key) {
		var result = (0, _utils.shallowEqual)(thisProps[key], nextProps[key]);
		// console.log(key, result);
		return result;
	});
}

function getDimensions(props) {
	return {
		height: props.height - props.margin.top - props.margin.bottom,
		width: props.width - props.margin.left - props.margin.right
	};
}

function calculateFullData(props) {
	var data = props.data;
	var calculator = props.calculator;
	var xScale = props.xScale;
	var intervalCalculator = props.intervalCalculator;
	var allowedIntervals = props.allowedIntervals;
	var plotFull = props.plotFull;
	var xAccessor = props.xAccessor;
	var map = props.map;
	var dataEvaluator = props.dataEvaluator;
	var indexAccessor = props.indexAccessor;
	var indexMutator = props.indexMutator;
	var discontinous = props.discontinous;


	var wholeData = (0, _utils.isDefined)(plotFull) ? plotFull : xAccessor === _utils.identity;

	var evaluate = dataEvaluator().allowedIntervals(allowedIntervals).intervalCalculator(intervalCalculator).xAccessor(xAccessor).discontinous(discontinous).indexAccessor(indexAccessor).indexMutator(indexMutator).map(map).useWholeData(wholeData).scale(xScale).calculator(calculator.slice());

	var _evaluate = evaluate(data);

	var xAccessor = _evaluate.xAccessor;
	var xExtentsCalculator = _evaluate.domainCalculator;
	var fullData = _evaluate.fullData;


	return {
		xAccessor: xAccessor,
		xExtentsCalculator: xExtentsCalculator,
		fullData: fullData
	};
}

function calculateState(props) {
	var data = props.data;
	var interval = props.interval;
	var allowedIntervals = props.allowedIntervals;
	var inputXAccesor = props.xAccessor;
	var xExtentsProp = props.xExtents;
	var xScale = props.xScale;


	if ((0, _utils.isDefined)(interval) && ((0, _utils.isNotDefined)(allowedIntervals) || allowedIntervals.indexOf(interval) > -1)) throw new Error("interval has to be part of allowedInterval");

	var _calculateFullData = calculateFullData(props);

	var xAccessor = _calculateFullData.xAccessor;
	var xExtentsCalculator = _calculateFullData.xExtentsCalculator;
	var fullData = _calculateFullData.fullData;


	var dimensions = getDimensions(props);
	// xAccessor - if discontinious return indexAccessor, else xAccessor
	// inputXAccesor - send this down as context

	// console.log(xAccessor, inputXAccesor, domainCalculator, domainCalculator, updatedScale);
	// in componentWillReceiveProps calculate plotData and interval only if this.props.xExtentsProp != nextProps.xExtentsProp

	var extent = typeof xExtentsProp === "function" ? xExtentsProp(fullData) : _d2.default.extent(xExtentsProp.map(_d2.default.functor).map(function (each) {
		return each(data, inputXAccesor);
	}));

	var _xExtentsCalculator$w = xExtentsCalculator.width(dimensions.width).scale(xScale).data(fullData).interval(interval)(extent, inputXAccesor);

	var plotData = _xExtentsCalculator$w.plotData;
	var showingInterval = _xExtentsCalculator$w.interval;
	var updatedScale = _xExtentsCalculator$w.scale;

	// console.log(updatedScale.domain());

	return {
		fullData: fullData,
		plotData: plotData,
		showingInterval: showingInterval,
		xExtentsCalculator: xExtentsCalculator,
		xScale: updatedScale,
		xAccessor: xAccessor,
		dataAltered: false
	};
}

function getCursorStyle(children) {
	var style = "<![CDATA[\n\t\t\t.react-stockcharts-grabbing-cursor {\n\t\t\t\tcursor: grabbing;\n\t\t\t\tcursor: -moz-grabbing;\n\t\t\t\tcursor: -webkit-grabbing;\n\t\t\t}\n\t\t\t.react-stockcharts-crosshair-cursor {\n\t\t\t\tcursor: crosshair;\n\t\t\t}\n\t\t\t.react-stockcharts-toottip-hover {\n\t\t\t\tpointer-events: all;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t]]>";
	return (0, _ChartDataUtil.shouldShowCrossHairStyle)(children) ? _react2.default.createElement("style", { type: "text/css", dangerouslySetInnerHTML: { __html: style } }) : null;
}

var ChartCanvas = function (_Component) {
	_inherits(ChartCanvas, _Component);

	function ChartCanvas() {
		_classCallCheck(this, ChartCanvas);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChartCanvas).call(this));

		_this.getDataInfo = _this.getDataInfo.bind(_this);
		_this.getCanvases = _this.getCanvases.bind(_this);
		return _this;
	}

	_createClass(ChartCanvas, [{
		key: "getDataInfo",
		value: function getDataInfo() {
			return this.refs.chartContainer.getDataInfo();
		}
	}, {
		key: "getCanvases",
		value: function getCanvases() {
			if (this.refs && this.refs.canvases) {
				return this.refs.canvases.getCanvasContexts();
			}
		}
	}, {
		key: "getChildContext",
		value: function getChildContext() {
			return {
				displayXAccessor: this.props.xAccessor
			};
		}
	}, {
		key: "componentWillMount",
		value: function componentWillMount() {
			this.setState(calculateState(this.props));
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			var reset = shouldResetChart(this.props, nextProps);
			// console.log("shouldResetChart =", reset);

			if (reset) {
				if (process.env.NODE_ENV !== "production") console.log("RESET CHART, one or more of these props changed", CANDIDATES_FOR_RESET);
				this.setState(calculateState(nextProps));
			} else if (!(0, _utils.shallowEqual)(this.props.xExtents, nextProps.xExtents)) {
				if (process.env.NODE_ENV !== "production") console.log("xExtents changed");
				// since the xExtents changed update fullData, plotData, xExtentsCalculator to state

				var _calculateState = calculateState(nextProps);

				var fullData = _calculateState.fullData;
				var plotData = _calculateState.plotData;
				var xExtentsCalculator = _calculateState.xExtentsCalculator;
				var xScale = _calculateState.xScale;

				this.setState({ fullData: fullData, plotData: plotData, xExtentsCalculator: xExtentsCalculator, xScale: xScale, dataAltered: false });
			} else if (this.props.data !== nextProps.data) {
				if (process.env.NODE_ENV !== "production") console.log("data is changed but seriesName did not");
				// this means there are more points pushed/removed or existing points are altered
				// console.log("data changed");

				var _calculateFullData2 = calculateFullData(nextProps);

				var _fullData = _calculateFullData2.fullData;

				this.setState({ fullData: _fullData, dataAltered: true });
			} else if (!(0, _utils.shallowEqual)(this.props.calculator, nextProps.calculator)) {
				if (process.env.NODE_ENV !== "production") console.log("calculator changed");
				// data did not change but calculator changed, so update only the fullData to state

				var _calculateFullData3 = calculateFullData(nextProps);

				var _fullData2 = _calculateFullData3.fullData;

				this.setState({ fullData: _fullData2, dataAltered: false });
			} else {
				if (process.env.NODE_ENV !== "production") console.log("Trivial change, may be width/height or type changed, but that does not matter");
			}
		}
	}, {
		key: "render",
		value: function render() {
			var cursor = getCursorStyle(this.props.children);

			var _props = this.props;
			var interval = _props.interval;
			var data = _props.data;
			var type = _props.type;
			var height = _props.height;
			var width = _props.width;
			var margin = _props.margin;
			var className = _props.className;
			var zIndex = _props.zIndex;
			var postCalculator = _props.postCalculator;
			var flipXScale = _props.flipXScale;
			var padding = this.props.padding;
			var _state = this.state;
			var fullData = _state.fullData;
			var plotData = _state.plotData;
			var showingInterval = _state.showingInterval;
			var xExtentsCalculator = _state.xExtentsCalculator;
			var xScale = _state.xScale;
			var xAccessor = _state.xAccessor;
			var dataAltered = _state.dataAltered;


			var dimensions = getDimensions(this.props);
			var props = { padding: padding, interval: interval, type: type, margin: margin, postCalculator: postCalculator };
			var stateProps = { fullData: fullData, plotData: plotData, showingInterval: showingInterval, xExtentsCalculator: xExtentsCalculator, xScale: xScale, xAccessor: xAccessor, dataAltered: dataAltered };
			return _react2.default.createElement(
				"div",
				{ style: { position: "relative", height: height, width: width }, className: className },
				_react2.default.createElement(_CanvasContainer2.default, { ref: "canvases", width: width, height: height, type: type, zIndex: zIndex }),
				_react2.default.createElement(
					"svg",
					{ className: className, width: width, height: height, style: { position: "absolute", zIndex: zIndex + 5 } },
					cursor,
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement(
							"clipPath",
							{ id: "chart-area-clip" },
							_react2.default.createElement("rect", { x: "0", y: "0", width: dimensions.width, height: dimensions.height })
						)
					),
					_react2.default.createElement(
						"g",
						{ transform: "translate(" + (margin.left + 0.5) + ", " + (margin.top + 0.5) + ")" },
						_react2.default.createElement(
							_EventHandler2.default,
							_extends({ ref: "chartContainer"
							}, props, stateProps, {
								direction: flipXScale ? -1 : 1,
								lastItem: (0, _utils.last)(data),
								dimensions: dimensions,
								canvasContexts: this.getCanvases }),
							this.props.children
						)
					)
				)
			);
		}
	}]);

	return ChartCanvas;
}(_react.Component);

/*
							interval={interval} type={type} margin={margin}
							data={plotData} showingInterval={updatedInterval}
							xExtentsCalculator={domainCalculator}
							xScale={updatedScale} xAccessor={xAccessor}
							dimensions={dimensions}

*/

ChartCanvas.propTypes = {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired,
	margin: _react.PropTypes.object,
	interval: _react.PropTypes.oneOf(["D", "W", "M"]), // ,"m1", "m5", "m15", "W", "M"
	type: _react.PropTypes.oneOf(["svg", "hybrid"]).isRequired,
	data: _react.PropTypes.array.isRequired,
	initialDisplay: _react.PropTypes.number,
	calculator: _react.PropTypes.arrayOf(_react.PropTypes.func).isRequired,
	xAccessor: _react.PropTypes.func,
	xExtents: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
	xScale: _react.PropTypes.func.isRequired,
	className: _react.PropTypes.string,
	seriesName: _react.PropTypes.string.isRequired,
	zIndex: _react.PropTypes.number,
	children: _react.PropTypes.node.isRequired,
	discontinous: _react.PropTypes.bool.isRequired,
	postCalculator: _react.PropTypes.func.isRequired,
	flipXScale: _react.PropTypes.bool.isRequired,
	padding: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.shape({
		left: _react.PropTypes.number,
		right: _react.PropTypes.number
	})]).isRequired
};

ChartCanvas.defaultProps = {
	margin: { top: 20, right: 30, bottom: 30, left: 80 },
	indexAccessor: function indexAccessor(d) {
		return d.idx;
	},
	indexMutator: function indexMutator(d, idx) {
		return d.idx = idx;
	},
	map: _utils.identity,
	type: "hybrid",
	calculator: [],
	className: "react-stockchart",
	zIndex: 1,
	xExtents: [_d2.default.min, _d2.default.max],
	intervalCalculator: _eodIntervalCalculator2.default,
	dataEvaluator: _evaluator2.default,
	discontinous: false,
	postCalculator: _utils.identity,
	padding: 0,
	xAccessor: _utils.identity,
	flipXScale: false
};

// initialDisplay: 30
ChartCanvas.childContextTypes = {
	displayXAccessor: _react.PropTypes.func
};

ChartCanvas.ohlcv = function (d) {
	return { date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume };
};

exports.default = ChartCanvas;