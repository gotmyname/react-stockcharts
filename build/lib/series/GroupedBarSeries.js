"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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