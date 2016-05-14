"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wrap = require("./wrap");

var _wrap2 = _interopRequireDefault(_wrap);

var _utils = require("../utils");

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