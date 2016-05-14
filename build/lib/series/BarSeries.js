"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wrap = require("./wrap");

var _wrap2 = _interopRequireDefault(_wrap);

var _StackedBarSeries = require("./StackedBarSeries");

var _StackedBarSeries2 = _interopRequireDefault(_StackedBarSeries);

var _utils = require("../utils");

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