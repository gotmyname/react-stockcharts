"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

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