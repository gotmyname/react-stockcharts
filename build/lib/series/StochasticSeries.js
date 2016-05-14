"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wrap = require("./wrap");

var _wrap2 = _interopRequireDefault(_wrap);

var _Line = require("./Line");

var _Line2 = _interopRequireDefault(_Line);

var _StraightLine = require("./StraightLine");

var _StraightLine2 = _interopRequireDefault(_StraightLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StochasticSeries = function (_Component) {
	_inherits(StochasticSeries, _Component);

	function StochasticSeries(props) {
		_classCallCheck(this, StochasticSeries);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StochasticSeries).call(this, props));

		_this.yAccessorForD = _this.yAccessorForD.bind(_this);
		_this.yAccessorForK = _this.yAccessorForK.bind(_this);
		return _this;
	}

	_createClass(StochasticSeries, [{
		key: "yAccessorForD",
		value: function yAccessorForD(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && yAccessor(d).D;
		}
	}, {
		key: "yAccessorForK",
		value: function yAccessorForK(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && yAccessor(d).K;
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var className = _props.className;
			var calculator = _props.calculator;
			var xScale = _props.xScale;
			var yScale = _props.yScale;
			var xAccessor = _props.xAccessor;
			var plotData = _props.plotData;
			var stroke = _props.stroke;
			var type = _props.type;

			var seriesStroke = calculator.stroke();
			return _react2.default.createElement(
				"g",
				{ className: className },
				_react2.default.createElement(_Line2.default, {
					xScale: xScale, yScale: yScale,
					xAccessor: xAccessor, yAccessor: this.yAccessorForD,
					plotData: plotData,
					stroke: seriesStroke.D, fill: "none",
					type: type }),
				_react2.default.createElement(_Line2.default, {
					xScale: xScale, yScale: yScale,
					xAccessor: xAccessor, yAccessor: this.yAccessorForK,
					plotData: plotData,
					stroke: seriesStroke.K, fill: "none",
					type: type }),
				StochasticSeries.getHorizontalLine(this.props, calculator.overSold(), stroke.top),
				StochasticSeries.getHorizontalLine(this.props, calculator.middle(), stroke.middle),
				StochasticSeries.getHorizontalLine(this.props, calculator.overBought(), stroke.bottom)
			);
		}
	}]);

	return StochasticSeries;
}(_react.Component);

StochasticSeries.getHorizontalLine = function (props, yValue, stroke) {

	/* eslint-disable react/prop-types */
	var xScale = props.xScale;
	var yScale = props.yScale;
	var xAccessor = props.xAccessor;
	var yAccessor = props.yAccessor;
	var plotData = props.plotData;
	var type = props.type;
	/* eslint-enable react/prop-types */

	return _react2.default.createElement(_StraightLine2.default, {
		stroke: stroke, opacity: 0.3, type: type,
		xScale: xScale, yScale: yScale,
		xAccessor: xAccessor, yAccessor: yAccessor,
		plotData: plotData,
		yValue: yValue });
};

StochasticSeries.propTypes = {
	className: _react.PropTypes.string,
	calculator: _react.PropTypes.func.isRequired,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	xAccessor: _react.PropTypes.func,
	plotData: _react.PropTypes.array,
	stroke: _react.PropTypes.object,
	type: _react.PropTypes.string
};

StochasticSeries.defaultProps = {
	className: "react-stockcharts-stochastic-series",
	stroke: {
		top: "#964B00",
		middle: "#000000",
		bottom: "#964B00"
	}
};

exports.default = (0, _wrap2.default)(StochasticSeries);