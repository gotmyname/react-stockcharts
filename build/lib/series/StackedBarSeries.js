"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.rotateXY = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.drawOnCanvasHelper = drawOnCanvasHelper;
exports.svgHelper = svgHelper;
exports.getBarsSVG2 = getBarsSVG2;
exports.drawOnCanvas2 = drawOnCanvas2;
exports.getBars = getBars;

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

var StackedBarSeries = function (_Component) {
	_inherits(StackedBarSeries, _Component);

	function StackedBarSeries() {
		_classCallCheck(this, StackedBarSeries);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(StackedBarSeries).apply(this, arguments));
	}

	_createClass(StackedBarSeries, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"g",
				{ className: "react-stockcharts-bar-series" },
				svgHelper(this.props, _d2.default.layout.stack())
			);
		}
	}]);

	return StackedBarSeries;
}(_react.Component);

StackedBarSeries.propTypes = {
	baseAt: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
	direction: _react.PropTypes.oneOf(["up", "down"]).isRequired,
	stroke: _react.PropTypes.bool.isRequired,
	widthRatio: _react.PropTypes.number.isRequired,
	opacity: _react.PropTypes.number.isRequired,
	fill: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	className: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	xAccessor: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.func), _react.PropTypes.func]).isRequired,
	yAccessor: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.func), _react.PropTypes.func]).isRequired,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	plotData: _react.PropTypes.array
};

StackedBarSeries.defaultProps = {
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

StackedBarSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
	var yAccessor = props.yAccessor;
	var xAccessor = props.xAccessor;

	drawOnCanvasHelper(props, ctx, xScale, yScale, plotData, xAccessor, yAccessor, _d2.default.layout.stack());
};

function drawOnCanvasHelper(props, ctx, xScale, yScale, plotData, xAccessor, yAccessor, stackFn) {
	var defaultPostAction = arguments.length <= 8 || arguments[8] === undefined ? _utils.identity : arguments[8];
	var postRotateAction = arguments.length <= 9 || arguments[9] === undefined ? rotateXY : arguments[9];
	var yAccessor = props.yAccessor;
	var xAccessor = props.xAccessor;


	var bars = doStuff(props, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction);
	drawOnCanvas2(props, ctx, bars);
}

function convertToArray(item) {
	return Array.isArray(item) ? item : [item];
}

function svgHelper(props, stackFn) {
	var defaultPostAction = arguments.length <= 2 || arguments[2] === undefined ? _utils.identity : arguments[2];
	var postRotateAction = arguments.length <= 3 || arguments[3] === undefined ? rotateXY : arguments[3];
	var xScale = props.xScale;
	var yScale = props.yScale;
	var plotData = props.plotData;

	var bars = doStuff(props, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction);

	return getBarsSVG2(props, bars);
}

function doStuff(props, plotData, xScale, yScale, stackFn, postRotateAction, defaultPostAction) {
	var yAccessor = props.yAccessor;
	var xAccessor = props.xAccessor;
	var swapScales = props.swapScales;


	var modifiedYAccessor = swapScales ? convertToArray(xAccessor) : convertToArray(yAccessor);
	var modifiedXAccessor = swapScales ? yAccessor : xAccessor;

	var modifiedXScale = swapScales ? yScale : xScale;
	var modifiedYScale = swapScales ? xScale : yScale;

	var postProcessor = swapScales ? postRotateAction : defaultPostAction;

	var bars = getBars(props, modifiedXAccessor, modifiedYAccessor, modifiedXScale, modifiedYScale, plotData, stackFn, postProcessor);
	return bars;
}

var rotateXY = exports.rotateXY = function rotateXY(array) {
	return array.map(function (each) {
		return _extends({}, each, {
			x: each.y,
			y: each.x,
			height: each.width,
			width: each.height
		});
	});
};

function getBarsSVG2(props, bars) {
	/* eslint-disable react/prop-types */
	var opacity = props.opacity;
	/* eslint-disable react/prop-types */

	return bars.map(function (d, idx) {
		if (d.width <= 1) {
			return _react2.default.createElement("line", { key: idx, className: d.className,
				stroke: d.fill,
				x1: d.x, y1: d.y,
				x2: d.x, y2: d.y + d.height });
		}
		return _react2.default.createElement("rect", { key: idx, className: d.className,
			stroke: d.stroke,
			fill: d.fill,
			x: d.x,
			y: d.y,
			width: d.width,
			fillOpacity: opacity,
			height: d.height });
	});
}

