"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var ScatterSeries = function (_Component) {
	_inherits(ScatterSeries, _Component);

	function ScatterSeries() {
		_classCallCheck(this, ScatterSeries);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ScatterSeries).apply(this, arguments));
	}

	_createClass(ScatterSeries, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var className = _props.className;
			var markerProps = _props.markerProps;
			var xScale = _props.xScale;
			var yScale = _props.yScale;
			var plotData = _props.plotData;

			var points = ScatterSeries.helper(this.props, xScale, yScale, plotData);

			return _react2.default.createElement(
				"g",
				{ className: className },
				points.map(function (point, idx) {
					var Marker = point.marker;

					return _react2.default.createElement(Marker, _extends({ key: idx }, markerProps, { point: point }));
				})
			);
		}
	}]);

	return ScatterSeries;
}(_react.Component);

ScatterSeries.propTypes = {
	className: _react.PropTypes.string,
	xAccessor: _react.PropTypes.func,
	yAccessor: _react.PropTypes.func.isRequired,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	plotData: _react.PropTypes.array,
	marker: _react.PropTypes.func,
	markerProvider: _react.PropTypes.func,
	markerProps: _react.PropTypes.object
};

ScatterSeries.defaultProps = {
	className: "react-stockcharts-scatter"
};

ScatterSeries.yAccessor = function (d) {
	return d.close;
};

ScatterSeries.helper = function (props, xScale, yScale, plotData) {
	var xAccessor = props.xAccessor;
	var yAccessor = props.yAccessor;
	var Marker = props.marker;
	var markerProvider = props.markerProvider;
	var markerProps = props.markerProps;


	if (!(markerProvider || Marker)) throw new Error("required prop, either marker or markerProvider missing");

	return plotData.map(function (d) {

		if (markerProvider) Marker = markerProvider(d);

		var mProps = _extends({}, Marker.defaultProps, markerProps);

		var fill = _d2.default.functor(mProps.fill);
		var stroke = _d2.default.functor(mProps.stroke);

		return {
			x: xScale(xAccessor(d)),
			y: yScale(yAccessor(d)),
			fill: (0, _utils.hexToRGBA)(fill(d), mProps.opacity),
			stroke: stroke(d),
			datum: d,
			marker: Marker
		};
	});
};

ScatterSeries.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
	var markerProps = props.markerProps;


	var points = ScatterSeries.helper(props, xScale, yScale, plotData);

	var nest = _d2.default.nest().key(function (d) {
		return d.fill;
	}).key(function (d) {
		return d.stroke;
	}).entries(points);

	nest.forEach(function (fillGroup) {
		var fillKey = fillGroup.key;
		var fillValues = fillGroup.values;


		if (fillKey !== "none") {
			ctx.fillStyle = fillKey;
		}

		fillValues.forEach(function (strokeGroup) {
			var strokeKey = strokeGroup.key;
			var strokeValues = strokeGroup.values;


			ctx.strokeStyle = strokeKey;

			strokeValues.forEach(function (point) {
				var marker = point.marker;

				marker.drawOnCanvasWithNoStateChange(_extends({}, marker.defaultProps, markerProps), point, ctx);
			});
		});
	});
};

exports.default = (0, _wrap2.default)(ScatterSeries);