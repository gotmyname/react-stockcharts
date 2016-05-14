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

var RenkoSeries = function (_Component) {
	_inherits(RenkoSeries, _Component);

	function RenkoSeries() {
		_classCallCheck(this, RenkoSeries);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(RenkoSeries).apply(this, arguments));
	}

	_createClass(RenkoSeries, [{
		key: "render",
		value: function render() {
			var props = this.props;
			var plotData = props.plotData;
			var xScale = props.xScale;
			var xAccessor = props.xAccessor;
			var yScale = props.yScale;
			var yAccessor = props.yAccessor;


			var candles = RenkoSeries.getRenko(props, plotData, xScale, xAccessor, yScale, yAccessor).map(function (each, idx) {
				return _react2.default.createElement("rect", { key: idx, className: each.className,
					fill: each.fill,
					x: each.x,
					y: each.y,
					width: each.width,
					height: each.height });
			});

			return _react2.default.createElement(
				"g",
				null,
				_react2.default.createElement(
					"g",
					{ className: "candle" },
					candles
				)
			);
		}
	}]);

	return RenkoSeries;
}(_react.Component);

RenkoSeries.propTypes = {
	classNames: _react.PropTypes.shape({
		up: _react.PropTypes.string,
		down: _react.PropTypes.string
	}),
	stroke: _react.PropTypes.shape({
		up: _react.PropTypes.string,
		down: _react.PropTypes.string
	}),
	fill: _react.PropTypes.shape({
		up: _react.PropTypes.string,
		down: _react.PropTypes.string
	})
};

RenkoSeries.defaultProps = {
	classNames: {
		up: "up",
		down: "down"
	},
	stroke: {
		up: "none",
		down: "none"
	},
	fill: {
		up: "#6BA583",
		down: "#E60000",
		partial: "#4682B4"
	},
	yAccessor: function yAccessor(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	}
};

RenkoSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
	var xAccessor = props.xAccessor;
	var yAccessor = props.yAccessor;


	var renko = RenkoSeries.getRenko(props, plotData, xScale, xAccessor, yScale, yAccessor);
	renko.forEach(function (d) {
		ctx.beginPath();

		ctx.strokeStyle = d.stroke;
		ctx.fillStyle = d.fill;

		ctx.rect(d.x, d.y, d.width, d.height);
		ctx.closePath();
		ctx.fill();
	});
};

RenkoSeries.getRenko = function (props, plotData, xScale, xAccessor, yScale, yAccessor) {
	var classNames = props.classNames;
	var fill = props.fill;

	var width = xScale(xAccessor(plotData[plotData.length - 1])) - xScale(xAccessor(plotData[0]));

	var candleWidth = width / (plotData.length - 1);
	var candles = plotData.filter(function (d) {
		return (0, _utils.isDefined)(d.close);
	}).map(function (d) {
		var ohlc = yAccessor(d);
		var x = xScale(xAccessor(d)) - 0.5 * candleWidth,
		    y = yScale(Math.max(ohlc.open, ohlc.close)),
		    height = Math.abs(yScale(ohlc.open) - yScale(ohlc.close)),
		    className = ohlc.open <= ohlc.close ? classNames.up : classNames.down,
		    svgfill = ohlc.open <= ohlc.close ? fill.up : fill.down;

		if (!d.fullyFormed) {
			svgfill = fill.partial;
		}
		return {
			className: className,
			fill: svgfill,
			x: x,
			y: y,
			height: height,
			width: candleWidth
		};
	});
	return candles;
};

exports.default = (0, _wrap2.default)(RenkoSeries);