function drawOnCanvas2(props, ctx, bars) {
	var stroke = props.stroke;


	var nest = _d2.default.nest().key(function (d) {
		return d.fill;
	}).entries(bars);

	nest.forEach(function (outer) {
		var key = outer.key;
		var values = outer.values;

		if (values[0].width < 1) {
			ctx.strokeStyle = key;
		} else {
			ctx.strokeStyle = key;
			ctx.fillStyle = (0, _utils.hexToRGBA)(key, props.opacity);
		}
		values.forEach(function (d) {
			if (d.width < 1) {
				/* <line key={idx} className={d.className}
    			stroke={stroke}
    			fill={fill}
    			x1={d.x} y1={d.y}
    			x2={d.x} y2={d.y + d.height} />*/
				ctx.beginPath();
				ctx.moveTo(d.x, d.y);
				ctx.lineTo(d.x, d.y + d.height);
				ctx.stroke();
			} else {
				/* <rect key={idx} className={d.className}
    		stroke={stroke}
    		fill={fill}
    		x={d.x}
    		y={d.y}
    		width={d.width}
    		height={d.height} /> */
				ctx.beginPath();
				ctx.rect(d.x, d.y, d.width, d.height);
				ctx.fill();
				if (stroke) ctx.stroke();
			}
		});
	});
};

function getBars(props, xAccessor, yAccessor, xScale, yScale, plotData) {
	var stack = arguments.length <= 6 || arguments[6] === undefined ? _utils.identity : arguments[6];
	var after = arguments.length <= 7 || arguments[7] === undefined ? _utils.identity : arguments[7];
	var baseAt = props.baseAt;
	var className = props.className;
	var fill = props.fill;
	var stroke = props.stroke;
	var widthRatio = props.widthRatio;
	var _props$spaceBetweenBa = props.spaceBetweenBar;
	var spaceBetweenBar = _props$spaceBetweenBa === undefined ? 0 : _props$spaceBetweenBa;


	var getClassName = _d2.default.functor(className);
	var getFill = _d2.default.functor(fill);
	var getBase = _d2.default.functor(baseAt);

	var width = Math.abs(xScale(xAccessor((0, _utils.last)(plotData))) - xScale(xAccessor((0, _utils.first)(plotData))));
	var bw = width / (plotData.length - 1) * widthRatio;
	var barWidth = Math.round(bw);

	var eachBarWidth = (barWidth - spaceBetweenBar * (yAccessor.length - 1)) / yAccessor.length;

	var offset = barWidth === 1 ? 0 : 0.5 * barWidth;

	var layers = yAccessor.map(function (eachYAccessor, i) {
		return plotData.map(function (d) {
			return {
				series: xAccessor(d),
				datum: d,
				x: i,
				y: eachYAccessor(d),
				className: getClassName(d, i),
				stroke: stroke ? getFill(d, i) : "none",
				fill: getFill(d, i)
			};
		});
	});

	var data = stack(layers);

	var bars = _d2.default.merge(data).map(function (d) {
		// let baseValue = yScale.invert(getBase(xScale, yScale, d.datum));
		var y = yScale(d.y + (d.y0 || 0));
		/* let h = isDefined(d.y0) && d.y0 !== 0 && !isNaN(d.y0)
  	? yScale(d.y0) - y
  	: getBase(xScale, yScale, d.datum) - yScale(d.y)*/
		var h = getBase(xScale, yScale, d.datum) - yScale(d.y);

		// let h = ;
		// if (d.y < 0) h = -h;
		if (h < 0) {
			y = y + h;
			h = -h;
		}
		/* console.log(d.series, d.datum.date, d.x,
  	getBase(xScale, yScale, d.datum), `d.y=${d.y}, d.y0=${d.y0}, y=${y}, h=${h}`)*/
		return {
			className: d.className,
			stroke: d.stroke,
			fill: d.fill,
			// series: d.series,
			// i: d.x,
			x: xScale(d.series) - barWidth / 2,
			y: y,
			groupOffset: offset - (d.x > 0 ? (eachBarWidth + spaceBetweenBar) * d.x : 0),
			groupWidth: eachBarWidth,
			offset: barWidth / 2,
			height: h,
			width: barWidth
		};
	});
	return after(bars);
};

exports.default = (0, _wrap2.default)(StackedBarSeries);