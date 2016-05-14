"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _wrap = require("./wrap");

var _wrap2 = _interopRequireDefault(_wrap);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KagiSeries = function (_Component) {
	_inherits(KagiSeries, _Component);

	function KagiSeries() {
		_classCallCheck(this, KagiSeries);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(KagiSeries).apply(this, arguments));
	}

	_createClass(KagiSeries, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var className = _props.className;
			var stroke = _props.stroke;
			var fill = _props.fill;
			var strokeWidth = _props.strokeWidth;
			var _props2 = this.props;
			var xAccessor = _props2.xAccessor;
			var xScale = _props2.xScale;
			var yScale = _props2.yScale;
			var plotData = _props2.plotData;


			var paths = KagiSeries.helper(plotData, xAccessor).map(function (each, i) {
				var dataSeries = _d2.default.svg.line().x(function (item) {
					return xScale(item[0]);
				}).y(function (item) {
					return yScale(item[1]);
				}).interpolate("step-before");
				return _react2.default.createElement("path", { key: i, d: dataSeries(each.plot), className: each.type,
					stroke: stroke[each.type], fill: fill[each.type], strokeWidth: strokeWidth });
			});
			return _react2.default.createElement(
				"g",
				{ className: className },
				paths
			);
		}
	}]);

	return KagiSeries;
}(_react.Component);

KagiSeries.propTypes = {
	className: _react.PropTypes.string,
	stroke: _react.PropTypes.string,
	fill: _react.PropTypes.string,
	strokeWidth: _react.PropTypes.number.isRequired,
	xAccessor: _react.PropTypes.func,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	plotData: _react.PropTypes.array
};

KagiSeries.defaultProps = {
	className: "react-stockcharts-kagi",
	strokeWidth: 2,
	stroke: {
		yang: "#6BA583",
		yin: "#E60000"
	},
	fill: {
		yang: "none",
		yin: "none"
	},
	currentValueStroke: "#000000"
};

KagiSeries.yAccessor = function (d) {
	return { open: d.open, high: d.high, low: d.low, close: d.close };
};

KagiSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
	var xAccessor = props.xAccessor;
	var stroke = props.stroke;
	var strokeWidth = props.strokeWidth;
	var currentValueStroke = props.currentValueStroke;

	var begin = true;

	var paths = KagiSeries.helper(plotData, xAccessor);

	paths.forEach(function (each) {
		ctx.strokeStyle = stroke[each.type];
		ctx.lineWidth = strokeWidth;

		ctx.beginPath();
		var prevX;
		each.plot.forEach(function (d) {
			var x = xScale(d[0]);
			var y = yScale(d[1]);

			if (begin) {
				ctx.moveTo(x, y);
				begin = false;
			} else {
				if ((0, _utils.isDefined)(prevX)) {
					ctx.lineTo(prevX, y);
				}
				ctx.lineTo(x, y);
			}
			prevX = x;
			// console.log(d);
		});
		ctx.stroke();
	});
	var lastPlot = paths[paths.length - 1].plot;
	var last = lastPlot[lastPlot.length - 1];
	ctx.beginPath();
	// ctx.strokeStyle = "black";
	ctx.lineWidth = 1;

	var x = xScale(last[0]);
	var y1 = yScale(last[2]);
	var y2 = yScale(last[3]);
	// console.log(last, x, y);

	ctx.moveTo(x, y1);
	ctx.lineTo(x + 10, y1);
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = currentValueStroke;
	ctx.moveTo(x - 10, y2);
	ctx.lineTo(x, y2);
	ctx.stroke();
};

KagiSeries.helper = function (plotData, xAccessor) {
	var kagiLine = [];
	var kagi = {};
	var d = plotData[0];
	var idx = xAccessor(d);

	for (var i = 0; i < plotData.length; i++) {
		d = plotData[i];

		if ((0, _utils.isNotDefined)(d.close)) continue;
		if ((0, _utils.isNotDefined)(kagi.type)) kagi.type = d.startAs;
		if ((0, _utils.isNotDefined)(kagi.plot)) kagi.plot = [];

		idx = xAccessor(d);
		kagi.plot.push([idx, d.open]);

		if ((0, _utils.isDefined)(d.changeTo)) {
			kagi.plot.push([idx, d.changePoint]);
			kagi.added = true;
			kagiLine.push(kagi);

			kagi = {
				type: d.changeTo,
				plot: [],
				added: false
			};
			kagi.plot.push([idx, d.changePoint]);
		}
	}

	if (!kagi.added) {
		kagi.plot.push([idx, d.close, d.current, d.reverseAt]);
		kagiLine.push(kagi);
	}

	// console.log(d.reverseAt);

	return kagiLine;
};

exports.default = (0, _wrap2.default)(KagiSeries);