(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("d3"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "d3", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["ReStock"] = factory(require("React"), require("d3"), require("ReactDOM"));
	else
		root["ReStock"] = factory(root["React"], root["d3"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_115__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// common components
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ChartCanvas = __webpack_require__(1);
	
	var _ChartCanvas2 = _interopRequireDefault(_ChartCanvas);
	
	var _Chart = __webpack_require__(18);
	
	var _Chart2 = _interopRequireDefault(_Chart);
	
	var _BackgroundText = __webpack_require__(25);
	
	var _BackgroundText2 = _interopRequireDefault(_BackgroundText);
	
	var _EventCapture = __webpack_require__(17);
	
	var _EventCapture2 = _interopRequireDefault(_EventCapture);
	
	var _series = __webpack_require__(26);
	
	var series = _interopRequireWildcard(_series);
	
	var _scale = __webpack_require__(50);
	
	var scale = _interopRequireWildcard(_scale);
	
	var _coordinates = __webpack_require__(53);
	
	var coordinates = _interopRequireWildcard(_coordinates);
	
	var _indicator = __webpack_require__(59);
	
	var indicator = _interopRequireWildcard(_indicator);
	
	var _axes = __webpack_require__(92);
	
	var axes = _interopRequireWildcard(_axes);
	
	var _tooltip = __webpack_require__(98);
	
	var tooltip = _interopRequireWildcard(_tooltip);
	
	var _helper = __webpack_require__(109);
	
	var helper = _interopRequireWildcard(_helper);
	
	var _interactive = __webpack_require__(116);
	
	var interactive = _interopRequireWildcard(_interactive);
	
	var _utils = __webpack_require__(5);
	
	var Utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// interaction components
	
	
	var version = "0.4.0";
	
	// chart types & Series
	
	
	exports.default = {
		ChartCanvas: _ChartCanvas2.default,
		Chart: _Chart2.default,
		EventCapture: _EventCapture2.default,
		BackgroundText: _BackgroundText2.default,
		series: series,
		coordinates: coordinates,
		indicator: indicator,
		axes: axes,
		scale: scale,
		tooltip: tooltip,
		helper: helper,
		interactive: interactive,
		version: version,
		Utils: Utils
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	var _ChartDataUtil = __webpack_require__(14);
	
	var _EventHandler = __webpack_require__(20);
	
	var _EventHandler2 = _interopRequireDefault(_EventHandler);
	
	var _CanvasContainer = __webpack_require__(21);
	
	var _CanvasContainer2 = _interopRequireDefault(_CanvasContainer);
	
	var _eodIntervalCalculator = __webpack_require__(22);
	
	var _eodIntervalCalculator2 = _interopRequireDefault(_eodIntervalCalculator);
	
	var _evaluator = __webpack_require__(24);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.isArray = exports.first = exports.overlayColors = exports.zipper = exports.slidingWindow = exports.shallowEqual = exports.noop = exports.identity = exports.merge = exports.mappedSlidingWindow = exports.accumulatingWindow = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.getClosestItemIndexes2 = getClosestItemIndexes2;
	exports.getClosestItemIndexes = getClosestItemIndexes;
	exports.getClosestItem = getClosestItem;
	exports.rebind = rebind;
	exports.head = head;
	exports.last = last;
	exports.isDefined = isDefined;
	exports.isNotDefined = isNotDefined;
	exports.isObject = isObject;
	exports.touchPosition = touchPosition;
	exports.mousePosition = mousePosition;
	exports.clearCanvas = clearCanvas;
	exports.hexToRGBA = hexToRGBA;
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _zipper = __webpack_require__(6);
	
	var _zipper2 = _interopRequireDefault(_zipper);
	
	var _merge = __webpack_require__(8);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _slidingWindow = __webpack_require__(10);
	
	var _slidingWindow2 = _interopRequireDefault(_slidingWindow);
	
	var _identity = __webpack_require__(7);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	var _noop = __webpack_require__(9);
	
	var _noop2 = _interopRequireDefault(_noop);
	
	var _shallowEqual = __webpack_require__(11);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _mappedSlidingWindow = __webpack_require__(12);
	
	var _mappedSlidingWindow2 = _interopRequireDefault(_mappedSlidingWindow);
	
	var _accumulatingWindow = __webpack_require__(13);
	
	var _accumulatingWindow2 = _interopRequireDefault(_accumulatingWindow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.accumulatingWindow = _accumulatingWindow2.default;
	exports.mappedSlidingWindow = _mappedSlidingWindow2.default;
	exports.merge = _merge2.default;
	exports.identity = _identity2.default;
	exports.noop = _noop2.default;
	exports.shallowEqual = _shallowEqual2.default;
	exports.slidingWindow = _slidingWindow2.default;
	exports.zipper = _zipper2.default;
	function getClosestItemIndexes2(array, value, accessor) {
		var left = _d2.default.bisector(accessor).left(array, value);
		left = Math.max(left - 1, 0);
		var right = Math.min(left + 1, array.length - 1);
	
		var item = accessor(array[left]);
		if (item >= value && item <= value) right = left;
	
		return { left: left, right: right };
	};
	
	function getClosestItemIndexes(array, value, accessor, log) {
		var lo = 0,
		    hi = array.length - 1;
		while (hi - lo > 1) {
			var mid = Math.round((lo + hi) / 2);
			if (accessor(array[mid]) <= value) {
				lo = mid;
			} else {
				hi = mid;
			}
		}
		// for Date object === does not work, so using the <= in combination with >=
		// the same code works for both dates and numbers
		if (accessor(array[lo]) >= value && accessor(array[lo]) <= value) hi = lo;
		if (accessor(array[hi]) >= value && accessor(array[hi]) <= value) lo = hi;
	
		if (accessor(array[lo]) < value && accessor(array[hi]) < value) lo = hi;
		if (accessor(array[lo]) > value && accessor(array[hi]) > value) hi = lo;
	
		if (log) {}
		// console.log(lo, accessor(array[lo]), value, accessor(array[hi]), hi);
		// console.log(accessor(array[lo]), lo, value, accessor(array[lo]) >= value);
		// console.log(value, hi, accessor(array[hi]), accessor(array[lo]) <= value);
	
		// var left = value > accessor(array[lo]) ? lo : lo;
		// var right = gte(value, accessor(array[hi])) ? Math.min(hi + 1, array.length - 1) : hi;
	
		// console.log(value, accessor(array[left]), accessor(array[right]));
		return { left: lo, right: hi };
	};
	
	function getClosestItem(array, value, accessor, log) {
		var _getClosestItemIndexe = getClosestItemIndexes(array, value, accessor, log);
	
		var left = _getClosestItemIndexe.left;
		var right = _getClosestItemIndexe.right;
	
	
		if (left === right) {
			return array[left];
		}
	
		var closest = Math.abs(accessor(array[left]) - value) < Math.abs(accessor(array[right]) - value) ? array[left] : array[right];
		if (log) {
			console.log(array[left], array[right], closest, left, right);
		}
		return closest;
	};
	
	var overlayColors = exports.overlayColors = _d2.default.scale.category10();
	
	function rebind(target, source, mappings) {
		if ((typeof mappings === "undefined" ? "undefined" : _typeof(mappings)) !== "object") {
			return _d2.default.rebind.apply(_d2.default, arguments);
		}
		Object.keys(mappings).forEach(function (targetName) {
			var method = source[mappings[targetName]];
			if (typeof method !== "function") {
				throw new Error("The method " + mappings[targetName] + " does not exist on the source object");
			}
			target[targetName] = function () {
				var value = method.apply(source, arguments);
				return value === source ? target : value;
			};
		});
		return target;
	}
	
	function head(array, accessor) {
		if (accessor && array) {
			var value;
			for (var i = 0; i < array.length; i++) {
				value = array[i];
				if (isDefined(accessor(value))) break;
			};
			return value;
		}
		return array ? array[0] : undefined;
	}
	
	var first = exports.first = head;
	
	function last(array, accessor) {
		if (accessor && array) {
			var value;
			for (var i = array.length - 1; i >= 0; i--) {
				value = array[i];
				if (isDefined(accessor(value))) break;
			};
			return value;
		}
		var length = array ? array.length : 0;
		return length ? array[length - 1] : undefined;
	}
	
	function isDefined(d) {
		return d !== null && typeof d != "undefined";
	}
	
	function isNotDefined(d) {
		return !isDefined(d);
	}
	
	function isObject(d) {
		return isDefined(d) && (typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && !Array.isArray(d);
	}
	
	var isArray = exports.isArray = Array.isArray;
	
	function touchPosition(touch, e) {
		var container = e.target,
		    rect = container.getBoundingClientRect(),
		    x = touch.clientX - rect.left - container.clientLeft,
		    y = touch.clientY - rect.top - container.clientTop,
		    xy = [Math.round(x), Math.round(y)];
		return xy;
	};
	
	function mousePosition(e) {
		var container = e.currentTarget,
		    rect = container.getBoundingClientRect(),
		    x = e.clientX - rect.left - container.clientLeft,
		    y = e.clientY - rect.top - container.clientTop,
		    xy = [Math.round(x), Math.round(y)];
		return xy;
	};
	
	function clearCanvas(canvasList) {
		canvasList.forEach(function (each) {
			each.setTransform(1, 0, 0, 1, 0, 0);
			each.clearRect(-1, -1, each.canvas.width + 2, each.canvas.height + 2);
		});
	};
	
	function hexToRGBA(inputHex, opacity) {
		var hex = inputHex.replace("#", "");
		if (inputHex.indexOf("#") > -1 && (hex.length === 3 || hex.length === 6)) {
	
			var multiplier = hex.length === 3 ? 1 : 2;
	
			var r = parseInt(hex.substring(0, 1 * multiplier), 16);
			var g = parseInt(hex.substring(1 * multiplier, 2 * multiplier), 16);
			var b = parseInt(hex.substring(2 * multiplier, 3 * multiplier), 16);
	
			var result = "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
	
			return result;
		}
		return inputHex;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* an extension to d3.zip so we call a function instead of an array */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = zipper;
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _identity = __webpack_require__(7);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function zipper() {
		var combine = _identity2.default;
	
		function zip() {
			var n = arguments.length;
			if (!n) return [];
			var i,
			    m = _d2.default.min(arguments, d3_zipLength),
			    zips = new Array(m);
			for (i = -1; ++i < m;) {
				for (var j = -1, zip = zips[i] = new Array(n); ++j < n;) {
					zip[j] = arguments[j][i];
				}
				zips[i] = combine.apply(this, zips[i]);
			}
			return zips;
		};
		function d3_zipLength(d) {
			return d.length;
		}
		zip.combine = function (x) {
			if (!arguments.length) {
				return combine;
			}
			combine = x;
			return zip;
		};
		return zip;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (d) {
	  return d;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var algorithm = _identity2.default,
		    skipUndefined = true,
		    merge = _noop2.default;
	
		function mergeCompute(data) {
			var zip = (0, _zipper2.default)().combine(function (datum, indicator) {
				var result = skipUndefined && (0, _index.isNotDefined)(indicator) ? datum : merge(datum, indicator);
				return (0, _index.isNotDefined)(result) ? datum : result;
			});
	
			return zip(data, algorithm(data));
		};
	
		mergeCompute.algorithm = function (x) {
			if (!arguments.length) {
				return algorithm;
			}
			algorithm = x;
			return mergeCompute;
		};
	
		mergeCompute.merge = function (x) {
			if (!arguments.length) {
				return merge;
			}
			merge = x;
			return mergeCompute;
		};
		mergeCompute.skipUndefined = function (x) {
			if (!arguments.length) {
				return skipUndefined;
			}
			skipUndefined = x;
			return mergeCompute;
		};
	
		return mergeCompute;
	};
	
	var _identity = __webpack_require__(7);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	var _zipper = __webpack_require__(6);
	
	var _zipper2 = _interopRequireDefault(_zipper);
	
	var _noop = __webpack_require__(9);
	
	var _noop2 = _interopRequireDefault(_noop);
	
	var _index = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

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
	
		var undefinedValue = undefined,
		    windowSize = 10,
		    accumulator = _noop2.default,
		    source = _identity2.default,
		    skipInitial = 0;
	
		var slidingWindow = function slidingWindow(data) {
			var size = _d2.default.functor(windowSize).apply(this, arguments);
			var windowData = data.slice(skipInitial, size + skipInitial).map(source);
			var accumulatorIdx = 0;
			var undef = _d2.default.functor(undefinedValue);
			// console.log(skipInitial, size, data.length, windowData.length);
			return data.map(function (d, i) {
				// console.log(d, i);
				if (i < skipInitial + size - 1) {
					return undef(d, i);
				}
				if (i >= skipInitial + size) {
					// Treat windowData as FIFO rolling buffer
					windowData.shift();
					windowData.push(source(d, i));
				}
				return accumulator(windowData, i, accumulatorIdx++);
			});
		};
	
		slidingWindow.undefinedValue = function (x) {
			if (!arguments.length) {
				return undefinedValue;
			}
			undefinedValue = x;
			return slidingWindow;
		};
		slidingWindow.windowSize = function (x) {
			if (!arguments.length) {
				return windowSize;
			}
			windowSize = x;
			return slidingWindow;
		};
		slidingWindow.accumulator = function (x) {
			if (!arguments.length) {
				return accumulator;
			}
			accumulator = x;
			return slidingWindow;
		};
		slidingWindow.skipInitial = function (x) {
			if (!arguments.length) {
				return skipInitial;
			}
			skipInitial = x;
			return slidingWindow;
		};
		slidingWindow.source = function (x) {
			if (!arguments.length) {
				return source;
			}
			source = x;
			return slidingWindow;
		};
	
		return slidingWindow;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _noop = __webpack_require__(9);
	
	var _noop2 = _interopRequireDefault(_noop);
	
	var _identity = __webpack_require__(7);
	
	var _identity2 = _interopRequireDefault(_identity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = shallowEqual;
	// https://github.com/jonschlinkert/is-equal-shallow/
	
	/*
	The MIT License (MIT)
	
	Copyright (c) 2015, Jon Schlinkert.
	
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
	
	function isDate(date) {
		return Object.prototype.toString.call(date) === "[object Date]";
	}
	
	function isEqual(val1, val2) {
		return isDate(val1) && isDate(val2) ? val1.getTime() === val2.getTime() : val1 === val2;
	}
	
	function shallowEqual(a, b) {
		if (!a && !b) {
			return true;
		}
		if (!a && b || a && !b) {
			return false;
		}
	
		var numKeysA = 0,
		    numKeysB = 0,
		    key;
		for (key in b) {
			numKeysB++;
			if ( /* !isPrimitive(b[key]) || */!a.hasOwnProperty(key) || !isEqual(a[key], b[key])) {
				// console.log(key, a, b);
				return false;
			}
		}
		for (key in a) {
			numKeysA++;
		}
		return numKeysA === numKeysB;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var undefinedValue = undefined,
		    windowSize = 10,
		    accumulator = _noop2.default,
		    source = _identity2.default,
		    skipInitial = 0;
	
		var mappedSlidingWindow = function mappedSlidingWindow(data) {
			var size = _d2.default.functor(windowSize).apply(this, arguments);
			var windowData = [];
			var accumulatorIdx = 0;
			var undef = _d2.default.functor(undefinedValue);
			// console.log(skipInitial, size, data.length, windowData.length);
			var result = [];
			data.forEach(function (d, i) {
				// console.log(d, i, windowData.length);
				var mapped;
				if (i < skipInitial + size - 1) {
					mapped = undef(d, i);
					result.push(mapped);
					windowData.push(mapped);
					return;
				}
				if (i >= skipInitial + size) {
					// Treat windowData as FIFO rolling buffer
					windowData.shift();
				}
				windowData.push(source(d, i));
				mapped = accumulator(windowData, i, accumulatorIdx++);
				result.push(mapped);
				windowData.pop();
				windowData.push(mapped);
				return;
			});
			return result;
		};
	
		mappedSlidingWindow.undefinedValue = function (x) {
			if (!arguments.length) {
				return undefinedValue;
			}
			undefinedValue = x;
			return mappedSlidingWindow;
		};
		mappedSlidingWindow.windowSize = function (x) {
			if (!arguments.length) {
				return windowSize;
			}
			windowSize = x;
			return mappedSlidingWindow;
		};
		mappedSlidingWindow.accumulator = function (x) {
			if (!arguments.length) {
				return accumulator;
			}
			accumulator = x;
			return mappedSlidingWindow;
		};
		mappedSlidingWindow.skipInitial = function (x) {
			if (!arguments.length) {
				return skipInitial;
			}
			skipInitial = x;
			return mappedSlidingWindow;
		};
		mappedSlidingWindow.source = function (x) {
			if (!arguments.length) {
				return source;
			}
			source = x;
			return mappedSlidingWindow;
		};
	
		return mappedSlidingWindow;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _noop = __webpack_require__(9);
	
	var _noop2 = _interopRequireDefault(_noop);
	
	var _identity = __webpack_require__(7);
	
	var _identity2 = _interopRequireDefault(_identity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _noop = __webpack_require__(9);
	
	var _noop2 = _interopRequireDefault(_noop);
	
	var _identity = __webpack_require__(7);
	
	var _identity2 = _interopRequireDefault(_identity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _lodash = __webpack_require__(15);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _EventCapture = __webpack_require__(17);
	
	var _EventCapture2 = _interopRequireDefault(_EventCapture);
	
	var _Chart = __webpack_require__(18);
	
	var _Chart2 = _interopRequireDefault(_Chart);
	
	var _index = __webpack_require__(5);
	
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

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 4.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	var baseFlatten = __webpack_require__(16);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Recursively flattens `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flattenDeep([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, 3, 4, 5]
	 */
	function flattenDeep(array) {
	  var length = array ? array.length : 0;
	  return length ? baseFlatten(array, INFINITY) : [];
	}
	
	module.exports = flattenDeep;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;
	
	  predicate || (predicate = isFlattenable);
	  result || (result = []);
	
	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value);
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = baseFlatten;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mousemove = "mousemove.pan",
	    mouseup = "mouseup.pan";
	
	function d3Window(node) {
		var d3win = node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
		return d3win;
	}
	
	function getTouchProps(touch) {
		if (!touch) return {};
		return {
			pageX: touch.pageX,
			pageY: touch.pageY,
			clientX: touch.clientX,
			clientY: touch.clientY
		};
	}
	
	var EventCapture = function (_Component) {
		_inherits(EventCapture, _Component);
	
		function EventCapture(props) {
			_classCallCheck(this, EventCapture);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EventCapture).call(this, props));
	
			_this.handleEnter = _this.handleEnter.bind(_this);
			_this.handleLeave = _this.handleLeave.bind(_this);
			_this.handleWheel = _this.handleWheel.bind(_this);
			_this.handleMouseMove = _this.handleMouseMove.bind(_this);
			_this.handleMouseDown = _this.handleMouseDown.bind(_this);
			_this.handlePanEnd = _this.handlePanEnd.bind(_this);
			_this.handlePan = _this.handlePan.bind(_this);
			_this.handleTouchStart = _this.handleTouchStart.bind(_this);
			_this.handleTouchMove = _this.handleTouchMove.bind(_this);
			_this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
			_this.lastTouch = {};
			_this.initialPinch = {};
			_this.mouseInteraction = true;
			return _this;
		}
	
		_createClass(EventCapture, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				if (this.context.onFocus) this.context.onFocus(this.props.defaultFocus);
			}
		}, {
			key: "handleEnter",
			value: function handleEnter() {
				if (this.context.onMouseEnter) {
					this.context.onMouseEnter();
				}
			}
		}, {
			key: "handleLeave",
			value: function handleLeave() {
				if (this.context.onMouseLeave) {
					this.context.onMouseLeave();
				}
			}
		}, {
			key: "handleWheel",
			value: function handleWheel(e) {
				if (this.props.zoom && this.context.onZoom && this.context.focus) {
					e.stopPropagation();
					e.preventDefault();
					var zoomDir = e.deltaY > 0 ? this.props.zoomMultiplier : -this.props.zoomMultiplier;
					var newPos = (0, _utils.mousePosition)(e);
					this.context.onZoom(zoomDir, newPos);
					if (this.props.onZoom) {
						this.props.onZoom(e);
					}
				}
			}
		}, {
			key: "handleMouseMove",
			value: function handleMouseMove(e) {
				if (this.mouseInteraction && this.context.onMouseMove && this.props.mouseMove) {
					if (!this.context.panInProgress) {
						var newPos = (0, _utils.mousePosition)(e);
						this.context.onMouseMove(newPos, "mouse", e);
					}
				}
			}
		}, {
			key: "handleMouseDown",
			value: function handleMouseDown(e) {
				var mouseEvent = e || _d2.default.event;
				var pan = this.props.pan;
				var _context = this.context;
				var onPanStart = _context.onPanStart;
				var focus = _context.focus;
				var onFocus = _context.onFocus;
				var xScale = _context.xScale;
	
				if (this.mouseInteraction && pan && onPanStart) {
					var mouseXY = (0, _utils.mousePosition)(mouseEvent);
	
					var dx = mouseEvent.pageX - mouseXY[0],
					    dy = mouseEvent.pageY - mouseXY[1];
	
					var captureDOM = this.refs.capture;
	
					var win = d3Window(captureDOM);
					_d2.default.select(win).on(mousemove, this.handlePan).on(mouseup, this.handlePanEnd);
	
					onPanStart(xScale.domain(), mouseXY, [dx, dy]);
				} else {
					if (!focus && onFocus) onFocus(true);
				}
				mouseEvent.preventDefault();
			}
		}, {
			key: "handleRightClick",
			value: function handleRightClick(e) {
				e.preventDefault();
				// console.log("RIGHT CLICK");
			}
		}, {
			key: "handlePan",
			value: function handlePan() {
				// console.log("handlePan")
				var _props = this.props;
				var panEnabled = _props.pan;
				var panListener = _props.onPan;
				var _context2 = this.context;
				var dxdy = _context2.deltaXY;
				var xScale = _context2.xScale;
				var onPan = _context2.onPan;
	
	
				var e = _d2.default.event;
				var newPos = [e.pageX - dxdy[0], e.pageY - dxdy[1]];
				// console.log("moved from- ", startXY, " to ", newPos);
				if (this.mouseInteraction && panEnabled && onPan) {
					onPan(newPos, xScale.domain());
					if (panListener) {
						panListener(e);
					}
				}
			}
		}, {
			key: "handlePanEnd",
			value: function handlePanEnd() {
				var e = _d2.default.event;
	
				var panEnabled = this.props.pan;
				var _context3 = this.context;
				var dxdy = _context3.deltaXY;
				var onPanEnd = _context3.onPanEnd;
	
	
				var newPos = [e.pageX - dxdy[0], e.pageY - dxdy[1]];
	
				var captureDOM = this.refs.capture;
	
				var win = d3Window(captureDOM);
	
				if (this.mouseInteraction && panEnabled && onPanEnd) {
					_d2.default.select(win).on(mousemove, null).on(mouseup, null);
					onPanEnd(newPos, e);
				}
				// e.preventDefault();
			}
		}, {
			key: "handleTouchStart",
			value: function handleTouchStart(e) {
				this.mouseInteraction = false;
	
				var panEnabled = this.props.pan;
				var dxdy = this.context.deltaXY;
				var _context4 = this.context;
				var onPanStart = _context4.onPanStart;
				var onMouseMove = _context4.onMouseMove;
				var xScale = _context4.xScale;
				var onPanEnd = _context4.onPanEnd;
				var panInProgress = _context4.panInProgress;
	
	
				if (e.touches.length === 1) {
					var touch = getTouchProps(e.touches[0]);
					this.lastTouch = touch;
					var touchXY = (0, _utils.touchPosition)(touch, e);
					onMouseMove(touchXY, "touch", e);
					if (panEnabled && onPanStart) {
						var dx = touch.pageX - touchXY[0],
						    dy = touch.pageY - touchXY[1];
	
						onPanStart(xScale.domain(), touchXY, [dx, dy]);
					}
				} else if (e.touches.length === 2) {
					// pinch zoom begin
					// do nothing pinch zoom is handled in handleTouchMove
					var touch1 = getTouchProps(e.touches[0]);
	
					if (panInProgress && panEnabled && onPanEnd) {
						// end pan first
						var newPos = [touch1.pageX - dxdy[0], touch1.pageY - dxdy[1]];
						onPanEnd(newPos, e);
						this.lastTouch = null;
					}
				}
	
				if (e.touches.length !== 2) this.initialPinch = null;
				// var newPos = mousePosition(e);
				// console.log("handleTouchStart", e);
				e.preventDefault();
				// e.stopPropagation();
				// this.context.onMouseMove(newPos, e);
			}
		}, {
			key: "handleTouchMove",
			value: function handleTouchMove(e) {
				var _props2 = this.props;
				var panEnabled = _props2.pan;
				var panListener = _props2.onPan;
				var zoomEnabled = _props2.zoom;
				var _context5 = this.context;
				var dxdy = _context5.deltaXY;
				var xScale = _context5.xScale;
				var onPan = _context5.onPan;
				var onPinchZoom = _context5.onPinchZoom;
				var focus = _context5.focus;
				var panInProgress = _context5.panInProgress;
	
	
				if (e.touches.length === 1) {
					// pan
					var touch = this.lastTouch = getTouchProps(e.touches[0]);
	
					var newPos = [touch.pageX - dxdy[0], touch.pageY - dxdy[1]];
					if (panInProgress && panEnabled && onPan) {
						onPan(newPos, xScale.domain());
						if (panListener) {
							panListener(e);
						}
					}
				} else if (e.touches.length === 2) {
					// pinch zoom
					if (zoomEnabled && onPinchZoom && focus) {
						var touch1 = getTouchProps(e.touches[0]);
						var touch2 = getTouchProps(e.touches[1]);
	
						var touch1Pos = (0, _utils.touchPosition)(touch1, e);
						var touch2Pos = (0, _utils.touchPosition)(touch2, e);
	
						if (this.initialPinch === null) {
							this.initialPinch = {
								touch1Pos: touch1Pos,
								touch2Pos: touch2Pos,
								xScale: xScale,
								range: xScale.range()
							};
						} else if (this.initialPinch && !panInProgress) {
							onPinchZoom(this.initialPinch, {
								touch1Pos: touch1Pos,
								touch2Pos: touch2Pos,
								xScale: xScale
							});
						}
					}
				}
				e.preventDefault();
	
				// console.log("handleTouchMove", e);
			}
		}, {
			key: "handleTouchEnd",
			value: function handleTouchEnd(e) {
				// TODO enableMouseInteraction
				var panEnabled = this.props.pan;
				var _context6 = this.context;
				var dxdy = _context6.deltaXY;
				var onPanEnd = _context6.onPanEnd;
				var panInProgress = _context6.panInProgress;
	
	
				if (this.lastTouch) {
					var newPos = [this.lastTouch.pageX - dxdy[0], this.lastTouch.pageY - dxdy[1]];
	
					this.initialPinch = null;
					if (panInProgress && panEnabled && onPanEnd) {
						onPanEnd(newPos, e);
					}
				}
				// console.log("handleTouchEnd", dxdy, newPos, e);
				this.mouseInteraction = true;
				e.preventDefault();
			}
		}, {
			key: "render",
			value: function render() {
				var className = this.context.panInProgress ? "react-stockcharts-grabbing-cursor" : "react-stockcharts-crosshair-cursor";
	
				return _react2.default.createElement("rect", { ref: "capture",
					className: className,
					width: this.context.width, height: this.context.height, style: { opacity: 0 },
					onMouseEnter: this.handleEnter,
					onMouseLeave: this.handleLeave,
					onMouseMove: this.handleMouseMove,
					onWheel: this.handleWheel,
					onMouseDown: this.handleMouseDown,
					onContextMenu: this.handleRightClick,
					onTouchStart: this.handleTouchStart,
					onTouchEnd: this.handleTouchEnd,
					onTouchMove: this.handleTouchMove
				});
			}
		}]);
	
		return EventCapture;
	}(_react.Component);
	
	EventCapture.propTypes = {
		mouseMove: _react.PropTypes.bool.isRequired,
		zoom: _react.PropTypes.bool.isRequired,
		zoomMultiplier: _react.PropTypes.number.isRequired,
		pan: _react.PropTypes.bool.isRequired,
		panSpeedMultiplier: _react.PropTypes.number.isRequired,
		defaultFocus: _react.PropTypes.bool.isRequired,
		useCrossHairStyle: _react.PropTypes.bool.isRequired,
		onZoom: _react.PropTypes.func,
		onPan: _react.PropTypes.func
	};
	
	EventCapture.defaultProps = {
		mouseMove: false,
		zoom: false,
		zoomMultiplier: 1,
		pan: false,
		panSpeedMultiplier: 1,
		defaultFocus: false,
		useCrossHairStyle: true
	
	};
	
	EventCapture.contextTypes = {
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired,
		panInProgress: _react.PropTypes.bool,
		focus: _react.PropTypes.bool.isRequired,
		chartConfig: _react.PropTypes.array,
		xScale: _react.PropTypes.func.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		deltaXY: _react.PropTypes.arrayOf(Number),
	
		onMouseMove: _react.PropTypes.func,
		onMouseEnter: _react.PropTypes.func,
		onMouseLeave: _react.PropTypes.func,
		onZoom: _react.PropTypes.func,
		onPinchZoom: _react.PropTypes.func,
		onPanStart: _react.PropTypes.func,
		onPan: _react.PropTypes.func,
		onPanEnd: _react.PropTypes.func,
		onFocus: _react.PropTypes.func
	};
	
	exports.default = EventCapture;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d2 = __webpack_require__(4);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _PureComponent2 = __webpack_require__(19);
	
	var _PureComponent3 = _interopRequireDefault(_PureComponent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Chart = function (_PureComponent) {
		_inherits(Chart, _PureComponent);
	
		function Chart(props, context) {
			_classCallCheck(this, Chart);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chart).call(this, props, context));
	
			_this.yScale = _this.yScale.bind(_this);
			return _this;
		}
	
		_createClass(Chart, [{
			key: "yScale",
			value: function yScale() {
				var _this2 = this;
	
				var chartConfig = this.context.chartConfig.filter(function (each) {
					return each.id === _this2.props.id;
				})[0];
				return chartConfig.yScale.copy();
			}
		}, {
			key: "getChildContext",
			value: function getChildContext() {
				var chartId = this.props.id;
	
				var chartConfig = this.context.chartConfig.filter(function (each) {
					return each.id === chartId;
				})[0];
	
				var width = chartConfig.width;
				var height = chartConfig.height;
	
				var canvasOriginX = 0.5 + chartConfig.origin[0] + this.context.margin.left;
				var canvasOriginY = 0.5 + chartConfig.origin[1] + this.context.margin.top;
	
				return { chartId: chartId, chartConfig: chartConfig, canvasOriginX: canvasOriginX, canvasOriginY: canvasOriginY, width: width, height: height };
			}
		}, {
			key: "render",
			value: function render() {
				var _this3 = this;
	
				var origin = this.context.chartConfig.filter(function (each) {
					return each.id === _this3.props.id;
				})[0].origin;
	
				var _origin = _slicedToArray(origin, 2);
	
				var x = _origin[0];
				var y = _origin[1];
	
	
				return _react2.default.createElement(
					"g",
					{ transform: "translate(" + x + ", " + y + ")" },
					this.props.children
				);
			}
		}]);
	
		return Chart;
	}(_PureComponent3.default);
	
	Chart.propTypes = {
		height: _react.PropTypes.number,
		width: _react.PropTypes.number,
		origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
		id: _react.PropTypes.number.isRequired,
		yExtents: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
		yScale: _react.PropTypes.func.isRequired,
		yMousePointerDisplayLocation: _react.PropTypes.oneOf(["left", "right"]),
		yMousePointerDisplayFormat: _react.PropTypes.func,
		flipYScale: _react.PropTypes.bool.isRequired,
		padding: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.shape({
			top: _react.PropTypes.number,
			bottom: _react.PropTypes.number
		})]).isRequired
	};
	
	Chart.defaultProps = {
		id: 0,
		origin: [0, 0],
		padding: 0,
		yScale: _d3.default.scale.linear(),
		yMousePointerRectWidth: 60,
		yMousePointerRectHeight: 20,
		flipYScale: false
	};
	
	Chart.contextTypes = {
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired,
		chartConfig: _react.PropTypes.array,
		margin: _react.PropTypes.object.isRequired,
		interactiveState: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object.isRequired,
		mouseXY: _react.PropTypes.array,
		show: _react.PropTypes.bool
	};
	
	// adding here even when this is not used by Chart, refer to https://github.com/facebook/react/issues/2517
	Chart.childContextTypes = {
		height: _react.PropTypes.number,
		width: _react.PropTypes.number,
		chartConfig: _react.PropTypes.object.isRequired,
		canvasOriginX: _react.PropTypes.number,
		canvasOriginY: _react.PropTypes.number,
		chartId: _react.PropTypes.number.isRequired
	};
	
	exports.default = Chart;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _shallowEqual = __webpack_require__(11);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PureComponent = function (_Component) {
		_inherits(PureComponent, _Component);
	
		function PureComponent() {
			_classCallCheck(this, PureComponent);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(PureComponent).apply(this, arguments));
		}
	
		_createClass(PureComponent, [{
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
				return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
			}
		}]);
	
		return PureComponent;
	}(_react.Component);
	
	exports.default = PureComponent;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(5);
	
	var _ChartDataUtil = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var subscriptionCount = 0;
	
	function getDataBetween(fullData, showingInterval, xAccessor, left, right) {
		var dataForInterval = Array.isArray(fullData) ? fullData : fullData[showingInterval];
	
		var newLeftIndex = (0, _utils.getClosestItemIndexes)(dataForInterval, left, xAccessor).right;
		var newRightIndex = (0, _utils.getClosestItemIndexes)(dataForInterval, right, xAccessor).left;
	
		var filteredData = dataForInterval.slice(newLeftIndex, newRightIndex + 1);
	
		return filteredData;
	}
	
	function isLastItemVisible(fullData, plotData) {
		if (Array.isArray(fullData)) {
			return (0, _utils.last)(plotData) === (0, _utils.last)(fullData);
		}
		var visible = false;
		for (var key in fullData) {
			visible = visible || (0, _utils.last)(fullData[key]) === (0, _utils.last)(plotData);
		}
		return visible;
	}
	
	function setXRange(xScale, dimensions, padding) {
		var direction = arguments.length <= 3 || arguments[3] === undefined ? 1 : arguments[3];
	
		if (xScale.rangeRoundPoints) {
			if (isNaN(padding)) throw new Error("padding has to be a number for ordinal scale");
			xScale.rangeRoundPoints([0, dimensions.width], padding);
		} else {
			var _ref = isNaN(padding) ? padding : { left: padding, right: padding };
	
			var left = _ref.left;
			var right = _ref.right;
	
			if (direction > 0) {
				xScale.range([left, dimensions.width - right]);
			} else {
				xScale.range([dimensions.width - right, left]);
			}
		}
		return xScale;
	}
	
	var EventHandler = function (_Component) {
		_inherits(EventHandler, _Component);
	
		function EventHandler(props, context) {
			_classCallCheck(this, EventHandler);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EventHandler).call(this, props, context));
	
			_this.handleMouseMove = _this.handleMouseMove.bind(_this);
			_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
			_this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
			_this.handleZoom = _this.handleZoom.bind(_this);
			_this.handlePinchZoom = _this.handlePinchZoom.bind(_this);
			_this.handlePanStart = _this.handlePanStart.bind(_this);
			_this.handlePan = _this.handlePan.bind(_this);
			_this.handlePanEnd = _this.handlePanEnd.bind(_this);
			_this.handleFocus = _this.handleFocus.bind(_this);
			_this.getCanvasContexts = _this.getCanvasContexts.bind(_this);
			_this.pushCallbackForCanvasDraw = _this.pushCallbackForCanvasDraw.bind(_this);
			_this.getAllCanvasDrawCallback = _this.getAllCanvasDrawCallback.bind(_this);
			_this.subscribe = _this.subscribe.bind(_this);
			_this.unsubscribe = _this.unsubscribe.bind(_this);
			_this.pinchCoordinates = _this.pinchCoordinates.bind(_this);
			_this.setInteractiveState = _this.setInteractiveState.bind(_this);
	
			_this.subscriptions = [];
			_this.canvasDrawCallbackList = [];
			_this.panHappened = false;
			_this.state = {
				focus: false,
				currentItem: {},
				show: false,
				mouseXY: [0, 0],
				panInProgress: false,
				interactiveState: [],
				currentCharts: [],
				receivedProps: 0
			};
			return _this;
		}
	
		_createClass(EventHandler, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				var _props = this.props;
				var plotData = _props.plotData;
				var showingInterval = _props.showingInterval;
				var direction = _props.direction;
				var _props2 = this.props;
				var xScale = _props2.xScale;
				var dimensions = _props2.dimensions;
				var children = _props2.children;
				var postCalculator = _props2.postCalculator;
				var padding = _props2.padding;
	
				// console.log(Array.isArray(fullData) ? fullData[60] : fullData);
	
				plotData = postCalculator(plotData);
				// console.log(last(fullData), last(plotData));
	
				var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)((0, _ChartDataUtil.getNewChartConfig)(dimensions, children), plotData);
	
				this.setState({
					showingInterval: showingInterval,
					xScale: setXRange(xScale, dimensions, padding, direction),
					plotData: plotData,
					chartConfig: chartConfig
				});
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				var plotData = nextProps.plotData;
				var fullData = nextProps.fullData;
				var showingInterval = nextProps.showingInterval;
				var padding = nextProps.padding;
				var direction = nextProps.direction;
				var xScale = nextProps.xScale;
				var xAccessor = nextProps.xAccessor;
				var dimensions = nextProps.dimensions;
				var children = nextProps.children;
				var postCalculator = nextProps.postCalculator;
				var dataAltered = nextProps.dataAltered;
	
	
				var reset = !(0, _utils.shallowEqual)(this.props.plotData, nextProps.plotData);
	
				// console.log(dimensions);
				// if plotData changed - reset the whole chart
				// else update the fullData from props and xScale from state with range updated to state
	
				// console.log("reset: ", reset, dimensions.width);
				// console.log(last(this.props.fullData), last(nextProps.fullData));
				var newState;
				if (reset) {
					if (process.env.NODE_ENV !== "production") {
						console.log("DATA VIEW PORT CHANGED - CHART RESET");
					}
	
					plotData = postCalculator(plotData);
	
					var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)((0, _ChartDataUtil.getNewChartConfig)(dimensions, children), plotData);
	
					newState = {
						showingInterval: showingInterval,
						xScale: setXRange(xScale, dimensions, padding, direction),
						plotData: plotData,
						chartConfig: chartConfig
					};
				} else if (dataAltered && isLastItemVisible(this.props.fullData, this.state.plotData)) {
	
					if (process.env.NODE_ENV !== "production") {
						console.log("DATA CHANGED AND LAST ITEM VISIBLE");
					}
					// if last item was visible, then shift
					var updatedXScale = setXRange(this.state.xScale.copy(), dimensions, padding, direction);
	
					var _state$xScale$domain = this.state.xScale.domain();
	
					var _state$xScale$domain2 = _slicedToArray(_state$xScale$domain, 2);
	
					var start = _state$xScale$domain2[0];
					var end = _state$xScale$domain2[1];
	
					var l = (0, _utils.last)((0, _utils.isDefined)(showingInterval) ? fullData[showingInterval] : fullData);
					if (end >= xAccessor(l)) {
						// get plotData between [start, end] and do not change the domain
						plotData = getDataBetween(fullData, showingInterval, xAccessor, start, end);
					} else {
						// get plotData between [xAccessor(l) - (end - start), xAccessor(l)] and DO change the domain
						var dx = updatedXScale(xAccessor(l)) - updatedXScale.range()[1];
	
						var _updatedXScale$range$ = updatedXScale.range().map(function (x) {
							return x + dx;
						}).map(updatedXScale.invert);
	
						var _updatedXScale$range$2 = _slicedToArray(_updatedXScale$range$, 2);
	
						var newStart = _updatedXScale$range$2[0];
						var newEnd = _updatedXScale$range$2[1];
	
	
						plotData = getDataBetween(fullData, showingInterval, xAccessor, newStart, newEnd);
	
						if (updatedXScale.isPolyLinear && updatedXScale.isPolyLinear() && updatedXScale.data) {
							updatedXScale.data(plotData);
						} else {
							updatedXScale.domain(newStart, newEnd);
						}
					}
					// plotData = getDataOfLength(fullData, showingInterval, plotData.length)
					var _chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)((0, _ChartDataUtil.getNewChartConfig)(dimensions, children), plotData);
	
					newState = {
						xScale: updatedXScale,
						chartConfig: _chartConfig,
						plotData: plotData
					};
				} else {
					console.log("TRIVIAL CHANGE");
					// this.state.plotData or plotData
					var _chartConfig2 = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)((0, _ChartDataUtil.getNewChartConfig)(dimensions, children), this.state.plotData);
	
					newState = {
						xScale: setXRange(this.state.xScale.copy(), dimensions, padding, direction),
						chartConfig: _chartConfig2
					};
				}
	
				if ((0, _utils.isDefined)(newState)) {
					if (!this.state.panInProgress) {
						this.clearBothCanvas(nextProps);
						this.clearInteractiveCanvas(nextProps);
						this.clearCanvasDrawCallbackList();
					}
					this.setState(_extends({}, newState, {
						receivedProps: this.state.receivedProps + 1
					}));
				}
			}
		}, {
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps, nextState) {
				return !(this.state.receivedProps < nextState.receivedProps && this.props.type === "hybrid" && this.state.panInProgress) && !(this.state.panInProgress && this.props.type === "hybrid" && this.state.show !== nextState.show && this.state.receivedPropsOnPanStart < nextState.receivedProps && this.state.receivedProps === nextState.receivedProps);
			}
		}, {
			key: "clearBothCanvas",
			value: function clearBothCanvas(props) {
				props = props || this.props;
				var canvases = props.canvasContexts();
				if (canvases && canvases.axes) {
					// console.log("CLEAR");
					(0, _utils.clearCanvas)([canvases.axes, canvases.mouseCoord]);
				}
			}
		}, {
			key: "clearInteractiveCanvas",
			value: function clearInteractiveCanvas(props) {
				props = props || this.props;
				var canvases = props.canvasContexts();
				if (canvases && canvases.interactive) {
					// console.error("CLEAR");
					(0, _utils.clearCanvas)([canvases.interactive]);
				}
			}
		}, {
			key: "getChildContext",
			value: function getChildContext() {
				var showingInterval = this.state.showingInterval;
				var fullData = this.props.fullData;
	
				return {
					plotData: this.state.plotData,
					data: (0, _utils.isDefined)(showingInterval) ? fullData[showingInterval] : fullData,
					chartConfig: this.state.chartConfig,
					currentCharts: this.state.currentCharts,
					currentItem: this.state.currentItem,
					show: this.state.show,
					mouseXY: this.state.mouseXY,
					interval: this.state.showingInterval,
					width: this.props.dimensions.width,
					height: this.props.dimensions.height,
					chartCanvasType: this.props.type,
					xScale: this.state.xScale,
					xAccessor: this.props.xAccessor,
	
					margin: this.props.margin,
					interactiveState: this.state.interactiveState,
	
					callbackForCanvasDraw: this.pushCallbackForCanvasDraw,
					getAllCanvasDrawCallback: this.getAllCanvasDrawCallback,
					subscribe: this.subscribe,
					unsubscribe: this.unsubscribe,
					setInteractiveState: this.setInteractiveState,
					getCanvasContexts: this.getCanvasContexts,
					onMouseMove: this.handleMouseMove,
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave,
					onZoom: this.handleZoom,
					onPinchZoom: this.handlePinchZoom,
					onPanStart: this.handlePanStart,
					onPan: this.handlePan,
					onPanEnd: this.handlePanEnd,
					onFocus: this.handleFocus,
					deltaXY: this.state.deltaXY,
					panInProgress: this.state.panInProgress,
					focus: this.state.focus
				};
			}
		}, {
			key: "pushCallbackForCanvasDraw",
			value: function pushCallbackForCanvasDraw(findThis, replaceWith) {
				var canvasDrawCallbackList = this.canvasDrawCallbackList;
				// console.log(findThis, canvasDrawCallbackList.length);
	
				if (replaceWith) {
					canvasDrawCallbackList.forEach(function (each, idx) {
						if (each === findThis) {
							canvasDrawCallbackList[idx] = replaceWith;
						}
					});
				} else {
					// console.log(findThis);
					canvasDrawCallbackList.push(findThis);
				}
			}
		}, {
			key: "getAllCanvasDrawCallback",
			value: function getAllCanvasDrawCallback() {
				return this.canvasDrawCallbackList;
			}
		}, {
			key: "subscribe",
			value: function subscribe(forChart, eventType, callback) {
				subscriptionCount++;
	
				this.subscriptions.push({
					forChart: forChart,
					subscriptionId: subscriptionCount,
					eventType: eventType,
					callback: callback
				});
				return subscriptionCount;
			}
		}, {
			key: "unsubscribe",
			value: function unsubscribe(subscriptionId) {
				// console.log(subscriptionId);
				this.subscriptions = this.subscriptions.filter(function (each) {
					return each.subscriptionId === subscriptionId;
				});
			}
		}, {
			key: "getCanvasContexts",
			value: function getCanvasContexts() {
				// console.log(this.state.canvases, this.props.canvasContexts())
				return this.state.canvases || this.props.canvasContexts();
			}
		}, {
			key: "handleMouseEnter",
			value: function handleMouseEnter() {
				// if type === svg remove state.canvases
				// if type !== svg get canvases and set in state if state.canvases is not present already
				/* var { type, canvasContexts } = this.props;
	   var { canvases } = this.state;
	   if (type === "svg") {
	   	canvases = null;
	   } else {
	   	canvases = canvasContexts();
	   }*/
				this.setState({
					show: true
				});
			}
		}, {
			key: "handleMouseMove",
			value: function handleMouseMove(mouseXY, inputType, e) {
				var _state = this.state;
				var chartConfig = _state.chartConfig;
				var plotData = _state.plotData;
				var xScale = _state.xScale;
				var xAccessor = this.props.xAccessor;
	
	
				var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);
	
				var currentItem = (0, _ChartDataUtil.getCurrentItem)(xScale, xAccessor, mouseXY, plotData);
				// optimization oportunity do not change currentItem if it is not the same as prev
	
				var _ref2 = /* , callbackList*/inputType === "mouse" ? this.triggerCallback("mousemove", _extends({}, this.state, { currentItem: currentItem, currentCharts: currentCharts }), this.state.interactiveState, e) : this.triggerCallback("touch", _extends({}, this.state, { currentItem: currentItem, currentCharts: currentCharts }), this.state.interactiveState, e);
	
				var interactiveState = _ref2.interactiveState;
	
	
				var contexts = this.getCanvasContexts();
				if (contexts && contexts.mouseCoord) {
					(0, _utils.clearCanvas)([contexts.mouseCoord]);
					this.clearInteractiveCanvas();
				}
				// console.log(interactiveState === this.state.interactiveState);
				// if (interactiveState !== this.state.interactiveState) this.clearInteractiveCanvas();
	
				this.setState({
					mouseXY: mouseXY,
					currentItem: currentItem,
					currentCharts: currentCharts,
					interactiveState: interactiveState
				});
			}
		}, {
			key: "handleMouseLeave",
			value: function handleMouseLeave() {
				var contexts = this.getCanvasContexts();
	
				this.clearInteractiveCanvas();
	
				if (contexts && contexts.mouseCoord) {
					(0, _utils.clearCanvas)([contexts.mouseCoord]);
				}
				this.setState({
					show: false
				});
			}
		}, {
			key: "pinchCoordinates",
			value: function pinchCoordinates(pinch) {
				var touch1Pos = pinch.touch1Pos;
				var touch2Pos = pinch.touch2Pos;
	
	
				return {
					topLeft: [Math.min(touch1Pos[0], touch2Pos[0]), Math.min(touch1Pos[1], touch2Pos[1])],
					bottomRight: [Math.max(touch1Pos[0], touch2Pos[0]), Math.max(touch1Pos[1], touch2Pos[1])]
				};
			}
		}, {
			key: "handlePinchZoom",
			value: function handlePinchZoom(initialPinch, finalPinch) {
				var _this2 = this;
	
				var initialPinchXScale = initialPinch.xScale;
				var _state2 = this.state;
				var plotData = _state2.plotData;
				var showingInterval = _state2.showingInterval;
				var initialXScale = _state2.xScale;
				var initialChartConfig = _state2.chartConfig;
				var _props3 = this.props;
				var xAccessor = _props3.xAccessor;
				var fullData = _props3.fullData;
				var interval = _props3.interval;
				var width = _props3.dimensions.width;
				var xExtentsCalculator = _props3.xExtentsCalculator;
				var postCalculator = _props3.postCalculator;
	
				var _pinchCoordinates = this.pinchCoordinates(initialPinch);
	
				var iTL = _pinchCoordinates.topLeft;
				var iBR = _pinchCoordinates.bottomRight;
	
				var _pinchCoordinates2 = this.pinchCoordinates(finalPinch);
	
				var fTL = _pinchCoordinates2.topLeft;
				var fBR = _pinchCoordinates2.bottomRight;
	
	
				var e = initialPinchXScale.range()[1];
	
				// var fR1 = e - fTL[0];
				// var fR2 = e - fBR[0];
				// var iR1 = e - iTL[0];
				// var iR2 = e - iBR[0];
	
				var xDash = Math.round(-(iBR[0] * fTL[0] - iTL[0] * fBR[0]) / (iTL[0] - iBR[0]));
				var yDash = Math.round(e + ((e - iBR[0]) * (e - fTL[0]) - (e - iTL[0]) * (e - fBR[0])) / (e - iTL[0] - (e - iBR[0])));
	
				var x = Math.round(-xDash * iTL[0] / (-xDash + fTL[0]));
				var y = Math.round(e - (yDash - e) * (e - iTL[0]) / (yDash + (e - fTL[0])));
	
				// document.getElementById("debug_here").innerHTML = `**${[s, e]} to ${[xDash, yDash]} to ${[x, y]}`;
				// var left = ((final.leftxy[0] - range[0]) / (final.rightxy[0] - final.leftxy[0])) * (initial.right - initial.left);
				// var right = ((range[1] - final.rightxy[0]) / (final.rightxy[0] - final.leftxy[0])) * (initial.right - initial.left);
	
				var newDomain = [x, y].map(initialPinchXScale.invert);
				// var domainR = initial.right + right;
	
				var _xExtentsCalculator$d = xExtentsCalculator.data(fullData).width(width).scale(initialXScale).currentInterval(showingInterval).currentDomain(initialXScale.domain()).currentPlotData(plotData).interval(interval)(newDomain, xAccessor);
	
				var plotData = _xExtentsCalculator$d.plotData;
				var updatedInterval = _xExtentsCalculator$d.interval;
				var updatedScale = _xExtentsCalculator$d.scale;
	
				plotData = postCalculator(plotData);
	
				var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)(initialChartConfig, plotData);
	
				requestAnimationFrame(function () {
					_this2.clearBothCanvas();
					_this2.clearInteractiveCanvas();
	
					_this2.clearCanvasDrawCallbackList();
					_this2.setState({
						chartConfig: chartConfig,
						xScale: updatedScale,
						plotData: plotData,
						showingInterval: updatedInterval
					});
				});
	
				// document.getElementById("debug_here").innerHTML = `${panInProgress}`;
	
				// document.getElementById("debug_here").innerHTML = `${initial.left} - ${initial.right} to ${final.left} - ${final.right}`;
				// document.getElementById("debug_here").innerHTML = `${id[1] - id[0]} = ${initial.left - id[0]} + ${initial.right - initial.left} + ${id[1] - initial.right}`;
				// document.getElementById("debug_here").innerHTML = `${range[1] - range[0]}, ${i1[0]}, ${i2[0]}`;
			}
		}, {
			key: "handleZoom",
			value: function handleZoom(zoomDirection, mouseXY) {
				// console.log("zoomDirection ", zoomDirection, " mouseXY ", mouseXY);
				var _state3 = this.state;
				var plotData = _state3.plotData;
				var showingInterval = _state3.showingInterval;
				var initialXScale = _state3.xScale;
				var initialChartConfig = _state3.chartConfig;
				var currentItem = _state3.currentItem;
				var _props4 = this.props;
				var xAccessor = _props4.xAccessor;
				var fullData = _props4.fullData;
				var interval = _props4.interval;
				var width = _props4.dimensions.width;
				var xExtentsCalculator = _props4.xExtentsCalculator;
				var postCalculator = _props4.postCalculator;
	
	
				var item = (0, _ChartDataUtil.getCurrentItem)(initialXScale, xAccessor, mouseXY, plotData),
				    cx = initialXScale(xAccessor(item)),
				    c = zoomDirection > 0 ? 2 : 0.5,
				    newDomain = initialXScale.range().map(function (x) {
					return cx + (x - cx) * c;
				}).map(initialXScale.invert);
	
				var _xExtentsCalculator$d2 = xExtentsCalculator.data(fullData).width(width).scale(initialXScale).currentInterval(showingInterval).currentDomain(initialXScale.domain()).currentPlotData(plotData).interval(interval)(newDomain, xAccessor);
	
				var plotData = _xExtentsCalculator$d2.plotData;
				var updatedInterval = _xExtentsCalculator$d2.interval;
				var updatedScale = _xExtentsCalculator$d2.scale;
	
	
				plotData = postCalculator(plotData);
				var currentItem = (0, _ChartDataUtil.getCurrentItem)(updatedScale, xAccessor, mouseXY, plotData);
				var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)(initialChartConfig, plotData);
				var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);
				this.clearBothCanvas();
				this.clearInteractiveCanvas();
	
				// console.log(showingInterval, updatedInterval);
				this.clearCanvasDrawCallbackList();
				this.setState({
					xScale: updatedScale,
					showingInterval: updatedInterval,
					plotData: plotData,
					mouseXY: mouseXY,
					currentCharts: currentCharts,
					chartConfig: chartConfig,
					currentItem: currentItem
				}); /**/
			}
		}, {
			key: "handlePanStart",
			value: function handlePanStart(panStartDomain, panOrigin, dxy) {
				// console.log("panStartDomain - ", panStartDomain, ", panOrigin - ", panOrigin);
				this.setState({
					panInProgress: true,
					// panStartDomain: panStartDomain,
					panStartXScale: this.state.xScale,
					panOrigin: panOrigin,
					focus: true,
					deltaXY: dxy, // used in EventCapture
					receivedPropsOnPanStart: this.state.receivedProps
				});
				this.panHappened = false;
			}
		}, {
			key: "panHelper",
			value: function panHelper(mouseXY) {
				var _state4 = this.state;
				var initialXScale = _state4.panStartXScale;
				var initialChartConfig = _state4.chartConfig;
				var _state5 = this.state;
				var showingInterval = _state5.showingInterval;
				var panOrigin = _state5.panOrigin;
				var _props5 = this.props;
				var xAccessor = _props5.xAccessor;
				var width = _props5.dimensions.width;
				var fullData = _props5.fullData;
				var xExtentsCalculator = _props5.xExtentsCalculator;
				var postCalculator = _props5.postCalculator;
	
	
				var dx = mouseXY[0] - panOrigin[0];
	
				if ((0, _utils.isNotDefined)(initialXScale.invert)) throw new Error("xScale provided does not have an invert() method." + "You are likely using an ordinal scale. This scale does not support zoom, pan");
				var newDomain = initialXScale.range().map(function (x) {
					return x - dx;
				}).map(initialXScale.invert);
	
				var _xExtentsCalculator$d3 = xExtentsCalculator.data(fullData).width(width).scale(initialXScale).currentInterval(showingInterval).currentDomain(this.hackyWayToStopPanBeyondBounds__domain).currentPlotData(this.hackyWayToStopPanBeyondBounds__plotData).interval(showingInterval)(newDomain, xAccessor);
	
				var plotData = _xExtentsCalculator$d3.plotData;
				var updatedScale = _xExtentsCalculator$d3.scale;
	
	
				plotData = postCalculator(plotData);
				// console.log(last(plotData));
				var currentItem = (0, _ChartDataUtil.getCurrentItem)(updatedScale, xAccessor, mouseXY, plotData);
				var chartConfig = (0, _ChartDataUtil.getChartConfigWithUpdatedYScales)(initialChartConfig, plotData);
				var currentCharts = (0, _ChartDataUtil.getCurrentCharts)(chartConfig, mouseXY);
	
				return {
					xScale: updatedScale,
					plotData: plotData,
					mouseXY: mouseXY,
					currentCharts: currentCharts,
					chartConfig: chartConfig,
					currentItem: currentItem
				};
			}
		}, {
			key: "handlePan",
			value: function handlePan(mousePosition /* , startDomain*/) {
				var _this3 = this;
	
				this.panHappened = true;
				var state = this.panHelper(mousePosition);
	
				this.hackyWayToStopPanBeyondBounds__plotData = state.plotData;
				this.hackyWayToStopPanBeyondBounds__domain = state.xScale.domain();
	
				if (this.props.type !== "svg") {
					var _getCanvasContexts = this.getCanvasContexts();
	
					var axesCanvasContext = _getCanvasContexts.axes;
					var mouseContext = _getCanvasContexts.mouseCoord;
					var mouseXY = state.mouseXY;
					var chartConfig = state.chartConfig;
					var plotData = state.plotData;
					var currentItem = state.currentItem;
					var xScale = state.xScale;
					var currentCharts = state.currentCharts;
					var show = this.state.show;
					var canvasDrawCallbackList = this.canvasDrawCallbackList;
	
	
					requestAnimationFrame(function () {
						// this.clearCanvas([axesCanvasContext, mouseContext]);
						// this.clearCanvas([axesCanvasContext, mouseContext]);
						_this3.clearBothCanvas();
						_this3.clearInteractiveCanvas();
	
						// console.log(canvasDrawCallbackList.length)
	
						chartConfig.forEach(function (eachChart) {
							canvasDrawCallbackList.filter(function (each) {
								return eachChart.id === each.chartId;
							}).forEach(function (each) {
								var yScale = eachChart.yScale;
	
	
								if (each.type === "axis") {
									each.draw(axesCanvasContext, xScale, yScale);
								} else if (each.type === "currentcoordinate") {
									each.draw(mouseContext, show, xScale, yScale, currentItem);
								} else if (each.type !== "interactive") {
									each.draw(axesCanvasContext, xScale, yScale, plotData);
								}
							});
						});
						_this3.drawInteractive(state);
						canvasDrawCallbackList.filter(function (each) {
							return (0, _utils.isNotDefined)(each.chartId);
						}).filter(function (each) {
							return each.type === "axis";
						}).forEach(function (each) {
							return each.draw(axesCanvasContext, chartConfig);
						});
	
						canvasDrawCallbackList.filter(function (each) {
							return each.type === "mouse";
						}).forEach(function (each) {
							return each.draw(mouseContext, show, xScale, mouseXY, currentCharts, chartConfig, currentItem);
						});
					});
				} else {
					this.setState(state);
				}
			}
		}, {
			key: "drawInteractive",
			value: function drawInteractive(_ref3) {
				var plotData = _ref3.plotData;
				var chartConfig = _ref3.chartConfig;
				var xScale = _ref3.xScale;
	
				var _getCanvasContexts2 = this.getCanvasContexts();
	
				var interactive = _getCanvasContexts2.interactive;
	
	
				this.canvasDrawCallbackList.filter(function (each) {
					return each.type === "interactive";
				}).forEach(function (each) {
					chartConfig.filter(function (eachChart) {
						return eachChart.id === each.chartId;
					}).forEach(function (eachChart) {
						each.draw(interactive, { xScale: xScale, plotData: plotData, chartConfig: eachChart });
						// console.log("DRAW");
					});
				});
			}
		}, {
			key: "clearCanvasDrawCallbackList",
			value: function clearCanvasDrawCallbackList() {
				this.canvasDrawCallbackList = [];
			}
		}, {
			key: "handlePanEnd",
			value: function handlePanEnd(mousePosition, e) {
				var state = this.panHelper(mousePosition);
				// console.log(this.canvasDrawCallbackList.map(d => d.type));
				this.hackyWayToStopPanBeyondBounds__plotData = null;
				this.hackyWayToStopPanBeyondBounds__domain = null;
	
				this.clearCanvasDrawCallbackList();
	
				var _ref4 = this.panHappened ? this.triggerCallback("panend", state, this.state.interactiveState, e) : this.triggerCallback("click", state, this.state.interactiveState, e);
	
				var interactiveState = _ref4.interactiveState;
				var callbackList = _ref4.callbackList;
	
	
				this.clearBothCanvas();
				if (interactiveState !== this.state.interactive) this.clearInteractiveCanvas();
	
				// console.log(interactiveState[0].interactive);
				this.setState(_extends({}, state, {
					show: this.state.show,
					panInProgress: false,
					panStartXScale: null,
					interactiveState: interactiveState
				}), function () {
					if ((0, _utils.isDefined)(callbackList)) callbackList.forEach(function (callback) {
						return callback();
					});
				});
			}
		}, {
			key: "setInteractiveState",
			value: function setInteractiveState(interactiveState) {
				this.clearInteractiveCanvas();
	
				this.setState({
					interactiveState: interactiveState
				});
			}
		}, {
			key: "triggerCallback",
			value: function triggerCallback(eventType, state, interactiveState, event) {
				var currentCharts = state.currentCharts;
				var chartConfig = state.chartConfig;
	
				var subscribers = this.subscriptions.filter(function (each) {
					return each.eventType === eventType;
				});
				var delta = subscribers.map(function (each) {
					var singleChartConfig = chartConfig.filter(function (eachItem) {
						return eachItem.id === each.forChart;
					})[0];
					return {
						callback: each.callback,
						forChart: each.forChart,
						chartConfig: singleChartConfig
					};
				}).filter(function (each) {
					return currentCharts.indexOf(each.forChart) >= -1;
				}).map(function (_ref5) {
					var callback = _ref5.callback;
					var chartConfig = _ref5.chartConfig;
					return callback(_extends({}, state, { chartConfig: chartConfig }), event);
				}).filter(function (each) {
					return each !== false;
				});
	
				// console.log(delta);
				if (delta.length === 0) return { interactiveState: interactiveState };
	
				var i = 0,
				    j = 0,
				    added = false;
				var newInteractiveState = interactiveState.slice(0);
				var callbackList = [];
				for (i = 0; i < delta.length; i++) {
					var each = delta[i];
					for (j = 0; j < newInteractiveState.length; j++) {
						if (each.id === newInteractiveState[j].id) {
							newInteractiveState[j] = { id: each.id, interactive: each.interactive };
							if (each.callback) callbackList.push(each.callback);
							added = true;
						}
					}
					if (!added) newInteractiveState.push(each);
					added = false;
				}
				return { interactiveState: newInteractiveState, callbackList: callbackList };
			}
		}, {
			key: "handleFocus",
			value: function handleFocus(focus) {
				// console.log(focus);interactive
				this.setState({
					focus: focus
				});
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"g",
					null,
					this.props.children
				);
			}
		}]);
	
		return EventHandler;
	}(_react.Component);
	
	EventHandler.propTypes = {
		children: _react.PropTypes.node.isRequired,
		type: _react.PropTypes.oneOf(["svg", "hybrid"]).isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func.isRequired,
		fullData: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]).isRequired,
		interval: _react.PropTypes.string,
		dimensions: _react.PropTypes.object,
		xExtentsCalculator: _react.PropTypes.func.isRequired,
		postCalculator: _react.PropTypes.func.isRequired,
		canvasContexts: _react.PropTypes.func.isRequired,
		margin: _react.PropTypes.object.isRequired,
		plotData: _react.PropTypes.array,
		padding: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.shape({
			left: _react.PropTypes.number,
			right: _react.PropTypes.number
		})]).isRequired,
		direction: _react.PropTypes.oneOf([-1, 1]).isRequired,
		showingInterval: _react.PropTypes.string
	};
	
	EventHandler.childContextTypes = {
		plotData: _react.PropTypes.array,
		data: _react.PropTypes.array,
		chartConfig: _react.PropTypes.arrayOf(_react.PropTypes.shape({
			id: _react.PropTypes.number.isRequired,
			origin: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
			padding: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.shape({
				top: _react.PropTypes.number,
				bottom: _react.PropTypes.number
			})]),
			yExtents: _react.PropTypes.arrayOf(_react.PropTypes.func).isRequired,
			yScale: _react.PropTypes.func.isRequired,
			mouseCoordinates: _react.PropTypes.shape({
				at: _react.PropTypes.string,
				format: _react.PropTypes.func
			}),
			width: _react.PropTypes.number.isRequired,
			height: _react.PropTypes.number.isRequired
		})).isRequired,
		xScale: _react.PropTypes.func.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		currentItem: _react.PropTypes.object,
		show: _react.PropTypes.bool,
		mouseXY: _react.PropTypes.array,
		interval: _react.PropTypes.string,
		currentCharts: _react.PropTypes.array,
		mainChart: _react.PropTypes.number,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired,
		chartCanvasType: _react.PropTypes.oneOf(["svg", "hybrid"]).isRequired,
		dateAccessor: _react.PropTypes.func,
	
		margin: _react.PropTypes.object.isRequired,
		dataTransform: _react.PropTypes.array,
		interactiveState: _react.PropTypes.array.isRequired,
	
		subscribe: _react.PropTypes.func,
		unsubscribe: _react.PropTypes.func,
		setInteractiveState: _react.PropTypes.func,
		callbackForCanvasDraw: _react.PropTypes.func,
		getAllCanvasDrawCallback: _react.PropTypes.func,
		getCanvasContexts: _react.PropTypes.func,
		onMouseMove: _react.PropTypes.func,
		onMouseEnter: _react.PropTypes.func,
		onMouseLeave: _react.PropTypes.func,
		onZoom: _react.PropTypes.func,
		onPinchZoom: _react.PropTypes.func,
		onPanStart: _react.PropTypes.func,
		onPan: _react.PropTypes.func,
		onPanEnd: _react.PropTypes.func,
		panInProgress: _react.PropTypes.bool.isRequired,
		focus: _react.PropTypes.bool.isRequired,
		onFocus: _react.PropTypes.func,
		deltaXY: _react.PropTypes.arrayOf(Number)
	};
	
	exports.default = EventHandler;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CanvasContainer = function (_Component) {
		_inherits(CanvasContainer, _Component);
	
		function CanvasContainer() {
			_classCallCheck(this, CanvasContainer);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(CanvasContainer).apply(this, arguments));
		}
	
		_createClass(CanvasContainer, [{
			key: "getCanvasContexts",
			value: function getCanvasContexts() {
				var _refs = this.refs;
				var axesCanvasDOM = _refs.canvas_axes;
				var mouseCoordDOM = _refs.canvas_mouse_coordinates;
				var interactiveDOM = _refs.canvas_interactive;
				var bgDOM = _refs.bg;
	
	
				if (this.refs.canvas_axes) {
					return {
						axes: axesCanvasDOM.getContext("2d"),
						mouseCoord: mouseCoordDOM.getContext("2d"),
						interactive: interactiveDOM.getContext("2d"),
						bg: bgDOM.getContext("2d")
					};
				}
			}
		}, {
			key: "render",
			value: function render() {
				var _props = this.props;
				var height = _props.height;
				var width = _props.width;
				var type = _props.type;
				var zIndex = _props.zIndex;
	
				if (type === "svg") return null;
				return _react2.default.createElement(
					"div",
					{ style: { zIndex: zIndex } },
					_react2.default.createElement("canvas", { ref: "bg", width: width, height: height,
						style: { position: "absolute", left: 0, top: 0 } }),
					_react2.default.createElement("canvas", { ref: "canvas_axes", width: width, height: height,
						style: { position: "absolute", left: 0, top: 0 } }),
					_react2.default.createElement("canvas", { ref: "canvas_mouse_coordinates", width: width, height: height,
						style: { position: "absolute", left: 0, top: 0 } }),
					_react2.default.createElement("canvas", { ref: "canvas_interactive", width: width, height: height,
						style: { position: "absolute", left: 0, top: 0 } })
				);
			}
		}]);
	
		return CanvasContainer;
	}(_react.Component);
	
	CanvasContainer.propTypes = {
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired,
		type: _react.PropTypes.string.isRequired,
		zIndex: _react.PropTypes.number
	};
	
	exports.default = CanvasContainer;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function () {
	
		var allowedIntervals = ["D", "W", "M"],
		    doIt = false;
	
		function calculator(data) {
			var eodMarker = (0, _financeEODCalculator2.default)().dateAccessor(function (d) {
				return d.date;
			});
	
			if ((0, _utils.isNotDefined)(allowedIntervals)) return doIt ? eodMarker(data) : data;
	
			var D = eodMarker(data);
	
			// console.log(data.length, D.length, W.length, M.length);
			if ((0, _utils.isArray)(allowedIntervals)) {
				var response = {};
				if (allowedIntervals.indexOf("D") > -1) response.D = D;
				if (allowedIntervals.indexOf("W") > -1) {
					var W = weeklyData(D);
					response.W = W;
				}
				if (allowedIntervals.indexOf("M") > -1) {
					var M = monthlyData(D);
					response.M = M;
				}
				return response;
			}
			return D;
		}
		calculator.allowedIntervals = function (x) {
			if (!arguments.length) return allowedIntervals;
			allowedIntervals = x;
			return calculator;
		};
		calculator.doIt = function (x) {
			if (!arguments.length) return doIt;
			doIt = x;
			return calculator;
		};
		return calculator;
	};
	
	var _financeEODCalculator = __webpack_require__(23);
	
	var _financeEODCalculator2 = _interopRequireDefault(_financeEODCalculator);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function accumulator(predicate) {
		return (0, _utils.accumulatingWindow)().accumulateTill(predicate).accumulator(function (values) {
			var open = (0, _utils.first)(values).open;
			var close = (0, _utils.last)(values).close;
	
			var rest = values.reduce(function (a, b) {
				var high = Math.max(a.high, b.high);
				var low = Math.min(a.low, b.low);
	
				var startOfWeek = a.startOfWeek || b.startOfWeek;
				var startOfMonth = a.startOfMonth || b.startOfMonth;
				var startOfQuarter = a.startOfQuarter || b.startOfQuarter;
				var startOfYear = a.startOfYear || b.startOfYear;
	
				var volume = a.volume + b.volume;
				var row = { high: high, low: low, volume: volume, startOfWeek: startOfWeek, startOfMonth: startOfMonth, startOfQuarter: startOfQuarter, startOfYear: startOfYear };
				return row;
			});
	
			return _extends({}, (0, _utils.last)(values), { open: open, close: close }, rest);
		});
	}
	
	function weeklyData(data) {
		return accumulator(function (d) {
			return d.startOfWeek;
		})(data);
	}
	
	function monthlyData(data) {
		return accumulator(function (d) {
			return d.startOfMonth;
		})(data);
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function () {
		var dateAccessor = function dateAccessor(d) {
			return d.date;
		};
	
		function calculator(data) {
			var eodScaleCalculator = (0, _utils.slidingWindow)().windowSize(2).undefinedValue(function (d) {
				var row = _extends({}, d, { startOfWeek: false, startOfMonth: false, startOfQuarter: false, startOfYear: false });
				return row;
			}).accumulator(function (_ref) {
				var _ref2 = _slicedToArray(_ref, 2);
	
				var prev = _ref2[0];
				var now = _ref2[1];
	
				var prevDate = dateAccessor(prev);
				var nowDate = dateAccessor(now);
	
				// According to ISO calendar
				// Sunday = 0, Monday = 1, ... Saturday = 6
				// day of week of today < day of week of yesterday then today is start of week
				var startOfWeek = nowDate.getDay() < prevDate.getDay();
				// month of today != month of yesterday then today is start of month
				var startOfMonth = nowDate.getMonth() !== prevDate.getMonth();
				// if start of month and month % 3 === 0 then it is start of quarter
				var startOfQuarter = startOfMonth && nowDate.getMonth() % 3 === 0;
				// year of today != year of yesterday then today is start of year
				var startOfYear = nowDate.getYear() !== prevDate.getYear();
	
				var row = _extends({}, now, { startOfWeek: startOfWeek, startOfMonth: startOfMonth, startOfQuarter: startOfQuarter, startOfYear: startOfYear });
				return row;
			});
			var newData = eodScaleCalculator(data);
			return newData;
		}
		calculator.dateAccessor = function (x) {
			if (!arguments.length) {
				return dateAccessor;
			}
			dateAccessor = x;
			return calculator;
		};
		return calculator;
	};
	
	var _utils = __webpack_require__(5);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
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
	
	var _utils = __webpack_require__(5);
	
	var _eodIntervalCalculator = __webpack_require__(22);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PureComponent2 = __webpack_require__(19);
	
	var _PureComponent3 = _interopRequireDefault(_PureComponent2);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BackgroundText = function (_PureComponent) {
		_inherits(BackgroundText, _PureComponent);
	
		function BackgroundText() {
			_classCallCheck(this, BackgroundText);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(BackgroundText).apply(this, arguments));
		}
	
		_createClass(BackgroundText, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				if (this.context.chartCanvasType !== "svg" && (0, _utils.isDefined)(this.context.getCanvasContexts)) {
					var contexts = this.context.getCanvasContexts();
					if (contexts) BackgroundText.drawOnCanvas(contexts.bg, this.props, this.context, this.props.children);
				}
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				this.componentDidMount();
			}
		}, {
			key: "render",
			value: function render() {
				var chartCanvasType = this.context.chartCanvasType;
	
	
				if (chartCanvasType !== "svg") return null;
	
				var _props = this.props;
				var x = _props.x;
				var y = _props.y;
				var fill = _props.fill;
				var opacity = _props.opacity;
				var stroke = _props.stroke;
				var strokeOpacity = _props.strokeOpacity;
				var fontFamily = _props.fontFamily;
				var fontSize = _props.fontSize;
				var textAnchor = _props.textAnchor;
	
				var props = { x: x, y: y, fill: fill, opacity: opacity, stroke: stroke, strokeOpacity: strokeOpacity, fontFamily: fontFamily, fontSize: fontSize, textAnchor: textAnchor };
				return _react2.default.createElement(
					"text",
					props,
					"this.props.children(interval)"
				);
			}
		}]);
	
		return BackgroundText;
	}(_PureComponent3.default);
	
	BackgroundText.drawOnCanvas = function (ctx, props, _ref, getText) {
		var interval = _ref.interval;
	
		ctx.clearRect(-1, -1, ctx.canvas.width + 2, ctx.canvas.height + 2);
		ctx.save();
	
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(0.5, 0.5);
	
		var x = props.x;
		var y = props.y;
		var fill = props.fill;
		var opacity = props.opacity;
		var stroke = props.stroke;
		var strokeOpacity = props.strokeOpacity;
		var fontFamily = props.fontFamily;
		var fontSize = props.fontSize;
		var textAnchor = props.textAnchor;
	
	
		var text = getText(interval);
	
		ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, strokeOpacity);
	
		ctx.font = fontSize + "px " + fontFamily;
		ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
		ctx.textAlign = textAnchor === "middle" ? "center" : textAnchor;
	
		if (stroke !== "none") ctx.strokeText(text, x, y);
		ctx.fillText(text, x, y);
	
		ctx.restore();
	};
	
	BackgroundText.propTypes = {
		x: _react.PropTypes.number.isRequired,
		y: _react.PropTypes.number.isRequired,
		fontFamily: _react.PropTypes.string,
		fontSize: _react.PropTypes.number.isRequired
	};
	
	BackgroundText.defaultProps = {
		opacity: 0.3,
		fill: "#9E7523",
		stroke: "#9E7523",
		strokeOpacity: 1,
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: 12,
		textAnchor: "middle"
	};
	
	BackgroundText.contextTypes = {
		interval: _react.PropTypes.string.isRequired,
		getCanvasContexts: _react.PropTypes.func,
		chartCanvasType: _react.PropTypes.string
	};
	
	exports.default = BackgroundText;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.wrap = exports.StraightLine = exports.Line = exports.Area = exports.ElderRaySeries = exports.StochasticSeries = exports.RSISeries = exports.BollingerSeries = exports.MACDSeries = exports.RenkoSeries = exports.PointAndFigureSeries = exports.KagiSeries = exports.GroupedBarSeries = exports.StackedBarSeries = exports.BarSeries = exports.OHLCSeries = exports.CandlestickSeries = exports.LineSeries = exports.AreaSeries = exports.CircleMarker = exports.ScatterSeries = undefined;
	
	var _AreaSeries = __webpack_require__(27);
	
	var _AreaSeries2 = _interopRequireDefault(_AreaSeries);
	
	var _ScatterSeries = __webpack_require__(32);
	
	var _ScatterSeries2 = _interopRequireDefault(_ScatterSeries);
	
	var _CircleMarker = __webpack_require__(33);
	
	var _CircleMarker2 = _interopRequireDefault(_CircleMarker);
	
	var _LineSeries = __webpack_require__(34);
	
	var _LineSeries2 = _interopRequireDefault(_LineSeries);
	
	var _CandlestickSeries = __webpack_require__(35);
	
	var _CandlestickSeries2 = _interopRequireDefault(_CandlestickSeries);
	
	var _OHLCSeries = __webpack_require__(36);
	
	var _OHLCSeries2 = _interopRequireDefault(_OHLCSeries);
	
	var _BarSeries = __webpack_require__(37);
	
	var _BarSeries2 = _interopRequireDefault(_BarSeries);
	
	var _StackedBarSeries = __webpack_require__(38);
	
	var _StackedBarSeries2 = _interopRequireDefault(_StackedBarSeries);
	
	var _GroupedBarSeries = __webpack_require__(39);
	
	var _GroupedBarSeries2 = _interopRequireDefault(_GroupedBarSeries);
	
	var _KagiSeries = __webpack_require__(40);
	
	var _KagiSeries2 = _interopRequireDefault(_KagiSeries);
	
	var _PointAndFigureSeries = __webpack_require__(41);
	
	var _PointAndFigureSeries2 = _interopRequireDefault(_PointAndFigureSeries);
	
	var _RenkoSeries = __webpack_require__(42);
	
	var _RenkoSeries2 = _interopRequireDefault(_RenkoSeries);
	
	var _MACDSeries = __webpack_require__(43);
	
	var _MACDSeries2 = _interopRequireDefault(_MACDSeries);
	
	var _BollingerSeries = __webpack_require__(45);
	
	var _BollingerSeries2 = _interopRequireDefault(_BollingerSeries);
	
	var _RSISeries = __webpack_require__(46);
	
	var _RSISeries2 = _interopRequireDefault(_RSISeries);
	
	var _StochasticSeries = __webpack_require__(47);
	
	var _StochasticSeries2 = _interopRequireDefault(_StochasticSeries);
	
	var _ElderRaySeries = __webpack_require__(48);
	
	var _ElderRaySeries2 = _interopRequireDefault(_ElderRaySeries);
	
	var _Area = __webpack_require__(31);
	
	var _Area2 = _interopRequireDefault(_Area);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(44);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import ElderImpulseBackground from "./ElderImpulseBackground";
	
	exports.ScatterSeries = _ScatterSeries2.default;
	exports.CircleMarker = _CircleMarker2.default;
	exports.AreaSeries = _AreaSeries2.default;
	exports.LineSeries = _LineSeries2.default;
	exports.CandlestickSeries = _CandlestickSeries2.default;
	exports.OHLCSeries = _OHLCSeries2.default;
	exports.BarSeries = _BarSeries2.default;
	exports.StackedBarSeries = _StackedBarSeries2.default;
	exports.GroupedBarSeries = _GroupedBarSeries2.default;
	exports.KagiSeries = _KagiSeries2.default;
	exports.PointAndFigureSeries = _PointAndFigureSeries2.default;
	exports.RenkoSeries = _RenkoSeries2.default;
	exports.MACDSeries = _MACDSeries2.default;
	exports.BollingerSeries = _BollingerSeries2.default;
	exports.RSISeries = _RSISeries2.default;
	exports.StochasticSeries = _StochasticSeries2.default;
	exports.ElderRaySeries = _ElderRaySeries2.default;
	exports.Area = _Area2.default;
	exports.Line = _Line2.default;
	exports.StraightLine = _StraightLine2.default;
	exports.wrap = _wrap2.default;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _Area = __webpack_require__(31);
	
	var _Area2 = _interopRequireDefault(_Area);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AreaSeries = function (_Component) {
		_inherits(AreaSeries, _Component);
	
		function AreaSeries() {
			_classCallCheck(this, AreaSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(AreaSeries).apply(this, arguments));
		}
	
		_createClass(AreaSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var className = props.className;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var type = props.type;
				var stroke = props.stroke;
				var fill = props.fill;
				var baseAt = props.baseAt;
				var opacity = props.opacity;
	
	
				return _react2.default.createElement(
					"g",
					{ className: className },
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: yAccessor,
						plotData: plotData,
						stroke: stroke, fill: "none",
						type: type }),
					_react2.default.createElement(_Area2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: yAccessor,
						plotData: plotData,
						base: baseAt,
						stroke: "none", fill: fill, opacity: opacity,
						type: type })
				);
			}
		}]);
	
		return AreaSeries;
	}(_react.Component);
	
	AreaSeries.propTypes = {
		stroke: _react.PropTypes.string,
		fill: _react.PropTypes.string.isRequired,
		opacity: _react.PropTypes.number.isRequired,
		className: _react.PropTypes.string
	};
	
	AreaSeries.defaultProps = {
		stroke: "#4682B4",
		opacity: 0.5,
		fill: "#4682B4",
		className: "react-stockcharts-area"
	};
	
	AreaSeries.yAccessor = function (d) {
		return d.close;
	};
	
	exports.default = (0, _wrap2.default)(AreaSeries);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Line = function (_Component) {
		_inherits(Line, _Component);
	
		function Line() {
			_classCallCheck(this, Line);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Line).apply(this, arguments));
		}
	
		_createClass(Line, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var stroke = _props.stroke;
				var fill = _props.fill;
				var className = _props.className;
	
	
				className = className.concat(stroke ? "" : " line-stroke");
				return _react2.default.createElement("path", { d: Line.getPath(this.props), stroke: stroke, fill: fill, className: className });
			}
		}]);
	
		return Line;
	}(_react.Component);
	
	Line.propTypes = {
		className: _react.PropTypes.string,
		xScale: _react.PropTypes.func.isRequired,
		yScale: _react.PropTypes.func.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		yAccessor: _react.PropTypes.func.isRequired,
		plotData: _react.PropTypes.array.isRequired,
		stroke: _react.PropTypes.string,
		fill: _react.PropTypes.string
	};
	
	Line.defaultProps = {
		className: "line ",
		fill: "none",
		stroke: "black",
		defined: function defined(d) {
			return !isNaN(d);
		}
	};
	
	Line.getPath = function (props) {
		var plotData = props.plotData;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var defined = props.defined;
	
	
		var dataSeries = _d2.default.svg.line().defined(function (d) {
			return defined(yAccessor(d));
		}).x(function (d) {
			return xScale(xAccessor(d));
		}).y(function (d) {
			return yScale(yAccessor(d));
		});
		return dataSeries(plotData);
	};
	
	function segment(points, ctx) {
		ctx.beginPath();
	
		var _first = (0, _utils.first)(points);
	
		var _first2 = _slicedToArray(_first, 2);
	
		var x = _first2[0];
		var y = _first2[1];
	
		ctx.moveTo(x, y);
		for (var i = 1; i < points.length; i++) {
			var _points$i = _slicedToArray(points[i], 2);
	
			var x1 = _points$i[0];
			var y1 = _points$i[1];
	
			ctx.lineTo(x1, y1);
		};
	
		ctx.stroke();
	};
	
	Line.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var stroke = props.stroke;
		var defined = props.defined;
	
	
		ctx.strokeStyle = stroke;
	
		var points = [];
		for (var i = 0; i < plotData.length; i++) {
			var d = plotData[i];
			if (defined(yAccessor(d), i)) {
				var x = xScale(xAccessor(d));
				var y = yScale(yAccessor(d));
	
	
				points.push([x, y]);
			} else if (points.length) {
				segment(points, ctx);
				points = [];
			}
		}
	
		if (points.length) segment(points, ctx);
	};
	
	exports.default = (0, _wrap2.default)(Line);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(30);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _utils = __webpack_require__(5);
	
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

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getDisplayName(Series) {
		var name = Series.displayName || Series.name || "Series";
		return name;
	}
	
	function pure(PureSeries, contextShape) {
		var ignorePropKeys = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	
		var PureCanvasSeries = function (_Component) {
			_inherits(PureCanvasSeries, _Component);
	
			function PureCanvasSeries() {
				_classCallCheck(this, PureCanvasSeries);
	
				return _possibleConstructorReturn(this, Object.getPrototypeOf(PureCanvasSeries).apply(this, arguments));
			}
	
			_createClass(PureCanvasSeries, [{
				key: "shouldComponentUpdate",
				value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
					return !(0, _utils.shallowEqual)(this.props, nextProps) || !(0, _utils.shallowEqual)(this.state, nextState) || !(0, _utils.shallowEqual)(this.context, nextContext);
				}
			}, {
				key: "getWrappedComponent",
				value: function getWrappedComponent() {
					return this.refs.pureSeries;
				}
			}, {
				key: "render",
				value: function render() {
					var _this2 = this;
	
					var ctx = {};
					Object.keys(this.context).filter(function (key) {
						return ignorePropKeys.indexOf(key) === -1;
					}).forEach(function (key) {
						ctx[key] = _this2.context[key];
					});
	
					return _react2.default.createElement(PureSeries, _extends({ ref: "pureSeries"
					}, ctx, this.props));
				}
			}]);
	
			return PureCanvasSeries;
		}(_react.Component);
	
		;
	
		PureCanvasSeries.displayName = "pure(" + getDisplayName(PureSeries) + ")";
	
		PureCanvasSeries.contextTypes = contextShape;
	
		var defaultProps = {};
	
		if (PureSeries.defaultProps) {
			Object.keys(PureSeries.defaultProps).forEach(function (key) {
				defaultProps[key] = PureSeries.defaultProps[key];
			});
			PureCanvasSeries.defaultProps = defaultProps;
		}
	
		/* Object.keys(PureSeries)
	 	.filter((key) => key !== "propTypes")
	 	.filter(key => key !== "defaultProps")
	 	.filter(key => key !== "displayName")
	 	.filter(key => key !== "contextTypes")
	 	.filter(key => key !== "childContextTypes")
	 	.forEach(key => PureCanvasSeries[key] = PureSeries[key]);*/
	
		// console.log(Object.keys(PureCanvasSeries))
		return PureCanvasSeries;
	}
	
	exports.default = pure;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Area = function (_Component) {
		_inherits(Area, _Component);
	
		function Area() {
			_classCallCheck(this, Area);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Area).apply(this, arguments));
		}
	
		_createClass(Area, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var stroke = props.stroke;
				var fill = props.fill;
				var className = props.className;
				var opacity = props.opacity;
	
	
				className = className.concat((0, _utils.isDefined)(stroke) ? "" : " line-stroke");
				return _react2.default.createElement("path", { d: Area.getArea(props), stroke: stroke, fill: fill, className: className, opacity: opacity });
			}
		}]);
	
		return Area;
	}(_react.Component);
	
	;
	
	Area.propTypes = {
		className: _react.PropTypes.string,
		xScale: _react.PropTypes.func.isRequired,
		yScale: _react.PropTypes.func.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		yAccessor: _react.PropTypes.func.isRequired,
		plotData: _react.PropTypes.array.isRequired,
		stroke: _react.PropTypes.string,
		fill: _react.PropTypes.string,
		opacity: _react.PropTypes.number,
		base: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number])
	};
	
	Area.defaultProps = {
		className: "line ",
		fill: "none",
		opacity: 1,
		defined: function defined(d) {
			return !isNaN(d);
		},
		base: function base(yScale /* , d*/) {
			return (0, _utils.first)(yScale.range());
		}
	};
	Area.getArea = function (props) {
		var plotData = props.plotData;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var base = props.base;
		var defined = props.defined;
	
		var newBase = _d2.default.functor(base);
	
		var areaSeries = _d2.default.svg.area().defined(function (d) {
			return defined(yAccessor(d));
		}).x(function (d) {
			return xScale(xAccessor(d));
		}).y0(newBase.bind(null, yScale)).y1(function (d) {
			return yScale(yAccessor(d));
		});
	
		// console.log("HERE", yAccessor(plotData[0]));
		return areaSeries(plotData);
	};
	
	function segment(points0, points1, ctx) {
		ctx.beginPath();
	
		var _first = (0, _utils.first)(points0);
	
		var _first2 = _slicedToArray(_first, 2);
	
		var x0 = _first2[0];
		var y0 = _first2[1];
	
		ctx.moveTo(x0, y0);
	
		var i;
		for (i = 0; i < points1.length; i++) {
			var _points1$i = _slicedToArray(points1[i], 2);
	
			var x1 = _points1$i[0];
			var y1 = _points1$i[1];
	
			ctx.lineTo(x1, y1);
		};
	
		for (i = points0.length - 1; i >= 0; i--) {
			var _points0$i = _slicedToArray(points0[i], 2);
	
			var _x = _points0$i[0];
			var _y = _points0$i[1];
	
			ctx.lineTo(_x, _y);
		};
		ctx.closePath();
		ctx.fill();
	};
	
	Area.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var fill = props.fill;
		var stroke = props.stroke;
		var opacity = props.opacity;
		var base = props.base;
		var defined = props.defined;
		// var height = yScale.range()[0];
	
		var newBase = _d2.default.functor(base);
	
		ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
		ctx.strokeStyle = stroke;
	
		var points0 = [],
		    points1 = [];
	
		for (var i = 0; i < plotData.length; i++) {
			var d = plotData[i];
			if (defined(yAccessor(d), i)) {
				var x = xScale(xAccessor(d));
				var y1 = yScale(yAccessor(d));
				var y0 = newBase(yScale, d);
	
	
				points0.push([x, y0]);
				points1.push([x, y1]);
			} else if (points0.length) {
				segment(points0, points1, ctx);
				points0 = [];
				points1 = [];
			}
		}
		if (points0.length) segment(points0, points1, ctx);
	};
	
	exports.default = (0, _wrap2.default)(Area);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ScatterSeries = function (_Component) {
		_inherits(ScatterSeries, _Component);
	
		function ScatterSeries() {
			_classCallCheck(this, ScatterSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ScatterSeries).apply(this, arguments));
		}
	
		_createClass(ScatterSeries, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var className = _props.className;
				var markerProps = _props.markerProps;
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var plotData = _props.plotData;
	
				var points = ScatterSeries.helper(this.props, xScale, yScale, plotData);
	
				return _react2.default.createElement(
					"g",
					{ className: className },
					points.map(function (point, idx) {
						var Marker = point.marker;
	
						return _react2.default.createElement(Marker, _extends({ key: idx }, markerProps, { point: point }));
					})
				);
			}
		}]);
	
		return ScatterSeries;
	}(_react.Component);
	
	ScatterSeries.propTypes = {
		className: _react.PropTypes.string,
		xAccessor: _react.PropTypes.func,
		yAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		plotData: _react.PropTypes.array,
		marker: _react.PropTypes.func,
		markerProvider: _react.PropTypes.func,
		markerProps: _react.PropTypes.object
	};
	
	ScatterSeries.defaultProps = {
		className: "react-stockcharts-scatter"
	};
	
	ScatterSeries.yAccessor = function (d) {
		return d.close;
	};
	
	ScatterSeries.helper = function (props, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var Marker = props.marker;
		var markerProvider = props.markerProvider;
		var markerProps = props.markerProps;
	
	
		if (!(markerProvider || Marker)) throw new Error("required prop, either marker or markerProvider missing");
	
		return plotData.map(function (d) {
	
			if (markerProvider) Marker = markerProvider(d);
	
			var mProps = _extends({}, Marker.defaultProps, markerProps);
	
			var fill = _d2.default.functor(mProps.fill);
			var stroke = _d2.default.functor(mProps.stroke);
	
			return {
				x: xScale(xAccessor(d)),
				y: yScale(yAccessor(d)),
				fill: (0, _utils.hexToRGBA)(fill(d), mProps.opacity),
				stroke: stroke(d),
				datum: d,
				marker: Marker
			};
		});
	};
	
	ScatterSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var markerProps = props.markerProps;
	
	
		var points = ScatterSeries.helper(props, xScale, yScale, plotData);
	
		var nest = _d2.default.nest().key(function (d) {
			return d.fill;
		}).key(function (d) {
			return d.stroke;
		}).entries(points);
	
		nest.forEach(function (fillGroup) {
			var fillKey = fillGroup.key;
			var fillValues = fillGroup.values;
	
	
			if (fillKey !== "none") {
				ctx.fillStyle = fillKey;
			}
	
			fillValues.forEach(function (strokeGroup) {
				var strokeKey = strokeGroup.key;
				var strokeValues = strokeGroup.values;
	
	
				ctx.strokeStyle = strokeKey;
	
				strokeValues.forEach(function (point) {
					var marker = point.marker;
	
					marker.drawOnCanvasWithNoStateChange(_extends({}, marker.defaultProps, markerProps), point, ctx);
				});
			});
		});
	};
	
	exports.default = (0, _wrap2.default)(ScatterSeries);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Circle(props) {
		var className = props.className;
		var stroke = props.stroke;
		var opacity = props.opacity;
		var fill = props.fill;
		var point = props.point;
		var r = props.r;
	
		var radius = _d2.default.functor(r)(point.datum);
		return _react2.default.createElement("circle", { className: className, cx: point.x, cy: point.y, stroke: stroke, fillOpacity: opacity, fill: fill, r: radius });
	}
	
	Circle.propTypes = {
		stroke: _react.PropTypes.string,
		fill: _react.PropTypes.string.isRequired,
		opacity: _react.PropTypes.number.isRequired,
		point: _react.PropTypes.shape({
			x: _react.PropTypes.number.isRequired,
			y: _react.PropTypes.number.isRequired,
			datum: _react.PropTypes.object.isRequired
		}).isRequired,
		className: _react.PropTypes.string,
		r: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired
	};
	
	Circle.defaultProps = {
		stroke: "#4682B4",
		opacity: 0.5,
		fill: "#4682B4",
		className: "react-stockcharts-marker-circle"
	};
	
	Circle.drawOnCanvas = function (props, point, ctx) {
		var stroke = props.stroke;
		var fill = props.fill;
		var opacity = props.opacity;
	
	
		ctx.strokeStyle = stroke;
	
		if (fill !== "none") {
			ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
		}
	
		Circle.drawOnCanvasWithNoStateChange(props, point, ctx);
	};
	
	Circle.drawOnCanvasWithNoStateChange = function (props, point, ctx) {
		var r = props.r;
	
		var radius = _d2.default.functor(r)(point.datum);
	
		ctx.moveTo(point.x, point.y);
		ctx.beginPath();
		ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI, false);
		ctx.stroke();
		ctx.fill();
	};
	
	exports.default = Circle;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LineSeries = function (_Component) {
		_inherits(LineSeries, _Component);
	
		function LineSeries() {
			_classCallCheck(this, LineSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(LineSeries).apply(this, arguments));
		}
	
		_createClass(LineSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var className = props.className;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
				var stroke = props.stroke;
				var type = props.type;
	
				return _react2.default.createElement(_Line2.default, {
					className: className,
					xScale: xScale, yScale: yScale,
					xAccessor: xAccessor, yAccessor: yAccessor,
					plotData: plotData,
					stroke: stroke, fill: "none",
					type: type });
			}
		}]);
	
		return LineSeries;
	}(_react.Component);
	
	LineSeries.propTypes = {
		className: _react.PropTypes.string
	};
	
	LineSeries.defaultProps = {
		stroke: "#4682B4",
		className: "line "
	};
	
	LineSeries.yAccessor = function (d) {
		return d.close;
	};
	
	exports.default = (0, _wrap2.default)(LineSeries);

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CandlestickSeries = function (_Component) {
		_inherits(CandlestickSeries, _Component);
	
		function CandlestickSeries() {
			_classCallCheck(this, CandlestickSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(CandlestickSeries).apply(this, arguments));
		}
	
		_createClass(CandlestickSeries, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var className = _props.className;
				var wickClassName = _props.wickClassName;
				var candleClassName = _props.candleClassName;
	
				return _react2.default.createElement(
					"g",
					{ className: className },
					_react2.default.createElement(
						"g",
						{ className: wickClassName, key: "wicks" },
						CandlestickSeries.getWicksSVG(this.props)
					),
					_react2.default.createElement(
						"g",
						{ className: candleClassName, key: "candles" },
						CandlestickSeries.getCandlesSVG(this.props)
					)
				);
			}
		}]);
	
		return CandlestickSeries;
	}(_react.Component);
	
	CandlestickSeries.propTypes = {
		className: _react.PropTypes.string,
		wickClassName: _react.PropTypes.string,
		candleClassName: _react.PropTypes.string,
		widthRatio: _react.PropTypes.number.isRequired,
		classNames: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		fill: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		stroke: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		wickStroke: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		xAccessor: _react.PropTypes.func,
		yAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		plotData: _react.PropTypes.array
	};
	
	CandlestickSeries.defaultProps = {
		className: "react-stockcharts-candlestick",
		wickClassName: "react-stockcharts-candlestick-wick",
		candleClassName: "react-stockcharts-candlestick-candle",
		yAccessor: function yAccessor(d) {
			return { open: d.open, high: d.high, low: d.low, close: d.close };
		},
		classNames: function classNames(d) {
			return d.close > d.open ? "up" : "down";
		},
		widthRatio: 0.5,
		wickStroke: "#000000",
		// wickStroke: d => d.close > d.open ? "#6BA583" : "#FF0000",
		fill: function fill(d) {
			return d.close > d.open ? "#6BA583" : "#FF0000";
		},
		// stroke: d => d.close > d.open ? "#6BA583" : "#FF0000",
		// stroke: "#000000",
		stroke: "none",
		opacity: 1
	};
	
	CandlestickSeries.getWicksSVG = function (props) {
	
		/* eslint-disable react/prop-types */
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var plotData = props.plotData;
		/* eslint-disable react/prop-types */
	
		var wickData = CandlestickSeries.getWickData(props, xAccessor, yAccessor, xScale, yScale, plotData);
		var wicks = wickData.map(function (d, idx) {
			return _react2.default.createElement("line", { key: idx,
				className: d.className, stroke: d.stroke, style: { shapeRendering: "crispEdges" },
				x1: d.x1, y1: d.y1,
				x2: d.x2, y2: d.y2 });
		});
		return wicks;
	};
	CandlestickSeries.getCandlesSVG = function (props) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var plotData = props.plotData;
		var opacity = props.opacity;
	
	
		var candleData = CandlestickSeries.getCandleData(props, xAccessor, yAccessor, xScale, yScale, plotData);
		var candles = candleData.map(function (d, idx) {
			if (d.width < 0) return _react2.default.createElement("line", { className: d.className, key: idx,
				x1: d.x, y1: d.y, x2: d.x, y2: d.y + d.height,
				stroke: d.fill });else if (d.height === 0) return _react2.default.createElement("line", { key: idx,
				x1: d.x, y1: d.y, x2: d.x + d.width, y2: d.y + d.height,
				stroke: d.fill });
			return _react2.default.createElement("rect", { key: idx, className: d.className,
				fillOpacity: opacity,
				x: d.x, y: d.y, width: d.width, height: d.height,
				fill: d.fill, stroke: d.stroke });
		});
		return candles;
	};
	
	CandlestickSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var opacity = props.opacity;
	
		var wickData = CandlestickSeries.getWickData(props, xAccessor, yAccessor, xScale, yScale, plotData);
	
		var wickNest = _d2.default.nest().key(function (d) {
			return d.stroke;
		}).entries(wickData);
	
		wickNest.forEach(function (outer) {
			var key = outer.key;
			var values = outer.values;
	
			ctx.strokeStyle = key;
			values.forEach(function (d) {
				ctx.beginPath();
				ctx.moveTo(d.x1, d.y1);
				ctx.lineTo(d.x2, d.y2);
				ctx.stroke();
			});
		});
	
		var candleData = CandlestickSeries.getCandleData(props, xAccessor, yAccessor, xScale, yScale, plotData);
	
		var candleNest = _d2.default.nest().key(function (d) {
			return d.stroke;
		}).key(function (d) {
			return d.fill;
		}).entries(candleData);
	
		candleNest.forEach(function (outer) {
			var strokeKey = outer.key;
			var strokeValues = outer.values;
	
			if (strokeKey !== "none") ctx.strokeStyle = strokeKey;
			strokeValues.forEach(function (inner) {
				var key = inner.key;
				var values = inner.values;
	
				ctx.fillStyle = (0, _utils.hexToRGBA)(key, opacity);
	
				values.forEach(function (d) {
					if (d.width < 0) {
						// <line className={d.className} key={idx} x1={d.x} y1={d.y} x2={d.x} y2={d.y + d.height}/>
						ctx.beginPath();
						ctx.moveTo(d.x, d.y);
						ctx.lineTo(d.x, d.y + d.height);
						ctx.stroke();
					} else if (d.height === 0) {
						// <line key={idx} x1={d.x} y1={d.y} x2={d.x + d.width} y2={d.y + d.height} />
						ctx.beginPath();
						ctx.moveTo(d.x, d.y);
						ctx.lineTo(d.x + d.width, d.y + d.height);
						ctx.stroke();
					} else {
						ctx.beginPath();
						ctx.rect(d.x, d.y, d.width, d.height);
						ctx.closePath();
						ctx.fill();
						if (strokeKey !== "none") ctx.stroke();
					}
				});
			});
		});
	};
	
	CandlestickSeries.getWickData = function (props, xAccessor, yAccessor, xScale, yScale, plotData) {
		var classNameProp = props.classNames;
		var wickStrokeProp = props.wickStroke;
	
		var wickStroke = _d2.default.functor(wickStrokeProp);
		var className = _d2.default.functor(classNameProp);
		var wickData = plotData.filter(function (d) {
			return (0, _utils.isDefined)(d.close);
		}).map(function (d) {
			// console.log(yAccessor);
			var ohlc = yAccessor(d);
	
			var x1 = Math.round(xScale(xAccessor(d))),
			    y1 = yScale(ohlc.high),
			    x2 = x1,
			    y2 = yScale(ohlc.low);
	
			return {
				x1: x1,
				y1: y1,
				x2: x2,
				y2: y2,
				className: className(ohlc),
				direction: ohlc.close - ohlc.open,
				stroke: wickStroke(ohlc)
			};
		});
		return wickData;
	};
	
	CandlestickSeries.getCandleData = function (props, xAccessor, yAccessor, xScale, yScale, plotData) {
		var classNames = props.classNames;
		var fillProp = props.fill;
		var strokeProp = props.stroke;
		var widthRatio = props.widthRatio;
	
		var fill = _d2.default.functor(fillProp);
		var stroke = _d2.default.functor(strokeProp);
		// console.log(plotData);
		var width = xScale(xAccessor((0, _utils.last)(plotData))) - xScale(xAccessor((0, _utils.first)(plotData)));
		var cw = width / (plotData.length - 1) * widthRatio;
		var candleWidth = Math.round(cw); // Math.floor(cw) % 2 === 0 ? Math.floor(cw) : Math.round(cw);
		var offset = candleWidth === 1 ? 0 : 0.5 * candleWidth;
		var candles = plotData.filter(function (d) {
			return (0, _utils.isDefined)(d.close);
		}).map(function (d) {
			var ohlc = yAccessor(d);
			var x = Math.round(xScale(xAccessor(d))) - offset,
			    y = yScale(Math.max(ohlc.open, ohlc.close)),
			    height = Math.abs(yScale(ohlc.open) - yScale(ohlc.close)),
			    className = ohlc.open <= ohlc.close ? classNames.up : classNames.down;
			return {
				// type: "line"
				x: x,
				y: y,
				height: height,
				width: candleWidth,
				className: className,
				fill: fill(ohlc),
				stroke: stroke(ohlc),
				direction: ohlc.close - ohlc.open
			};
		});
		return candles;
	};
	
	exports.default = (0, _wrap2.default)(CandlestickSeries);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OHLCSeries = function (_Component) {
		_inherits(OHLCSeries, _Component);
	
		function OHLCSeries() {
			_classCallCheck(this, OHLCSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(OHLCSeries).apply(this, arguments));
		}
	
		_createClass(OHLCSeries, [{
			key: "render",
			value: function render() {
				var className = this.props.className;
				var _props = this.props;
				var xAccessor = _props.xAccessor;
				var yAccessor = _props.yAccessor;
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var plotData = _props.plotData;
	
	
				var barData = OHLCSeries.getOHLCBars(this.props, xAccessor, yAccessor, xScale, yScale, plotData);
	
				var strokeWidth = barData.strokeWidth;
				var bars = barData.bars;
	
	
				return _react2.default.createElement(
					"g",
					{ className: className },
					bars.map(function (d, idx) {
						return _react2.default.createElement("path", { key: idx,
							className: d.className, stroke: d.stroke, strokeWidth: strokeWidth,
							d: "M" + d.openX1 + " " + d.openY + " L" + d.openX2 + " " + d.openY + " M" + d.x + " " + d.y1 + " L" + d.x + " " + d.y2 + " M" + d.closeX1 + " " + d.closeY + " L" + d.closeX2 + " " + d.closeY });
					})
				);
			}
		}]);
	
		return OHLCSeries;
	}(_react.Component);
	
	OHLCSeries.propTypes = {
		className: _react.PropTypes.string,
		classNames: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		stroke: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		xAccessor: _react.PropTypes.func,
		yAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		plotData: _react.PropTypes.array
	};
	
	OHLCSeries.defaultProps = {
		className: "react-stockcharts-ohlc",
		yAccessor: function yAccessor(d) {
			return { open: d.open, high: d.high, low: d.low, close: d.close };
		},
		classNames: function classNames(d) {
			return (0, _utils.isDefined)(d.absoluteChange) ? d.absoluteChange > 0 ? "up" : "down" : "firstbar";
		},
		stroke: function stroke(d) {
			return (0, _utils.isDefined)(d.absoluteChange) ? d.absoluteChange > 0 ? "#6BA583" : "#FF0000" : "#000000";
		},
		opacity: 1
	};
	
	OHLCSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
	
		var barData = OHLCSeries.getOHLCBars(props, xAccessor, yAccessor, xScale, yScale, plotData);
	
		var strokeWidth = barData.strokeWidth;
		var bars = barData.bars;
	
	
		var wickNest = _d2.default.nest().key(function (d) {
			return d.stroke;
		}).entries(bars);
	
		ctx.lineWidth = strokeWidth;
	
		wickNest.forEach(function (outer) {
			var key = outer.key;
			var values = outer.values;
	
			ctx.strokeStyle = key;
			values.forEach(function (d) {
				ctx.beginPath();
				ctx.moveTo(d.x, d.y1);
				ctx.lineTo(d.x, d.y2);
	
				ctx.moveTo(d.openX1, d.openY);
				ctx.lineTo(d.openX2, d.openY);
	
				ctx.moveTo(d.closeX1, d.closeY);
				ctx.lineTo(d.closeX2, d.closeY);
	
				ctx.stroke();
			});
		});
	};
	
	OHLCSeries.getOHLCBars = function (props, xAccessor, yAccessor, xScale, yScale, plotData) {
		var classNamesProp = props.classNames;
		var strokeProp = props.stroke;
	
	
		var strokeFunc = _d2.default.functor(strokeProp);
		var classNameFunc = _d2.default.functor(classNamesProp);
	
		var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));
	
		var barWidth = Math.max(1, Math.round(width / (plotData.length - 1) / 2) - 1.5);
		var strokeWidth = Math.min(barWidth, 6);
	
		var bars = plotData.filter(function (d) {
			return (0, _utils.isDefined)(d.close);
		}).map(function (d) {
			var ohlc = yAccessor(d),
			    x = Math.round(xScale(xAccessor(d))),
			    y1 = yScale(ohlc.high),
			    y2 = yScale(ohlc.low),
			    openX1 = x - barWidth,
			    openX2 = x + strokeWidth / 2,
			    openY = yScale(ohlc.open),
			    closeX1 = x - strokeWidth / 2,
			    closeX2 = x + barWidth,
			    closeY = yScale(ohlc.close),
			    className = classNameFunc(d),
			    stroke = strokeFunc(d);
			// console.log(d);
			return { x: x, y1: y1, y2: y2, openX1: openX1, openX2: openX2, openY: openY, closeX1: closeX1, closeX2: closeX2, closeY: closeY, stroke: stroke, className: className };
		});
		return { barWidth: barWidth, strokeWidth: strokeWidth, bars: bars };
	};
	
	exports.default = (0, _wrap2.default)(OHLCSeries);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _StackedBarSeries = __webpack_require__(38);
	
	var _StackedBarSeries2 = _interopRequireDefault(_StackedBarSeries);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BarSeries = function (_Component) {
		_inherits(BarSeries, _Component);
	
		function BarSeries() {
			_classCallCheck(this, BarSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(BarSeries).apply(this, arguments));
		}
	
		_createClass(BarSeries, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"g",
					{ className: "react-stockcharts-bar-series" },
					BarSeries.getBarsSVG(this.props)
				);
			}
		}]);
	
		return BarSeries;
	}(_react.Component);
	
	BarSeries.propTypes = {
		baseAt: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
		stroke: _react.PropTypes.bool.isRequired,
		widthRatio: _react.PropTypes.number.isRequired,
		opacity: _react.PropTypes.number.isRequired,
		fill: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		className: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		xAccessor: _react.PropTypes.func,
		yAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		plotData: _react.PropTypes.array
	};
	
	BarSeries.defaultProps = _StackedBarSeries2.default.defaultProps;
	
	BarSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var yAccessor = props.yAccessor;
		var xAccessor = props.xAccessor;
	
		(0, _StackedBarSeries.drawOnCanvasHelper)(props, ctx, xScale, yScale, plotData, xAccessor, yAccessor, _utils.identity);
	};
	
	BarSeries.getBarsSVG = function (props) {
		return (0, _StackedBarSeries.svgHelper)(props, _utils.identity);
	};
	
	exports.default = (0, _wrap2.default)(BarSeries);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.rotateXY = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.drawOnCanvasHelper = drawOnCanvasHelper;
	exports.svgHelper = svgHelper;
	exports.getBarsSVG2 = getBarsSVG2;
	exports.drawOnCanvas2 = drawOnCanvas2;
	exports.getBars = getBars;
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StackedBarSeries = function (_Component) {
		_inherits(StackedBarSeries, _Component);
	
		function StackedBarSeries() {
			_classCallCheck(this, StackedBarSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(StackedBarSeries).apply(this, arguments));
		}
	
		_createClass(StackedBarSeries, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"g",
					{ className: "react-stockcharts-bar-series" },
					svgHelper(this.props, _d2.default.layout.stack())
				);
			}
		}]);
	
		return StackedBarSeries;
	}(_react.Component);
	
	StackedBarSeries.propTypes = {
		baseAt: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
		direction: _react.PropTypes.oneOf(["up", "down"]).isRequired,
		stroke: _react.PropTypes.bool.isRequired,
		widthRatio: _react.PropTypes.number.isRequired,
		opacity: _react.PropTypes.number.isRequired,
		fill: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		className: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		xAccessor: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.func), _react.PropTypes.func]).isRequired,
		yAccessor: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.func), _react.PropTypes.func]).isRequired,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		plotData: _react.PropTypes.array
	};
	
	StackedBarSeries.defaultProps = {
		baseAt: function baseAt(xScale, yScale /* , d*/) {
			return (0, _utils.first)(yScale.range());
		},
		direction: "up",
		className: "bar",
		stroke: false,
		fill: "#4682B4",
		opacity: 1,
		widthRatio: 0.5
	};
	
	StackedBarSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var yAccessor = props.yAccessor;
		var xAccessor = props.xAccessor;
	
		drawOnCanvasHelper(props, ctx, xScale, yScale, plotData, xAccessor, yAccessor, _d2.default.layout.stack());
	};
	
	function drawOnCanvasHelper(props, ctx, xScale, yScale, plotData, xAccessor, yAccessor, stackFn) {
		var defaultPostAction = arguments.length <= 8 || arguments[8] === undefined ? _utils.identity : arguments[8];
		var postRotateAction = arguments.length <= 9 || arguments[9] === undefined ? rotateXY : arguments[9];
		var yAccessor = props.yAccessor;
		var xAccessor = props.xAccessor;
	
	
		var bars = doStuff(props, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction);
		drawOnCanvas2(props, ctx, bars);
	}
	
	function convertToArray(item) {
		return Array.isArray(item) ? item : [item];
	}
	
	function svgHelper(props, stackFn) {
		var defaultPostAction = arguments.length <= 2 || arguments[2] === undefined ? _utils.identity : arguments[2];
		var postRotateAction = arguments.length <= 3 || arguments[3] === undefined ? rotateXY : arguments[3];
		var xScale = props.xScale;
		var yScale = props.yScale;
		var plotData = props.plotData;
	
		var bars = doStuff(props, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction);
	
		return getBarsSVG2(props, bars);
	}
	
	function doStuff(props, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction) {
		var yAccessor = props.yAccessor;
		var xAccessor = props.xAccessor;
		var swapScales = props.swapScales;
	
	
		var modifiedYAccessor = swapScales ? convertToArray(xAccessor) : convertToArray(yAccessor);
		var modifiedXAccessor = swapScales ? yAccessor : xAccessor;
	
		var modifiedXScale = swapScales ? yScale : xScale;
		var modifiedYScale = swapScales ? xScale : yScale;
	
		var postProcessor = swapScales ? postRotateAction : defaultPostAction;
	
		var bars = getBars(props, modifiedXAccessor, modifiedYAccessor, modifiedXScale, modifiedYScale, plotData, stackFn, postProcessor);
		return bars;
	}
	
	var rotateXY = exports.rotateXY = function rotateXY(array) {
		return array.map(function (each) {
			return _extends({}, each, {
				x: each.y,
				y: each.x,
				height: each.width,
				width: each.height
			});
		});
	};
	
	function getBarsSVG2(props, bars) {
		/* eslint-disable react/prop-types */
		var opacity = props.opacity;
		/* eslint-disable react/prop-types */
	
		return bars.map(function (d, idx) {
			if (d.width <= 1) {
				return _react2.default.createElement("line", { key: idx, className: d.className,
					stroke: d.fill,
					x1: d.x, y1: d.y,
					x2: d.x, y2: d.y + d.height });
			}
			return _react2.default.createElement("rect", { key: idx, className: d.className,
				stroke: d.stroke,
				fill: d.fill,
				x: d.x,
				y: d.y,
				width: d.width,
				fillOpacity: opacity,
				height: d.height });
		});
	}
	
	function drawOnCanvas2(props, ctx, bars) {
		var stroke = props.stroke;
	
	
		var nest = _d2.default.nest().key(function (d) {
			return d.fill;
		}).entries(bars);
	
		nest.forEach(function (outer) {
			var key = outer.key;
			var values = outer.values;
	
			if (values[0].width < 1) {
				ctx.strokeStyle = key;
			} else {
				ctx.strokeStyle = key;
				ctx.fillStyle = (0, _utils.hexToRGBA)(key, props.opacity);
			}
			values.forEach(function (d) {
				if (d.width < 1) {
					/* <line key={idx} className={d.className}
	    			stroke={stroke}
	    			fill={fill}
	    			x1={d.x} y1={d.y}
	    			x2={d.x} y2={d.y + d.height} />*/
					ctx.beginPath();
					ctx.moveTo(d.x, d.y);
					ctx.lineTo(d.x, d.y + d.height);
					ctx.stroke();
				} else {
					/* <rect key={idx} className={d.className}
	    		stroke={stroke}
	    		fill={fill}
	    		x={d.x}
	    		y={d.y}
	    		width={d.width}
	    		height={d.height} /> */
					ctx.beginPath();
					ctx.rect(d.x, d.y, d.width, d.height);
					ctx.fill();
					if (stroke) ctx.stroke();
				}
			});
		});
	};
	
	function getBars(props, xAccessor, yAccessor, xScale, yScale, plotData) {
		var stack = arguments.length <= 6 || arguments[6] === undefined ? _utils.identity : arguments[6];
		var after = arguments.length <= 7 || arguments[7] === undefined ? _utils.identity : arguments[7];
		var baseAt = props.baseAt;
		var className = props.className;
		var fill = props.fill;
		var stroke = props.stroke;
		var widthRatio = props.widthRatio;
		var _props$spaceBetweenBa = props.spaceBetweenBar;
		var spaceBetweenBar = _props$spaceBetweenBa === undefined ? 0 : _props$spaceBetweenBa;
	
	
		var getClassName = _d2.default.functor(className);
		var getFill = _d2.default.functor(fill);
		var getBase = _d2.default.functor(baseAt);
	
		var width = Math.abs(xScale(xAccessor((0, _utils.last)(plotData))) - xScale(xAccessor((0, _utils.first)(plotData))));
		var bw = width / (plotData.length - 1) * widthRatio;
		var barWidth = Math.round(bw);
	
		var eachBarWidth = (barWidth - spaceBetweenBar * (yAccessor.length - 1)) / yAccessor.length;
	
		var offset = barWidth === 1 ? 0 : 0.5 * barWidth;
	
		var layers = yAccessor.map(function (eachYAccessor, i) {
			return plotData.map(function (d) {
				return {
					series: xAccessor(d),
					datum: d,
					x: i,
					y: eachYAccessor(d),
					className: getClassName(d, i),
					stroke: stroke ? getFill(d, i) : "none",
					fill: getFill(d, i)
				};
			});
		});
	
		var data = stack(layers);
	
		var bars = _d2.default.merge(data).map(function (d) {
			// let baseValue = yScale.invert(getBase(xScale, yScale, d.datum));
			var y = yScale(d.y + (d.y0 || 0));
			/* let h = isDefined(d.y0) && d.y0 !== 0 && !isNaN(d.y0)
	  	? yScale(d.y0) - y
	  	: getBase(xScale, yScale, d.datum) - yScale(d.y)*/
			var h = getBase(xScale, yScale, d.datum) - yScale(d.y);
	
			// let h = ;
			// if (d.y < 0) h = -h;
			if (h < 0) {
				y = y + h;
				h = -h;
			}
			/* console.log(d.series, d.datum.date, d.x,
	  	getBase(xScale, yScale, d.datum), `d.y=${d.y}, d.y0=${d.y0}, y=${y}, h=${h}`)*/
			return {
				className: d.className,
				stroke: d.stroke,
				fill: d.fill,
				// series: d.series,
				// i: d.x,
				x: xScale(d.series) - barWidth / 2,
				y: y,
				groupOffset: offset - (d.x > 0 ? (eachBarWidth + spaceBetweenBar) * d.x : 0),
				groupWidth: eachBarWidth,
				offset: barWidth / 2,
				height: h,
				width: barWidth
			};
		});
		return after(bars);
	};
	
	exports.default = (0, _wrap2.default)(StackedBarSeries);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _StackedBarSeries = __webpack_require__(38);
	
	var _StackedBarSeries2 = _interopRequireDefault(_StackedBarSeries);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GroupedBarSeries = function (_Component) {
		_inherits(GroupedBarSeries, _Component);
	
		function GroupedBarSeries() {
			_classCallCheck(this, GroupedBarSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(GroupedBarSeries).apply(this, arguments));
		}
	
		_createClass(GroupedBarSeries, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"g",
					{ className: "react-stockcharts-grouped-bar-series" },
					GroupedBarSeries.getBarsSVG(this.props)
				);
			}
		}]);
	
		return GroupedBarSeries;
	}(_react.Component);
	
	GroupedBarSeries.propTypes = {
		baseAt: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
		direction: _react.PropTypes.oneOf(["up", "down"]).isRequired,
		stroke: _react.PropTypes.bool.isRequired,
		widthRatio: _react.PropTypes.number.isRequired,
		opacity: _react.PropTypes.number.isRequired,
		fill: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		className: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		xAccessor: _react.PropTypes.func,
		yAccessor: _react.PropTypes.arrayOf(_react.PropTypes.func),
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		plotData: _react.PropTypes.array
	};
	
	GroupedBarSeries.defaultProps = _extends({}, _StackedBarSeries2.default.defaultProps, {
		widthRatio: 0.8,
		spaceBetweenBar: 5
	});
	
	GroupedBarSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
		(0, _StackedBarSeries.drawOnCanvasHelper)(props, ctx, xScale, yScale, plotData, xAccessor, yAccessor, _utils.identity, postProcessor);
	};
	
	GroupedBarSeries.getBarsSVG = function (props) {
		return (0, _StackedBarSeries.svgHelper)(props, _utils.identity, postProcessor);
	};
	
	function postProcessor(array) {
		return array.map(function (each) {
			return _extends({}, each, {
				x: each.x + each.offset - each.groupOffset,
				width: each.groupWidth
			});
		});
	}
	
	exports.default = (0, _wrap2.default)(GroupedBarSeries);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var KagiSeries = function (_Component) {
		_inherits(KagiSeries, _Component);
	
		function KagiSeries() {
			_classCallCheck(this, KagiSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(KagiSeries).apply(this, arguments));
		}
	
		_createClass(KagiSeries, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var className = _props.className;
				var stroke = _props.stroke;
				var fill = _props.fill;
				var strokeWidth = _props.strokeWidth;
				var _props2 = this.props;
				var xAccessor = _props2.xAccessor;
				var xScale = _props2.xScale;
				var yScale = _props2.yScale;
				var plotData = _props2.plotData;
	
	
				var paths = KagiSeries.helper(plotData, xAccessor).map(function (each, i) {
					var dataSeries = _d2.default.svg.line().x(function (item) {
						return xScale(item[0]);
					}).y(function (item) {
						return yScale(item[1]);
					}).interpolate("step-before");
					return _react2.default.createElement("path", { key: i, d: dataSeries(each.plot), className: each.type,
						stroke: stroke[each.type], fill: fill[each.type], strokeWidth: strokeWidth });
				});
				return _react2.default.createElement(
					"g",
					{ className: className },
					paths
				);
			}
		}]);
	
		return KagiSeries;
	}(_react.Component);
	
	KagiSeries.propTypes = {
		className: _react.PropTypes.string,
		stroke: _react.PropTypes.string,
		fill: _react.PropTypes.string,
		strokeWidth: _react.PropTypes.number.isRequired,
		xAccessor: _react.PropTypes.func,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		plotData: _react.PropTypes.array
	};
	
	KagiSeries.defaultProps = {
		className: "react-stockcharts-kagi",
		strokeWidth: 2,
		stroke: {
			yang: "#6BA583",
			yin: "#E60000"
		},
		fill: {
			yang: "none",
			yin: "none"
		},
		currentValueStroke: "#000000"
	};
	
	KagiSeries.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	KagiSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var stroke = props.stroke;
		var strokeWidth = props.strokeWidth;
		var currentValueStroke = props.currentValueStroke;
	
		var begin = true;
	
		var paths = KagiSeries.helper(plotData, xAccessor);
	
		paths.forEach(function (each) {
			ctx.strokeStyle = stroke[each.type];
			ctx.lineWidth = strokeWidth;
	
			ctx.beginPath();
			var prevX;
			each.plot.forEach(function (d) {
				var x = xScale(d[0]);
				var y = yScale(d[1]);
	
				if (begin) {
					ctx.moveTo(x, y);
					begin = false;
				} else {
					if ((0, _utils.isDefined)(prevX)) {
						ctx.lineTo(prevX, y);
					}
					ctx.lineTo(x, y);
				}
				prevX = x;
				// console.log(d);
			});
			ctx.stroke();
		});
		var lastPlot = paths[paths.length - 1].plot;
		var last = lastPlot[lastPlot.length - 1];
		ctx.beginPath();
		// ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
	
		var x = xScale(last[0]);
		var y1 = yScale(last[2]);
		var y2 = yScale(last[3]);
		// console.log(last, x, y);
	
		ctx.moveTo(x, y1);
		ctx.lineTo(x + 10, y1);
		ctx.stroke();
	
		ctx.beginPath();
		ctx.strokeStyle = currentValueStroke;
		ctx.moveTo(x - 10, y2);
		ctx.lineTo(x, y2);
		ctx.stroke();
	};
	
	KagiSeries.helper = function (plotData, xAccessor) {
		var kagiLine = [];
		var kagi = {};
		var d = plotData[0];
		var idx = xAccessor(d);
	
		for (var i = 0; i < plotData.length; i++) {
			d = plotData[i];
	
			if ((0, _utils.isNotDefined)(d.close)) continue;
			if ((0, _utils.isNotDefined)(kagi.type)) kagi.type = d.startAs;
			if ((0, _utils.isNotDefined)(kagi.plot)) kagi.plot = [];
	
			idx = xAccessor(d);
			kagi.plot.push([idx, d.open]);
	
			if ((0, _utils.isDefined)(d.changeTo)) {
				kagi.plot.push([idx, d.changePoint]);
				kagi.added = true;
				kagiLine.push(kagi);
	
				kagi = {
					type: d.changeTo,
					plot: [],
					added: false
				};
				kagi.plot.push([idx, d.changePoint]);
			}
		}
	
		if (!kagi.added) {
			kagi.plot.push([idx, d.close, d.current, d.reverseAt]);
			kagiLine.push(kagi);
		}
	
		// console.log(d.reverseAt);
	
		return kagiLine;
	};
	
	exports.default = (0, _wrap2.default)(KagiSeries);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PointAndFigureSeries = function (_Component) {
		_inherits(PointAndFigureSeries, _Component);
	
		function PointAndFigureSeries() {
			_classCallCheck(this, PointAndFigureSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(PointAndFigureSeries).apply(this, arguments));
		}
	
		_createClass(PointAndFigureSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var xScale = props.xScale;
				var xAccessor = props.xAccessor;
				var yScale = props.yScale;
				var yAccessor = props.yAccessor;
				var plotData = props.plotData;
	
	
				var columns = PointAndFigureSeries.getColumns(xScale, xAccessor, yScale, yAccessor, plotData);
				var stroke = props.stroke;
				var fill = props.fill;
				var strokeWidth = props.strokeWidth;
				var className = props.className;
	
	
				return _react2.default.createElement(
					"g",
					{ className: className },
					columns.map(function (col, idx) {
						return _react2.default.createElement(
							"g",
							{ key: idx, className: col.className, transform: "translate(" + col.offset[0] + ", " + col.offset[1] + ")" },
							col.boxes.map(function (box, i) {
								if (col.direction > 0) {
									return _react2.default.createElement(
										"g",
										{ key: idx + "-" + i },
										_react2.default.createElement("line", { className: "up", strokeWidth: strokeWidth, stroke: stroke.up, fill: fill.up,
											x1: 0, y1: box.open, x2: box.columnWidth, y2: box.close }),
										_react2.default.createElement("line", { className: "up", strokeWidth: strokeWidth, stroke: stroke.up, fill: fill.up,
											x1: 0, y1: box.close, x2: box.columnWidth, y2: box.open })
									);
								}
								return _react2.default.createElement("ellipse", { key: idx + "-" + i,
									className: "down", strokeWidth: strokeWidth, stroke: stroke.down, fill: fill.down,
									cx: box.columnWidth / 2, cy: (box.open + box.close) / 2,
									rx: box.columnWidth / 2, ry: box.boxHeight / 2 });
							})
						);
					})
				);
			}
		}]);
	
		return PointAndFigureSeries;
	}(_react.Component);
	
	PointAndFigureSeries.defaultProps = {
		className: "react-stockcharts-point-and-figure",
		strokeWidth: 1,
		stroke: {
			up: "#6BA583",
			down: "#FF0000"
		},
		fill: {
			up: "none",
			down: "none"
		}
	};
	
	PointAndFigureSeries.yAccessor = function (d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	};
	
	PointAndFigureSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
	
		var columns = PointAndFigureSeries.getColumns(xScale, xAccessor, yScale, yAccessor, plotData);
		var stroke = props.stroke;
		var fill = props.fill;
		var strokeWidth = props.strokeWidth;
	
	
		ctx.lineWidth = strokeWidth;
	
		columns.forEach(function (col) {
			var _col$offset = _slicedToArray(col.offset, 2);
	
			var offsetX = _col$offset[0];
			var offsetY = _col$offset[1];
	
			col.boxes.forEach(function (box) {
				if (col.direction > 0) {
					ctx.fillStyle = fill.up;
					ctx.strokeStyle = stroke.up;
	
					ctx.beginPath();
	
					ctx.moveTo(offsetX, offsetY + box.open);
					ctx.lineTo(offsetX + box.columnWidth, offsetY + box.close);
					ctx.moveTo(offsetX, offsetY + box.close);
					ctx.lineTo(offsetX + box.columnWidth, offsetY + box.open);
	
					ctx.stroke();
				} else {
					ctx.fillStyle = fill.down;
					ctx.strokeStyle = stroke.down;
	
					ctx.beginPath();
	
					var x = offsetX + box.columnWidth / 2;
					var y = offsetY + box.open + box.boxHeight / 2;
					var rx = box.columnWidth / 2;
					var ry = box.boxHeight / 2;
	
	
					ctx.ellipse(x, y, rx, ry, 0, 0, 2 * Math.PI);
					ctx.stroke();
				}
			});
		});
	
		ctx.stroke();
	};
	
	PointAndFigureSeries.getColumns = function (xScale, xAccessor, yScale, yAccessor, plotData) {
	
		var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));
	
		var columnWidth = width / (plotData.length - 1);
	
		var anyBox,
		    j = 0;
		while ((0, _utils.isNotDefined)(anyBox)) {
			if ((0, _utils.isDefined)(plotData[j].close)) {
				anyBox = plotData[j].boxes[0];
			}
			j++;
		}
	
		var boxHeight = Math.abs(yScale(anyBox.open) - yScale(anyBox.close));
	
		var columns = plotData.filter(function (d) {
			return (0, _utils.isDefined)(d.close);
		}).map(function (d) {
			var boxes = d.boxes.map(function (box) {
				return {
					columnWidth: columnWidth,
					boxHeight: boxHeight,
					open: yScale(box.open),
					close: yScale(box.close)
				};
			});
	
			var xOffset = xScale(xAccessor(d)) - columnWidth / 2;
			return {
				boxes: boxes,
				direction: d.direction,
				offset: [xOffset, 0]
			};
		});
		return columns;
	};
	
	exports.default = (0, _wrap2.default)(PointAndFigureSeries);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RenkoSeries = function (_Component) {
		_inherits(RenkoSeries, _Component);
	
		function RenkoSeries() {
			_classCallCheck(this, RenkoSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(RenkoSeries).apply(this, arguments));
		}
	
		_createClass(RenkoSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var plotData = props.plotData;
				var xScale = props.xScale;
				var xAccessor = props.xAccessor;
				var yScale = props.yScale;
				var yAccessor = props.yAccessor;
	
	
				var candles = RenkoSeries.getRenko(props, plotData, xScale, xAccessor, yScale, yAccessor).map(function (each, idx) {
					return _react2.default.createElement("rect", { key: idx, className: each.className,
						fill: each.fill,
						x: each.x,
						y: each.y,
						width: each.width,
						height: each.height });
				});
	
				return _react2.default.createElement(
					"g",
					null,
					_react2.default.createElement(
						"g",
						{ className: "candle" },
						candles
					)
				);
			}
		}]);
	
		return RenkoSeries;
	}(_react.Component);
	
	RenkoSeries.propTypes = {
		classNames: _react.PropTypes.shape({
			up: _react.PropTypes.string,
			down: _react.PropTypes.string
		}),
		stroke: _react.PropTypes.shape({
			up: _react.PropTypes.string,
			down: _react.PropTypes.string
		}),
		fill: _react.PropTypes.shape({
			up: _react.PropTypes.string,
			down: _react.PropTypes.string
		})
	};
	
	RenkoSeries.defaultProps = {
		classNames: {
			up: "up",
			down: "down"
		},
		stroke: {
			up: "none",
			down: "none"
		},
		fill: {
			up: "#6BA583",
			down: "#E60000",
			partial: "#4682B4"
		},
		yAccessor: function yAccessor(d) {
			return { open: d.open, high: d.high, low: d.low, close: d.close };
		}
	};
	
	RenkoSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
	
		var renko = RenkoSeries.getRenko(props, plotData, xScale, xAccessor, yScale, yAccessor);
		renko.forEach(function (d) {
			ctx.beginPath();
	
			ctx.strokeStyle = d.stroke;
			ctx.fillStyle = d.fill;
	
			ctx.rect(d.x, d.y, d.width, d.height);
			ctx.closePath();
			ctx.fill();
		});
	};
	
	RenkoSeries.getRenko = function (props, plotData, xScale, xAccessor, yScale, yAccessor) {
		var classNames = props.classNames;
		var fill = props.fill;
	
		var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));
	
		var candleWidth = width / (plotData.length - 1);
		var candles = plotData.filter(function (d) {
			return (0, _utils.isDefined)(d.close);
		}).map(function (d) {
			var ohlc = yAccessor(d);
			var x = xScale(xAccessor(d)) - 0.5 * candleWidth,
			    y = yScale(Math.max(ohlc.open, ohlc.close)),
			    height = Math.abs(yScale(ohlc.open) - yScale(ohlc.close)),
			    className = ohlc.open <= ohlc.close ? classNames.up : classNames.down,
			    svgfill = ohlc.open <= ohlc.close ? fill.up : fill.down;
	
			if (!d.fullyFormed) {
				svgfill = fill.partial;
			}
			return {
				className: className,
				fill: svgfill,
				x: x,
				y: y,
				height: height,
				width: candleWidth
			};
		});
		return candles;
	};
	
	exports.default = (0, _wrap2.default)(RenkoSeries);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BarSeries = __webpack_require__(37);
	
	var _BarSeries2 = _interopRequireDefault(_BarSeries);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(44);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MACDSeries = function (_Component) {
		_inherits(MACDSeries, _Component);
	
		function MACDSeries(props) {
			_classCallCheck(this, MACDSeries);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MACDSeries).call(this, props));
	
			_this.yAccessorForMACD = _this.yAccessorForMACD.bind(_this);
			_this.yAccessorForSignal = _this.yAccessorForSignal.bind(_this);
			_this.yAccessorForDivergence = _this.yAccessorForDivergence.bind(_this);
			_this.yAccessorForDivergenceBase = _this.yAccessorForDivergenceBase.bind(_this);
			return _this;
		}
	
		_createClass(MACDSeries, [{
			key: "yAccessorForMACD",
			value: function yAccessorForMACD(d) {
				var calculator = this.props.calculator;
	
				var yAccessor = calculator.accessor();
				return yAccessor(d) && yAccessor(d).macd;
			}
		}, {
			key: "yAccessorForSignal",
			value: function yAccessorForSignal(d) {
				var calculator = this.props.calculator;
	
				var yAccessor = calculator.accessor();
				return yAccessor(d) && yAccessor(d).signal;
			}
		}, {
			key: "yAccessorForDivergence",
			value: function yAccessorForDivergence(d) {
				var calculator = this.props.calculator;
	
				var yAccessor = calculator.accessor();
				return yAccessor(d) && yAccessor(d).divergence;
			}
		}, {
			key: "yAccessorForDivergenceBase",
			value: function yAccessorForDivergenceBase(xScale, yScale /* , d */) {
				return yScale(0);
			}
		}, {
			key: "render",
			value: function render() {
				var _props = this.props;
				var className = _props.className;
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var xAccessor = _props.xAccessor;
				var plotData = _props.plotData;
				var type = _props.type;
				var opacity = _props.opacity;
				var divergenceStroke = _props.divergenceStroke;
				var calculator = _props.calculator;
	
				var stroke = calculator.stroke();
				var fill = calculator.fill();
				// console.log(this.props.yAccessor)
				return _react2.default.createElement(
					"g",
					{ className: className },
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForMACD,
						plotData: plotData,
						stroke: stroke.macd, fill: "none",
						type: type }),
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForSignal,
						plotData: plotData,
						stroke: stroke.signal, fill: "none",
						type: type }),
					_react2.default.createElement(_BarSeries2.default, {
						baseAt: this.yAccessorForDivergenceBase,
						className: "macd-divergence",
						stroke: divergenceStroke, fill: fill.divergence, opacity: opacity,
						yAccessor: this.yAccessorForDivergence }),
					MACDSeries.getHorizontalLine(this.props)
				);
			}
		}]);
	
		return MACDSeries;
	}(_react.Component);
	
	MACDSeries.getHorizontalLine = function (props) {
	
		/* eslint-disable react/prop-types */
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var plotData = props.plotData;
		var type = props.type;
		var zeroLineStroke = props.zeroLineStroke;
		var zeroLineOpacity = props.zeroLineOpacity;
		/* eslint-enable react/prop-types */
	
		return _react2.default.createElement(_StraightLine2.default, {
			stroke: zeroLineStroke, opacity: zeroLineOpacity, type: type,
			xScale: xScale, yScale: yScale,
			xAccessor: xAccessor, yAccessor: yAccessor,
			plotData: plotData,
			yValue: 0 });
	};
	
	MACDSeries.propTypes = {
		className: _react.PropTypes.string,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		xAccessor: _react.PropTypes.func,
		calculator: _react.PropTypes.func.isRequired,
		plotData: _react.PropTypes.array,
		type: _react.PropTypes.string,
		opacity: _react.PropTypes.number,
		divergenceStroke: _react.PropTypes.bool
	};
	
	MACDSeries.defaultProps = {
		className: "react-stockcharts-macd-series",
		zeroLineStroke: "#000000",
		zeroLineOpacity: 0.3,
		opacity: 0.6,
		divergenceStroke: false
	};
	
	exports.default = (0, _wrap2.default)(MACDSeries);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StraightLine = function (_Component) {
		_inherits(StraightLine, _Component);
	
		function StraightLine() {
			_classCallCheck(this, StraightLine);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(StraightLine).apply(this, arguments));
		}
	
		_createClass(StraightLine, [{
			key: "render",
			value: function render() {
				var props = this.props;
				var stroke = props.stroke;
				var className = props.className;
				var opacity = props.opacity;
				var xScale = props.xScale;
				var yScale = props.yScale;
				var xAccessor = props.xAccessor;
				var plotData = props.plotData;
				var yValue = props.yValue;
	
	
				var first = xAccessor(plotData[0]);
				var last = xAccessor(plotData[plotData.length - 1]);
	
				return _react2.default.createElement("line", { className: className,
					stroke: stroke, opacity: opacity,
					x1: xScale(first), y1: yScale(yValue),
					x2: xScale(last), y2: yScale(yValue) });
			}
		}]);
	
		return StraightLine;
	}(_react.Component);
	
	StraightLine.propTypes = {
		className: _react.PropTypes.string,
		xScale: _react.PropTypes.func.isRequired,
		yScale: _react.PropTypes.func.isRequired,
		xAccessor: _react.PropTypes.func.isRequired,
		stroke: _react.PropTypes.string,
		opacity: _react.PropTypes.number.isRequired,
		yValue: _react.PropTypes.number.isRequired
	};
	
	StraightLine.defaultProps = {
		className: "line ",
		stroke: "#000000",
		opacity: 0.5
	};
	
	StraightLine.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var stroke = props.stroke;
		var opacity = props.opacity;
		var xAccessor = props.xAccessor;
		var yValue = props.yValue;
	
	
		var first = xAccessor(plotData[0]);
		var last = xAccessor(plotData[plotData.length - 1]);
	
		ctx.beginPath();
	
		ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, opacity);
	
		ctx.moveTo(xScale(first), yScale(yValue));
		ctx.lineTo(xScale(last), yScale(yValue));
		ctx.stroke();
	};
	
	exports.default = (0, _wrap2.default)(StraightLine);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _Area = __webpack_require__(31);
	
	var _Area2 = _interopRequireDefault(_Area);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BollingerSeries = function (_Component) {
		_inherits(BollingerSeries, _Component);
	
		function BollingerSeries(props) {
			_classCallCheck(this, BollingerSeries);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BollingerSeries).call(this, props));
	
			_this.yAccessorForTop = _this.yAccessorForTop.bind(_this);
			_this.yAccessorForMiddle = _this.yAccessorForMiddle.bind(_this);
			_this.yAccessorForBottom = _this.yAccessorForBottom.bind(_this);
			_this.yAccessorForScalledBottom = _this.yAccessorForScalledBottom.bind(_this);
			return _this;
		}
	
		_createClass(BollingerSeries, [{
			key: "yAccessorForTop",
			value: function yAccessorForTop(d) {
				var calculator = this.props.calculator;
	
				var yAccessor = calculator.accessor();
				return yAccessor(d) && yAccessor(d).top;
			}
		}, {
			key: "yAccessorForMiddle",
			value: function yAccessorForMiddle(d) {
				var calculator = this.props.calculator;
	
				var yAccessor = calculator.accessor();
				return yAccessor(d) && yAccessor(d).middle;
			}
		}, {
			key: "yAccessorForBottom",
			value: function yAccessorForBottom(d) {
				var calculator = this.props.calculator;
	
				var yAccessor = calculator.accessor();
				return yAccessor(d) && yAccessor(d).bottom;
			}
		}, {
			key: "yAccessorForScalledBottom",
			value: function yAccessorForScalledBottom(scale, d) {
				var calculator = this.props.calculator;
	
				var yAccessor = calculator.accessor();
				return scale(yAccessor(d) && yAccessor(d).bottom);
			}
		}, {
			key: "render",
			value: function render() {
				var _props = this.props;
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var xAccessor = _props.xAccessor;
				var plotData = _props.plotData;
				var type = _props.type;
				var _props2 = this.props;
				var calculator = _props2.calculator;
				var areaClassName = _props2.areaClassName;
				var className = _props2.className;
				var opacity = _props2.opacity;
	
	
				var stroke = calculator.stroke();
				var fill = calculator.fill();
	
				return _react2.default.createElement(
					"g",
					{ className: className },
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForTop,
						plotData: plotData,
						stroke: stroke.top, fill: "none",
						type: type }),
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForMiddle,
						plotData: plotData,
						stroke: stroke.middle, fill: "none",
						type: type }),
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForBottom,
						plotData: plotData,
						stroke: stroke.bottom, fill: "none",
						type: type }),
					_react2.default.createElement(_Area2.default, {
						className: areaClassName,
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForTop,
						base: this.yAccessorForScalledBottom,
						plotData: plotData,
						stroke: "none", fill: fill, opacity: opacity,
						type: type })
				);
			}
		}]);
	
		return BollingerSeries;
	}(_react.Component);
	
	BollingerSeries.propTypes = {
		xAccessor: _react.PropTypes.func,
		calculator: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		plotData: _react.PropTypes.array,
		className: _react.PropTypes.string,
		areaClassName: _react.PropTypes.string,
		opacity: _react.PropTypes.number,
		type: _react.PropTypes.string
	};
	
	BollingerSeries.defaultProps = {
		className: "react-stockcharts-bollinger-band-series",
		areaClassName: "react-stockcharts-bollinger-band-series-area",
		opacity: 0.2
	};
	
	exports.default = (0, _wrap2.default)(BollingerSeries);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(44);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RSISeries = function (_Component) {
		_inherits(RSISeries, _Component);
	
		function RSISeries() {
			_classCallCheck(this, RSISeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(RSISeries).apply(this, arguments));
		}
	
		_createClass(RSISeries, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var className = _props.className;
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var xAccessor = _props.xAccessor;
				var calculator = _props.calculator;
				var plotData = _props.plotData;
				var stroke = _props.stroke;
				var type = _props.type;
	
				var yAccessor = calculator.accessor();
				var overSold = calculator.overSold();
				var middle = calculator.middle();
				var overBought = calculator.overBought();
	
				return _react2.default.createElement(
					"g",
					{ className: className },
					_react2.default.createElement(_Line2.default, {
						className: className,
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: yAccessor,
						plotData: plotData,
						stroke: stroke.line, fill: "none",
						type: type }),
					RSISeries.getHorizontalLine(this.props, overSold, stroke.top),
					RSISeries.getHorizontalLine(this.props, middle, stroke.middle),
					RSISeries.getHorizontalLine(this.props, overBought, stroke.bottom)
				);
			}
		}]);
	
		return RSISeries;
	}(_react.Component);
	
	RSISeries.getHorizontalLine = function (props, yValue, stroke) {
		/* eslint-disable react/prop-types */
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var plotData = props.plotData;
		var type = props.type;
		/* eslint-enable react/prop-types */
	
		return _react2.default.createElement(_StraightLine2.default, {
			stroke: stroke, opacity: 0.3, type: type,
			xScale: xScale, yScale: yScale,
			xAccessor: xAccessor, yAccessor: yAccessor,
			plotData: plotData,
			yValue: yValue });
	};
	
	RSISeries.propTypes = {
		className: _react.PropTypes.string,
	
		calculator: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		xAccessor: _react.PropTypes.func,
		plotData: _react.PropTypes.array,
		stroke: _react.PropTypes.object,
		type: _react.PropTypes.string
	};
	
	RSISeries.defaultProps = {
		className: "react-stockcharts-rsi-series",
		stroke: {
			line: "#000000",
			top: "#964B00",
			middle: "#000000",
			bottom: "#964B00"
		}
	};
	
	exports.default = (0, _wrap2.default)(RSISeries);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _Line = __webpack_require__(28);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _StraightLine = __webpack_require__(44);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StochasticSeries = function (_Component) {
		_inherits(StochasticSeries, _Component);
	
		function StochasticSeries(props) {
			_classCallCheck(this, StochasticSeries);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StochasticSeries).call(this, props));
	
			_this.yAccessorForD = _this.yAccessorForD.bind(_this);
			_this.yAccessorForK = _this.yAccessorForK.bind(_this);
			return _this;
		}
	
		_createClass(StochasticSeries, [{
			key: "yAccessorForD",
			value: function yAccessorForD(d) {
				var calculator = this.props.calculator;
	
				var yAccessor = calculator.accessor();
				return yAccessor(d) && yAccessor(d).D;
			}
		}, {
			key: "yAccessorForK",
			value: function yAccessorForK(d) {
				var calculator = this.props.calculator;
	
				var yAccessor = calculator.accessor();
				return yAccessor(d) && yAccessor(d).K;
			}
		}, {
			key: "render",
			value: function render() {
				var _props = this.props;
				var className = _props.className;
				var calculator = _props.calculator;
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var xAccessor = _props.xAccessor;
				var plotData = _props.plotData;
				var stroke = _props.stroke;
				var type = _props.type;
	
				var seriesStroke = calculator.stroke();
				return _react2.default.createElement(
					"g",
					{ className: className },
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForD,
						plotData: plotData,
						stroke: seriesStroke.D, fill: "none",
						type: type }),
					_react2.default.createElement(_Line2.default, {
						xScale: xScale, yScale: yScale,
						xAccessor: xAccessor, yAccessor: this.yAccessorForK,
						plotData: plotData,
						stroke: seriesStroke.K, fill: "none",
						type: type }),
					StochasticSeries.getHorizontalLine(this.props, calculator.overSold(), stroke.top),
					StochasticSeries.getHorizontalLine(this.props, calculator.middle(), stroke.middle),
					StochasticSeries.getHorizontalLine(this.props, calculator.overBought(), stroke.bottom)
				);
			}
		}]);
	
		return StochasticSeries;
	}(_react.Component);
	
	StochasticSeries.getHorizontalLine = function (props, yValue, stroke) {
	
		/* eslint-disable react/prop-types */
		var xScale = props.xScale;
		var yScale = props.yScale;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var plotData = props.plotData;
		var type = props.type;
		/* eslint-enable react/prop-types */
	
		return _react2.default.createElement(_StraightLine2.default, {
			stroke: stroke, opacity: 0.3, type: type,
			xScale: xScale, yScale: yScale,
			xAccessor: xAccessor, yAccessor: yAccessor,
			plotData: plotData,
			yValue: yValue });
	};
	
	StochasticSeries.propTypes = {
		className: _react.PropTypes.string,
		calculator: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		xAccessor: _react.PropTypes.func,
		plotData: _react.PropTypes.array,
		stroke: _react.PropTypes.object,
		type: _react.PropTypes.string
	};
	
	StochasticSeries.defaultProps = {
		className: "react-stockcharts-stochastic-series",
		stroke: {
			top: "#964B00",
			middle: "#000000",
			bottom: "#964B00"
		}
	};
	
	exports.default = (0, _wrap2.default)(StochasticSeries);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _OverlayBarSeries = __webpack_require__(49);
	
	var _OverlayBarSeries2 = _interopRequireDefault(_OverlayBarSeries);
	
	var _StraightLine = __webpack_require__(44);
	
	var _StraightLine2 = _interopRequireDefault(_StraightLine);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ElderRaySeries = function (_Component) {
		_inherits(ElderRaySeries, _Component);
	
		function ElderRaySeries(props) {
			_classCallCheck(this, ElderRaySeries);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ElderRaySeries).call(this, props));
	
			_this.yAccessorTop = _this.yAccessorTop.bind(_this);
			_this.yAccessorBullTop = _this.yAccessorBullTop.bind(_this);
			_this.yAccessorBearTop = _this.yAccessorBearTop.bind(_this);
			_this.yAccessorBullBottom = _this.yAccessorBullBottom.bind(_this);
			_this.yAccessorBearBottom = _this.yAccessorBearBottom.bind(_this);
			_this.yAccessorForBarBase = _this.yAccessorForBarBase.bind(_this);
			return _this;
		}
	
		_createClass(ElderRaySeries, [{
			key: "yAccessorTop",
			value: function yAccessorTop(d) {
				var calculator = this.props.calculator;
	
				var yAccessor = calculator.accessor();
				return yAccessor(d) && Math.max(yAccessor(d).bullPower, 0);
			}
		}, {
			key: "yAccessorBullTop",
			value: function yAccessorBullTop(d) {
				var calculator = this.props.calculator;
	
				var yAccessor = calculator.accessor();
				return yAccessor(d) && (yAccessor(d).bullPower > 0 ? yAccessor(d).bullPower : undefined);
			}
		}, {
			key: "yAccessorBearTop",
			value: function yAccessorBearTop(d) {
				var calculator = this.props.calculator;
	
				var yAccessor = calculator.accessor();
				return yAccessor(d) && (yAccessor(d).bearPower > 0 ? yAccessor(d).bearPower : undefined);
			}
		}, {
			key: "yAccessorBullBottom",
			value: function yAccessorBullBottom(d) {
				var calculator = this.props.calculator;
	
				var yAccessor = calculator.accessor();
				return yAccessor(d) && (yAccessor(d).bullPower < 0 ? 0 : undefined);
			}
		}, {
			key: "yAccessorBearBottom",
			value: function yAccessorBearBottom(d) {
				var calculator = this.props.calculator;
	
				var yAccessor = calculator.accessor();
				return yAccessor(d) && (yAccessor(d).bullPower < 0 || yAccessor(d).bullPower * yAccessor(d).bearPower < 0 // bullPower is +ve and bearPower is -ve
				? Math.min(0, yAccessor(d).bullPower) : undefined);
			}
		}, {
			key: "yAccessorForBarBase",
			value: function yAccessorForBarBase(xScale, yScale, d) {
				var calculator = this.props.calculator;
	
				var yAccessor = calculator.accessor();
				var y = yAccessor(d) && Math.min(yAccessor(d).bearPower, 0);
				return yScale(y);
			}
		}, {
			key: "fillForEachBar",
			value: function fillForEachBar(d, yAccessorNumber) {
				return yAccessorNumber % 2 === 0 ? "#6BA583" : "#FF0000";
			}
		}, {
			key: "render",
			value: function render() {
				var _props = this.props;
				var className = _props.className;
				var xScale = _props.xScale;
				var yScale = _props.yScale;
				var plotData = _props.plotData;
				var opacity = _props.opacity;
	
	
				return _react2.default.createElement(
					"g",
					{ className: className },
					_react2.default.createElement(_OverlayBarSeries2.default, {
						xScale: xScale, yScale: yScale,
						baseAt: this.yAccessorForBarBase,
						className: "elderray-bar",
						stroke: false, fill: this.fillForEachBar,
						opacity: opacity,
						plotData: plotData,
						yAccessor: [this.yAccessorBullTop, this.yAccessorBearTop, this.yAccessorBullBottom, this.yAccessorBearBottom] }),
					_react2.default.createElement(_StraightLine2.default, { yValue: 0 })
				);
			}
		}]);
	
		return ElderRaySeries;
	}(_react.Component);
	
	ElderRaySeries.propTypes = {
		className: _react.PropTypes.string,
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		xAccessor: _react.PropTypes.func,
		calculator: _react.PropTypes.func.isRequired,
		plotData: _react.PropTypes.array,
		type: _react.PropTypes.string,
		opacity: _react.PropTypes.number,
		divergenceStroke: _react.PropTypes.bool
	};
	
	ElderRaySeries.defaultProps = {
		className: "react-stockcharts-elderray-series",
		zeroLineStroke: "#000000",
		zeroLineOpacity: 0.3,
		opacity: 1,
		divergenceStroke: false
	};
	
	exports.default = (0, _wrap2.default)(ElderRaySeries);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wrap = __webpack_require__(29);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _StackedBarSeries = __webpack_require__(38);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OverlayBarSeries = function (_Component) {
		_inherits(OverlayBarSeries, _Component);
	
		function OverlayBarSeries() {
			_classCallCheck(this, OverlayBarSeries);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(OverlayBarSeries).apply(this, arguments));
		}
	
		_createClass(OverlayBarSeries, [{
			key: "render",
			value: function render() {
				var props = this.props;
	
				return _react2.default.createElement(
					"g",
					{ className: "react-stockcharts-bar-series" },
					OverlayBarSeries.getBarsSVG(props)
				);
			}
		}]);
	
		return OverlayBarSeries;
	}(_react.Component);
	
	OverlayBarSeries.propTypes = {
		baseAt: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
		direction: _react.PropTypes.oneOf(["up", "down"]).isRequired,
		stroke: _react.PropTypes.bool.isRequired,
		widthRatio: _react.PropTypes.number.isRequired,
		opacity: _react.PropTypes.number.isRequired,
		fill: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		className: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
		xAccessor: _react.PropTypes.func,
		yAccessor: _react.PropTypes.arrayOf(_react.PropTypes.func),
		xScale: _react.PropTypes.func,
		yScale: _react.PropTypes.func,
		plotData: _react.PropTypes.array
	};
	
	OverlayBarSeries.defaultProps = {
		baseAt: function baseAt(xScale, yScale /* , d*/) {
			return (0, _utils.first)(yScale.range());
		},
		direction: "up",
		className: "bar",
		stroke: false,
		fill: "#4682B4",
		opacity: 1,
		widthRatio: 0.5
	};
	
	OverlayBarSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
	
	
		var bars = OverlayBarSeries.getBars(props, xAccessor, yAccessor, xScale, yScale, plotData);
	
		// console.log(bars);
		(0, _StackedBarSeries.drawOnCanvas2)(props, ctx, bars);
	};
	
	OverlayBarSeries.getBarsSVG = function (props) {
	
		/* eslint-disable react/prop-types */
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var xScale = props.xScale;
		var yScale = props.yScale;
		var plotData = props.plotData;
		/* eslint-disable react/prop-types */
	
		var bars = OverlayBarSeries.getBars(props, xAccessor, yAccessor, xScale, yScale, plotData);
		return (0, _StackedBarSeries.getBarsSVG2)(props, bars);
	};
	
	OverlayBarSeries.getBars = function (props, xAccessor, yAccessor, xScale, yScale, plotData) {
		var baseAt = props.baseAt;
		var className = props.className;
		var fill = props.fill;
		var stroke = props.stroke;
		var widthRatio = props.widthRatio;
	
	
		var getClassName = _d2.default.functor(className);
		var getFill = _d2.default.functor(fill);
		var getBase = _d2.default.functor(baseAt);
	
		var width = Math.abs(xScale(xAccessor((0, _utils.last)(plotData))) - xScale(xAccessor((0, _utils.first)(plotData))));
	
		var bw = width / (plotData.length - 1) * widthRatio;
		var barWidth = Math.round(bw);
		var offset = barWidth === 1 ? 0 : 0.5 * barWidth;
	
		// console.log(xScale.domain(), yScale.domain());
	
		var bars = plotData.map(function (d) {
			var innerBars = yAccessor.map(function (eachYAccessor, i) {
				var yValue = eachYAccessor(d);
				if ((0, _utils.isNotDefined)(yValue)) return undefined;
	
				var xValue = xAccessor(d);
				var x = Math.round(xScale(xValue)) - offset;
				var y = yScale(yValue);
				// console.log(yValue, y, xValue, x)
				return {
					width: barWidth,
					x: x,
					y: y,
					className: getClassName(d, i),
					stroke: stroke ? getFill(d, i) : "none",
					fill: getFill(d, i),
					i: i
				};
			}).filter(function (yValue) {
				return (0, _utils.isDefined)(yValue);
			});
	
			var b = getBase(xScale, yScale, d);
			var h;
			for (var i = innerBars.length - 1; i >= 0; i--) {
				h = b - innerBars[i].y;
				if (h < 0) {
					innerBars[i].y = b;
					h = -1 * h;
				}
				innerBars[i].height = h;
				b = innerBars[i].y;
			};
			return innerBars;
		});
	
		return _d2.default.merge(bars);
	};
	
	// export { OverlayBarSeries };
	exports.default = (0, _wrap2.default)(OverlayBarSeries);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.eodIntervalCalculator = exports.identityIntervalCalculator = exports.financeEODDiscontiniousScale = exports.financeEODCalculator = undefined;
	
	var _financeEODCalculator = __webpack_require__(23);
	
	var _financeEODCalculator2 = _interopRequireDefault(_financeEODCalculator);
	
	var _financeEODDiscontiniousScale = __webpack_require__(51);
	
	var _financeEODDiscontiniousScale2 = _interopRequireDefault(_financeEODDiscontiniousScale);
	
	var _eodIntervalCalculator = __webpack_require__(22);
	
	var _eodIntervalCalculator2 = _interopRequireDefault(_eodIntervalCalculator);
	
	var _identityIntervalCalculator = __webpack_require__(52);
	
	var _identityIntervalCalculator2 = _interopRequireDefault(_identityIntervalCalculator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.financeEODCalculator = _financeEODCalculator2.default;
	exports.financeEODDiscontiniousScale = _financeEODDiscontiniousScale2.default;
	exports.identityIntervalCalculator = _identityIntervalCalculator2.default;
	exports.eodIntervalCalculator = _eodIntervalCalculator2.default;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = financeEODScale;
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function financeEODScale() {
		var indexAccessor = arguments.length <= 0 || arguments[0] === undefined ? function (d) {
			return d.idx;
		} : arguments[0];
		var dateAccessor = arguments.length <= 1 || arguments[1] === undefined ? function (d) {
			return d.date;
		} : arguments[1];
		var data = arguments.length <= 2 || arguments[2] === undefined ? [0, 1] : arguments[2];
		var backingLinearScale = arguments.length <= 3 || arguments[3] === undefined ? _d2.default.scale.linear() : arguments[3];
	
	
		var timeScaleSteps = [{ step: 864e5, f: function f(d) {
				return (0, _utils.isDefined)(dateAccessor(d)) && true;
			} }, // 1-day
		{ step: 1728e5, f: function f(d, i) {
				return (0, _utils.isDefined)(dateAccessor(d)) && i % 2 === 0;
			} }, // 2-day
		{ step: 8380e5, f: function f(d, i, arr) {
				if (d.startOfMonth) return true;
				var list = [];
				if (i - 2 >= 0) list.push(arr[i - 2]);
				if (i - 1 >= 0) list.push(arr[i - 1]);
				list.push(arr[i]);
				if (i + 1 <= arr.length - 1) list.push(arr[i + 1]);
				if (i + 2 <= arr.length - 1) list.push(arr[i + 2]);
				var sm = list.map(function (each) {
					return each.startOfMonth;
				}).reduce(function (prev, curr) {
					return prev || curr;
				});
				return sm ? false : d.startOfWeek;
			} }, // 1-week
		{ step: 3525e6, f: function f(d) {
				return d.startOfMonth;
			} }, // 1-month
		{ step: 7776e6, f: function f(d) {
				return d.startOfQuarter;
			} }, // 3-month
		{ step: 31536e6, f: function f(d) {
				return d.startOfYear;
			} }, // 1-year
		{ step: 91536e15, f: function f(d) {
				return (0, _utils.isDefined)(dateAccessor(d)) && d.startOfYear && dateAccessor(d).getFullYear() % 2 === 0;
			} } // 2-year
		];
		var timeScaleStepsBisector = _d2.default.bisector(function (d) {
			return d.step;
		}).left;
		var bisectByIndex = _d2.default.bisector(function (d) {
			return indexAccessor(d);
		}).left;
		var tickFormat = [[_d2.default.time.format("%Y"), function (d) {
			return d.startOfYear;
		}], [_d2.default.time.format("%b %Y"), function (d) {
			return d.startOfQuarter;
		}], [_d2.default.time.format("%b"), function (d) {
			return d.startOfMonth;
		}], [_d2.default.time.format("%d %b"), function (d) {
			return d.startOfWeek;
		}], [_d2.default.time.format("%a %d "), function () /* d */{
			return true;
		}]];
		function formater(d) {
			var i = 0,
			    format = tickFormat[i];
			while (!format[1](d)) {
				format = tickFormat[++i];
			}var tickDisplay = format[0](dateAccessor(d));
			// console.log(t;ickDisplay);
			return tickDisplay;
		}
	
		function scale(x) {
			return backingLinearScale(x);
		}
		scale.isPolyLinear = function () {
			return true;
		};
		scale.invert = function (x) {
			return backingLinearScale.invert(x);
		};
		scale.data = function (x) {
			if (!arguments.length) {
				return data;
			} else {
				data = x;
				// this.domain([data.first().index, data.last().index]);
				this.domain([indexAccessor(data[0]), indexAccessor(data[data.length - 1])]);
				return scale;
			}
		};
		scale.indexAccessor = function (x) {
			if (!arguments.length) return indexAccessor;
			indexAccessor = x;
			return scale;
		};
		scale.dateAccessor = function (x) {
			if (!arguments.length) return dateAccessor;
			dateAccessor = x;
			return scale;
		};
		scale.domain = function (x) {
			if (!arguments.length) return backingLinearScale.domain();
			// console.log("before = %s, after = %s", JSON.stringify(backingLinearScale.domain()), JSON.stringify(x))
	
			var d = [x[0], x[1]];
			// console.log(d);
			backingLinearScale.domain(d);
			return scale;
		};
		scale.range = function (x) {
			if (!arguments.length) return backingLinearScale.range();
			backingLinearScale.range(x);
			return scale;
		};
		scale.rangeRound = function (x) {
			return backingLinearScale.range(x);
		};
		scale.clamp = function (x) {
			if (!arguments.length) return backingLinearScale.clamp();
			backingLinearScale.clamp(x);
			return scale;
		};
		scale.interpolate = function (x) {
			if (!arguments.length) return backingLinearScale.interpolate();
			backingLinearScale.interpolate(x);
			return scale;
		};
		scale.ticks = function (m) {
			var start,
			    end,
			    count = 0;
			data.forEach(function (d) {
				if ((0, _utils.isDefined)(dateAccessor(d))) {
					if ((0, _utils.isNotDefined)(start)) start = d;
					end = d;
					count++;
				}
			});
			// var start = head(data);
			// var end = last(data);
			// console.log(data);
			m = count / data.length * m;
			var span = dateAccessor(end).getTime() - dateAccessor(start).getTime();
			var target = span / m;
			/*
	  console.log(dateAccessor(data[data.length - 1])
	  	, data[0]
	  	, span
	  	, m
	  	, target
	  	, timeScaleStepsBisector(d3_time_scaleSteps, target)
	  	);
	  */
			var ticks = data.filter(timeScaleSteps[timeScaleStepsBisector(timeScaleSteps, target)].f).map(indexAccessor);
			// return the index of all the ticks to be displayed,
			// console.log(target, span, m, ticks);
			return ticks;
		};
		scale.tickFormat = function () /* ticks */{
			return function (d) {
				// for each index received from ticks() function derive the formatted output
				var tickIndex = bisectByIndex(data, d);
				return formater(data[tickIndex]);
			};
		};
		scale.nice = function (m) {
			backingLinearScale.nice(m);
			return scale;
		};
		scale.copy = function () {
			return financeEODScale(indexAccessor, dateAccessor, data, backingLinearScale.copy());
		};
		return scale;
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var dataPreProcessor, forIntervals, startingWith;
		function calculator(_data) {
			return {
				data: function data() {
					return _data;
				}
			};
		}
		calculator.dataPreProcessor = function (x) {
			if (!arguments.length) {
				return dataPreProcessor;
			}
			dataPreProcessor = x;
			return calculator;
		};
		calculator.forIntervals = function (x) {
			if (!arguments.length) {
				return forIntervals;
			}
			forIntervals = x;
			return calculator;
		};
		calculator.startingWith = function (x) {
			if (!arguments.length) {
				return startingWith;
			}
			startingWith = x;
			return calculator;
		};
	
		return calculator;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.CurrentCoordinate = exports.MouseCoordinates = exports.EdgeIndicator = undefined;
	
	var _EdgeIndicator = __webpack_require__(54);
	
	var _EdgeIndicator2 = _interopRequireDefault(_EdgeIndicator);
	
	var _MouseCoordinates = __webpack_require__(56);
	
	var _MouseCoordinates2 = _interopRequireDefault(_MouseCoordinates);
	
	var _CurrentCoordinate = __webpack_require__(58);
	
	var _CurrentCoordinate2 = _interopRequireDefault(_CurrentCoordinate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.EdgeIndicator = _EdgeIndicator2.default;
	exports.MouseCoordinates = _MouseCoordinates2.default;
	exports.CurrentCoordinate = _CurrentCoordinate2.default;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _EdgeCoordinate = __webpack_require__(55);
	
	var _EdgeCoordinate2 = _interopRequireDefault(_EdgeCoordinate);
	
	var _pure = __webpack_require__(30);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _utils = __webpack_require__(5);
	
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

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EdgeCoordinate = function (_Component) {
		_inherits(EdgeCoordinate, _Component);
	
		function EdgeCoordinate() {
			_classCallCheck(this, EdgeCoordinate);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(EdgeCoordinate).apply(this, arguments));
		}
	
		_createClass(EdgeCoordinate, [{
			key: "render",
			value: function render() {
				var className = this.props.className;
	
	
				var edge = EdgeCoordinate.helper(this.props);
				if (edge === null) return null;
				var line, coordinateBase, coordinate;
	
				if ((0, _utils.isDefined)(edge.line)) {
					line = _react2.default.createElement("line", {
						className: "react-stockcharts-cross-hair", opacity: edge.line.opacity, stroke: edge.line.stroke,
						x1: edge.line.x1, y1: edge.line.y1,
						x2: edge.line.x2, y2: edge.line.y2 });
				}
				if ((0, _utils.isDefined)(edge.coordinateBase)) {
					coordinateBase = _react2.default.createElement("rect", { key: 1, className: "react-stockchart-text-background",
						x: edge.coordinateBase.edgeXRect,
						y: edge.coordinateBase.edgeYRect,
						height: edge.coordinateBase.rectHeight, width: edge.coordinateBase.rectWidth,
						fill: edge.coordinateBase.fill, opacity: edge.coordinateBase.opacity });
	
					coordinate = _react2.default.createElement(
						"text",
						{ key: 2, x: edge.coordinate.edgeXText,
							y: edge.coordinate.edgeYText,
							textAnchor: edge.coordinate.textAnchor,
							fontFamily: edge.coordinate.fontFamily,
							fontSize: edge.coordinate.fontSize,
							dy: ".32em", fill: edge.coordinate.textFill },
						edge.coordinate.displayCoordinate
					);
				}
				return _react2.default.createElement(
					"g",
					{ className: className },
					line,
					coordinateBase,
					coordinate
				);
			}
		}]);
	
		return EdgeCoordinate;
	}(_react.Component);
	
	EdgeCoordinate.propTypes = {
		className: _react.PropTypes.string,
		type: _react.PropTypes.oneOf(["vertical", "horizontal"]).isRequired,
		coordinate: _react.PropTypes.any.isRequired,
		x1: _react.PropTypes.number.isRequired,
		y1: _react.PropTypes.number.isRequired,
		x2: _react.PropTypes.number.isRequired,
		y2: _react.PropTypes.number.isRequired,
		orient: _react.PropTypes.oneOf(["bottom", "top", "left", "right"]),
		rectWidth: _react.PropTypes.number,
		hideLine: _react.PropTypes.bool,
		fill: _react.PropTypes.string,
		opacity: _react.PropTypes.number,
		fontFamily: _react.PropTypes.string.isRequired,
		fontSize: _react.PropTypes.number.isRequired,
		rectHeight: _react.PropTypes.number.isRequired
	};
	
	EdgeCoordinate.defaultProps = {
		className: "react-stockcharts-edgecoordinate",
		orient: "left",
		hideLine: false,
		fill: "#8a8a8a",
		opacity: 1,
		textFill: "#FFFFFF",
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: 13,
		lineStroke: "#000000",
		lineOpacity: 0.3,
		rectHeight: 20
	};
	
	EdgeCoordinate.helper = function (props) {
		var displayCoordinate = props.coordinate;
		var show = props.show;
		var rectWidth = props.rectWidth;
		var type = props.type;
		var orient = props.orient;
		var edgeAt = props.edgeAt;
		var hideLine = props.hideLine;
		var fill = props.fill;
		var opacity = props.opacity;
		var fontFamily = props.fontFamily;
		var fontSize = props.fontSize;
		var textFill = props.textFill;
		var lineStroke = props.lineStroke;
		var lineOpacity = props.lineOpacity;
		var rectHeight = props.rectHeight;
		var x1 = props.x1;
		var y1 = props.y1;
		var x2 = props.x2;
		var y2 = props.y2;
	
	
		if (!show) return null;
	
		rectWidth = rectWidth ? rectWidth : type === "horizontal" ? 60 : 100;
	
		var edgeXRect, edgeYRect, edgeXText, edgeYText;
	
		if (type === "horizontal") {
	
			edgeXRect = orient === "right" ? edgeAt + 1 : edgeAt - rectWidth - 1;
			edgeYRect = y1 - rectHeight / 2;
			edgeXText = orient === "right" ? edgeAt + rectWidth / 2 : edgeAt - rectWidth / 2;
			edgeYText = y1;
		} else {
			edgeXRect = x1 - rectWidth / 2;
			edgeYRect = orient === "bottom" ? edgeAt : edgeAt - rectHeight;
			edgeXText = x1;
			edgeYText = orient === "bottom" ? edgeAt + rectHeight / 2 : edgeAt - rectHeight / 2;
		}
		var coordinateBase,
		    coordinate,
		    textAnchor = "middle";
		if ((0, _utils.isDefined)(displayCoordinate)) {
			coordinateBase = {
				edgeXRect: edgeXRect, edgeYRect: edgeYRect, rectHeight: rectHeight, rectWidth: rectWidth, fill: fill, opacity: opacity
			};
			coordinate = {
				edgeXText: edgeXText, edgeYText: edgeYText, textAnchor: textAnchor, fontFamily: fontFamily, fontSize: fontSize, textFill: textFill, displayCoordinate: displayCoordinate
			};
		}
		var line = hideLine ? undefined : {
			opacity: lineOpacity, stroke: lineStroke, x1: x1, y1: y1, x2: x2, y2: y2
		};
		return {
			coordinateBase: coordinateBase, coordinate: coordinate, line: line
		};
	};
	
	EdgeCoordinate.drawOnCanvasStatic = function (ctx, props) {
		props = _extends({}, EdgeCoordinate.defaultProps, props);
	
		var edge = EdgeCoordinate.helper(props);
	
		if (edge === null) return;
	
		if ((0, _utils.isDefined)(edge.coordinateBase)) {
			ctx.fillStyle = (0, _utils.hexToRGBA)(edge.coordinateBase.fill, edge.coordinateBase.opacity);
	
			ctx.beginPath();
			ctx.rect(edge.coordinateBase.edgeXRect, edge.coordinateBase.edgeYRect, edge.coordinateBase.rectWidth, edge.coordinateBase.rectHeight);
			ctx.fill();
	
			ctx.font = edge.coordinate.fontSize + "px " + edge.coordinate.fontFamily;
			ctx.fillStyle = edge.coordinate.textFill;
			ctx.textAlign = edge.coordinate.textAnchor === "middle" ? "center" : edge.coordinate.textAnchor;
			ctx.textBaseline = "middle";
	
			ctx.fillText(edge.coordinate.displayCoordinate, edge.coordinate.edgeXText, edge.coordinate.edgeYText);
		}
		if ((0, _utils.isDefined)(edge.line)) {
			ctx.strokeStyle = (0, _utils.hexToRGBA)(edge.line.stroke, edge.line.opacity);
	
			ctx.beginPath();
			ctx.moveTo(edge.line.x1, edge.line.y1);
			ctx.lineTo(edge.line.x2, edge.line.y2);
			ctx.stroke();
		}
	};
	
	exports.default = EdgeCoordinate;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _pure = __webpack_require__(30);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _CrossHair = __webpack_require__(57);
	
	var _CrossHair2 = _interopRequireDefault(_CrossHair);
	
	var _utils = __webpack_require__(5);
	
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

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _EdgeCoordinate = __webpack_require__(55);
	
	var _EdgeCoordinate2 = _interopRequireDefault(_EdgeCoordinate);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CrossHair = function (_Component) {
		_inherits(CrossHair, _Component);
	
		function CrossHair() {
			_classCallCheck(this, CrossHair);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(CrossHair).apply(this, arguments));
		}
	
		_createClass(CrossHair, [{
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps) {
				return nextProps.mouseXY !== this.props.mouseXY;
			}
		}, {
			key: "render",
			value: function render() {
				var result = CrossHair.helper(this.props);
				var line = result.line;
				var edges = result.edges;
	
				var svgLine = (0, _utils.isDefined)(line) ? _react2.default.createElement("line", { className: "react-stockcharts-cross-hair", opacity: line.opacity, stroke: line.stroke,
					x1: line.x1, y1: line.y1,
					x2: line.x2, y2: line.y2 }) : null;
	
				return _react2.default.createElement(
					"g",
					{ className: "crosshair " },
					svgLine,
					edges.map(function (edge, idx) {
						return _react2.default.createElement(_EdgeCoordinate2.default, _extends({
							key: idx,
							className: "horizontal"
						}, edge));
					})
				);
			}
		}]);
	
		return CrossHair;
	}(_react.Component);
	
	CrossHair.propTypes = {
		yAxisPad: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired,
		width: _react.PropTypes.number.isRequired,
		mouseXY: _react.PropTypes.array.isRequired,
		xDisplayValue: _react.PropTypes.string.isRequired,
		edges: _react.PropTypes.array.isRequired
	};
	
	CrossHair.defaultProps = {
		yAxisPad: 5
	};
	
	CrossHair.helper = function (props) {
		var width = props.width;
		var edges = props.edges;
		var yAxisPad = props.yAxisPad;
		var mouseXY = props.mouseXY;
		var xDisplayValue = props.xDisplayValue;
		var height = props.height;
		var stroke = props.stroke;
		var opacity = props.opacity;
		var textStroke = props.textStroke;
		var textBGFill = props.textBGFill;
		var textBGopacity = props.textBGopacity;
		var fontFamily = props.fontFamily;
		var fontSize = props.fontSize;
	
		var x1 = 0,
		    x2 = width;
	
		var edges = edges.map(function (edge) {
			if (edge.at === "left") {
				x1 = -yAxisPad;
			}
			if (edge.at === "right") {
				x2 = width + yAxisPad;
			}
	
			return _extends({}, edge, {
				type: "horizontal",
				show: true,
				x1: 0,
				y1: mouseXY[1],
				x2: 0,
				y2: mouseXY[1],
				coordinate: edge.yDisplayValue,
				edgeAt: edge.at === "left" ? x1 : x2,
				orient: edge.at,
				hideLine: true,
				lineStroke: stroke,
				lineOpacity: opacity,
				textFill: textStroke,
				fill: textBGFill,
				opacity: textBGopacity,
				fontFamily: fontFamily, fontSize: fontSize
			});
		});
		edges.push(_extends({}, props, {
			type: "vertical",
			show: true,
			x1: mouseXY[0],
			y1: 0,
			x2: mouseXY[0],
			y2: height,
			coordinate: xDisplayValue,
			edgeAt: height,
			orient: "bottom",
			lineStroke: stroke,
			lineOpacity: opacity,
			textFill: textStroke,
			fill: textBGFill,
			opacity: textBGopacity,
			fontFamily: fontFamily, fontSize: fontSize
		}));
	
		var line;
		if (edges.length > 1) {
			line = {
				opacity: opacity,
				stroke: stroke,
				x1: x1,
				y1: mouseXY[1],
				x2: x2,
				y2: mouseXY[1]
			};
		}
		return { edges: edges, line: line };
	};
	
	CrossHair.drawOnCanvasStatic = function (ctx, props) {
		props = _extends({}, CrossHair.defaultProps, props);
		var result = CrossHair.helper(props);
		var line = result.line;
		var edges = result.edges;
	
	
		edges.forEach(function (edge) {
			return _EdgeCoordinate2.default.drawOnCanvasStatic(ctx, edge);
		});
	
		if (line) {
			ctx.strokeStyle = (0, _utils.hexToRGBA)(line.stroke, line.opacity);
	
			ctx.beginPath();
			ctx.moveTo(line.x1, line.y1);
			ctx.lineTo(line.x2, line.y2);
			ctx.stroke();
		}
	};
	
	exports.default = CrossHair;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(30);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CurrentCoordinate = function (_Component) {
		_inherits(CurrentCoordinate, _Component);
	
		function CurrentCoordinate() {
			_classCallCheck(this, CurrentCoordinate);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(CurrentCoordinate).apply(this, arguments));
		}
	
		_createClass(CurrentCoordinate, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _props = this.props;
				var chartCanvasType = _props.chartCanvasType;
				var getCanvasContexts = _props.getCanvasContexts;
	
	
				if (chartCanvasType !== "svg" && (0, _utils.isDefined)(getCanvasContexts)) {
					var contexts = getCanvasContexts();
					if (contexts) CurrentCoordinate.drawOnCanvas(contexts.mouseCoord, this.props);
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
				// console.log("HERE111");
	
				var draw = CurrentCoordinate.drawOnCanvasStatic.bind(null, nextProps);
				var id = nextProps.id;
				var chartId = nextProps.chartId;
	
	
				if (!(0, _utils.shallowEqual)(this.props, nextProps)) {
					var temp = nextProps.getAllCanvasDrawCallback().filter(function (each) {
						return each.type === "currentcoordinate";
					}).filter(function (each) {
						return each.chartId === chartId;
					}).filter(function (each) {
						return each.id === id;
					});
	
					if (temp.length === 0) {
						nextProps.callbackForCanvasDraw({
							type: "currentcoordinate",
							id: id, chartId: chartId, draw: draw
						});
					} else {
						nextProps.callbackForCanvasDraw(temp[0], {
							type: "currentcoordinate",
							id: id, chartId: chartId, draw: draw
						});
					}
				}
			}
		}, {
			key: "render",
			value: function render() {
				var className = this.props.className;
				var _props2 = this.props;
				var chartCanvasType = _props2.chartCanvasType;
				var show = _props2.show;
				var chartConfig = _props2.chartConfig;
				var currentItem = _props2.currentItem;
				var xScale = _props2.xScale;
	
	
				if (chartCanvasType !== "svg") return null;
	
				var circle = CurrentCoordinate.helper(this.props, show, xScale, chartConfig.yScale, currentItem);
	
				if (!circle) return null;
	
				return _react2.default.createElement("circle", { className: className, cx: circle.x, cy: circle.y, r: circle.r, fill: circle.fill });
			}
		}]);
	
		return CurrentCoordinate;
	}(_react.Component);
	
	CurrentCoordinate.propTypes = {
		id: _react.PropTypes.number.isRequired,
		yAccessor: _react.PropTypes.func,
		r: _react.PropTypes.number.isRequired,
		className: _react.PropTypes.string,
		xAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func.isRequired,
		chartCanvasType: _react.PropTypes.string,
		getCanvasContexts: _react.PropTypes.func,
		show: _react.PropTypes.bool,
		chartId: _react.PropTypes.number.isRequired,
	
		chartConfig: _react.PropTypes.object.isRequired,
		currentItem: _react.PropTypes.object.isRequired
	
	};
	
	CurrentCoordinate.defaultProps = {
		r: 3,
		className: "react-stockcharts-current-coordinate"
	};
	
	CurrentCoordinate.drawOnCanvas = function (canvasContext, props) {
		var chartConfig = props.chartConfig;
		var currentItem = props.currentItem;
		var xScale = props.xScale;
		var show = props.show;
	
	
		CurrentCoordinate.drawOnCanvasStatic(props, canvasContext, show, xScale, chartConfig.yScale, currentItem);
	};
	
	// mouseContext, show, xScale, mouseXY, currentCharts, chartConfig, currentItem
	
	CurrentCoordinate.drawOnCanvasStatic = function (props, ctx, show, xScale, yScale, currentItem) {
		var canvasOriginX = props.canvasOriginX;
		var canvasOriginY = props.canvasOriginY;
	
	
		var circle = CurrentCoordinate.helper(props, show, xScale, yScale, currentItem);
	
		if (!circle) return null;
	
		ctx.save();
	
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(canvasOriginX, canvasOriginY);
	
		ctx.fillStyle = circle.fill;
		ctx.beginPath();
		ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI, false);
		ctx.fill();
		// CurrentCoordinate.drawOnCanvasStatic(ctx, pointer);
		ctx.restore();
	};
	
	CurrentCoordinate.helper = function (props, show, xScale, yScale, currentItem) {
		var fill = props.fill;
		var xAccessor = props.xAccessor;
		var yAccessor = props.yAccessor;
		var r = props.r;
	
		// console.log(show);
	
		if (!show || (0, _utils.isNotDefined)(currentItem)) return null;
	
		var xValue = xAccessor(currentItem);
		var yValue = yAccessor(currentItem);
	
		if ((0, _utils.isNotDefined)(yValue)) return null;
	
		// console.log(chartConfig);
		var x = Math.round(xScale(xValue));
		var y = Math.round(yScale(yValue));
	
		return { x: x, y: y, r: r, fill: fill };
	};
	
	exports.default = (0, _pure2.default)(CurrentCoordinate, {
		show: _react.PropTypes.bool.isRequired,
		currentItem: _react.PropTypes.object.isRequired,
		chartConfig: _react.PropTypes.object.isRequired,
		mouseXY: _react.PropTypes.array, // this is to avoid the flicker
		canvasOriginX: _react.PropTypes.number,
		canvasOriginY: _react.PropTypes.number,
	
		xAccessor: _react.PropTypes.func.isRequired,
		xScale: _react.PropTypes.func.isRequired,
		chartId: _react.PropTypes.number.isRequired,
		getCanvasContexts: _react.PropTypes.func,
		margin: _react.PropTypes.object.isRequired,
		callbackForCanvasDraw: _react.PropTypes.func.isRequired,
		getAllCanvasDrawCallback: _react.PropTypes.func,
		chartCanvasType: _react.PropTypes.string.isRequired
	}, ["mouseXY"]);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.defaultOptions = exports.compare = exports.elderImpulse = exports.change = exports.elderRay = exports.forceIndex = exports.stochasticOscilator = exports.atr = exports.rsi = exports.macd = exports.renko = exports.pointAndFigure = exports.kagi = exports.haikinAshi = exports.bollingerBand = exports.sma = exports.ema = undefined;
	
	var _defaultOptions = __webpack_require__(60);
	
	var defaultOptions = _interopRequireWildcard(_defaultOptions);
	
	var _ema = __webpack_require__(61);
	
	var _ema2 = _interopRequireDefault(_ema);
	
	var _sma = __webpack_require__(77);
	
	var _sma2 = _interopRequireDefault(_sma);
	
	var _bollingerBand = __webpack_require__(78);
	
	var _bollingerBand2 = _interopRequireDefault(_bollingerBand);
	
	var _haikinAshi = __webpack_require__(79);
	
	var _haikinAshi2 = _interopRequireDefault(_haikinAshi);
	
	var _kagi = __webpack_require__(80);
	
	var _kagi2 = _interopRequireDefault(_kagi);
	
	var _pointAndFigure = __webpack_require__(81);
	
	var _pointAndFigure2 = _interopRequireDefault(_pointAndFigure);
	
	var _renko = __webpack_require__(82);
	
	var _renko2 = _interopRequireDefault(_renko);
	
	var _macd = __webpack_require__(83);
	
	var _macd2 = _interopRequireDefault(_macd);
	
	var _rsi = __webpack_require__(84);
	
	var _rsi2 = _interopRequireDefault(_rsi);
	
	var _atr = __webpack_require__(85);
	
	var _atr2 = _interopRequireDefault(_atr);
	
	var _stochasticOscilator = __webpack_require__(86);
	
	var _stochasticOscilator2 = _interopRequireDefault(_stochasticOscilator);
	
	var _forceIndex = __webpack_require__(87);
	
	var _forceIndex2 = _interopRequireDefault(_forceIndex);
	
	var _elderRay = __webpack_require__(88);
	
	var _elderRay2 = _interopRequireDefault(_elderRay);
	
	var _change = __webpack_require__(89);
	
	var _change2 = _interopRequireDefault(_change);
	
	var _elderImpulse = __webpack_require__(90);
	
	var _elderImpulse2 = _interopRequireDefault(_elderImpulse);
	
	var _compare = __webpack_require__(91);
	
	var _compare2 = _interopRequireDefault(_compare);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.ema = _ema2.default;
	exports.sma = _sma2.default;
	exports.bollingerBand = _bollingerBand2.default;
	exports.haikinAshi = _haikinAshi2.default;
	exports.kagi = _kagi2.default;
	exports.pointAndFigure = _pointAndFigure2.default;
	exports.renko = _renko2.default;
	exports.macd = _macd2.default;
	exports.rsi = _rsi2.default;
	exports.atr = _atr2.default;
	exports.stochasticOscilator = _stochasticOscilator2.default;
	exports.forceIndex = _forceIndex2.default;
	exports.elderRay = _elderRay2.default;
	exports.change = _change2.default;
	exports.elderImpulse = _elderImpulse2.default;
	exports.compare = _compare2.default;
	exports.defaultOptions = defaultOptions;

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var BollingerBand = exports.BollingerBand = {
		period: 20,
		source: function source(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		multiplier: 2,
		movingAverageType: "sma"
	};
	
	var ATR = exports.ATR = {
		period: 14,
		source: function source(d) {
			return { open: d.open, high: d.high, low: d.low, close: d.close };
		}
	};
	
	var ForceIndex = exports.ForceIndex = {
		close: function close(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		volume: function volume(d) {
			return d.volume;
		}
	};
	
	var ElderRay = exports.ElderRay = {
		period: 13,
		source: function source(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		movingAverageType: "sma",
		ohlc: function ohlc(d) {
			return { open: d.open, high: d.high, low: d.low, close: d.close };
		}
	};
	
	var ElderImpulse = exports.ElderImpulse = {
		stroke: {
			up: "#6BA583",
			down: "#FF0000",
			neutral: "#0000FF"
		}
	};
	
	var MACD = exports.MACD = {
		fast: 12,
		slow: 26,
		signal: 9,
		source: function source(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		fill: {
			divergence: "#4682B4"
		},
		stroke: {
			macd: "#FF0000",
			signal: "#00F300"
		}
	};
	
	var FullStochasticOscillator = exports.FullStochasticOscillator = {
		period: 12,
		K: 3,
		D: 3,
		source: function source(d) {
			return { open: d.open, high: d.high, low: d.low, close: d.close };
		},
		stroke: {
			D: "#17becf",
			K: "#ff7f0e"
		},
		overSold: 80,
		middle: 50,
		overBought: 20
	};
	
	var RSI = exports.RSI = {
		period: 14,
		source: function source(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		overSold: 70,
		middle: 50,
		overBought: 30
	};
	
	var EMA = exports.EMA = {
		source: function source(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		period: 10
	};
	
	var SMA = exports.SMA = {
		source: function source(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		period: 10
	};
	
	var Kagi = exports.Kagi = {
		reversalType: "ATR", // "ATR", "FIXED"
		period: 14,
		reversal: 2,
		source: function source(d) {
			return d.close;
		}, // "high", "low", "open", "close"
		dateAccessor: function dateAccessor(d) {
			return d.date;
		},
		dateMutator: function dateMutator(d, date) {
			d.date = date;
		},
		indexMutator: function indexMutator(d, idx) {
			d.idx = idx;
		}
	};
	
	var Renko = exports.Renko = {
		reversalType: "ATR", // "ATR", "FIXED"
		period: 14,
		fixedBrickSize: 2,
		source: function source(d) {
			return { high: d.high, low: d.low };
		}, // "close", "hi/lo"
		dateAccessor: function dateAccessor(d) {
			return d.date;
		},
		dateMutator: function dateMutator(d, date) {
			d.date = date;
		},
		indexMutator: function indexMutator(d, idx) {
			d.idx = idx;
		},
		indexAccessor: function indexAccessor(d) {
			return d.idx;
		}
	};
	
	var PointAndFigure = exports.PointAndFigure = {
		boxSize: 0.5,
		reversal: 3,
		source: function source(d) {
			return { high: d.high, low: d.low };
		}, // "close", "hi/lo"
		dateAccessor: function dateAccessor(d) {
			return d.date;
		},
		dateMutator: function dateMutator(d, date) {
			d.date = date;
		},
		indexMutator: function indexMutator(d, idx) {
			d.idx = idx;
		},
		indexAccessor: function indexAccessor(d) {
			return d.idx;
		}
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.ema;
		});
	
		var underlyingAlgorithm = (0, _algorithm.ema)().windowSize(_defaultOptions.EMA.period).source(_defaultOptions.EMA.source);
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.ema = indicator;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		};
		base.tooltipLabel(function () {
			return ALGORITHM_TYPE + "(" + underlyingAlgorithm.windowSize() + ")";
		});
	
		_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
		_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "source");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	var _defaultOptions = __webpack_require__(60);
	
	var _algorithm = __webpack_require__(62);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "EMA";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.compare = exports.elderRay = exports.forceIndex = exports.atr = exports.sto = exports.rsi = exports.macd = exports.renko = exports.pointAndFigure = exports.kagi = exports.haikinAshi = exports.bollingerband = exports.ema = undefined;
	
	var _ema = __webpack_require__(63);
	
	var _ema2 = _interopRequireDefault(_ema);
	
	var _bollingerband = __webpack_require__(64);
	
	var _bollingerband2 = _interopRequireDefault(_bollingerband);
	
	var _haikinAshi = __webpack_require__(65);
	
	var _haikinAshi2 = _interopRequireDefault(_haikinAshi);
	
	var _kagi = __webpack_require__(66);
	
	var _kagi2 = _interopRequireDefault(_kagi);
	
	var _pointAndFigure = __webpack_require__(68);
	
	var _pointAndFigure2 = _interopRequireDefault(_pointAndFigure);
	
	var _renko = __webpack_require__(69);
	
	var _renko2 = _interopRequireDefault(_renko);
	
	var _macd = __webpack_require__(70);
	
	var _macd2 = _interopRequireDefault(_macd);
	
	var _rsi = __webpack_require__(71);
	
	var _rsi2 = _interopRequireDefault(_rsi);
	
	var _sto = __webpack_require__(72);
	
	var _sto2 = _interopRequireDefault(_sto);
	
	var _atr = __webpack_require__(67);
	
	var _atr2 = _interopRequireDefault(_atr);
	
	var _forceIndex = __webpack_require__(73);
	
	var _forceIndex2 = _interopRequireDefault(_forceIndex);
	
	var _elderRay = __webpack_require__(74);
	
	var _elderRay2 = _interopRequireDefault(_elderRay);
	
	var _compare = __webpack_require__(75);
	
	var _compare2 = _interopRequireDefault(_compare);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.
	// slidingWindow,
	// merge,
	// zipper
	ema = _ema2.default;
	exports.bollingerband = _bollingerband2.default;
	exports.haikinAshi = _haikinAshi2.default;
	exports.kagi = _kagi2.default;
	exports.pointAndFigure = _pointAndFigure2.default;
	exports.renko = _renko2.default;
	exports.macd = _macd2.default;
	exports.rsi = _rsi2.default;
	exports.sto = _sto2.default;
	exports.atr = _atr2.default;
	exports.forceIndex = _forceIndex2.default;
	exports.elderRay = _elderRay2.default;
	exports.compare = _compare2.default; // import slidingWindow from "./slidingWindow";
	// import merge from "./merge";
	// import zipper from "./zipper";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*
	https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/exponentialMovingAverage.js
	
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
	
		var windowSize = 9,
		    source = _utils.identity;
	
		function calculator(data) {
	
			var alpha = 2 / (windowSize + 1);
			var previous;
			var initialAccumulator = 0;
			var skip = 0;
	
			return data.map(function (d, i) {
				var v = source(d, i);
				if ((0, _utils.isNotDefined)(previous) && (0, _utils.isNotDefined)(v)) {
					skip++;
					return undefined;
				} else if (i < windowSize + skip - 1) {
					initialAccumulator += v;
					return undefined;
				} else if (i === windowSize + skip - 1) {
					initialAccumulator += v;
					var initialValue = initialAccumulator / windowSize;
					previous = initialValue;
					return initialValue;
				} else {
					var nextValue = v * alpha + (1 - alpha) * previous;
					previous = nextValue;
					return nextValue;
				}
			});
		};
	
		calculator.windowSize = function (x) {
			if (!arguments.length) {
				return windowSize;
			}
			windowSize = x;
			return calculator;
		};
	
		calculator.source = function (x) {
			if (!arguments.length) {
				return source;
			}
			source = x;
			return calculator;
		};
	
		return calculator;
	};
	
	var _utils = __webpack_require__(5);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*
	https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/bollingerBands.js
	
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
		var windowSize = _defaultOptions.BollingerBand.period;
		var multiplier = _defaultOptions.BollingerBand.multiplier;
		var movingAverageType = _defaultOptions.BollingerBand.movingAverageType;
	
		var source = _utils.identity;
	
		function calculator(data) {
	
			var meanAlgorithm = movingAverageType === "ema" ? (0, _ema2.default)().windowSize(windowSize).source(source) : (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
				return _d2.default.mean(values);
			}).source(source);
	
			var bollingerBandAlgorithm = (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
				var avg = (0, _utils.last)(values).mean;
				var stdDev = _d2.default.deviation(values, function (each) {
					return source(each.datum);
				});
				return {
					top: avg + multiplier * stdDev,
					middle: avg,
					bottom: avg - multiplier * stdDev
				};
			});
	
			var zip = (0, _utils.zipper)().combine(function (datum, mean) {
				return { datum: datum, mean: mean };
			});
	
			var tuples = zip(data, meanAlgorithm(data));
			return bollingerBandAlgorithm(tuples);
		};
	
		calculator.windowSize = function (x) {
			if (!arguments.length) {
				return windowSize;
			}
			windowSize = x;
			return calculator;
		};
	
		calculator.multiplier = function (x) {
			if (!arguments.length) {
				return multiplier;
			}
			multiplier = x;
			return calculator;
		};
	
		calculator.movingAverageType = function (x) {
			if (!arguments.length) {
				return movingAverageType;
			}
			movingAverageType = x;
			return calculator;
		};
	
		calculator.source = function (x) {
			if (!arguments.length) {
				return source;
			}
			source = x;
			return calculator;
		};
	
		return calculator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _ema = __webpack_require__(63);
	
	var _ema2 = _interopRequireDefault(_ema);
	
	var _utils = __webpack_require__(5);
	
	var _defaultOptions = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = function () {
	
		var source = _utils.identity;
	
		function calculator(data) {
			var algorithm = (0, _utils.mappedSlidingWindow)().windowSize(2).undefinedValue(function (_ref) {
				var open = _ref.open;
				var high = _ref.high;
				var low = _ref.low;
				var close = _ref.close;
	
				close = (open + high + low + close) / 4;
				return { open: open, high: high, low: low, close: close };
			}).accumulator(function (_ref2) {
				var _ref3 = _slicedToArray(_ref2, 2);
	
				var prev = _ref3[0];
				var now = _ref3[1];
	
				// console.log(prev, now);
				var close = (now.open + now.high + now.low + now.close) / 4;
				var open = (prev.open + prev.close) / 2;
				var high = Math.max(open, now.high, close);
				var low = Math.min(open, now.low, close);
				return { open: open, high: high, low: low, close: close };
			});
	
			return algorithm(data);
		};
		calculator.source = function (x) {
			if (!arguments.length) {
				return source;
			}
			source = x;
			return calculator;
		};
	
		return calculator;
	};
	
	var _utils = __webpack_require__(5);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function () {
		var reversalType = _defaultOptions.Kagi.reversalType;
		var windowSize = _defaultOptions.Kagi.period;
		var reversal = _defaultOptions.Kagi.reversal;
		var source = _defaultOptions.Kagi.source;
		var dateAccessor = _defaultOptions.Kagi.dateAccessor;
		var dateMutator = _defaultOptions.Kagi.dateMutator;
		var indexMutator = _defaultOptions.Kagi.indexMutator;
	
	
		function calculator(data) {
			var reversalThreshold;
	
			if (reversalType === "ATR") {
				// calculateATR(rawData, period);
				var atrAlgorithm = (0, _atr2.default)().windowSize(windowSize);
	
				var atrCalculator = (0, _utils.merge)().algorithm(atrAlgorithm).merge(function (d, c) {
					d["atr" + windowSize] = c;
				});
	
				atrCalculator(data);
				reversalThreshold = function reversalThreshold(d) {
					return d["atr" + windowSize];
				};
			} else {
				reversalThreshold = _d2.default.functor(reversal);
			}
	
			var kagiData = [];
	
			var index = 0,
			    prevPeak,
			    prevTrough,
			    direction;
			var line = {};
	
			data.forEach(function (d) {
				if ((0, _utils.isNotDefined)(line.from)) {
					indexMutator(line, index++);
					dateMutator(line, dateAccessor(d));
					line.from = dateAccessor(d);
	
					if (!line.open) line.open = d.open;
					line.high = d.high;
					line.low = d.low;
					if (!line.close) line.close = source(d);
					line.startOfYear = d.startOfYear;
					line.startOfQuarter = d.startOfQuarter;
					line.startOfMonth = d.startOfMonth;
					line.startOfWeek = d.startOfWeek;
				}
	
				if (!line.startOfYear) {
					line.startOfYear = d.startOfYear;
					if (line.startOfYear) {
						line.date = d.date;
						// line.displayDate = d.displayDate;
					}
				}
	
				if (!line.startOfQuarter) {
					line.startOfQuarter = d.startOfQuarter;
					if (line.startOfQuarter && !line.startOfYear) {
						line.date = d.date;
						// line.displayDate = d.displayDate;
					}
				}
	
				if (!line.startOfMonth) {
					line.startOfMonth = d.startOfMonth;
					if (line.startOfMonth && !line.startOfQuarter) {
						line.date = d.date;
						// line.displayDate = d.displayDate;
					}
				}
				if (!line.startOfWeek) {
					line.startOfWeek = d.startOfWeek;
					if (line.startOfWeek && !line.startOfMonth) {
						line.date = d.date;
						// line.displayDate = d.displayDate;
					}
				}
				line.volume = (line.volume || 0) + d.volume;
				line.high = Math.max(line.high, d.high);
				line.low = Math.min(line.low, d.low);
				line.to = dateAccessor(d);
	
				var priceMovement = source(d) - line.close;
	
				// console.log(source(d), priceMovement)
				if (line.close > line.open /* going up */ && priceMovement > 0 /* and moving in same direction */ || line.close < line.open /* going down */ && priceMovement < 0 /* and moving in same direction */) {
						line.close = source(d);
						if (prevTrough && line.close < prevTrough) {
							// going below the prevTrough, so change from yang to yin
							// A yin line forms when a Kagi line breaks below the prior trough.
							line.changePoint = prevTrough;
							if (line.startAs !== "yin") {
								line.changeTo = "yin";
								// line.startAs = "yang";
							}
						}
						if (prevPeak && line.close > prevPeak) {
							// going above the prevPeak, so change from yin to yang
							// A yang line forms when a Kagi line breaks above the prior peak
							line.changePoint = prevPeak;
							if (line.startAs !== "yang") {
								line.changeTo = "yang";
								// line.startAs = "yin";
							}
						}
					} else if (line.close > line.open /* going up */
					 && priceMovement < 0 /* and moving in other direction */
					 && Math.abs(priceMovement) > reversalThreshold(d) /* and the movement is big enough for reversal */ || line.close < line.open /* going down */
					 && priceMovement > 0 /* and moving in other direction */
					 && Math.abs(priceMovement) > reversalThreshold(d) /* and the movement is big enough for reversal */) {
							// reverse direction
							var nextLineOpen = line.close;
	
							direction = (line.close - line.open) / Math.abs(line.close - line.open);
	
							var nextChangePoint, nextChangeTo;
							if (direction < 0 /* if direction so far has been -ve*/) {
									// compare with line.close becomes prevTrough
									if ((0, _utils.isNotDefined)(prevPeak)) prevPeak = line.open;
									prevTrough = line.close;
									if (source(d) > prevPeak) {
										nextChangePoint = prevPeak;
										nextChangeTo = "yang";
									}
								} else {
								if ((0, _utils.isNotDefined)(prevTrough)) prevTrough = line.open;
								prevPeak = line.close;
								if (source(d) < prevTrough) {
									nextChangePoint = prevTrough;
									nextChangeTo = "yin";
								}
							}
							if ((0, _utils.isNotDefined)(line.startAs)) {
								line.startAs = direction > 0 ? "yang" : "yin";
							}
	
							var startAs = line.changeTo || line.startAs;
							line.added = true;
							kagiData.push(line);
							direction = -1 * direction; // direction is reversed
	
							line = _extends({}, line);
							line.open = nextLineOpen;
							line.close = source(d);
							line.startAs = startAs;
							line.changePoint = nextChangePoint;
							line.changeTo = nextChangeTo;
							line.added = false;
							line.from = undefined;
							line.volume = 0;
							indexMutator(line, index);
						} else {
						// console.log("MOVING IN REV DIR BUT..", line.open, line.close, source(d));
					}
				line.current = source(d);
				var dir = line.close - line.open;
				dir = dir / Math.abs(dir);
				line.reverseAt = dir > 0 ? line.close - reversalThreshold(d) : line.open - reversalThreshold(d);
			});
			if (!line.added) kagiData.push(line);
	
			return kagiData;
		};
		calculator.reversalType = function (x) {
			if (!arguments.length) return reversalType;
			reversalType = x;
			return calculator;
		};
		calculator.dateMutator = function (x) {
			if (!arguments.length) return dateMutator;
			dateMutator = x;
			return calculator;
		};
		calculator.dateAccessor = function (x) {
			if (!arguments.length) return dateAccessor;
			dateAccessor = x;
			return calculator;
		};
		calculator.indexMutator = function (x) {
			if (!arguments.length) return indexMutator;
			indexMutator = x;
			return calculator;
		};
	
		return calculator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	var _atr = __webpack_require__(67);
	
	var _atr2 = _interopRequireDefault(_atr);
	
	var _defaultOptions = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var windowSize = 9,
		    source = function source(d) {
			return { open: d.open, high: d.high, low: d.low, close: d.close };
		};
	
		function atr(data) {
	
			var trueRangeAlgorithm = (0, _utils.slidingWindow)().windowSize(2).source(source).undefinedValue(function (d) {
				return d.high - d.low;
			}) // the first TR value is simply the High minus the Low
			.accumulator(function (values) {
				var prev = values[0];
				var d = values[1];
				return Math.max(d.high - d.low, d.high - prev.close, d.low - prev.close);
			});
	
			var prevATR;
	
			var atrAlgorithm = (0, _utils.slidingWindow)().skipInitial(1) // trueRange starts from index 1 so ATR starts from 1
			.windowSize(windowSize).accumulator(function (values) {
				var tr = (0, _utils.last)(values);
				var atr = (0, _utils.isDefined)(prevATR) ? (prevATR * (windowSize - 1) + tr) / windowSize : _d2.default.sum(values) / windowSize;
	
				prevATR = atr;
				return atr;
			});
	
			var newData = atrAlgorithm(trueRangeAlgorithm(data));
	
			return newData;
		};
	
		atr.windowSize = function (x) {
			if (!arguments.length) {
				return windowSize;
			}
			windowSize = x;
			return atr;
		};
	
		atr.source = function (x) {
			if (!arguments.length) {
				return source;
			}
			source = x;
			return atr;
		};
	
		return atr;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var reversal = _defaultOptions.PointAndFigure.reversal;
		var boxSize = _defaultOptions.PointAndFigure.boxSize;
		var source = _defaultOptions.PointAndFigure.source;
		var dateAccessor = _defaultOptions.PointAndFigure.dateAccessor;
		var dateMutator = _defaultOptions.PointAndFigure.dateMutator;
		var indexMutator = _defaultOptions.PointAndFigure.indexMutator;
		var indexAccessor = _defaultOptions.PointAndFigure.indexAccessor;
	
	
		function calculator(rawData) {
			var pricingMethod = source;
	
			var columnData = [];
	
			var column = {
				boxes: [],
				open: rawData[0].open
			},
			    box = createBox(rawData[0], dateAccessor, dateMutator);
	
			indexMutator(column, 0);
			columnData.push(column);
	
			rawData.forEach(function (d) {
				column.volume = (column.volume || 0) + d.volume;
	
				if (!box.startOfYear) {
					box.startOfYear = d.startOfYear;
					if (box.startOfYear) {
						dateMutator(box, dateAccessor(d));
						// box.displayDate = d.displayDate;
					}
				}
	
				if (!box.startOfYear && !box.startOfQuarter) {
					box.startOfQuarter = d.startOfQuarter;
					if (box.startOfQuarter && !box.startOfYear) {
						dateMutator(box, dateAccessor(d));
						// box.displayDate = d.displayDate;
					}
				}
	
				if (!box.startOfQuarter && !box.startOfMonth) {
					box.startOfMonth = d.startOfMonth;
					if (box.startOfMonth && !box.startOfQuarter) {
						dateMutator(box, dateAccessor(d));
						// box.displayDate = d.displayDate;
					}
				}
				if (!box.startOfMonth && !box.startOfWeek) {
					box.startOfWeek = d.startOfWeek;
					if (box.startOfWeek && !box.startOfMonth) {
						dateMutator(box, dateAccessor(d));
						// box.displayDate = d.displayDate;
					}
				}
	
				if (columnData.length === 1 && column.boxes.length === 0) {
					var upwardMovement = Math.max(pricingMethod(d).high - column.open, 0); // upward movement
					var downwardMovement = Math.abs(Math.min(column.open - pricingMethod(d).low, 0)); // downward movement
					column.direction = upwardMovement > downwardMovement ? 1 : -1;
					if (boxSize * reversal < upwardMovement || boxSize * reversal < downwardMovement) {
						// enough movement to trigger a reversal
						box.toDate = dateAccessor(d);
						box.open = column.open;
						var noOfBoxes = column.direction > 0 ? Math.floor(upwardMovement / boxSize) : Math.floor(downwardMovement / boxSize);
						for (var i = 0; i < noOfBoxes; i++) {
							box.close = box.open + column.direction * boxSize;
							var _prevBoxClose = box.close;
							column.boxes.push(box);
							box = createBox(box, dateAccessor, dateMutator);
							// box = cloneMe(box);
							box.open = _prevBoxClose;
						}
						box.fromDate = dateAccessor(d);
						box.date = dateAccessor(d);
					}
				} else {
					// one or more boxes already formed in the current column
					var _upwardMovement = Math.max(pricingMethod(d).high - box.open, 0); // upward movement
					var _downwardMovement = Math.abs(Math.min(pricingMethod(d).low - box.open, 0)); // downward movement
	
					if (column.direction > 0 && _upwardMovement > boxSize || /* rising column AND box can be formed */
					column.direction < 0 && _downwardMovement > boxSize /* falling column AND box can be formed */) {
							// form another box
							box.close = box.open + column.direction * boxSize;
							box.toDate = dateAccessor(d);
							var _prevBoxClose2 = box.close;
							column.boxes.push(box);
							box = createBox(d, dateAccessor, dateMutator);
							box.open = _prevBoxClose2;
							box.fromDate = dateAccessor(d);
							dateMutator(box, dateAccessor(d));
						} else if (column.direction > 0 && _downwardMovement > boxSize * reversal || /* rising column and there is downward movement to trigger a reversal */
					column.direction < 0 && _upwardMovement > boxSize * reversal /* falling column and there is downward movement to trigger a reversal */) {
							// reversal
	
							box.open = box.open + -1 * column.direction * boxSize;
							box.toDate = dateAccessor(d);
							// box.displayDate = d.displayDate;
							dateMutator(box, dateAccessor(d));
							// box.startOfYear = d.startOfYear;
							// box.startOfQuarter = d.startOfQuarter;
							// box.startOfMonth = d.startOfMonth;
							// box.startOfWeek = d.startOfWeek;
							// console.table(column.boxes);
							var idx = indexAccessor(column) + 1;
							column = {
								boxes: [],
								volume: 0,
								direction: -1 * column.direction
							};
							indexMutator(column, idx);
							var _noOfBoxes = column.direction > 0 ? Math.floor(_upwardMovement / boxSize) : Math.floor(_downwardMovement / boxSize);
							for (var _i = 0; _i < _noOfBoxes; _i++) {
								box.close = box.open + column.direction * boxSize;
								var prevBoxClose = box.close;
								column.boxes.push(box);
								box = createBox(d, dateAccessor, dateMutator);
								box.open = prevBoxClose;
							}
	
							columnData.push(column);
						}
				}
			});
			updateColumns(columnData, dateAccessor, dateMutator);
	
			return columnData;
		};
		calculator.reversal = function (x) {
			if (!arguments.length) return reversal;
			reversal = x;
			return calculator;
		};
		calculator.boxSize = function (x) {
			if (!arguments.length) return boxSize;
			boxSize = x;
			return calculator;
		};
		calculator.source = function (x) {
			if (!arguments.length) return source;
			source = x;
			return calculator;
		};
		calculator.dateMutator = function (x) {
			if (!arguments.length) return dateMutator;
			dateMutator = x;
			return calculator;
		};
		calculator.dateAccessor = function (x) {
			if (!arguments.length) return dateAccessor;
			dateAccessor = x;
			return calculator;
		};
		calculator.indexMutator = function (x) {
			if (!arguments.length) return indexMutator;
			indexMutator = x;
			return calculator;
		};
		calculator.indexAccessor = function (x) {
			if (!arguments.length) return indexAccessor;
			indexAccessor = x;
			return calculator;
		};
	
		return calculator;
	};
	
	var _utils = __webpack_require__(5);
	
	var _defaultOptions = __webpack_require__(60);
	
	function createBox(d, dateAccessor, dateMutator) {
		var box = {
			open: d.open,
			fromDate: dateAccessor(d),
			toDate: dateAccessor(d),
			startOfYear: d.startOfYear,
			startOfQuarter: d.startOfQuarter,
			startOfMonth: d.startOfMonth,
			startOfWeek: d.startOfWeek
		};
		dateMutator(box, dateAccessor(d));
		return box;
	}
	
	function updateColumns(columnData, dateAccessor, dateMutator) {
		columnData.forEach(function (d) {
			// var lastBox = d.boxes[d.boxes.length - 1];
	
			d.startOfYear = false;
			d.startOfQuarter = false;
			d.startOfMonth = false;
			d.startOfWeek = false;
	
			d.boxes.forEach(function (eachBox) {
				if ((0, _utils.isNotDefined)(d.open)) d.open = eachBox.open;
				d.close = eachBox.close;
				d.high = Math.max(d.open, d.close);
				d.low = Math.min(d.open, d.close);
	
				if ((0, _utils.isNotDefined)(d.fromDate)) d.fromDate = eachBox.fromDate;
				if ((0, _utils.isNotDefined)(d.date)) d.date = eachBox.date;
				d.toDate = eachBox.toDate;
	
				if (eachBox.startOfYear) {
					d.startOfYear = d.startOfYear || eachBox.startOfYear;
					d.startOfQuarter = eachBox.startOfQuarter;
					d.startOfMonth = eachBox.startOfMonth;
					d.startOfWeek = eachBox.startOfWeek;
	
					dateMutator(d, dateAccessor(eachBox));
				}
				if (d.startOfQuarter !== true && eachBox.startOfQuarter) {
					d.startOfQuarter = eachBox.startOfQuarter;
					d.startOfMonth = eachBox.startOfMonth;
					d.startOfWeek = eachBox.startOfWeek;
					// d.displayDate = eachBox.displayDate;
					dateMutator(d, dateAccessor(eachBox));
				}
				if (d.startOfMonth !== true && eachBox.startOfMonth) {
					d.startOfMonth = eachBox.startOfMonth;
					d.startOfWeek = eachBox.startOfWeek;
					// d.displayDate = eachBox.displayDate;
					dateMutator(d, dateAccessor(eachBox));
				}
				if (d.startOfWeek !== true && eachBox.startOfWeek) {
					d.startOfWeek = eachBox.startOfWeek;
					// d.displayDate = eachBox.displayDate;
					dateMutator(d, dateAccessor(eachBox));
				}
			});
		});
	
		// console.table(columnData);
		// console.table(rawData);
		return columnData;
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var reversalType = _defaultOptions.Renko.reversalType;
		var fixedBrickSize = _defaultOptions.Renko.fixedBrickSize;
		var source = _defaultOptions.Renko.source;
		var windowSize = _defaultOptions.Renko.period;
		var dateAccessor = _defaultOptions.Renko.dateAccessor;
		var dateMutator = _defaultOptions.Renko.dateMutator;
		var indexMutator = _defaultOptions.Renko.indexMutator;
		var indexAccessor = _defaultOptions.Renko.indexAccessor;
	
	
		function calculator(rawData) {
			var pricingMethod = source,
			    brickSize;
	
			if (reversalType === "ATR") {
				// calculateATR(rawData, period);
				var atrAlgorithm = (0, _atr2.default)().windowSize(windowSize);
	
				var atrCalculator = (0, _utils.merge)().algorithm(atrAlgorithm).merge(function (d, c) {
					d["atr" + windowSize] = c;
				});
	
				atrCalculator(rawData);
				brickSize = function brickSize(d) {
					return d["atr" + windowSize];
				};
			} else {
				brickSize = _d2.default.functor(fixedBrickSize);
			}
	
			var renkoData = [];
	
			var index = 0,
			    prevBrickClose = rawData[index].open,
			    prevBrickOpen = rawData[index].open;
			var brick = {},
			    direction = 0;
	
			rawData.forEach(function (d) {
				if ((0, _utils.isNotDefined)(brick.from)) {
					brick.high = d.high;
					brick.low = d.low;
					brick.startOfYear = d.startOfYear;
					brick.startOfQuarter = d.startOfQuarter;
					brick.startOfMonth = d.startOfMonth;
					brick.startOfWeek = d.startOfWeek;
	
					brick.from = indexAccessor(d);
					brick.fromDate = dateAccessor(d);
					indexMutator(brick, index++);
					dateMutator(brick, dateAccessor(d));
				}
				brick.volume = (brick.volume || 0) + d.volume;
	
				var prevCloseToHigh = prevBrickClose - pricingMethod(d).high,
				    prevCloseToLow = prevBrickClose - pricingMethod(d).low,
				    prevOpenToHigh = prevBrickOpen - pricingMethod(d).high,
				    prevOpenToLow = prevBrickOpen - pricingMethod(d).low,
				    priceMovement = Math.min(Math.abs(prevCloseToHigh), Math.abs(prevCloseToLow), Math.abs(prevOpenToHigh), Math.abs(prevOpenToLow));
	
				brick.high = Math.max(brick.high, d.high);
				brick.low = Math.min(brick.low, d.low);
	
				if (!brick.startOfYear) {
					brick.startOfYear = d.startOfYear;
					if (brick.startOfYear) {
						dateMutator(brick, dateAccessor(d));
						// brick.displayDate = d.displayDate;
					}
				}
	
				if (!brick.startOfQuarter) {
					brick.startOfQuarter = d.startOfQuarter;
					if (brick.startOfQuarter && !brick.startOfYear) {
						dateMutator(brick, dateAccessor(d));
						// brick.displayDate = d.displayDate;
					}
				}
	
				if (!brick.startOfMonth) {
					brick.startOfMonth = d.startOfMonth;
					if (brick.startOfMonth && !brick.startOfQuarter) {
						dateMutator(brick, dateAccessor(d));
						// brick.displayDate = d.displayDate;
					}
				}
				if (!brick.startOfWeek) {
					brick.startOfWeek = d.startOfWeek;
					if (brick.startOfWeek && !brick.startOfMonth) {
						dateMutator(brick, dateAccessor(d));
						// brick.displayDate = d.displayDate;
					}
				}
	
				// d.brick = JSON.stringify(brick);
				if (brickSize(d)) {
					var noOfBricks = Math.floor(priceMovement / brickSize(d));
	
					brick.open = Math.abs(prevCloseToHigh) < Math.abs(prevOpenToHigh) || Math.abs(prevCloseToLow) < Math.abs(prevOpenToLow) ? prevBrickClose : prevBrickOpen;
	
					if (noOfBricks >= 1) {
						var j = 0;
						for (j = 0; j < noOfBricks; j++) {
							brick.close = brick.open < pricingMethod(d).high ?
							// if brick open is less than current price it means it is green/hollow brick
							brick.open + brickSize(d) : brick.open - brickSize(d);
							direction = brick.close > brick.open ? 1 : -1;
							brick.direction = direction;
							brick.to = indexAccessor(d);
							brick.toDate = dateAccessor(d);
							// brick.diff = brick.open - brick.close;
							// brick.atr = d.atr;
							brick.fullyFormed = true;
							renkoData.push(brick);
	
							prevBrickClose = brick.close;
							prevBrickOpen = brick.open;
	
							var newBrick = {
								high: brick.high,
								low: brick.low,
								open: brick.close,
								startOfYear: false,
								startOfMonth: false,
								startOfQuarter: false,
								startOfWeek: false
							};
							brick = newBrick;
							brick.from = indexAccessor(d);
							brick.fromDate = dateAccessor(d);
							indexMutator(brick, index + j);
							dateMutator(brick, dateAccessor(d));
							brick.volume = (brick.volume || 0) + d.volume;
						}
						index = index + j - 1;
						brick = {};
					} else {
						if (indexAccessor(d) === rawData.length - 1) {
							brick.close = direction > 0 ? pricingMethod(d).high : pricingMethod(d).low;
							brick.to = indexAccessor(d);
							brick.toDate = dateAccessor(d);
							dateMutator(brick, dateAccessor(d));
	
							brick.fullyFormed = false;
							renkoData.push(brick);
						}
					}
				}
			});
			return renkoData;
		};
		calculator.reversalType = function (x) {
			if (!arguments.length) return reversalType;
			reversalType = x;
			return calculator;
		};
		calculator.fixedBrickSize = function (x) {
			if (!arguments.length) return fixedBrickSize;
			fixedBrickSize = x;
			return calculator;
		};
		calculator.source = function (x) {
			if (!arguments.length) return source;
			source = x;
			return calculator;
		};
		calculator.windowSize = function (x) {
			if (!arguments.length) return windowSize;
			windowSize = x;
			return calculator;
		};
		calculator.dateMutator = function (x) {
			if (!arguments.length) return dateMutator;
			dateMutator = x;
			return calculator;
		};
		calculator.dateAccessor = function (x) {
			if (!arguments.length) return dateAccessor;
			dateAccessor = x;
			return calculator;
		};
		calculator.indexMutator = function (x) {
			if (!arguments.length) return indexMutator;
			indexMutator = x;
			return calculator;
		};
		calculator.indexAccessor = function (x) {
			if (!arguments.length) return indexAccessor;
			indexAccessor = x;
			return calculator;
		};
	
		return calculator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	var _atr = __webpack_require__(67);
	
	var _atr2 = _interopRequireDefault(_atr);
	
	var _defaultOptions = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*
	https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/macd.js
	
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
		var fast = _defaultOptions.MACD.fast;
		var slow = _defaultOptions.MACD.slow;
		var signal = _defaultOptions.MACD.signal;
	
		var source = _utils.identity;
	
		function calculator(data) {
	
			var fastEMA = (0, _ema2.default)().windowSize(fast).source(source);
			var slowEMA = (0, _ema2.default)().windowSize(slow).source(source);
			var signalEMA = (0, _ema2.default)().windowSize(signal);
	
			var macdCalculator = (0, _utils.zipper)().combine(function (fastEMA, slowEMA) {
				return (0, _utils.isDefined)(fastEMA) && (0, _utils.isDefined)(slowEMA) ? fastEMA - slowEMA : undefined;
			});
	
			var macdArray = macdCalculator(fastEMA(data), slowEMA(data));
	
			var undefinedArray = new Array(slow);
			var signalArray = undefinedArray.concat(signalEMA(macdArray.slice(slow)));
	
			var zip = (0, _utils.zipper)().combine(function (macd, signal) {
				return {
					macd: macd,
					signal: signal,
					divergence: (0, _utils.isDefined)(macd) && (0, _utils.isDefined)(signal) ? macd - signal : undefined
				};
			});
	
			var macd = zip(macdArray, signalArray);
	
			return macd;
		};
	
		calculator.fast = function (x) {
			if (!arguments.length) {
				return fast;
			}
			fast = x;
			return calculator;
		};
	
		calculator.slow = function (x) {
			if (!arguments.length) {
				return slow;
			}
			slow = x;
			return calculator;
		};
	
		calculator.signal = function (x) {
			if (!arguments.length) {
				return signal;
			}
			signal = x;
			return calculator;
		};
	
		calculator.source = function (x) {
			if (!arguments.length) {
				return source;
			}
			source = x;
			return calculator;
		};
	
		return calculator;
	};
	
	var _ema = __webpack_require__(63);
	
	var _ema2 = _interopRequireDefault(_ema);
	
	var _utils = __webpack_require__(5);
	
	var _defaultOptions = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*
	https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/relativeStrengthIndex.js
	
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
		var windowSize = _defaultOptions.RSI.period;
	
		var source = _utils.identity;
	
		function calculator(data) {
	
			var prevAvgGain, prevAvgLoss;
			var rsiAlgorithm = (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
	
				var avgGain = (0, _utils.isDefined)(prevAvgGain) ? (prevAvgGain * (windowSize - 1) + (0, _utils.last)(values).gain) / windowSize : _d2.default.mean(values, function (each) {
					return each.gain;
				});
	
				var avgLoss = (0, _utils.isDefined)(prevAvgLoss) ? (prevAvgLoss * (windowSize - 1) + (0, _utils.last)(values).loss) / windowSize : _d2.default.mean(values, function (each) {
					return each.loss;
				});
	
				var relativeStrength = avgGain / avgLoss;
				var rsi = 100 - 100 / (1 + relativeStrength);
	
				prevAvgGain = avgGain;
				prevAvgLoss = avgLoss;
	
				return rsi;
			});
	
			var gainsAndLossesCalculator = (0, _utils.slidingWindow)().windowSize(2).undefinedValue(function () {
				return [0, 0];
			}).accumulator(function (tuple) {
				var prev = tuple[0];
				var now = tuple[1];
				var change = source(now) - source(prev);
				return {
					gain: Math.max(change, 0),
					loss: Math.abs(Math.min(change, 0))
				};
			});
	
			var gainsAndLosses = gainsAndLossesCalculator(data);
	
			var rsiData = rsiAlgorithm(gainsAndLosses);
	
			return rsiData;
		};
	
		calculator.windowSize = function (x) {
			if (!arguments.length) {
				return windowSize;
			}
			windowSize = x;
			return calculator;
		};
		calculator.source = function (x) {
			if (!arguments.length) {
				return source;
			}
			source = x;
			return calculator;
		};
	
		return calculator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	var _defaultOptions = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*
	https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/stochasticOscillator.js
	
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
		var windowSize = _defaultOptions.FullStochasticOscillator.period;
		var kWindowSize = _defaultOptions.FullStochasticOscillator.K;
		var dWindowSize = _defaultOptions.FullStochasticOscillator.D;
		var source = _defaultOptions.FullStochasticOscillator.source;
	
	
		var high = function high(d) {
			return source(d).high;
		},
		    low = function low(d) {
			return source(d).low;
		},
		    close = function close(d) {
			return source(d).close;
		};
	
		function calculator(data) {
			var kWindow = (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
	
				var highestHigh = _d2.default.max(values, high);
				var lowestLow = _d2.default.min(values, low);
	
				var currentClose = close((0, _utils.last)(values));
				var k = (currentClose - lowestLow) / (highestHigh - lowestLow) * 100;
	
				return k;
			});
	
			var kSmoothed = (0, _utils.slidingWindow)().skipInitial(windowSize - 1).windowSize(kWindowSize).accumulator(function (values) {
				return _d2.default.mean(values);
			});
	
			var dWindow = (0, _utils.slidingWindow)().skipInitial(windowSize - 1 + kWindowSize - 1).windowSize(dWindowSize).accumulator(function (values) {
				return _d2.default.mean(values);
			});
	
			var stoAlgorithm = (0, _utils.zipper)().combine(function (K, D) {
				return { K: K, D: D };
			});
	
			var kData = kSmoothed(kWindow(data));
			var dData = dWindow(kData);
	
			var newData = stoAlgorithm(kData, dData);
	
			return newData;
		};
	
		calculator.windowSize = function (x) {
			if (!arguments.length) {
				return windowSize;
			}
			windowSize = x;
			return calculator;
		};
		calculator.kWindowSize = function (x) {
			if (!arguments.length) {
				return kWindowSize;
			}
			kWindowSize = x;
			return calculator;
		};
		calculator.dWindowSize = function (x) {
			if (!arguments.length) {
				return dWindowSize;
			}
			dWindowSize = x;
			return calculator;
		};
		calculator.source = function (x) {
			if (!arguments.length) {
				return source;
			}
			source = x;
			return calculator;
		};
	
		return calculator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	var _defaultOptions = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = function () {
		var close = _defaultOptions.ForceIndex.close;
		var volume = _defaultOptions.ForceIndex.volume;
	
	
		function calculator(data) {
	
			var forceIndexCalulator = (0, _utils.slidingWindow)().windowSize(2).accumulator(function (_ref) {
				var _ref2 = _slicedToArray(_ref, 2);
	
				var prev = _ref2[0];
				var curr = _ref2[1];
				return (close(curr) - close(prev)) * volume(curr);
			});
	
			var forceIndex = forceIndexCalulator(data);
	
			return forceIndex;
		};
	
		calculator.close = function (x) {
			if (!arguments.length) {
				return close;
			}
			close = x;
			return calculator;
		};
	
		calculator.volume = function (x) {
			if (!arguments.length) {
				return volume;
			}
			volume = x;
			return calculator;
		};
	
		return calculator;
	};
	
	var _utils = __webpack_require__(5);
	
	var _defaultOptions = __webpack_require__(60);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*
	https://github.com/ScottLogic/d3fc/blob/master/src/indicator/algorithm/calculator/elderRay.js
	
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
		var windowSize = _defaultOptions.ElderRay.period;
		var source = _defaultOptions.ElderRay.source;
		var movingAverageType = _defaultOptions.ElderRay.movingAverageType;
		var ohlc = _defaultOptions.ElderRay.ohlc;
	
		var source = _d2.default.functor(source);
	
		function calculator(data) {
	
			var meanAlgorithm = movingAverageType === "ema" ? (0, _ema2.default)().windowSize(windowSize).source(source) : (0, _utils.slidingWindow)().windowSize(windowSize).accumulator(function (values) {
				return _d2.default.mean(values);
			}).source(source);
	
			var zip = (0, _utils.zipper)().combine(function (datum, mean) {
				var bullPower = (0, _utils.isDefined)(mean) ? ohlc(datum).high - mean : undefined;
				var bearPower = (0, _utils.isDefined)(mean) ? ohlc(datum).low - mean : undefined;
				return { bullPower: bullPower, bearPower: bearPower };
			});
	
			var newData = zip(data, meanAlgorithm(data));
			return newData;
		};
	
		calculator.windowSize = function (x) {
			if (!arguments.length) {
				return windowSize;
			}
			windowSize = x;
			return calculator;
		};
	
		calculator.ohlc = function (x) {
			if (!arguments.length) {
				return ohlc;
			}
			ohlc = x;
			return calculator;
		};
	
		calculator.movingAverageType = function (x) {
			if (!arguments.length) {
				return movingAverageType;
			}
			movingAverageType = x;
			return calculator;
		};
	
		calculator.source = function (x) {
			if (!arguments.length) {
				return source;
			}
			source = x;
			return calculator;
		};
	
		return calculator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _ema = __webpack_require__(63);
	
	var _ema2 = _interopRequireDefault(_ema);
	
	var _defaultOptions = __webpack_require__(60);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var base = function base(d) {
			return d.close;
		};
		var mainKeys = [];
		var compareKeys = [];
	
		function calculator(data) {
			var f = (0, _utils.first)(data);
			var b = base(f);
			var compareData = data.map(function (d) {
				var result = {};
	
				mainKeys.forEach(function (key) {
					result[key] = (d[key] - b) / b;
				});
	
				compareKeys.forEach(function (key) {
					result[key] = (d[key] - f[key]) / f[key];
				});
				return result;
			});
			// console.log(compareData[20]);
			return compareData;
		};
		calculator.base = function (x) {
			if (!arguments.length) {
				return base;
			}
			base = x;
			return calculator;
		};
		calculator.mainKeys = function (x) {
			if (!arguments.length) {
				return mainKeys;
			}
			mainKeys = x;
			return calculator;
		};
		calculator.compareKeys = function (x) {
			if (!arguments.length) {
				return compareKeys;
			}
			compareKeys = x;
			return calculator;
		};
		return calculator;
	};
	
	var _utils = __webpack_require__(5);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var id = i++,
		    accessor,
		    stroke,
		    fill,
		    echo,
		    type,
		    tooltipLabel,
		    domain,
		    tickValues;
	
		function baseIndicator() {}
	
		baseIndicator.id = function (x) {
			if (!arguments.length) return id;
			id = x;
			return baseIndicator;
		};
		baseIndicator.accessor = function (x) {
			if (!arguments.length) return accessor;
			accessor = x;
			return baseIndicator;
		};
		baseIndicator.stroke = function (x) {
			if (!arguments.length) return !stroke ? stroke = (0, _utils.overlayColors)(id) : stroke;
			stroke = x;
			return baseIndicator;
		};
		baseIndicator.fill = function (x) {
			if (!arguments.length) return !fill ? fill = (0, _utils.overlayColors)(id) : fill;
			fill = x;
			return baseIndicator;
		};
		baseIndicator.echo = function (x) {
			if (!arguments.length) return echo;
			echo = x;
			return baseIndicator;
		};
		baseIndicator.type = function (x) {
			if (!arguments.length) return type;
			type = x;
			return baseIndicator;
		};
		baseIndicator.tooltipLabel = function (x) {
			if (!arguments.length) {
				if (typeof tooltipLabel === "function") return tooltipLabel();
				return tooltipLabel;
			}
			tooltipLabel = x;
			return baseIndicator;
		};
		baseIndicator.domain = function (x) {
			if (!arguments.length) return domain;
			domain = x;
			return baseIndicator;
		};
		baseIndicator.tickValues = function (x) {
			if (!arguments.length) return tickValues;
			tickValues = x;
			return baseIndicator;
		};
		return baseIndicator;
	};
	
	var _utils = __webpack_require__(5);
	
	var i = 0;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.sma;
		});
	
		var underlyingAlgorithm = (0, _utils.slidingWindow)().windowSize(_defaultOptions.SMA.period).source(_defaultOptions.SMA.source).accumulator(function (values) {
			return _d2.default.mean(values);
		});
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.sma = indicator;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			var newData = mergedAlgorithm(data);
			return newData;
		};
	
		base.tooltipLabel(function () {
			return ALGORITHM_TYPE + "(" + underlyingAlgorithm.windowSize() + ")";
		});
	
		_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
		_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "source", "undefinedValue", "skipInitial");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	var _defaultOptions = __webpack_require__(60);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "SMA";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.bollingerBand;
		}).stroke({
			top: "#964B00",
			middle: "#000000",
			bottom: "#964B00"
		}).fill("#4682B4");
	
		var underlyingAlgorithm = (0, _algorithm.bollingerband)().windowSize(_defaultOptions.BollingerBand.period).movingAverageType(_defaultOptions.BollingerBand.movingAverageType).multiplier(_defaultOptions.BollingerBand.multiplier).source(_defaultOptions.BollingerBand.source);
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.bollingerBand = indicator;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
	
			var newData = mergedAlgorithm(data);
			return newData;
		};
	
		base.tooltipLabel(function () {
			return "BB (" + underlyingAlgorithm.windowSize() + ", " + underlyingAlgorithm.multiplier() + (", " + underlyingAlgorithm.movingAverageType() + "): ");
		});
	
		_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
		_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "movingAverageType", "multiplier", "source");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	var _defaultOptions = __webpack_require__(60);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _algorithm = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "BollingerBand";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.ha;
		});
	
		var underlyingAlgorithm = (0, _algorithm.haikinAshi)();
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.ha = indicator;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		};
	
		_d2.default.rebind(indicator, base, "accessor", "stroke", "fill", "echo", "type");
		// d3.rebind(indicator, underlyingAlgorithm, "windowSize", "source");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge");
	
		return indicator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _algorithm = __webpack_require__(62);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "HaikinAshi";

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE);
	
		var underlyingAlgorithm = (0, _algorithm.kagi)();
	
		var indicator = function indicator(data) {
			return underlyingAlgorithm(data);
		};
	
		_d2.default.rebind(indicator, base, "id", "stroke", "fill", "echo", "type");
		_d2.default.rebind(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator", "indexMutator");
		// d3.rebind(indicator, mergedAlgorithm, "merge"/*, "skipUndefined"*/);
	
		return indicator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _algorithm = __webpack_require__(62);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "Kagi";

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE);
	
		var underlyingAlgorithm = (0, _algorithm.pointAndFigure)();
	
		var indicator = function indicator(data) {
			return underlyingAlgorithm(data);
		};
	
		_d2.default.rebind(indicator, base, "id", "stroke", "fill", "echo", "type", "tooltipLabel");
		_d2.default.rebind(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator", "indexMutator", "indexAccessor");
		_d2.default.rebind(indicator, underlyingAlgorithm, "reversal", "boxSize", "source");
		// d3.rebind(indicator, mergedAlgorithm, "merge"/*, "skipUndefined"*/);
	
		return indicator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _algorithm = __webpack_require__(62);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "PointAndFigure";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE);
	
		var underlyingAlgorithm = (0, _algorithm.renko)();
	
		var indicator = function indicator(data) {
			return underlyingAlgorithm(data);
		};
	
		_d2.default.rebind(indicator, base, "id", "stroke", "fill", "echo", "type", "tooltipLabel");
		_d2.default.rebind(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator", "indexMutator", "indexAccessor");
		_d2.default.rebind(indicator, underlyingAlgorithm, "reversal", "boxSize", "source");
	
		return indicator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _algorithm = __webpack_require__(62);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "Renko";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).fill(_defaultOptions.MACD.fill).stroke(_defaultOptions.MACD.stroke).accessor(function (d) {
			return d.macd;
		});
	
		var underlyingAlgorithm = (0, _algorithm.macd)().fast(_defaultOptions.MACD.fast).slow(_defaultOptions.MACD.slow).signal(_defaultOptions.MACD.signal).source(_defaultOptions.MACD.source);
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.macd = indicator;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		};
	
		_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
		_d2.default.rebind(indicator, underlyingAlgorithm, "source", "fast", "slow", "signal");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	var _algorithm = __webpack_require__(62);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _defaultOptions = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "MACD";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var overSold = _defaultOptions.RSI.overSold;
		var middle = _defaultOptions.RSI.middle;
		var overBought = _defaultOptions.RSI.overBought;
	
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.rsi;
		});
	
		var underlyingAlgorithm = (0, _algorithm.rsi)().windowSize(_defaultOptions.RSI.period).source(_defaultOptions.RSI.source);
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.rsi = indicator;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		};
		base.tooltipLabel(function () {
			return ALGORITHM_TYPE + " (" + underlyingAlgorithm.windowSize() + "): ";
		});
	
		base.domain([0, 100]);
		base.tickValues([overSold, middle, overBought]);
	
		indicator.overSold = function (x) {
			if (!arguments.length) return overSold;
			overSold = x;
			base.tickValues([overSold, middle, overBought]);
			return indicator;
		};
		indicator.middle = function (x) {
			if (!arguments.length) return middle;
			middle = x;
			base.tickValues([overSold, middle, overBought]);
			return indicator;
		};
		indicator.overBought = function (x) {
			if (!arguments.length) return overBought;
			overBought = x;
			base.tickValues([overSold, middle, overBought]);
			return indicator;
		};
	
		_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel", "domain", "tickValues");
		_d2.default.rebind(indicator, underlyingAlgorithm, "source", "windowSize");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	var _algorithm = __webpack_require__(62);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _defaultOptions = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "RSI";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.atr;
		});
	
		var underlyingAlgorithm = (0, _algorithm.atr)().windowSize(_defaultOptions.ATR.period).source(_defaultOptions.ATR.source);
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.atr = indicator;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		};
	
		base.tooltipLabel(function () {
			return ALGORITHM_TYPE + "(" + underlyingAlgorithm.windowSize() + ")";
		});
	
		_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
		_d2.default.rebind(indicator, underlyingAlgorithm, "source", "windowSize");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	var _algorithm = __webpack_require__(62);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _defaultOptions = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "ATR";

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
		var K = _defaultOptions.FullStochasticOscillator.K;
		var D = _defaultOptions.FullStochasticOscillator.D;
		var source = _defaultOptions.FullStochasticOscillator.source;
		var period = _defaultOptions.FullStochasticOscillator.period;
		var overSold = _defaultOptions.FullStochasticOscillator.overSold;
		var overBought = _defaultOptions.FullStochasticOscillator.overBought;
		var middle = _defaultOptions.FullStochasticOscillator.middle;
		var stroke = _defaultOptions.FullStochasticOscillator.stroke;
	
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).stroke(stroke).accessor(function (d) {
			return d.sto;
		});
	
		var underlyingAlgorithm = (0, _algorithm.sto)().windowSize(period).kWindowSize(K).dWindowSize(D).source(source);
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.sto = indicator;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		};
		base.tooltipLabel(function () {
			return ALGORITHM_TYPE + " (" + underlyingAlgorithm.windowSize() + (", " + underlyingAlgorithm.kWindowSize() + ", " + underlyingAlgorithm.dWindowSize() + "): ");
		});
	
		base.domain([0, 100]);
		base.tickValues([overSold, middle, overBought]);
	
		indicator.overSold = function (x) {
			if (!arguments.length) return overSold;
			overSold = x;
			base.tickValues([overSold, middle, overBought]);
			return indicator;
		};
		indicator.middle = function (x) {
			if (!arguments.length) return middle;
			middle = x;
			base.tickValues([overSold, middle, overBought]);
			return indicator;
		};
		indicator.overBought = function (x) {
			if (!arguments.length) return overBought;
			overBought = x;
			base.tickValues([overSold, middle, overBought]);
			return indicator;
		};
	
		_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel", "domain", "tickValues");
		_d2.default.rebind(indicator, underlyingAlgorithm, "source", "windowSize", "kWindowSize", "dWindowSize");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	var _algorithm = __webpack_require__(62);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _defaultOptions = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "RSI";

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.forceIndex;
		});
	
		var underlyingAlgorithm = (0, _algorithm.forceIndex)().volume(_defaultOptions.ForceIndex.volume).close(_defaultOptions.ForceIndex.close);
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.forceIndex = indicator;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		};
	
		_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
		_d2.default.rebind(indicator, underlyingAlgorithm, "close", "volume");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	var _algorithm = __webpack_require__(62);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _defaultOptions = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "ForceIndex";

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.elderRay;
		});
	
		var underlyingAlgorithm = (0, _algorithm.elderRay)().windowSize(_defaultOptions.ElderRay.period).ohlc(_defaultOptions.ElderRay.ohlc).movingAverageType(_defaultOptions.ElderRay.movingAverageType).source(_defaultOptions.ElderRay.source);
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.elderRay = indicator;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		};
	
		base.tooltipLabel(ALGORITHM_TYPE + ": ");
	
		_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type", "tooltipLabel");
		_d2.default.rebind(indicator, underlyingAlgorithm, "windowSize", "ohlc", "movingAverageType", "source");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	var _algorithm = __webpack_require__(62);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	var _defaultOptions = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "ElderRay";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.elderRay;
		});
	
		var underlyingAlgorithm = (0, _utils.slidingWindow)().windowSize(2).source(function (d) {
			return d.close;
		}).accumulator(function (_ref) {
			var _ref2 = _slicedToArray(_ref, 2);
	
			var prev = _ref2[0];
			var curr = _ref2[1];
	
			var absoluteChange = prev - curr;
			var percentChange = absoluteChange * 100 / prev;
			return { absoluteChange: absoluteChange, percentChange: percentChange };
		});
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.absoluteChange = indicator.absoluteChange;
			datum.percentChange = indicator.percentChange;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		};
	
		_d3.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
		_d3.default.rebind(indicator, underlyingAlgorithm, "windowSize", "source");
		_d3.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d2 = __webpack_require__(4);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _utils = __webpack_require__(5);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "Change";

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = function () {
	
		var macdSource, emaSource;
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).stroke(function (d) {
			return _defaultOptions.ElderImpulse.stroke[d.elderImpulse];
		}).accessor([function (d) {
			return d.close;
		}]).fill(undefined);
	
		var underlyingAlgorithm = (0, _utils.slidingWindow)().windowSize(2).undefinedValue("neutral").accumulator(function (_ref) {
			var _ref2 = _slicedToArray(_ref, 2);
	
			var prev = _ref2[0];
			var curr = _ref2[1];
	
			if ((0, _utils.isNotDefined)(macdSource)) throw new Error("macdSource not defined for " + ALGORITHM_TYPE + " calculator");
			if ((0, _utils.isNotDefined)(emaSource)) throw new Error("emaSource not defined for " + ALGORITHM_TYPE + " calculator");
	
			if ((0, _utils.isDefined)(macdSource(prev)) && (0, _utils.isDefined)(emaSource(prev))) {
				var prevMACDDivergence = macdSource(prev).divergence;
				var currMACDDivergence = macdSource(curr).divergence;
	
				var prevEMA = emaSource(prev);
				var currEMA = emaSource(curr);
	
				if (currMACDDivergence >= prevMACDDivergence && currEMA >= prevEMA) return "up";
	
				if (currMACDDivergence <= prevMACDDivergence && currEMA <= prevEMA) return "down";
			}
			return "neutral";
		});
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.elderImpulse = indicator;
		});
	
		var indicator = function indicator(data) {
			var newData = mergedAlgorithm(data);
			return newData;
		};
		indicator.macdSource = function (x) {
			if (!arguments.length) return macdSource;
			macdSource = x;
			return indicator;
		};
		indicator.emaSource = function (x) {
			if (!arguments.length) return emaSource;
			emaSource = x;
			return indicator;
		};
		_d3.default.rebind(indicator, base, "id", "stroke", "echo", "type");
		// d3.rebind(indicator, underlyingAlgorithm, "windowSize", "movingAverageType", "multiplier", "source");
		_d3.default.rebind(indicator, mergedAlgorithm, "merge", "skipUndefined");
	
		return indicator;
	};
	
	var _d2 = __webpack_require__(4);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _utils = __webpack_require__(5);
	
	var _defaultOptions = __webpack_require__(60);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "ElderImpulse";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function () {
	
		var base = (0, _baseIndicator2.default)().type(ALGORITHM_TYPE).accessor(function (d) {
			return d.compare;
		});
	
		var underlyingAlgorithm = (0, _algorithm.compare)().base(function (d) {
			return d.close;
		}).mainKeys(["open", "high", "low", "close"]);
	
		var mergedAlgorithm = (0, _utils.merge)().algorithm(underlyingAlgorithm).merge(function (datum, indicator) {
			datum.compare = indicator;
		});
	
		var indicator = function indicator(data) {
			if (!base.accessor()) throw new Error("Set an accessor to " + ALGORITHM_TYPE + " before calculating");
			return mergedAlgorithm(data);
		};
	
		_d2.default.rebind(indicator, base, "id", "accessor", "stroke", "fill", "echo", "type");
		_d2.default.rebind(indicator, underlyingAlgorithm, "base", "mainKeys", "compareKeys");
		_d2.default.rebind(indicator, mergedAlgorithm, "merge");
	
		return indicator;
	};
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _utils = __webpack_require__(5);
	
	var _algorithm = __webpack_require__(62);
	
	var _baseIndicator = __webpack_require__(76);
	
	var _baseIndicator2 = _interopRequireDefault(_baseIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ALGORITHM_TYPE = "Compare";

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.YAxis = exports.XAxis = undefined;
	
	var _XAxis = __webpack_require__(93);
	
	var _XAxis2 = _interopRequireDefault(_XAxis);
	
	var _YAxis = __webpack_require__(97);
	
	var _YAxis2 = _interopRequireDefault(_YAxis);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.XAxis = _XAxis2.default;
	exports.YAxis = _YAxis2.default;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Axis = __webpack_require__(94);
	
	var _Axis2 = _interopRequireDefault(_Axis);
	
	var _PureComponent2 = __webpack_require__(19);
	
	var _PureComponent3 = _interopRequireDefault(_PureComponent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var XAxis = function (_PureComponent) {
		_inherits(XAxis, _PureComponent);
	
		function XAxis() {
			_classCallCheck(this, XAxis);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(XAxis).apply(this, arguments));
		}
	
		_createClass(XAxis, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var axisAt = _props.axisAt;
				var showTicks = _props.showTicks;
				var tickFormat = _props.tickFormat;
				var ticks = _props.ticks;
	
	
				var axisLocation;
				if (axisAt === "top") axisLocation = 0;else if (axisAt === "bottom") axisLocation = this.context.height;else if (axisAt === "middle") axisLocation = this.context.height / 2;else axisLocation = axisAt;
	
				if (tickFormat && this.context.xScale.isPolyLinear && this.context.xScale.isPolyLinear()) {
					console.warn("Cannot set tickFormat on a poly linear scale, ignoring tickFormat on XAxis");
					tickFormat = undefined;
				}
	
				if (ticks) ticks = [ticks];
				return _react2.default.createElement(_Axis2.default, _extends({}, this.props, {
					range: [0, this.context.width],
					transform: [0, axisLocation],
					showTicks: showTicks, tickFormat: tickFormat, ticks: ticks,
					scale: this.context.xScale }));
			}
		}]);
	
		return XAxis;
	}(_PureComponent3.default);
	
	XAxis.propTypes = {
		axisAt: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(["top", "bottom", "middle"]), _react.PropTypes.number]).isRequired,
		orient: _react.PropTypes.oneOf(["top", "bottom"]).isRequired,
		innerTickSize: _react.PropTypes.number,
		outerTickSize: _react.PropTypes.number,
		tickFormat: _react.PropTypes.func,
		tickPadding: _react.PropTypes.number,
		tickSize: _react.PropTypes.number,
		ticks: _react.PropTypes.number,
		tickValues: _react.PropTypes.array,
		showTicks: _react.PropTypes.bool,
		className: _react.PropTypes.string
	};
	XAxis.defaultProps = {
		showGrid: false,
		showTicks: true,
		className: "react-stockcharts-x-axis",
		ticks: 10
	};
	
	XAxis.contextTypes = {
		xScale: _react.PropTypes.func.isRequired,
		chartConfig: _react.PropTypes.object.isRequired,
		height: _react.PropTypes.number.isRequired,
		width: _react.PropTypes.number.isRequired
	};
	
	exports.default = XAxis;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AxisTicks = __webpack_require__(95);
	
	var _AxisTicks2 = _interopRequireDefault(_AxisTicks);
	
	var _AxisLine = __webpack_require__(96);
	
	var _AxisLine2 = _interopRequireDefault(_AxisLine);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Axis = function (_Component) {
		_inherits(Axis, _Component);
	
		function Axis(props) {
			_classCallCheck(this, Axis);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Axis).call(this, props));
	
			_this.drawOnCanvas = _this.drawOnCanvas.bind(_this);
			return _this;
		}
	
		_createClass(Axis, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				this.componentWillReceiveProps(this.props, this.context);
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps, nextContext) {
				var margin = nextContext.margin;
				var chartId = nextContext.chartId;
				var canvasOriginX = nextContext.canvasOriginX;
				var canvasOriginY = nextContext.canvasOriginY;
	
				var draw = Axis.drawOnCanvasStatic.bind(null, margin, nextProps, [canvasOriginX, canvasOriginY]);
	
				nextContext.callbackForCanvasDraw({
					chartId: chartId,
					type: "axis",
					draw: draw
				});
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				if (this.context.chartCanvasType !== "svg" && (0, _utils.isDefined)(this.context.getCanvasContexts)) {
					var contexts = this.context.getCanvasContexts();
					if (contexts) this.drawOnCanvas(contexts.axes);
				}
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				this.componentDidMount();
			}
		}, {
			key: "drawOnCanvas",
			value: function drawOnCanvas(ctx) {
				var _context = this.context;
				var margin = _context.margin;
				var canvasOriginX = _context.canvasOriginX;
				var canvasOriginY = _context.canvasOriginY;
				var scale = this.props.scale;
	
	
				Axis.drawOnCanvasStatic(margin, this.props, [canvasOriginX, canvasOriginY], ctx, scale, scale);
			}
		}, {
			key: "render",
			value: function render() {
				if (this.context.chartCanvasType !== "svg") return null;
	
				var domain = this.props.showDomain ? _react2.default.createElement(_AxisLine2.default, this.props) : null;
				var ticks = this.props.showTicks ? _react2.default.createElement(_AxisTicks2.default, this.props) : null;
	
				var className = "";
				if (this.props.className) className = this.props.defaultClassName.concat(this.props.className);
				return _react2.default.createElement(
					"g",
					{ className: className,
						transform: "translate(" + this.props.transform[0] + ", " + this.props.transform[1] + ")" },
					ticks,
					domain
				);
			}
		}]);
	
		return Axis;
	}(_react.Component);
	
	Axis.propTypes = {
		className: _react.PropTypes.string.isRequired,
		defaultClassName: _react.PropTypes.string.isRequired,
		transform: _react.PropTypes.arrayOf(Number).isRequired,
		orient: _react.PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
		innerTickSize: _react.PropTypes.number,
		outerTickSize: _react.PropTypes.number,
		tickFormat: _react.PropTypes.func,
		tickPadding: _react.PropTypes.number,
		tickSize: _react.PropTypes.number,
		ticks: _react.PropTypes.array,
		tickValues: _react.PropTypes.array,
		scale: _react.PropTypes.func.isRequired,
		showDomain: _react.PropTypes.bool.isRequired,
		showTicks: _react.PropTypes.bool.isRequired,
		fontFamily: _react.PropTypes.string,
		fontSize: _react.PropTypes.number.isRequired
	};
	
	Axis.defaultProps = {
		defaultClassName: "react-stockcharts-axis ",
		showDomain: true,
		showTicks: true,
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: 12
	};
	
	Axis.contextTypes = {
		getCanvasContexts: _react.PropTypes.func,
		chartCanvasType: _react.PropTypes.string,
		chartId: _react.PropTypes.number.isRequired,
		margin: _react.PropTypes.object.isRequired,
		canvasOriginX: _react.PropTypes.number,
		canvasOriginY: _react.PropTypes.number,
		// secretToSuperFastCanvasDraw: PropTypes.array.isRequired,
		callbackForCanvasDraw: _react.PropTypes.func.isRequired
	};
	
	Axis.drawOnCanvasStatic = function (margin, props, canvasOrigin, ctx, xScale, yScale) {
		var transform = props.transform;
		var showDomain = props.showDomain;
		var showTicks = props.showTicks;
	
		ctx.save();
	
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(canvasOrigin[0] + transform[0], canvasOrigin[1] + transform[1]);
	
		if (showDomain) _AxisLine2.default.drawOnCanvasStatic(props, ctx, xScale, yScale);
		if (showTicks) _AxisTicks2.default.drawOnCanvasStatic(props, ctx, xScale, yScale);
	
		ctx.restore();
	};
	
	exports.default = Axis;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function tickTransform_svg_axisX(scale, tick) {
		return [~ ~(0.5 + scale(tick)), 0];
	}
	
	function tickTransform_svg_axisY(scale, tick) {
		return [0, ~ ~(0.5 + scale(tick))];
	}
	
	var Tick = function (_Component) {
		_inherits(Tick, _Component);
	
		function Tick() {
			_classCallCheck(this, Tick);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Tick).apply(this, arguments));
		}
	
		_createClass(Tick, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var transform = _props.transform;
				var tickStroke = _props.tickStroke;
				var tickStrokeOpacity = _props.tickStrokeOpacity;
				var textAnchor = _props.textAnchor;
				var fontSize = _props.fontSize;
				var fontFamily = _props.fontFamily;
				var _props2 = this.props;
				var x = _props2.x;
				var y = _props2.y;
				var x2 = _props2.x2;
				var y2 = _props2.y2;
				var dy = _props2.dy;
	
				return _react2.default.createElement(
					"g",
					{ className: "tick", transform: "translate(" + transform[0] + ", " + transform[1] + ")" },
					_react2.default.createElement("line", { shapeRendering: "crispEdges", opacity: tickStrokeOpacity, stroke: tickStroke, x2: x2, y2: y2 }),
					_react2.default.createElement(
						"text",
						{
							dy: dy, x: x, y: y,
							fill: tickStroke,
							fontSize: fontSize,
							fontFamily: fontFamily,
							textAnchor: textAnchor },
						this.props.children
					)
				);
			}
		}]);
	
		return Tick;
	}(_react.Component);
	
	Tick.propTypes = {
		transform: _react.PropTypes.arrayOf(Number),
		tickStroke: _react.PropTypes.string,
		tickStrokeOpacity: _react.PropTypes.number,
		textAnchor: _react.PropTypes.string,
		fontSize: _react.PropTypes.number,
		fontFamily: _react.PropTypes.string,
		x: _react.PropTypes.number,
		y: _react.PropTypes.number,
		x2: _react.PropTypes.number,
		y2: _react.PropTypes.number,
		dy: _react.PropTypes.string,
		children: _react.PropTypes.node.isRequired
	};
	
	Tick.drawOnCanvasStatic = function (tick, ctx, result) {
		var scale = result.scale;
		var tickTransform = result.tickTransform;
		var canvas_dy = result.canvas_dy;
		var x = result.x;
		var y = result.y;
		var x2 = result.x2;
		var y2 = result.y2;
		var format = result.format;
	
	
		var origin = tickTransform(scale, tick);
	
		ctx.beginPath();
	
		ctx.moveTo(origin[0], origin[1]);
		ctx.lineTo(origin[0] + x2, origin[1] + y2);
		ctx.stroke();
	
		ctx.fillText(format(tick), origin[0] + x, origin[1] + y + canvas_dy);
	};
	
	var AxisTicks = function (_Component2) {
		_inherits(AxisTicks, _Component2);
	
		function AxisTicks() {
			_classCallCheck(this, AxisTicks);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(AxisTicks).apply(this, arguments));
		}
	
		_createClass(AxisTicks, [{
			key: "render",
			value: function render() {
				var result = AxisTicks.helper(this.props, this.props.scale);
				var ticks = result.ticks;
				var scale = result.scale;
				var tickTransform = result.tickTransform;
				var tickStroke = result.tickStroke;
				var tickStrokeOpacity = result.tickStrokeOpacity;
				var dy = result.dy;
				var x = result.x;
				var y = result.y;
				var x2 = result.x2;
				var y2 = result.y2;
				var textAnchor = result.textAnchor;
				var fontSize = result.fontSize;
				var fontFamily = result.fontFamily;
				var format = result.format;
	
	
				return _react2.default.createElement(
					"g",
					null,
					ticks.map(function (tick, idx) {
						return _react2.default.createElement(
							Tick,
							{ key: idx, transform: tickTransform(scale, tick),
								tickStroke: tickStroke, tickStrokeOpacity: tickStrokeOpacity,
								dy: dy, x: x, y: y,
								x2: x2, y2: y2, textAnchor: textAnchor,
								fontSize: fontSize, fontFamily: fontFamily },
							format(tick)
						);
					})
				);
			}
		}]);
	
		return AxisTicks;
	}(_react.Component);
	
	AxisTicks.propTypes = {
		orient: _react.PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
		innerTickSize: _react.PropTypes.number,
		tickFormat: _react.PropTypes.func,
		tickPadding: _react.PropTypes.number,
		ticks: _react.PropTypes.array,
		tickValues: _react.PropTypes.array,
		scale: _react.PropTypes.func.isRequired,
		tickStroke: _react.PropTypes.string,
		tickStrokeOpacity: _react.PropTypes.number
	};
	
	AxisTicks.defaultProps = {
		innerTickSize: 5,
		tickPadding: 6,
		ticks: [10],
		tickStroke: "#000",
		tickStrokeOpacity: 1
	};
	
	AxisTicks.helper = function (props, scale) {
		var orient = props.orient;
		var innerTickSize = props.innerTickSize;
		var tickFormat = props.tickFormat;
		var tickPadding = props.tickPadding;
		var fontSize = props.fontSize;
		var fontFamily = props.fontFamily;
		var tickArguments = props.ticks;
		var tickValues = props.tickValues;
		var tickStroke = props.tickStroke;
		var tickStrokeOpacity = props.tickStrokeOpacity;
	
	
		var ticks = (0, _utils.isNotDefined)(tickValues) ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues;
	
		var baseFormat = scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : _utils.identity;
	
		var format = (0, _utils.isNotDefined)(tickFormat) ? baseFormat : function (d) {
			return baseFormat(d) ? tickFormat(d) : "";
		};
	
		var sign = orient === "top" || orient === "left" ? -1 : 1;
		var tickSpacing = Math.max(innerTickSize, 0) + tickPadding;
	
		var tickTransform, x, y, x2, y2, dy, canvas_dy, textAnchor;
	
		if (orient === "bottom" || orient === "top") {
			tickTransform = tickTransform_svg_axisX;
			x2 = 0;
			y2 = sign * innerTickSize;
			x = 0;
			y = sign * tickSpacing;
			dy = sign < 0 ? "0em" : ".71em";
			canvas_dy = sign < 0 ? 0 : fontSize * .71;
			textAnchor = "middle";
		} else {
			tickTransform = tickTransform_svg_axisY;
			x2 = sign * innerTickSize;
			y2 = 0;
			x = sign * tickSpacing;
			y = 0;
			dy = ".32em";
			canvas_dy = fontSize * .32;
			textAnchor = sign < 0 ? "end" : "start";
		}
		return { ticks: ticks, scale: scale, tickTransform: tickTransform, tickStroke: tickStroke, tickStrokeOpacity: tickStrokeOpacity, dy: dy, canvas_dy: canvas_dy, x: x, y: y, x2: x2, y2: y2, textAnchor: textAnchor, fontSize: fontSize, fontFamily: fontFamily, format: format };
	};
	
	AxisTicks.drawOnCanvasStatic = function (props, ctx, xScale, yScale) {
		props = _extends({}, AxisTicks.defaultProps, props);
	
		var _props3 = props;
		var orient = _props3.orient;
	
		var xAxis = orient === "bottom" || orient === "top";
	
		var result = AxisTicks.helper(props, xAxis ? xScale : yScale);
	
		var tickStroke = result.tickStroke;
		var tickStrokeOpacity = result.tickStrokeOpacity;
		var textAnchor = result.textAnchor;
		var fontSize = result.fontSize;
		var fontFamily = result.fontFamily;
	
	
		ctx.strokeStyle = (0, _utils.hexToRGBA)(tickStroke, tickStrokeOpacity);
	
		ctx.font = fontSize + "px " + fontFamily;
		ctx.fillStyle = tickStroke;
		ctx.textAlign = textAnchor === "middle" ? "center" : textAnchor;
		// ctx.textBaseline = 'middle';
	
		result.ticks.forEach(function (tick) {
			Tick.drawOnCanvasStatic(tick, ctx, result);
		});
	};
	
	exports.default = AxisTicks;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	function d3_scaleExtent(domain) {
		var start = domain[0], stop = domain[domain.length - 1];
		return start < stop ? [start, stop] : [stop, start];
	}
	
	function d3_scaleRange(scale) {
		return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
	}
	*/
	
	var AxisLine = function (_Component) {
		_inherits(AxisLine, _Component);
	
		function AxisLine() {
			_classCallCheck(this, AxisLine);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(AxisLine).apply(this, arguments));
		}
	
		_createClass(AxisLine, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var orient = _props.orient;
				var outerTickSize = _props.outerTickSize;
				var fill = _props.fill;
				var stroke = _props.stroke;
				var strokeWidth = _props.strokeWidth;
				var className = _props.className;
				var shapeRendering = _props.shapeRendering;
				var opacity = _props.opacity;
				var range = _props.range;
	
				var sign = orient === "top" || orient === "left" ? -1 : 1;
	
				// var range = d3_scaleRange(scale);
	
				var d;
	
				if (orient === "bottom" || orient === "top") {
					d = "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize;
				} else {
					d = "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize;
				}
	
				return _react2.default.createElement("path", {
					className: className,
					shapeRendering: shapeRendering,
					d: d,
					fill: fill,
					opacity: opacity,
					stroke: stroke,
					strokeWidth: strokeWidth });
			}
		}]);
	
		return AxisLine;
	}(_react.Component);
	
	AxisLine.propTypes = {
		className: _react.PropTypes.string,
		shapeRendering: _react.PropTypes.string,
		orient: _react.PropTypes.string.isRequired,
		scale: _react.PropTypes.func.isRequired,
		outerTickSize: _react.PropTypes.number,
		fill: _react.PropTypes.string,
		stroke: _react.PropTypes.string,
		strokeWidth: _react.PropTypes.number,
		opacity: _react.PropTypes.number,
		range: _react.PropTypes.array
	};
	
	AxisLine.defaultProps = {
		className: "react-stockcharts-axis-line",
		shapeRendering: "crispEdges",
		outerTickSize: 0,
		fill: "none",
		stroke: "#000000",
		strokeWidth: 1,
		opacity: 1
	};
	
	AxisLine.drawOnCanvasStatic = function (props, ctx /* , xScale, yScale*/) {
		props = _extends({}, AxisLine.defaultProps, props);
	
		var _props2 = props;
		var orient = _props2.orient;
		var outerTickSize = _props2.outerTickSize;
		var stroke = _props2.stroke;
		var strokeWidth = _props2.strokeWidth;
		var opacity = _props2.opacity;
		var range = _props2.range;
	
	
		var sign = orient === "top" || orient === "left" ? -1 : 1;
		var xAxis = orient === "bottom" || orient === "top";
	
		// var range = d3_scaleRange(xAxis ? xScale : yScale);
	
		ctx.lineWidth = strokeWidth;
		ctx.strokeStyle = (0, _utils.hexToRGBA)(stroke, opacity);
	
		ctx.beginPath();
	
		if (xAxis) {
			ctx.moveTo((0, _utils.first)(range), sign * outerTickSize);
			ctx.lineTo((0, _utils.first)(range), 0);
			ctx.lineTo((0, _utils.last)(range), 0);
			ctx.lineTo((0, _utils.last)(range), sign * outerTickSize);
		} else {
			ctx.moveTo(sign * outerTickSize, (0, _utils.first)(range));
			ctx.lineTo(0, (0, _utils.first)(range));
			ctx.lineTo(0, (0, _utils.last)(range));
			ctx.lineTo(sign * outerTickSize, (0, _utils.last)(range));
		}
		ctx.stroke();
	
		// ctx.strokeStyle = strokeStyle;
	};
	
	exports.default = AxisLine;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Axis = __webpack_require__(94);
	
	var _Axis2 = _interopRequireDefault(_Axis);
	
	var _PureComponent2 = __webpack_require__(19);
	
	var _PureComponent3 = _interopRequireDefault(_PureComponent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var YAxis = function (_PureComponent) {
		_inherits(YAxis, _PureComponent);
	
		function YAxis() {
			_classCallCheck(this, YAxis);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(YAxis).apply(this, arguments));
		}
	
		_createClass(YAxis, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var axisAt = _props.axisAt;
				var tickFormat = _props.tickFormat;
				var ticks = _props.ticks;
				var percentScale = _props.percentScale;
				var tickValues = _props.tickValues;
				var chartConfig = this.context.chartConfig;
	
				var yScale = percentScale ? chartConfig.yScale.copy().domain([0, 1]) : chartConfig.yScale;
	
				tickValues = tickValues || chartConfig.yTicks;
	
				var axisLocation;
	
				if (axisAt === "left") axisLocation = 0;else if (axisAt === "right") axisLocation = this.context.width;else if (axisAt === "middle") axisLocation = this.context.width / 2;else axisLocation = axisAt;
	
				return _react2.default.createElement(_Axis2.default, _extends({}, this.props, {
					transform: [axisLocation, 0],
					range: [0, this.context.height],
					tickFormat: tickFormat, ticks: [ticks], tickValues: tickValues,
					scale: yScale }));
			}
		}]);
	
		return YAxis;
	}(_PureComponent3.default);
	
	YAxis.propTypes = {
		axisAt: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(["left", "right", "middle"]), _react.PropTypes.number]).isRequired,
		orient: _react.PropTypes.oneOf(["left", "right"]).isRequired,
		innerTickSize: _react.PropTypes.number,
		outerTickSize: _react.PropTypes.number,
		tickFormat: _react.PropTypes.func,
		tickPadding: _react.PropTypes.number,
		tickSize: _react.PropTypes.number,
		ticks: _react.PropTypes.number,
		tickValues: _react.PropTypes.array,
		percentScale: _react.PropTypes.bool,
		showTicks: _react.PropTypes.bool,
		showDomain: _react.PropTypes.bool,
		className: _react.PropTypes.string
	};
	YAxis.defaultProps = {
		showGrid: false,
		showDomain: false,
		className: "react-stockcharts-y-axis",
		ticks: 10
	};
	YAxis.contextTypes = {
		chartConfig: _react.PropTypes.object.isRequired,
		xScale: _react.PropTypes.func.isRequired,
		width: _react.PropTypes.number.isRequired
	};
	
	exports.default = YAxis;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.StochasticTooltip = exports.RSITooltip = exports.BollingerBandTooltip = exports.MovingAverageTooltip = exports.SingleValueTooltip = exports.OHLCTooltip = exports.TooltipContainer = exports.MACDTooltip = undefined;
	
	var _MACDTooltip = __webpack_require__(99);
	
	var _MACDTooltip2 = _interopRequireDefault(_MACDTooltip);
	
	var _TooltipContainer = __webpack_require__(102);
	
	var _TooltipContainer2 = _interopRequireDefault(_TooltipContainer);
	
	var _OHLCTooltip = __webpack_require__(103);
	
	var _OHLCTooltip2 = _interopRequireDefault(_OHLCTooltip);
	
	var _SingleValueTooltip = __webpack_require__(104);
	
	var _SingleValueTooltip2 = _interopRequireDefault(_SingleValueTooltip);
	
	var _MovingAverageTooltip = __webpack_require__(105);
	
	var _MovingAverageTooltip2 = _interopRequireDefault(_MovingAverageTooltip);
	
	var _BollingerBandTooltip = __webpack_require__(106);
	
	var _BollingerBandTooltip2 = _interopRequireDefault(_BollingerBandTooltip);
	
	var _RSITooltip = __webpack_require__(107);
	
	var _RSITooltip2 = _interopRequireDefault(_RSITooltip);
	
	var _StochasticTooltip = __webpack_require__(108);
	
	var _StochasticTooltip2 = _interopRequireDefault(_StochasticTooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.MACDTooltip = _MACDTooltip2.default;
	exports.TooltipContainer = _TooltipContainer2.default;
	exports.OHLCTooltip = _OHLCTooltip2.default;
	exports.SingleValueTooltip = _SingleValueTooltip2.default;
	exports.MovingAverageTooltip = _MovingAverageTooltip2.default;
	exports.BollingerBandTooltip = _BollingerBandTooltip2.default;
	exports.RSITooltip = _RSITooltip2.default;
	exports.StochasticTooltip = _StochasticTooltip2.default;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d2 = __webpack_require__(4);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ToolTipText = __webpack_require__(100);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(101);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MACDTooltip = function (_Component) {
		_inherits(MACDTooltip, _Component);
	
		function MACDTooltip() {
			_classCallCheck(this, MACDTooltip);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(MACDTooltip).apply(this, arguments));
		}
	
		_createClass(MACDTooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var forChart = _props.forChart;
				var onClick = _props.onClick;
				var fontFamily = _props.fontFamily;
				var fontSize = _props.fontSize;
				var calculator = _props.calculator;
				var displayFormat = _props.displayFormat;
				var _context = this.context;
				var chartConfig = _context.chartConfig;
				var currentItem = _context.currentItem;
				var width = _context.width;
				var height = _context.height;
	
	
				var yAccessor = calculator.accessor();
				var config = (0, _utils.first)(chartConfig.filter(function (each) {
					return each.id === forChart;
				}));
	
				var macdValue = yAccessor(currentItem);
	
				var macd = macdValue && macdValue.macd && displayFormat(macdValue.macd) || "n/a";
				var signal = macdValue && macdValue.signal && displayFormat(macdValue.signal) || "n/a";
				var divergence = macdValue && macdValue.divergence && displayFormat(macdValue.divergence) || "n/a";
	
				var originProp = this.props.origin;
	
				var origin = _d3.default.functor(originProp);
	
				var _origin = origin(width, height);
	
				var _origin2 = _slicedToArray(_origin, 2);
	
				var x = _origin2[0];
				var y = _origin2[1];
	
				var _config$origin = _slicedToArray(config.origin, 2);
	
				var ox = _config$origin[0];
				var oy = _config$origin[1];
	
	
				return _react2.default.createElement(
					"g",
					{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")", onClick: onClick },
					_react2.default.createElement(
						_ToolTipText2.default,
						{ x: 0, y: 0,
							fontFamily: fontFamily, fontSize: fontSize },
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							null,
							"MACD ("
						),
						_react2.default.createElement(
							"tspan",
							{ fill: calculator.stroke().macd },
							calculator.slow()
						),
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							null,
							", "
						),
						_react2.default.createElement(
							"tspan",
							{ fill: calculator.stroke().macd },
							calculator.fast()
						),
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							null,
							"): "
						),
						_react2.default.createElement(
							"tspan",
							{ fill: calculator.stroke().macd },
							macd
						),
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							null,
							" Signal ("
						),
						_react2.default.createElement(
							"tspan",
							{ fill: calculator.stroke().signal },
							calculator.signal()
						),
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							null,
							"): "
						),
						_react2.default.createElement(
							"tspan",
							{ fill: calculator.stroke().signal },
							signal
						),
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							null,
							" Divergence: "
						),
						_react2.default.createElement(
							"tspan",
							{ fill: calculator.fill().divergence },
							divergence
						)
					)
				);
			}
		}]);
	
		return MACDTooltip;
	}(_react.Component);
	
	MACDTooltip.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object.isRequired,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired
	};
	
	MACDTooltip.propTypes = {
		forChart: _react.PropTypes.number.isRequired,
		origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
		fontFamily: _react.PropTypes.string,
		fontSize: _react.PropTypes.number,
		calculator: _react.PropTypes.func.isRequired,
		displayFormat: _react.PropTypes.func.isRequired,
		onClick: _react.PropTypes.func
	};
	
	MACDTooltip.defaultProps = {
		origin: [0, 0],
		displayFormat: _d3.default.format(".2f")
	};
	
	exports.default = MACDTooltip;
	// export default MACDTooltip;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ToolTipText = function (_Component) {
		_inherits(ToolTipText, _Component);
	
		function ToolTipText() {
			_classCallCheck(this, ToolTipText);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ToolTipText).apply(this, arguments));
		}
	
		_createClass(ToolTipText, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"text",
					_extends({
						fontFamily: this.props.fontFamily,
						fontSize: this.props.fontSize
					}, this.props, {
						className: "react-stockcharts-tooltip" }),
					this.props.children
				);
			}
		}]);
	
		return ToolTipText;
	}(_react.Component);
	
	ToolTipText.propTypes = {
		fontFamily: _react.PropTypes.string.isRequired,
		fontSize: _react.PropTypes.number.isRequired,
		children: _react.PropTypes.node.isRequired
	};
	
	ToolTipText.defaultProps = {
		fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
		fontSize: 11
	};
	
	exports.default = ToolTipText;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ToolTipTSpanLabel = function (_Component) {
		_inherits(ToolTipTSpanLabel, _Component);
	
		function ToolTipTSpanLabel() {
			_classCallCheck(this, ToolTipTSpanLabel);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ToolTipTSpanLabel).apply(this, arguments));
		}
	
		_createClass(ToolTipTSpanLabel, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"tspan",
					_extends({ className: "react-stockcharts-tooltip-label", fill: "#4682B4" }, this.props),
					this.props.children
				);
			}
		}]);
	
		return ToolTipTSpanLabel;
	}(_react.Component);
	
	ToolTipTSpanLabel.propTypes = {
		children: _react.PropTypes.node.isRequired
	};
	
	exports.default = ToolTipTSpanLabel;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PureComponent2 = __webpack_require__(19);
	
	var _PureComponent3 = _interopRequireDefault(_PureComponent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TooltipContainer = function (_PureComponent) {
		_inherits(TooltipContainer, _PureComponent);
	
		function TooltipContainer() {
			_classCallCheck(this, TooltipContainer);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(TooltipContainer).apply(this, arguments));
		}
	
		_createClass(TooltipContainer, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"g",
					{ className: "react-stockcharts-toottip-hover" },
					this.props.children
				);
			}
		}]);
	
		return TooltipContainer;
	}(_PureComponent3.default);
	
	TooltipContainer.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object.isRequired
	};
	
	exports.default = TooltipContainer;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d2 = __webpack_require__(4);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _utils = __webpack_require__(5);
	
	var _ToolTipText = __webpack_require__(100);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(101);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OHLCTooltip = function (_Component) {
		_inherits(OHLCTooltip, _Component);
	
		function OHLCTooltip() {
			_classCallCheck(this, OHLCTooltip);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(OHLCTooltip).apply(this, arguments));
		}
	
		_createClass(OHLCTooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var forChart = _props.forChart;
				var onClick = _props.onClick;
				var xDisplayFormat = _props.xDisplayFormat;
				var fontFamily = _props.fontFamily;
				var fontSize = _props.fontSize;
				var accessor = _props.accessor;
				var volumeFormat = _props.volumeFormat;
				var ohlcFormat = _props.ohlcFormat;
	
	
				var displayDate, open, high, low, close, volume;
	
				displayDate = open = high = low = close = volume = "n/a";
	
				var _context = this.context;
				var chartConfig = _context.chartConfig;
				var currentItem = _context.currentItem;
				var width = _context.width;
				var height = _context.height;
	
				var config = (0, _utils.first)(chartConfig.filter(function (each) {
					return each.id === forChart;
				}));
	
				if ((0, _utils.isDefined)(currentItem) && (0, _utils.isDefined)(accessor(currentItem)) && (0, _utils.isDefined)(accessor(currentItem).close)) {
					var item = accessor(currentItem);
					volume = volumeFormat(item.volume);
	
					displayDate = xDisplayFormat(item.date);
					open = ohlcFormat(item.open);
					high = ohlcFormat(item.high);
					low = ohlcFormat(item.low);
					close = ohlcFormat(item.close);
				}
	
				var originProp = this.props.origin;
	
				var origin = _d3.default.functor(originProp);
	
				var _origin = origin(width, height);
	
				var _origin2 = _slicedToArray(_origin, 2);
	
				var x = _origin2[0];
				var y = _origin2[1];
	
				var _config$origin = _slicedToArray(config.origin, 2);
	
				var ox = _config$origin[0];
				var oy = _config$origin[1];
	
	
				return _react2.default.createElement(
					"g",
					{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")", onClick: onClick },
					_react2.default.createElement(
						_ToolTipText2.default,
						{ x: 0, y: 0,
							fontFamily: fontFamily, fontSize: fontSize },
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							{ key: "label", x: 0, dy: "5" },
							"Date: "
						),
						_react2.default.createElement(
							"tspan",
							{ key: "value" },
							displayDate
						),
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							{ key: "label_O" },
							" O: "
						),
						_react2.default.createElement(
							"tspan",
							{ key: "value_O" },
							open
						),
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							{ key: "label_H" },
							" H: "
						),
						_react2.default.createElement(
							"tspan",
							{ key: "value_H" },
							high
						),
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							{ key: "label_L" },
							" L: "
						),
						_react2.default.createElement(
							"tspan",
							{ key: "value_L" },
							low
						),
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							{ key: "label_C" },
							" C: "
						),
						_react2.default.createElement(
							"tspan",
							{ key: "value_C" },
							close
						),
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							{ key: "label_Vol" },
							" Vol: "
						),
						_react2.default.createElement(
							"tspan",
							{ key: "value_Vol" },
							volume
						)
					)
				);
			}
		}]);
	
		return OHLCTooltip;
	}(_react.Component);
	
	OHLCTooltip.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object.isRequired,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired
	};
	
	OHLCTooltip.propTypes = {
		forChart: _react.PropTypes.number.isRequired,
		accessor: _react.PropTypes.func.isRequired,
		xDisplayFormat: _react.PropTypes.func.isRequired,
		ohlcFormat: _react.PropTypes.func.isRequired,
		origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
		fontFamily: _react.PropTypes.string,
		fontSize: _react.PropTypes.number,
		onClick: _react.PropTypes.func,
		volumeFormat: _react.PropTypes.func
	};
	
	OHLCTooltip.defaultProps = {
		accessor: function accessor(d) {
			return { date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume };
		},
		xDisplayFormat: _d3.default.time.format("%Y-%m-%d"),
		volumeFormat: _d3.default.format(".4s"),
		ohlcFormat: _d3.default.format(".2f"),
		origin: [0, 0]
	};
	
	exports.default = OHLCTooltip;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d2 = __webpack_require__(4);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ToolTipText = __webpack_require__(100);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(101);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SingleValueTooltip = function (_Component) {
		_inherits(SingleValueTooltip, _Component);
	
		function SingleValueTooltip() {
			_classCallCheck(this, SingleValueTooltip);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(SingleValueTooltip).apply(this, arguments));
		}
	
		_createClass(SingleValueTooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var forChart = _props.forChart;
				var onClick = _props.onClick;
				var fontFamily = _props.fontFamily;
				var fontSize = _props.fontSize;
				var labelStroke = _props.labelStroke;
				var valueStroke = _props.valueStroke;
				var _props2 = this.props;
				var xDisplayFormat = _props2.xDisplayFormat;
				var yDisplayFormat = _props2.yDisplayFormat;
				var xLabel = _props2.xLabel;
				var yLabel = _props2.yLabel;
				var xAccessor = _props2.xAccessor;
				var yAccessor = _props2.yAccessor;
				var _context = this.context;
				var chartConfig = _context.chartConfig;
				var currentItem = _context.currentItem;
				var width = _context.width;
				var height = _context.height;
	
	
				var config = (0, _utils.first)(chartConfig.filter(function (each) {
					return each.id === forChart;
				}));
	
				var xDisplayValue = (0, _utils.isDefined)(xAccessor(currentItem)) ? xDisplayFormat(xAccessor(currentItem)) : "n/a";
				var yDisplayValue = (0, _utils.isDefined)(yAccessor(currentItem)) ? yDisplayFormat(yAccessor(currentItem)) : "n/a";
	
				var originProp = this.props.origin;
	
				var origin = _d3.default.functor(originProp);
	
				var _origin = origin(width, height);
	
				var _origin2 = _slicedToArray(_origin, 2);
	
				var x = _origin2[0];
				var y = _origin2[1];
	
				var _config$origin = _slicedToArray(config.origin, 2);
	
				var ox = _config$origin[0];
				var oy = _config$origin[1];
	
	
				return _react2.default.createElement(
					"g",
					{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")", onClick: onClick },
					_react2.default.createElement(
						_ToolTipText2.default,
						{ x: 0, y: 0,
							fontFamily: fontFamily, fontSize: fontSize },
						xLabel ? _react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							{ x: 0, dy: "5", fill: labelStroke },
							xLabel + ": "
						) : null,
						xLabel ? _react2.default.createElement(
							"tspan",
							{ fill: valueStroke },
							xDisplayValue + " "
						) : null,
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							{ fill: labelStroke },
							yLabel + ": "
						),
						_react2.default.createElement(
							"tspan",
							{ fill: valueStroke },
							yDisplayValue
						)
					)
				);
			}
		}]);
	
		return SingleValueTooltip;
	}(_react.Component);
	
	SingleValueTooltip.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object.isRequired,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired
	};
	
	SingleValueTooltip.propTypes = {
		forChart: _react.PropTypes.number.isRequired,
		xDisplayFormat: _react.PropTypes.func,
		yDisplayFormat: _react.PropTypes.func.isRequired,
		xLabel: _react.PropTypes.string,
		yLabel: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,
		labelStroke: _react.PropTypes.string.isRequired,
		valueStroke: _react.PropTypes.string,
		origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
		fontFamily: _react.PropTypes.string,
		fontSize: _react.PropTypes.number,
		onClick: _react.PropTypes.func,
		xAccessor: _react.PropTypes.func,
		yAccessor: _react.PropTypes.func
	};
	
	SingleValueTooltip.defaultProps = {
		origin: [0, 0],
		labelStroke: "#4682B4",
		valueStroke: "#000000",
		yDisplayFormat: _d3.default.format(".2f"),
		xAccessor: _utils.noop,
		yAccessor: _utils.identity
	};
	
	exports.default = SingleValueTooltip;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(4);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _ToolTipText = __webpack_require__(100);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(101);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SingleMAToolTip = function (_Component) {
		_inherits(SingleMAToolTip, _Component);
	
		function SingleMAToolTip(props) {
			_classCallCheck(this, SingleMAToolTip);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SingleMAToolTip).call(this, props));
	
			_this.handleClick = _this.handleClick.bind(_this);
			return _this;
		}
	
		_createClass(SingleMAToolTip, [{
			key: "handleClick",
			value: function handleClick(e) {
				var _props = this.props;
				var onClick = _props.onClick;
				var forChart = _props.forChart;
				var options = _props.options;
	
				onClick(_extends({ chartId: forChart }, options), e);
			}
		}, {
			key: "render",
			value: function render() {
				var translate = "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")";
				return _react2.default.createElement(
					"g",
					{ transform: translate },
					_react2.default.createElement("line", { x1: 0, y1: 2, x2: 0, y2: 28, stroke: this.props.color, strokeWidth: "4px" }),
					_react2.default.createElement(
						_ToolTipText2.default,
						{ x: 5, y: 11,
							fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							null,
							this.props.displayName
						),
						_react2.default.createElement(
							"tspan",
							{ x: "5", dy: "15" },
							this.props.value
						)
					),
					_react2.default.createElement("rect", { x: 0, y: 0, width: 55, height: 30,
						onClick: this.handleClick,
						fill: "none", stroke: "none" })
				);
			}
		}]);
	
		return SingleMAToolTip;
	}(_react.Component);
	
	SingleMAToolTip.propTypes = {
		origin: _react.PropTypes.array.isRequired,
		color: _react.PropTypes.string.isRequired,
		displayName: _react.PropTypes.string.isRequired,
		value: _react.PropTypes.string.isRequired,
		onClick: _react.PropTypes.func,
		fontFamily: _react.PropTypes.string,
		fontSize: _react.PropTypes.number,
		forChart: _react.PropTypes.number.isRequired,
		options: _react.PropTypes.object.isRequired
	};
	
	var MovingAverageTooltip = function (_Component2) {
		_inherits(MovingAverageTooltip, _Component2);
	
		function MovingAverageTooltip() {
			_classCallCheck(this, MovingAverageTooltip);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(MovingAverageTooltip).apply(this, arguments));
		}
	
		_createClass(MovingAverageTooltip, [{
			key: "render",
			value: function render() {
				var _context = this.context;
				var chartConfig = _context.chartConfig;
				var currentItem = _context.currentItem;
				var width = _context.width;
				var height = _context.height;
				var _props2 = this.props;
				var className = _props2.className;
				var onClick = _props2.onClick;
				var forChart = _props2.forChart;
				var width = _props2.width;
				var fontFamily = _props2.fontFamily;
				var fontSize = _props2.fontSize;
				var originProp = _props2.origin;
				var calculators = _props2.calculators;
				var displayFormat = _props2.displayFormat;
	
	
				var config = (0, _utils.first)(chartConfig.filter(function (each) {
					return each.id === forChart;
				}));
	
				var origin = _d2.default.functor(originProp);
	
				var _origin = origin(width, height);
	
				var _origin2 = _slicedToArray(_origin, 2);
	
				var x = _origin2[0];
				var y = _origin2[1];
	
				var _config$origin = _slicedToArray(config.origin, 2);
	
				var ox = _config$origin[0];
				var oy = _config$origin[1];
	
	
				return _react2.default.createElement(
					"g",
					{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")", className: className },
					calculators.map(function (each, idx) {
						var yValue = each.accessor()(currentItem);
						var options = {
							maType: each.type(),
							period: each.windowSize(),
							source: each.source(),
							echo: each.echo()
						};
						var yDisplayValue = yValue ? displayFormat(yValue) : "n/a";
						return _react2.default.createElement(SingleMAToolTip, {
							key: idx,
							origin: [width * idx, 0],
							color: each.stroke(),
							displayName: each.tooltipLabel(),
							value: yDisplayValue,
							options: options,
							forChart: forChart, onClick: onClick,
							fontFamily: fontFamily, fontSize: fontSize });
					})
				);
			}
		}]);
	
		return MovingAverageTooltip;
	}(_react.Component);
	
	MovingAverageTooltip.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object.isRequired,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired
	};
	
	MovingAverageTooltip.propTypes = {
		className: _react.PropTypes.string,
		forChart: _react.PropTypes.number.isRequired,
		displayFormat: _react.PropTypes.func.isRequired,
		origin: _react.PropTypes.array.isRequired,
		onClick: _react.PropTypes.func,
		fontFamily: _react.PropTypes.string,
		fontSize: _react.PropTypes.number,
		width: _react.PropTypes.number,
		calculators: _react.PropTypes.array.isRequired,
		forDataSeries: _react.PropTypes.arrayOf(_react.PropTypes.number)
	};
	
	MovingAverageTooltip.defaultProps = {
		className: "react-stockcharts-moving-average-tooltip",
		displayFormat: _d2.default.format(".2f"),
		origin: [0, 10],
		width: 65
	};
	
	exports.default = MovingAverageTooltip;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d2 = __webpack_require__(4);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _utils = __webpack_require__(5);
	
	var _ToolTipText = __webpack_require__(100);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(101);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BollingerBandTooltip = function (_Component) {
		_inherits(BollingerBandTooltip, _Component);
	
		function BollingerBandTooltip() {
			_classCallCheck(this, BollingerBandTooltip);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(BollingerBandTooltip).apply(this, arguments));
		}
	
		_createClass(BollingerBandTooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var onClick = _props.onClick;
				var forChart = _props.forChart;
				var displayFormat = _props.displayFormat;
				var calculator = _props.calculator;
				var _context = this.context;
				var chartConfig = _context.chartConfig;
				var currentItem = _context.currentItem;
				var width = _context.width;
				var height = _context.height;
	
				var config = (0, _utils.first)(chartConfig.filter(function (each) {
					return each.id === forChart;
				}));
	
				var top, middle, bottom;
				top = middle = bottom = "n/a";
				var accessor = calculator.accessor();
	
				if ((0, _utils.isDefined)(currentItem) && (0, _utils.isDefined)(accessor(currentItem))) {
					var item = accessor(currentItem);
					top = displayFormat(item.top);
					middle = displayFormat(item.middle);
					bottom = displayFormat(item.bottom);
				}
	
				var originProp = this.props.origin;
	
				var origin = _d3.default.functor(originProp);
	
				var _origin = origin(width, height);
	
				var _origin2 = _slicedToArray(_origin, 2);
	
				var x = _origin2[0];
				var y = _origin2[1];
	
				var _config$origin = _slicedToArray(config.origin, 2);
	
				var ox = _config$origin[0];
				var oy = _config$origin[1];
	
				var tooltipLabel = _d3.default.functor(calculator.tooltipLabel());
	
				return _react2.default.createElement(
					"g",
					{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")",
						className: this.props.className, onClick: onClick },
					_react2.default.createElement(
						_ToolTipText2.default,
						{ x: 0, y: 0,
							fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							null,
							tooltipLabel()
						),
						_react2.default.createElement(
							"tspan",
							null,
							top + ", " + middle + ", " + bottom
						)
					)
				);
			}
		}]);
	
		return BollingerBandTooltip;
	}(_react.Component);
	
	BollingerBandTooltip.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object.isRequired,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired
	};
	BollingerBandTooltip.propTypes = {
		className: _react.PropTypes.string,
		forChart: _react.PropTypes.number.isRequired,
		calculator: _react.PropTypes.func.isRequired,
		displayFormat: _react.PropTypes.func.isRequired,
		origin: _react.PropTypes.array.isRequired,
		onClick: _react.PropTypes.func,
		fontFamily: _react.PropTypes.string,
		fontSize: _react.PropTypes.number,
		forDataSeries: _react.PropTypes.number
	};
	
	BollingerBandTooltip.defaultProps = {
		className: "react-stockcharts-bollingerband-tooltip",
		displayFormat: _d3.default.format(".2f"),
		origin: [0, 10]
	};
	
	exports.default = BollingerBandTooltip;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d2 = __webpack_require__(4);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(5);
	
	var _ToolTipText = __webpack_require__(100);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(101);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RSITooltip = function (_Component) {
		_inherits(RSITooltip, _Component);
	
		function RSITooltip() {
			_classCallCheck(this, RSITooltip);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(RSITooltip).apply(this, arguments));
		}
	
		_createClass(RSITooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var forChart = _props.forChart;
				var onClick = _props.onClick;
				var fontFamily = _props.fontFamily;
				var fontSize = _props.fontSize;
				var calculator = _props.calculator;
				var displayFormat = _props.displayFormat;
				var _context = this.context;
				var chartConfig = _context.chartConfig;
				var currentItem = _context.currentItem;
				var width = _context.width;
				var height = _context.height;
	
	
				var yAccessor = calculator.accessor();
				var config = (0, _utils.first)(chartConfig.filter(function (each) {
					return each.id === forChart;
				}));
				var rsi = yAccessor(currentItem);
	
				var value = (0, _utils.isDefined)(rsi) && displayFormat(rsi) || "n/a";
	
				var originProp = this.props.origin;
	
				var origin = _d3.default.functor(originProp);
	
				var _origin = origin(width, height);
	
				var _origin2 = _slicedToArray(_origin, 2);
	
				var x = _origin2[0];
				var y = _origin2[1];
	
				var _config$origin = _slicedToArray(config.origin, 2);
	
				var ox = _config$origin[0];
				var oy = _config$origin[1];
	
	
				return _react2.default.createElement(
					"g",
					{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")", onClick: onClick },
					_react2.default.createElement(
						_ToolTipText2.default,
						{ x: 0, y: 0,
							fontFamily: fontFamily, fontSize: fontSize },
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							null,
							calculator.tooltipLabel()
						),
						_react2.default.createElement(
							"tspan",
							null,
							value
						)
					)
				);
			}
		}]);
	
		return RSITooltip;
	}(_react.Component);
	
	RSITooltip.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object.isRequired,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired
	};
	
	RSITooltip.propTypes = {
		forChart: _react.PropTypes.number.isRequired,
		origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
		fontFamily: _react.PropTypes.string,
		fontSize: _react.PropTypes.number,
		onClick: _react.PropTypes.func,
		calculator: _react.PropTypes.func.isRequired,
		displayFormat: _react.PropTypes.func.isRequired
	};
	
	RSITooltip.defaultProps = {
		displayFormat: _d3.default.format(".2f"),
		origin: [0, 0]
	};
	
	exports.default = RSITooltip;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d2 = __webpack_require__(4);
	
	var _d3 = _interopRequireDefault(_d2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(5);
	
	var _ToolTipText = __webpack_require__(100);
	
	var _ToolTipText2 = _interopRequireDefault(_ToolTipText);
	
	var _ToolTipTSpanLabel = __webpack_require__(101);
	
	var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StochasticTooltip = function (_Component) {
		_inherits(StochasticTooltip, _Component);
	
		function StochasticTooltip() {
			_classCallCheck(this, StochasticTooltip);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(StochasticTooltip).apply(this, arguments));
		}
	
		_createClass(StochasticTooltip, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var forChart = _props.forChart;
				var onClick = _props.onClick;
				var fontFamily = _props.fontFamily;
				var fontSize = _props.fontSize;
				var calculator = _props.calculator;
				var displayFormat = _props.displayFormat;
				var children = _props.children;
				var _context = this.context;
				var chartConfig = _context.chartConfig;
				var currentItem = _context.currentItem;
				var width = _context.width;
				var height = _context.height;
	
	
				var yAccessor = calculator.accessor();
				var stroke = calculator.stroke();
				var config = (0, _utils.first)(chartConfig.filter(function (each) {
					return each.id === forChart;
				}));
				var stochastic = yAccessor(currentItem);
	
				var K = stochastic && stochastic.K && displayFormat(stochastic.K) || "n/a";
				var D = stochastic && stochastic.D && displayFormat(stochastic.D) || "n/a";
				var label = children || "Stochastic";
	
				var originProp = this.props.origin;
	
				var origin = _d3.default.functor(originProp);
	
				var _origin = origin(width, height);
	
				var _origin2 = _slicedToArray(_origin, 2);
	
				var x = _origin2[0];
				var y = _origin2[1];
	
				var _config$origin = _slicedToArray(config.origin, 2);
	
				var ox = _config$origin[0];
				var oy = _config$origin[1];
	
	
				return _react2.default.createElement(
					"g",
					{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")", onClick: onClick },
					_react2.default.createElement(
						_ToolTipText2.default,
						{ x: 0, y: 0, fontFamily: fontFamily, fontSize: fontSize },
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							null,
							label + " %K("
						),
						_react2.default.createElement(
							"tspan",
							{ fill: stroke.K },
							calculator.windowSize() + ", " + calculator.kWindowSize()
						),
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							null,
							"): "
						),
						_react2.default.createElement(
							"tspan",
							{ fill: stroke.K },
							K
						),
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							null,
							" %D ("
						),
						_react2.default.createElement(
							"tspan",
							{ fill: stroke.D },
							calculator.dWindowSize()
						),
						_react2.default.createElement(
							_ToolTipTSpanLabel2.default,
							null,
							"): "
						),
						_react2.default.createElement(
							"tspan",
							{ fill: stroke.D },
							D
						)
					)
				);
			}
		}]);
	
		return StochasticTooltip;
	}(_react.Component);
	
	StochasticTooltip.contextTypes = {
		chartConfig: _react.PropTypes.array.isRequired,
		currentItem: _react.PropTypes.object.isRequired,
		width: _react.PropTypes.number.isRequired,
		height: _react.PropTypes.number.isRequired
	};
	
	StochasticTooltip.propTypes = {
		forChart: _react.PropTypes.number.isRequired,
		origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
		fontFamily: _react.PropTypes.string,
		fontSize: _react.PropTypes.number,
		onClick: _react.PropTypes.func,
		calculator: _react.PropTypes.func.isRequired,
		displayFormat: _react.PropTypes.func.isRequired,
		children: _react.PropTypes.node.isRequired
	};
	
	StochasticTooltip.defaultProps = {
		displayFormat: _d3.default.format(".2f"),
		origin: [0, 0]
	};
	
	exports.default = StochasticTooltip;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.fitWidth = exports.SaveChartAsImage = exports.ChartWidthMixin = exports.TypeChooser = undefined;
	
	var _TypeChooser = __webpack_require__(110);
	
	var _TypeChooser2 = _interopRequireDefault(_TypeChooser);
	
	var _ChartWidthMixin = __webpack_require__(111);
	
	var _ChartWidthMixin2 = _interopRequireDefault(_ChartWidthMixin);
	
	var _SaveChartAsImage = __webpack_require__(112);
	
	var _SaveChartAsImage2 = _interopRequireDefault(_SaveChartAsImage);
	
	var _fitWidth = __webpack_require__(114);
	
	var _fitWidth2 = _interopRequireDefault(_fitWidth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.TypeChooser = _TypeChooser2.default;
	exports.ChartWidthMixin = _ChartWidthMixin2.default;
	exports.SaveChartAsImage = _SaveChartAsImage2.default;
	exports.fitWidth = _fitWidth2.default;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TypeChooser = function (_Component) {
		_inherits(TypeChooser, _Component);
	
		function TypeChooser(props) {
			_classCallCheck(this, TypeChooser);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TypeChooser).call(this, props));
	
			_this.state = {
				type: _this.props.type
			};
			_this.handleTypeChange = _this.handleTypeChange.bind(_this);
			return _this;
		}
	
		_createClass(TypeChooser, [{
			key: "handleTypeChange",
			value: function handleTypeChange(e) {
				// console.log(e.target.value);
				this.setState({
					type: e.target.value
				});
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						"label",
						{ forHtml: "type" },
						"Type: "
					),
					_react2.default.createElement(
						"select",
						{ name: "type", id: "type", onChange: this.handleTypeChange, value: this.state.type },
						_react2.default.createElement(
							"option",
							{ value: "svg" },
							"svg"
						),
						_react2.default.createElement(
							"option",
							{ value: "hybrid" },
							"canvas + svg"
						)
					),
					this.props.children(this.state.type)
				);
			}
		}]);
	
		return TypeChooser;
	}(_react.Component);
	
	TypeChooser.propTypes = {
		type: _react.PropTypes.oneOf(["svg", "hybrid"]),
		children: _react.PropTypes.func.isRequired
	};
	
	TypeChooser.defaultProps = {
		type: "hybrid"
	};
	
	exports.default = TypeChooser;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import ReactDOM from "react-dom";
	
	var ChartWidthMixin = {
		handleWindowResize: function handleWindowResize() {
			var el = _react2.default.findDOMNode(this);
			// console.log(this.refs, el, this);
	
			var w = el.parentNode.clientWidth;
			// console.log("width = ", w);
			this.setState({
				width: w
			});
		},
		componentWillUnmount: function componentWillUnmount() {
			// console.log("unmounting...")
			window.removeEventListener("resize", this.handleWindowResize);
		},
		componentDidMount: function componentDidMount() {
			window.addEventListener("resize", this.handleWindowResize);
			var el = _react2.default.findDOMNode(this);
			// console.log(this.refs, el);
			var w = el.parentNode.clientWidth;
			this.setState({
				width: w
			});
		}
	};
	
	exports.default = ChartWidthMixin;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _saveSvgAsPng = __webpack_require__(113);
	
	var _saveSvgAsPng2 = _interopRequireDefault(_saveSvgAsPng);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SaveChartAsImage = {
		save: function save(doc, container, background, cb) {
			_saveSvgAsPng2.default.svgAsDataUri(container.getElementsByTagName("svg")[0], {}, function (uri) {
				var image = new Image();
				image.onload = function () {
					var canvas = doc.createElement("canvas");
					canvas.width = image.width;
					canvas.height = image.height;
					var context = canvas.getContext("2d");
	
					if ((0, _utils.isDefined)(background)) {
						context.fillStyle = background;
						context.fillRect(0, 0, canvas.width, canvas.height);
					}
					var canvasList = container.getElementsByTagName("canvas");
					for (var i = 0; i < canvasList.length; i++) {
						var each = canvasList[i];
						if ((0, _utils.isDefined)(each)) {
							var parent = each.parentNode.parentNode.getBoundingClientRect();
							var rect = each.getBoundingClientRect();
							context.drawImage(each, rect.left - parent.left, rect.top - parent.top);
						}
					};
	
					context.drawImage(image, 0, 0);
					cb(canvas.toDataURL("image/png"));
				};
				image.src = uri;
			});
		},
		saveWithWhiteBG: function saveWithWhiteBG(doc, container, cb) {
			return this.saveWithBG(doc, container, "white", cb);
		},
		saveWithDarkBG: function saveWithDarkBG(doc, container, cb) {
			return this.saveWithBG(doc, container, "#303030", cb);
		},
		saveWithBG: function saveWithBG(doc, container, background, cb) {
			return this.save(doc, container, background, cb);
		},
		saveChartAsImage: function saveChartAsImage(container) {
			this.saveWithWhiteBG(document, container, function (src) {
				var a = document.createElement("a");
				a.setAttribute("href", src);
				a.setAttribute("download", "Chart.png");
	
				document.body.appendChild(a);
				a.addEventListener("click", function () /* e */{
					a.parentNode.removeChild(a);
				});
	
				a.click();
			});
		}
	};
	
	exports.default = SaveChartAsImage;

/***/ },
/* 113 */
/***/ function(module, exports) {

	(function() {
	  var out$ = typeof exports != 'undefined' && exports || this;
	
	  var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
	
	  function isExternal(url) {
	    return url && url.lastIndexOf('http',0) == 0 && url.lastIndexOf(window.location.host) == -1;
	  }
	
	  function inlineImages(el, callback) {
	    var images = el.querySelectorAll('image');
	    var left = images.length;
	    if (left == 0) {
	      callback();
	    }
	    for (var i = 0; i < images.length; i++) {
	      (function(image) {
	        var href = image.getAttributeNS("http://www.w3.org/1999/xlink", "href");
	        if (href) {
	          if (isExternal(href.value)) {
	            console.warn("Cannot render embedded images linking to external hosts: "+href.value);
	            return;
	          }
	        }
	        var canvas = document.createElement('canvas');
	        var ctx = canvas.getContext('2d');
	        var img = new Image();
	        href = href || image.getAttribute('href');
	        img.src = href;
	        img.onload = function() {
	          canvas.width = img.width;
	          canvas.height = img.height;
	          ctx.drawImage(img, 0, 0);
	          image.setAttributeNS("http://www.w3.org/1999/xlink", "href", canvas.toDataURL('image/png'));
	          left--;
	          if (left == 0) {
	            callback();
	          }
	        }
	        img.onerror = function() {
	          console.log("Could not load "+href);
	          left--;
	          if (left == 0) {
	            callback();
	          }
	        }
	      })(images[i]);
	    }
	  }
	
	  function styles(el, selectorRemap) {
	    var css = "";
	    var sheets = document.styleSheets;
	    for (var i = 0; i < sheets.length; i++) {
	      try {
	        var rules = sheets[i].cssRules;
	      } catch (e) {
	        console.warn("Stylesheet could not be loaded: "+sheets[i].href);
	        continue;
	      }
	
	      if (rules != null) {
	        for (var j = 0; j < rules.length; j++) {
	          var rule = rules[j];
	          if (typeof(rule.style) != "undefined") {
	            var match = null;
	            try {
	              match = el.querySelector(rule.selectorText);
	            } catch(err) {
	              console.warn('Invalid CSS selector "' + rule.selectorText + '"', err);
	            }
	            if (match) {
	              var selector = selectorRemap ? selectorRemap(rule.selectorText) : rule.selectorText;
	              css += selector + " { " + rule.style.cssText + " }\n";
	            } else if(rule.cssText.match(/^@font-face/)) {
	              css += rule.cssText + '\n';
	            }
	          }
	        }
	      }
	    }
	    return css;
	  }
	
	  function getDimension(el, clone, dim) {
	    var v = (el.viewBox.baseVal && el.viewBox.baseVal[dim]) ||
	      (clone.getAttribute(dim) !== null && !clone.getAttribute(dim).match(/%$/) && parseInt(clone.getAttribute(dim))) ||
	      el.getBoundingClientRect()[dim] ||
	      parseInt(clone.style[dim]) ||
	      parseInt(window.getComputedStyle(el).getPropertyValue(dim));
	    return (typeof v === 'undefined' || v === null || isNaN(parseFloat(v))) ? 0 : v;
	  }
	
	  function reEncode(data) {
	    data = encodeURIComponent(data);
	    data = data.replace(/%([0-9A-F]{2})/g, function(match, p1) {
	      var c = String.fromCharCode('0x'+p1);
	      return c === '%' ? '%25' : c;
	    });
	    return decodeURIComponent(data);
	  }
	
	  out$.svgAsDataUri = function(el, options, cb) {
	    options = options || {};
	    options.scale = options.scale || 1;
	    var xmlns = "http://www.w3.org/2000/xmlns/";
	
	    inlineImages(el, function() {
	      var outer = document.createElement("div");
	      var clone = el.cloneNode(true);
	      var width, height;
	      if(el.tagName == 'svg') {
	        width = options.width || getDimension(el, clone, 'width');
	        height = options.height || getDimension(el, clone, 'height');
	      } else if(el.getBBox) {
	        var box = el.getBBox();
	        width = box.x + box.width;
	        height = box.y + box.height;
	        clone.setAttribute('transform', clone.getAttribute('transform').replace(/translate\(.*?\)/, ''));
	
	        var svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
	        svg.appendChild(clone)
	        clone = svg;
	      } else {
	        console.error('Attempted to render non-SVG element', el);
	        return;
	      }
	
	      clone.setAttribute("version", "1.1");
	      clone.setAttributeNS(xmlns, "xmlns", "http://www.w3.org/2000/svg");
	      clone.setAttributeNS(xmlns, "xmlns:xlink", "http://www.w3.org/1999/xlink");
	      clone.setAttribute("width", width * options.scale);
	      clone.setAttribute("height", height * options.scale);
	      clone.setAttribute("viewBox", [
	        options.left || 0,
	        options.top || 0,
	        width,
	        height
	      ].join(" "));
	
	      outer.appendChild(clone);
	
	      var css = styles(el, options.selectorRemap);
	      var s = document.createElement('style');
	      s.setAttribute('type', 'text/css');
	      s.innerHTML = "<![CDATA[\n" + css + "\n]]>";
	      var defs = document.createElement('defs');
	      defs.appendChild(s);
	      clone.insertBefore(defs, clone.firstChild);
	
	      var svg = doctype + outer.innerHTML;
	      var uri = 'data:image/svg+xml;base64,' + window.btoa(reEncode(svg));
	      if (cb) {
	        cb(uri);
	      }
	    });
	  }
	
	  out$.svgAsPngUri = function(el, options, cb) {
	    out$.svgAsDataUri(el, options, function(uri) {
	      var image = new Image();
	      image.onload = function() {
	        var canvas = document.createElement('canvas');
	        canvas.width = image.width;
	        canvas.height = image.height;
	        var context = canvas.getContext('2d');
	        if(options && options.backgroundColor){
	          context.fillStyle = options.backgroundColor;
	          context.fillRect(0, 0, canvas.width, canvas.height);
	        }
	        context.drawImage(image, 0, 0);
	        var a = document.createElement('a'), png;
	        try {
	          png = canvas.toDataURL('image/png');
	        } catch (e) {
	          if (e instanceof SecurityError) {
	            console.error("Rendered SVG images cannot be downloaded in this browser.");
	            return;
	          } else {
	            throw e;
	          }
	        }
	        cb(png);
	      }
	      image.src = uri;
	    });
	  }
	
	  out$.saveSvgAsPng = function(el, name, options) {
	    options = options || {};
	    out$.svgAsPngUri(el, options, function(uri) {
	      var a = document.createElement('a');
	      a.download = name;
	      a.href = uri;
	      document.body.appendChild(a);
	      a.addEventListener("click", function(e) {
	        a.parentNode.removeChild(a);
	      });
	      a.click();
	    });
	  }
	})();


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = fitWidth;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(115);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getDisplayName(Series) {
		var name = Series.displayName || Series.name || "Series";
		return name;
	}
	
	function fitWidth(WrappedComponent) {
		var withRef = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
		var ResponsiveComponent = function (_Component) {
			_inherits(ResponsiveComponent, _Component);
	
			function ResponsiveComponent(props) {
				_classCallCheck(this, ResponsiveComponent);
	
				var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResponsiveComponent).call(this, props));
	
				_this.handleWindowResize = _this.handleWindowResize.bind(_this);
				_this.getWrappedInstance = _this.getWrappedInstance.bind(_this);
				return _this;
			}
	
			_createClass(ResponsiveComponent, [{
				key: "componentDidMount",
				value: function componentDidMount() {
					window.addEventListener("resize", this.handleWindowResize);
					var el = _reactDom2.default.findDOMNode(this);
					var w = el.parentNode.clientWidth;
					this.setState({
						width: w
					});
				}
			}, {
				key: "componentWillUnmount",
				value: function componentWillUnmount() {
					window.removeEventListener("resize", this.handleWindowResize);
				}
			}, {
				key: "handleWindowResize",
				value: function handleWindowResize() {
					var el = _reactDom2.default.findDOMNode(this);
					var w = el.parentNode.clientWidth;
					this.setState({
						width: w
					});
				}
			}, {
				key: "getWrappedInstance",
				value: function getWrappedInstance() {
					return this.refs.component;
				}
			}, {
				key: "render",
				value: function render() {
					var ref = withRef ? { ref: "component" } : {};
	
					if (this.state && this.state.width) {
						return _react2.default.createElement(WrappedComponent, _extends({ width: this.state.width }, this.props, ref));
					} else {
						return _react2.default.createElement("div", null);
					}
				}
			}]);
	
			return ResponsiveComponent;
		}(_react.Component);
	
		ResponsiveComponent.displayName = "fitWidth(" + getDisplayName(WrappedComponent) + ")";
	
		return ResponsiveComponent;
	}

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_115__;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.makeInteractive = exports.Brush = exports.ClickCallback = exports.FibonacciRetracement = exports.TrendLine = undefined;
	
	var _TrendLine = __webpack_require__(117);
	
	var _TrendLine2 = _interopRequireDefault(_TrendLine);
	
	var _FibonacciRetracement = __webpack_require__(119);
	
	var _FibonacciRetracement2 = _interopRequireDefault(_FibonacciRetracement);
	
	var _ClickCallback = __webpack_require__(120);
	
	var _ClickCallback2 = _interopRequireDefault(_ClickCallback);
	
	var _Brush = __webpack_require__(121);
	
	var _Brush2 = _interopRequireDefault(_Brush);
	
	var _makeInteractive = __webpack_require__(118);
	
	var _makeInteractive2 = _interopRequireDefault(_makeInteractive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.TrendLine = _TrendLine2.default;
	exports.FibonacciRetracement = _FibonacciRetracement2.default;
	exports.ClickCallback = _ClickCallback2.default;
	exports.Brush = _Brush2.default;
	exports.makeInteractive = _makeInteractive2.default;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _makeInteractive = __webpack_require__(118);
	
	var _makeInteractive2 = _interopRequireDefault(_makeInteractive);
	
	var _utils = __webpack_require__(5);
	
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

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = makeInteractive;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(30);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getDisplayName(Series) {
		var name = Series.displayName || Series.name || "Series";
		return name;
	}
	
	function capitalizeFirst(str) {
		return str.charAt(0).toUpperCase() + str.substring(1);
	}
	
	function makeInteractive(InteractiveComponent) {
		var subscription = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
		var initialState = arguments[2];
		var reDrawOnPan = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
	
		var InteractiveComponentWrapper = function (_Component) {
			_inherits(InteractiveComponentWrapper, _Component);
	
			function InteractiveComponentWrapper(props) {
				_classCallCheck(this, InteractiveComponentWrapper);
	
				var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InteractiveComponentWrapper).call(this, props));
	
				_this.subscription = _this.subscription.bind(_this);
				_this.updateInteractiveState = _this.updateInteractiveState.bind(_this);
				var subscribe = props.subscribe;
				var chartId = props.chartId;
	
	
				_this.subscriptionIds = subscription.map(function (each) {
					return subscribe(chartId, each, _this.subscription.bind(_this, each));
				});
				return _this;
			}
	
			_createClass(InteractiveComponentWrapper, [{
				key: "getInteractiveState",
				value: function getInteractiveState(props) {
					var interactiveState = props.interactiveState;
					// console.log(interactiveState);
	
					var state = interactiveState.filter(function (each) {
						return each.id === props.id;
					});
					var response = { interactive: initialState };
					if (state.length > 0) {
						response = state[0];
					}
					// console.log(interactiveState, response.interactive, this.props.id);
					return response;
				}
			}, {
				key: "updateInteractiveState",
				value: function updateInteractiveState(interactive) {
					var _props = this.props;
					var setInteractiveState = _props.setInteractiveState;
					var interactiveState = _props.interactiveState;
					var id = _props.id;
	
	
					var newInteractive = interactiveState.map(function (each) {
						return each.id === id ? { id: id, interactive: interactive } : each;
					});
	
					setInteractiveState(newInteractive);
				}
			}, {
				key: "removeLast",
				value: function removeLast() {
					var _getInteractiveState = this.getInteractiveState(this.props);
	
					var interactive = _getInteractiveState.interactive;
	
	
					if (this.refs.interactive.removeLast) {
						var newInteractive = this.refs.interactive.removeLast(interactive);
						this.updateInteractiveState(newInteractive);
					}
				}
			}, {
				key: "terminate",
				value: function terminate() {
					var _getInteractiveState2 = this.getInteractiveState(this.props);
	
					var interactive = _getInteractiveState2.interactive;
	
	
					if (this.refs.interactive.terminate) {
						var newInteractive = this.refs.interactive.terminate(interactive);
						this.updateInteractiveState(newInteractive);
					}
				}
			}, {
				key: "subscription",
				value: function subscription(event, arg, e) {
					var _props2 = this.props;
					var chartId = _props2.chartId;
					var xAccessor = _props2.xAccessor;
					var displayXAccessor = _props2.displayXAccessor;
					var enabled = this.props.enabled;
	
					var _getInteractiveState3 = this.getInteractiveState(this.props);
	
					var interactive = _getInteractiveState3.interactive;
	
	
					var interactiveState = { interactive: interactive };
					var handler = this.refs.interactive["on" + capitalizeFirst(event)];
					if (enabled) {
						interactiveState = handler({ chartId: chartId, xAccessor: xAccessor, displayXAccessor: displayXAccessor }, interactive, arg, e);
					}
					// if (interactiveState.interactive === interactive) return false;
					return _extends({
						id: this.props.id
					}, interactiveState);
				}
			}, {
				key: "componentDidMount",
				value: function componentDidMount() {
					this.componentDidUpdate();
				}
			}, {
				key: "componentDidUpdate",
				value: function componentDidUpdate() {
					// console.log("Update");
	
					var callback = InteractiveComponent.drawOnCanvas;
	
					if (callback) {
						var _props3 = this.props;
						var getCanvasContexts = _props3.getCanvasContexts;
						var chartCanvasType = _props3.chartCanvasType;
						var plotData = _props3.plotData;
						var chartConfig = _props3.chartConfig;
						var xScale = _props3.xScale;
						var show = _props3.show;
	
						if (chartCanvasType !== "svg") {
							var defaultProps = InteractiveComponent.defaultProps;
	
							var props = _extends({}, defaultProps, this.props);
							var contexts = getCanvasContexts();
	
							var _getInteractiveState4 = this.getInteractiveState(this.props);
	
							var interactive = _getInteractiveState4.interactive;
	
							// console.log(interactive);
	
							if (contexts) {
								InteractiveComponentWrapper.drawOnCanvas(callback, props, interactive, contexts.interactive, { show: show, xScale: xScale, plotData: plotData, chartConfig: chartConfig });
							}
						}
					}
				}
			}, {
				key: "componentWillMount",
				value: function componentWillMount() {
					this.componentWillReceiveProps(this.props, this.context);
				}
			}, {
				key: "componentWillReceiveProps",
				value: function componentWillReceiveProps(nextProps) {
					// var nextContext = this.context;
					// var nextProps = this.props;
	
					// console.log("HERE", nextProps.interactiveState);
					var chartId = nextProps.chartId;
					var getAllCanvasDrawCallback = nextProps.getAllCanvasDrawCallback;
					var callbackForCanvasDraw = nextProps.callbackForCanvasDraw;
	
					var callback = InteractiveComponent.drawOnCanvas;
	
					if (reDrawOnPan && callback) {
						// var { defaultProps } = ;
						var props = _extends({}, InteractiveComponent.defaultProps, nextProps);
	
						var draw = InteractiveComponentWrapper.drawOnCanvas.bind(null, callback, props, this.getInteractiveState(nextProps).interactive);
	
						var temp = getAllCanvasDrawCallback().filter(function (each) {
							return each.type === "interactive";
						}).filter(function (each) {
							return each.id === nextProps.id;
						}).filter(function (each) {
							return each.chartId === chartId;
						});
						if (temp.length === 0) {
							callbackForCanvasDraw({
								type: "interactive",
								chartId: chartId,
								id: nextProps.id,
								draw: draw
							});
						} else {
							callbackForCanvasDraw(temp[0], {
								type: "interactive",
								chartId: chartId,
								id: nextProps.id,
								draw: draw
							});
						}
					}
				}
			}, {
				key: "componentWillUnmount",
				value: function componentWillUnmount() {
					var unsubscribe = this.props.unsubscribe;
	
					this.subscriptionIds.forEach(function (each) {
						unsubscribe(each);
					});
				}
			}, {
				key: "render",
				value: function render() {
					var _getInteractiveState5 = this.getInteractiveState(this.props);
	
					var interactive = _getInteractiveState5.interactive;
	
	
					return _react2.default.createElement(InteractiveComponent, _extends({ ref: "interactive" }, this.props, { interactive: interactive }));
				}
			}]);
	
			return InteractiveComponentWrapper;
		}(_react.Component);
	
		InteractiveComponentWrapper.displayName = getDisplayName(InteractiveComponent);
	
		InteractiveComponentWrapper.drawOnCanvas = function (callback, props, interactiveState, ctx, chartContext) {
			// console.log( props, interactiveState);
			var canvasOriginX = props.canvasOriginX;
			var canvasOriginY = props.canvasOriginY;
			var width = props.width;
			var height = props.height;
	
	
			ctx.save();
	
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.translate(canvasOriginX, canvasOriginY);
	
			ctx.beginPath();
			ctx.rect(-1, -1, width + 1, height + 1);
			ctx.clip();
	
			if (callback) {
				callback(props, interactiveState, ctx, chartContext);
			}
	
			ctx.restore();
		};
	
		InteractiveComponentWrapper.propTypes = {
			id: _react.PropTypes.number.isRequired,
			enabled: _react.PropTypes.bool.isRequired,
	
			/* comes from pure converted from context to prop - START */
			chartId: _react.PropTypes.number.isRequired,
			interactiveState: _react.PropTypes.array.isRequired,
			getCanvasContexts: _react.PropTypes.func,
			callbackForCanvasDraw: _react.PropTypes.func.isRequired,
			getAllCanvasDrawCallback: _react.PropTypes.func,
			chartCanvasType: _react.PropTypes.string.isRequired,
			subscribe: _react.PropTypes.func.isRequired,
			setInteractiveState: _react.PropTypes.func.isRequired,
			unsubscribe: _react.PropTypes.func.isRequired,
			plotData: _react.PropTypes.array.isRequired,
			xAccessor: _react.PropTypes.func.isRequired,
			xScale: _react.PropTypes.func.isRequired,
			chartConfig: _react.PropTypes.object.isRequired,
			currentItem: _react.PropTypes.object.isRequired,
			canvasOriginX: _react.PropTypes.number,
			canvasOriginY: _react.PropTypes.number,
			height: _react.PropTypes.number.isRequired,
			width: _react.PropTypes.number.isRequired,
			show: _react.PropTypes.bool.isRequired,
			displayXAccessor: _react.PropTypes.func.isRequired
		};
	
		/* comes from pure converted from context to prop - END */
		return (0, _pure2.default)(InteractiveComponentWrapper, {
			chartId: _react.PropTypes.number.isRequired,
			interactiveState: _react.PropTypes.array.isRequired,
			getCanvasContexts: _react.PropTypes.func,
			callbackForCanvasDraw: _react.PropTypes.func.isRequired,
			getAllCanvasDrawCallback: _react.PropTypes.func,
			chartCanvasType: _react.PropTypes.string.isRequired,
			subscribe: _react.PropTypes.func.isRequired,
			setInteractiveState: _react.PropTypes.func.isRequired,
			unsubscribe: _react.PropTypes.func.isRequired,
			plotData: _react.PropTypes.array.isRequired,
			xAccessor: _react.PropTypes.func.isRequired,
			xScale: _react.PropTypes.func.isRequired,
			chartConfig: _react.PropTypes.object.isRequired,
			currentItem: _react.PropTypes.object.isRequired,
			canvasOriginX: _react.PropTypes.number,
			canvasOriginY: _react.PropTypes.number,
			height: _react.PropTypes.number.isRequired,
			width: _react.PropTypes.number.isRequired,
			show: _react.PropTypes.bool.isRequired,
			displayXAccessor: _react.PropTypes.func.isRequired
		});
	}
	
	exports.default = makeInteractive;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _makeInteractive = __webpack_require__(118);
	
	var _makeInteractive2 = _interopRequireDefault(_makeInteractive);
	
	var _utils = __webpack_require__(5);
	
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

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _makeInteractive = __webpack_require__(118);
	
	var _makeInteractive2 = _interopRequireDefault(_makeInteractive);
	
	var _utils = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ClickCallback = function (_Component) {
		_inherits(ClickCallback, _Component);
	
		function ClickCallback(props) {
			_classCallCheck(this, ClickCallback);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClickCallback).call(this, props));
	
			_this.onClick = _this.onClick.bind(_this);
			return _this;
		}
	
		_createClass(ClickCallback, [{
			key: "onClick",
			value: function onClick(_ref, interactive, _ref2, e) {
				var chartId = _ref.chartId;
				var xAccessor = _ref.xAccessor;
				var mouseXY = _ref2.mouseXY;
				var currentItem = _ref2.currentItem;
				var chartConfig = _ref2.chartConfig;
				var _props = this.props;
				var onClick = _props.onClick;
				var displayXAccessor = _props.displayXAccessor;
				var yScale = chartConfig.yScale;
	
	
				var yValue = yScale.invert(mouseXY[1]);
				var xValue = displayXAccessor(currentItem);
				onClick({
					xy: [xValue, yValue],
					mouseXY: mouseXY,
					currentItem: currentItem
				}, e);
				return { interactive: interactive }; // returning the same input to indicate that the state of the chart is not changing
			}
		}, {
			key: "render",
			value: function render() {
				return null;
			}
		}]);
	
		return ClickCallback;
	}(_react.Component);
	
	ClickCallback.drawOnCanvas = _utils.noop;
	
	ClickCallback.propTypes = {
		onClick: _react.PropTypes.func.isRequired,
		/* comes from pure converted from context to prop - START */
		displayXAccessor: _react.PropTypes.func.isRequired
	};
	
	/* comes from pure converted from context to prop - END */
	ClickCallback.defaultProps = {
		onClick: function onClick(e) {
			console.log(e);
		}
	};
	
	exports.default = (0, _makeInteractive2.default)(ClickCallback, ["click"], {});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _makeInteractive = __webpack_require__(118);
	
	var _makeInteractive2 = _interopRequireDefault(_makeInteractive);
	
	var _utils = __webpack_require__(5);
	
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-stockcharts.js.map