/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.drawOnCanvas2 = drawOnCanvas2;
exports.getBarsSVG2 = getBarsSVG2;

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

var HorizontalStackedBarSeries = function (_Component) {
	_inherits(HorizontalStackedBarSeries, _Component);

	function HorizontalStackedBarSeries() {
		_classCallCheck(this, HorizontalStackedBarSeries);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(HorizontalStackedBarSeries).apply(this, arguments));
	}

	_createClass(HorizontalStackedBarSeries, [{
		key: "render",
		value: function render() {
			var props = this.props;

			return _react2.default.createElement(
				"g",
				{ className: "react-stockcharts-horizontal-bar-series" },
				HorizontalStackedBarSeries.getBarsSVG(props)
			);
		}
	}]);

	return HorizontalStackedBarSeries;
}(_react.Component);

HorizontalStackedBarSeries.propTypes = {
	baseAt: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(["left", "right", "middle"]), _react.PropTypes.number, _react.PropTypes.func]).isRequired,
	direction: _react.PropTypes.oneOf(["up", "down"]).isRequired,
	stroke: _react.PropTypes.bool.isRequired,
	heightRatio: _react.PropTypes.number.isRequired,
	opacity: _react.PropTypes.number.isRequired,
	fill: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	className: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	xAccessor: _react.PropTypes.func,
	yAccessor: _react.PropTypes.func,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	plotData: _react.PropTypes.array
};

HorizontalStackedBarSeries.defaultProps = {
	baseAt: "left",
	direction: "up",
	className: "bar",
	stroke: false,
	fill: "#4682B4",
	opacity: 1,
	heightRatio: 0.5
};

HorizontalStackedBarSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
	var xAccessor = props.xAccessor;
	var yAccessor = props.yAccessor;
	var stroke = props.stroke;

	var bars = HorizontalStackedBarSeries.getBars(props, [xAccessor], yAccessor, xScale, yScale, plotData);
	// console.log(bars);
	drawOnCanvas2(props, ctx, xScale, yScale, plotData, bars);
};

HorizontalStackedBarSeries.getBarsSVG = function (props) {
	var xAccessor = props.xAccessor;
	var yAccessor = props.yAccessor;
	var xScale = props.xScale;
	var yScale = props.yScale;
	var plotData = props.plotData;


	var bars = HorizontalStackedBarSeries.getBars(props, xAccessor, yAccessor, xScale, yScale, plotData);
	return getBarsSVG2(props, bars);
};

function drawOnCanvas2(props, ctx, xScale, yScale, plotData, bars) {
	var stroke = props.stroke;


	var nest = _d2.default.nest().key(function (d) {
		return d.fill;
	}).entries(bars);

	nest.forEach(function (outer) {
		var key = outer.key;
		var values = outer.values;

		if (values[0].barWidth < 1) {
			ctx.strokeStyle = key;
		} else {
			ctx.strokeStyle = key;
			ctx.fillStyle = (0, _utils.hexToRGBA)(key, props.opacity);
		}
		values.forEach(function (d) {
			if (d.barWidth < 1) {
				/* <line key={idx} className={d.className}
    			stroke={stroke}
    			fill={fill}
    			x1={d.x} y1={d.y}
    			x2={d.x} y2={d.y + d.height} />*/
				ctx.beginPath();
				ctx.moveTo(d.x, d.y);
				ctx.lineTo(d.x + d.width, d.y);
				ctx.stroke();
			} else {
				/* <rect key={idx} className={d.className}
    		stroke={stroke}
    		fill={fill}
    		x={d.x}
    		y={d.y}
    		width={d.barWidth}
    		height={d.height} /> */
				ctx.beginPath();
				ctx.rect(d.x, d.y, d.width, d.barHeight);
				ctx.fill();
				if (stroke) ctx.stroke();
			}
		});
	});
};

