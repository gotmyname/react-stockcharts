"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = makeInteractive;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _pure = require("../pure");

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