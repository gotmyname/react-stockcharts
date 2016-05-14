"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AxisTicks = require("./AxisTicks");

var _AxisTicks2 = _interopRequireDefault(_AxisTicks);

var _AxisLine = require("./AxisLine");

var _AxisLine2 = _interopRequireDefault(_AxisLine);

var _utils = require("../utils");

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