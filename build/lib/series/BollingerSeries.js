"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Line = require("./Line");

var _Line2 = _interopRequireDefault(_Line);

var _Area = require("./Area");

var _Area2 = _interopRequireDefault(_Area);

var _wrap = require("./wrap");

var _wrap2 = _interopRequireDefault(_wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BollingerSeries = function (_Component) {
	_inherits(BollingerSeries, _Component);

	function BollingerSeries(props) {
		_classCallCheck(this, BollingerSeries);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BollingerSeries).call(this, props));

		_this.yAccessorForTop = _this.yAccessorForTop.bind(_this);
		_this.yAccessorForMiddle = _this.yAccessorForMiddle.bind(_this);
		_this.yAccessorForBottom = _this.yAccessorForBottom.bind(_this);
		_this.yAccessorForScalledBottom = _this.yAccessorForScalledBottom.bind(_this);
		return _this;
	}

	_createClass(BollingerSeries, [{
		key: "yAccessorForTop",
		value: function yAccessorForTop(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && yAccessor(d).top;
		}
	}, {
		key: "yAccessorForMiddle",
		value: function yAccessorForMiddle(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && yAccessor(d).middle;
		}
	}, {
		key: "yAccessorForBottom",
		value: function yAccessorForBottom(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && yAccessor(d).bottom;
		}
	}, {
		key: "yAccessorForScalledBottom",
		value: function yAccessorForScalledBottom(scale, d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return scale(yAccessor(d) && yAccessor(d).bottom);
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var xScale = _props.xScale;
			var yScale = _props.yScale;
			var xAccessor = _props.xAccessor;
			var plotData = _props.plotData;
			var type = _props.type;
			var _props2 = this.props;
			var calculator = _props2.calculator;
			var areaClassName = _props2.areaClassName;
			var className = _props2.className;
			var opacity = _props2.opacity;


			var stroke = calculator.stroke();
			var fill = calculator.fill();

			return _react2.default.createElement(
				"g",
				{ className: className },
				_react2.default.createElement(_Line2.default, {
					xScale: xScale, yScale: yScale,
					xAccessor: xAccessor, yAccessor: this.yAccessorForTop,
					plotData: plotData,
					stroke: stroke.top, fill: "none",
					type: type }),
				_react2.default.createElement(_Line2.default, {
					xScale: xScale, yScale: yScale,
					xAccessor: xAccessor, yAccessor: this.yAccessorForMiddle,
					plotData: plotData,
					stroke: stroke.middle, fill: "none",
					type: type }),
				_react2.default.createElement(_Line2.default, {
					xScale: xScale, yScale: yScale,
					xAccessor: xAccessor, yAccessor: this.yAccessorForBottom,
					plotData: plotData,
					stroke: stroke.bottom, fill: "none",
					type: type }),
				_react2.default.createElement(_Area2.default, {
					className: areaClassName,
					xScale: xScale, yScale: yScale,
					xAccessor: xAccessor, yAccessor: this.yAccessorForTop,
					base: this.yAccessorForScalledBottom,
					plotData: plotData,
					stroke: "none", fill: fill, opacity: opacity,
					type: type })
			);
		}
	}]);

	return BollingerSeries;
}(_react.Component);

BollingerSeries.propTypes = {
	xAccessor: _react.PropTypes.func,
	calculator: _react.PropTypes.func.isRequired,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	plotData: _react.PropTypes.array,
	className: _react.PropTypes.string,
	areaClassName: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	type: _react.PropTypes.string
};

BollingerSeries.defaultProps = {
	className: "react-stockcharts-bollinger-band-series",
	areaClassName: "react-stockcharts-bollinger-band-series-area",
	opacity: 0.2
};

exports.default = (0, _wrap2.default)(BollingerSeries);