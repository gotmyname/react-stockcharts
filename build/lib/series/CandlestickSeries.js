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

var CandlestickSeries = function (_Component) {
	_inherits(CandlestickSeries, _Component);

	function CandlestickSeries() {
		_classCallCheck(this, CandlestickSeries);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(CandlestickSeries).apply(this, arguments));
	}

	_createClass(CandlestickSeries, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var className = _props.className;
			var wickClassName = _props.wickClassName;
			var candleClassName = _props.candleClassName;

			return _react2.default.createElement(
				"g",
				{ className: className },
				_react2.default.createElement(
					"g",
					{ className: wickClassName, key: "wicks" },
					CandlestickSeries.getWicksSVG(this.props)
				),
				_react2.default.createElement(
					"g",
					{ className: candleClassName, key: "candles" },
					CandlestickSeries.getCandlesSVG(this.props)
				)
			);
		}
	}]);

	return CandlestickSeries;
}(_react.Component);

CandlestickSeries.propTypes = {
	className: _react.PropTypes.string,
	wickClassName: _react.PropTypes.string,
	candleClassName: _react.PropTypes.string,
	widthRatio: _react.PropTypes.number.isRequired,
	classNames: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	fill: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	stroke: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	wickStroke: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	xAccessor: _react.PropTypes.func,
	yAccessor: _react.PropTypes.func.isRequired,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	plotData: _react.PropTypes.array
};

CandlestickSeries.defaultProps = {
	className: "react-stockcharts-candlestick",
	wickClassName: "react-stockcharts-candlestick-wick",
	candleClassName: "react-stockcharts-candlestick-candle",
	yAccessor: function yAccessor(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	},
	classNames: function classNames(d) {
		return d.close > d.open ? "up" : "down";
	},
	widthRatio: 0.5,
	wickStroke: "#000000",
	// wickStroke: d => d.close > d.open ? "#6BA583" : "#FF0000",
	fill: function fill(d) {
		return d.close > d.open ? "#6BA583" : "#FF0000";
	},
	// stroke: d => d.close > d.open ? "#6BA583" : "#FF0000",
	// stroke: "#000000",
	stroke: "none",
	opacity: 1
};

CandlestickSeries.getWicksSVG = function (props) {

	/* eslint-disable react/prop-types */
	var xAccessor = props.xAccessor;
	var yAccessor = props.yAccessor;
	var xScale = props.xScale;
	var yScale = props.yScale;
	var plotData = props.plotData;
	/* eslint-disable react/prop-types */

	var wickData = CandlestickSeries.getWickData(props, xAccessor, yAccessor, xScale, yScale, plotData);
	var wicks = wickData.map(function (d, idx) {
		return _react2.default.createElement("line", { key: idx,
			className: d.className, stroke: d.stroke, style: { shapeRendering: "crispEdges" },
			x1: d.x1, y1: d.y1,
			x2: d.x2, y2: d.y2 });
	});
	return wicks;
};
CandlestickSeries.getCandlesSVG = function (props) {
	var xAccessor = props.xAccessor;
	var yAccessor = props.yAccessor;
	var xScale = props.xScale;
	var yScale = props.yScale;
	var plotData = props.plotData;
	var opacity = props.opacity;


	var candleData = CandlestickSeries.getCandleData(props, xAccessor, yAccessor, xScale, yScale, plotData);
	var candles = candleData.map(function (d, idx) {
		if (d.width < 0) return _react2.default.createElement("line", { className: d.className, key: idx,
			x1: d.x, y1: d.y, x2: d.x, y2: d.y + d.height,
			stroke: d.fill });else if (d.height === 0) return _react2.default.createElement("line", { key: idx,
			x1: d.x, y1: d.y, x2: d.x + d.width, y2: d.y + d.height,
			stroke: d.fill });
		return _react2.default.createElement("rect", { key: idx, className: d.className,
			fillOpacity: opacity,
			x: d.x, y: d.y, width: d.width, height: d.height,
			fill: d.fill, stroke: d.stroke });
	});
	return candles;
};

CandlestickSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
	var xAccessor = props.xAccessor;
	var yAccessor = props.yAccessor;
	var opacity = props.opacity;

	var wickData = CandlestickSeries.getWickData(props, xAccessor, yAccessor, xScale, yScale, plotData);

	var wickNest = _d2.default.nest().key(function (d) {
		return d.stroke;
	}).entries(wickData);

	wickNest.forEach(function (outer) {
		var key = outer.key;
		var values = outer.values;

		ctx.strokeStyle = key;
		values.forEach(function (d) {
			ctx.beginPath();
			ctx.moveTo(d.x1, d.y1);
			ctx.lineTo(d.x2, d.y2);
			ctx.stroke();
		});
	});

	var candleData = CandlestickSeries.getCandleData(props, xAccessor, yAccessor, xScale, yScale, plotData);

	var candleNest = _d2.default.nest().key(function (d) {
		return d.stroke;
	}).key(function (d) {
		return d.fill;
	}).entries(candleData);

	candleNest.forEach(function (outer) {
		var strokeKey = outer.key;
		var strokeValues = outer.values;

		if (strokeKey !== "none") ctx.strokeStyle = strokeKey;
		strokeValues.forEach(function (inner) {
			var key = inner.key;
			var values = inner.values;

			ctx.fillStyle = (0, _utils.hexToRGBA)(key, opacity);

			values.forEach(function (d) {
				if (d.width < 0) {
					// <line className={d.className} key={idx} x1={d.x} y1={d.y} x2={d.x} y2={d.y + d.height}/>
					ctx.beginPath();
					ctx.moveTo(d.x, d.y);
					ctx.lineTo(d.x, d.y + d.height);
					ctx.stroke();
				} else if (d.height === 0) {
					// <line key={idx} x1={d.x} y1={d.y} x2={d.x + d.width} y2={d.y + d.height} />
					ctx.beginPath();
					ctx.moveTo(d.x, d.y);
					ctx.lineTo(d.x + d.width, d.y + d.height);
					ctx.stroke();
				} else {
					ctx.beginPath();
					ctx.rect(d.x, d.y, d.width, d.height);
					ctx.closePath();
					ctx.fill();
					if (strokeKey !== "none") ctx.stroke();
				}
			});
		});
	});
};

CandlestickSeries.getWickData = function (props, xAccessor, yAccessor, xScale, yScale, plotData) {
	var classNameProp = props.classNames;
	var wickStrokeProp = props.wickStroke;

	var wickStroke = _d2.default.functor(wickStrokeProp);
	var className = _d2.default.functor(classNameProp);
	var wickData = plotData.filter(function (d) {
		return (0, _utils.isDefined)(d.close);
	}).map(function (d) {
		// console.log(yAccessor);
		var ohlc = yAccessor(d);

		var x1 = Math.round(xScale(xAccessor(d))),
		    y1 = yScale(ohlc.high),
		    x2 = x1,
		    y2 = yScale(ohlc.low);

		return {
			x1: x1,
			y1: y1,
			x2: x2,
			y2: y2,
			className: className(ohlc),
			direction: ohlc.close - ohlc.open,
			stroke: wickStroke(ohlc)
		};
	});
	return wickData;
};

CandlestickSeries.getCandleData = function (props, xAccessor, yAccessor, xScale, yScale, plotData) {
	var classNames = props.classNames;
	var fillProp = props.fill;
	var strokeProp = props.stroke;
	var widthRatio = props.widthRatio;

	var fill = _d2.default.functor(fillProp);
	var stroke = _d2.default.functor(strokeProp);
	// console.log(plotData);
	var width = xScale(xAccessor((0, _utils.last)(plotData))) - xScale(xAccessor((0, _utils.first)(plotData)));
	var cw = width / (plotData.length - 1) * widthRatio;
	var candleWidth = Math.round(cw); // Math.floor(cw) % 2 === 0 ? Math.floor(cw) : Math.round(cw);
	var offset = candleWidth === 1 ? 0 : 0.5 * candleWidth;
	var candles = plotData.filter(function (d) {
		return (0, _utils.isDefined)(d.close);
	}).map(function (d) {
		var ohlc = yAccessor(d);
		var x = Math.round(xScale(xAccessor(d))) - offset,
		    y = yScale(Math.max(ohlc.open, ohlc.close)),
		    height = Math.abs(yScale(ohlc.open) - yScale(ohlc.close)),
		    className = ohlc.open <= ohlc.close ? classNames.up : classNames.down;
		return {
			// type: "line"
			x: x,
			y: y,
			height: height,
			width: candleWidth,
			className: className,
			fill: fill(ohlc),
			stroke: stroke(ohlc),
			direction: ohlc.close - ohlc.open
		};
	});
	return candles;
};

exports.default = (0, _wrap2.default)(CandlestickSeries);