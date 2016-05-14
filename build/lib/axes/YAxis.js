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