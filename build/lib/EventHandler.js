"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("./utils");

var _ChartDataUtil = require("./utils/ChartDataUtil");

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