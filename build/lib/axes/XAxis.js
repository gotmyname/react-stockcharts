"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Axis = require("./Axis");

var _Axis2 = _interopRequireDefault(_Axis);

var _PureComponent2 = require("../utils/PureComponent");

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