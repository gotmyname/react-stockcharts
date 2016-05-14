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

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OHLCSeries = function (_Component) {
	_inherits(OHLCSeries, _Component);

	function OHLCSeries() {
		_classCallCheck(this, OHLCSeries);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(OHLCSeries).apply(this, arguments));
	}

	_createClass(OHLCSeries, [{
		key: "render",
		value: function render() {
			var className = this.props.className;
			var _props = this.props;
			var xAccessor = _props.xAccessor;
			var yAccessor = _props.yAccessor;
			var xScale = _props.xScale;
			var yScale = _props.yScale;
			var plotData = _props.plotData;


			var barData = OHLCSeries.getOHLCBars(this.props, xAccessor, yAccessor, xScale, yScale, plotData);

			var strokeWidth = barData.strokeWidth;
			var bars = barData.bars;


			return _react2.default.createElement(
				"g",
				{ className: className },
				bars.map(function (d, idx) {
					return _react2.default.createElement("path", { key: idx,
						className: d.className, stroke: d.stroke, strokeWidth: strokeWidth,
						d: "M" + d.openX1 + " " + d.openY + " L" + d.openX2 + " " + d.openY + " M" + d.x + " " + d.y1 + " L" + d.x + " " + d.y2 + " M" + d.closeX1 + " " + d.closeY + " L" + d.closeX2 + " " + d.closeY });
				})
			);
		}
	}]);

	return OHLCSeries;
}(_react.Component);

OHLCSeries.propTypes = {
	className: _react.PropTypes.string,
	classNames: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	stroke: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	xAccessor: _react.PropTypes.func,
	yAccessor: _react.PropTypes.func.isRequired,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	plotData: _react.PropTypes.array
};

OHLCSeries.defaultProps = {
	className: "react-stockcharts-ohlc",
	yAccessor: function yAccessor(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	},
	classNames: function classNames(d) {
		return (0, _utils.isDefined)(d.absoluteChange) ? d.absoluteChange > 0 ? "up" : "down" : "firstbar";
	},
	stroke: function stroke(d) {
		return (0, _utils.isDefined)(d.absoluteChange) ? d.absoluteChange > 0 ? "#6BA583" : "#FF0000" : "#000000";
	},
	opacity: 1
};

OHLCSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
	var xAccessor = props.xAccessor;
	var yAccessor = props.yAccessor;


	var barData = OHLCSeries.getOHLCBars(props, xAccessor, yAccessor, xScale, yScale, plotData);

	var strokeWidth = barData.strokeWidth;
	var bars = barData.bars;


	var wickNest = _d2.default.nest().key(function (d) {
		return d.stroke;
	}).entries(bars);

	ctx.lineWidth = strokeWidth;

	wickNest.forEach(function (outer) {
		var key = outer.key;
		var values = outer.values;

		ctx.strokeStyle = key;
		values.forEach(function (d) {
			ctx.beginPath();
			ctx.moveTo(d.x, d.y1);
			ctx.lineTo(d.x, d.y2);

			ctx.moveTo(d.openX1, d.openY);
			ctx.lineTo(d.openX2, d.openY);

			ctx.moveTo(d.closeX1, d.closeY);
			ctx.lineTo(d.closeX2, d.closeY);

			ctx.stroke();
		});
	});
};

OHLCSeries.getOHLCBars = function (props, xAccessor, yAccessor, xScale, yScale, plotData) {
	var classNamesProp = props.classNames;
	var strokeProp = props.stroke;


	var strokeFunc = _d2.default.functor(strokeProp);
	var classNameFunc = _d2.default.functor(classNamesProp);

	var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));

	var barWidth = Math.max(1, Math.round(width / (plotData.length - 1) / 2) - 1.5);
	var strokeWidth = Math.min(barWidth, 6);

	var bars = plotData.filter(function (d) {
		return (0, _utils.isDefined)(d.close);
	}).map(function (d) {
		var ohlc = yAccessor(d),
		    x = Math.round(xScale(xAccessor(d))),
		    y1 = yScale(ohlc.high),
		    y2 = yScale(ohlc.low),
		    openX1 = x - barWidth,
		    openX2 = x + strokeWidth / 2,
		    openY = yScale(ohlc.open),
		    closeX1 = x - strokeWidth / 2,
		    closeX2 = x + barWidth,
		    closeY = yScale(ohlc.close),
		    className = classNameFunc(d),
		    stroke = strokeFunc(d);
		// console.log(d);
		return { x: x, y1: y1, y2: y2, openX1: openX1, openX2: openX2, openY: openY, closeX1: closeX1, closeX2: closeX2, closeY: closeY, stroke: stroke, className: className };
	});
	return { barWidth: barWidth, strokeWidth: strokeWidth, bars: bars };
};

exports.default = (0, _wrap2.default)(OHLCSeries);