"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wrap = require("./wrap");

var _wrap2 = _interopRequireDefault(_wrap);

var _StackedBarSeries = require("./StackedBarSeries");

var _utils = require("../utils");

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