function getBarsSVG2(props, bars) {
	/* eslint-disable react/prop-types */
	var opacity = props.opacity;
	/* eslint-disable react/prop-types */

	return bars.map(function (d, idx) {
		if (d.barWidth <= 1) {
			return _react2.default.createElement("line", { key: idx, className: d.className,
				stroke: d.fill,
				x1: d.x, y1: d.y,
				x2: d.x + d.width, y2: d.y });
		}
		return _react2.default.createElement("rect", { key: idx, className: d.className,
			stroke: d.stroke,
			fill: d.fill,
			x: d.x,
			y: d.y,
			width: d.width,
			fillOpacity: opacity,
			height: d.barHeight });
	});
}

HorizontalStackedBarSeries.getBars = function (props, xAccessor, yAccessor, xScale, yScale, plotData) {
	var baseAt = props.baseAt;
	var className = props.className;
	var fill = props.fill;
	var stroke = props.stroke;
	var heightRatio = props.heightRatio;
	var height = props.height;


	var base = baseAt === "left" ? 0 : baseAt === "right" ? (0, _utils.first)(xScale.range()) : baseAt === "middle" ? ((0, _utils.first)(xScale.range()) + (0, _utils.last)(xScale.range())) / 2 : baseAt;

	var getClassName = _d2.default.functor(className);
	var getFill = _d2.default.functor(fill);
	var getBase = _d2.default.functor(base);

	var h = Math.abs(yScale(yAccessor((0, _utils.last)(plotData))) - yScale(yAccessor((0, _utils.first)(plotData))));

	var bh = h / (plotData.length - 1) * heightRatio;
	var barHeight = Math.round(bh);
	var offset = barHeight === 1 ? 0 : 0.5 * barHeight;

	var layers = xAccessor.map(function (eachXAccessor, i) {
		return plotData.map(function (d) {
			return {
				series: yAccessor(d),
				x: i,
				y: eachXAccessor(d),
				className: getClassName(d, i),
				stroke: stroke ? getFill(d, i) : "none",
				fill: getFill(d, i)
			};
		});
	});

	var stack = _d2.default.layout.stack();
	var data = stack(layers);

	console.log(data);
	var bars = _d2.default.merge(data).map(function (d, idx) {
		return {
			className: d.className,
			stroke: d.stroke,
			fill: d.fill,
			y: xScale(d.series) - barHeight / 2,
			x: yScale(d.y0 + d.y),
			width: getBase(xScale, yScale, d) - yScale(d.x),
			barHeight: barHeight
		};
	});
	return bars;
};

/*

HorizontalStackedBarSeries.getBars = (props, xAccessor, yAccessor, xScale, yScale, plotData) => {
	var { baseAt, className, fill, stroke, heightRatio, height } = props;
	var base = baseAt === "left"
				? xScale.range()[0]
				: baseAt === "right"
					? xScale.range()[1]
					: baseAt === "middle"
						? (xScale.range()[0] + xScale.range()[1]) / 2
						: baseAt;

	// console.log(plotData.map(d => d.y), base, yAccessor);
	var getClassName = d3.functor(className);
	var getFill = d3.functor(fill);
	var getBase = d3.functor(base);

	var h = Math.abs(yScale(yAccessor(last(plotData)))
		- yScale(yAccessor(first(plotData))));

	var bh = (h / (plotData.length - 1) * heightRatio);
	var barHeight = Math.round(bh);
	var offset = (barHeight === 1 ? 0 : 0.5 * barHeight);


	var bars = plotData
			.map(d => {
				var innerBars = xAccessor.map((eachXAccessor, i) => {
					var xValue = eachXAccessor(d);
					if (isNotDefined(xValue)) return undefined;

					var y = Math.round(yScale(yAccessor(d))) - offset;

					return {
						barHeight: barHeight,
						x: xScale(xValue),
						y: y,
						className: getClassName(d, i),
						stroke: stroke ? getFill(d, i) : "none",
						fill: getFill(d, i),
						i,
					};
				}).filter(xValue => isDefined(xValue));

				var b = getBase(xScale, yScale, d);
				var w;
				for (var i = innerBars.length - 1; i >= 0; i--) {
					w = b - innerBars[i].x;
					if (w < 0) {
						innerBars[i].x = b;
						w = -1 * w;
					}
					innerBars[i].width = w;
					b = innerBars[i].x;
				};
				return innerBars;
			});

	return d3.merge(bars);
};
*/
exports.default = (0, _wrap2.default)(HorizontalStackedBarSeries);