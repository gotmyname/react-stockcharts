"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _OverlayBarSeries = require("./OverlayBarSeries");

var _OverlayBarSeries2 = _interopRequireDefault(_OverlayBarSeries);

var _StraightLine = require("./StraightLine");

var _StraightLine2 = _interopRequireDefault(_StraightLine);

var _wrap = require("./wrap");

var _wrap2 = _interopRequireDefault(_wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElderRaySeries = function (_Component) {
	_inherits(ElderRaySeries, _Component);

	function ElderRaySeries(props) {
		_classCallCheck(this, ElderRaySeries);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ElderRaySeries).call(this, props));

		_this.yAccessorTop = _this.yAccessorTop.bind(_this);
		_this.yAccessorBullTop = _this.yAccessorBullTop.bind(_this);
		_this.yAccessorBearTop = _this.yAccessorBearTop.bind(_this);
		_this.yAccessorBullBottom = _this.yAccessorBullBottom.bind(_this);
		_this.yAccessorBearBottom = _this.yAccessorBearBottom.bind(_this);
		_this.yAccessorForBarBase = _this.yAccessorForBarBase.bind(_this);
		return _this;
	}

	_createClass(ElderRaySeries, [{
		key: "yAccessorTop",
		value: function yAccessorTop(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && Math.max(yAccessor(d).bullPower, 0);
		}
	}, {
		key: "yAccessorBullTop",
		value: function yAccessorBullTop(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && (yAccessor(d).bullPower > 0 ? yAccessor(d).bullPower : undefined);
		}
	}, {
		key: "yAccessorBearTop",
		value: function yAccessorBearTop(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && (yAccessor(d).bearPower > 0 ? yAccessor(d).bearPower : undefined);
		}
	}, {
		key: "yAccessorBullBottom",
		value: function yAccessorBullBottom(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && (yAccessor(d).bullPower < 0 ? 0 : undefined);
		}
	}, {
		key: "yAccessorBearBottom",
		value: function yAccessorBearBottom(d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			return yAccessor(d) && (yAccessor(d).bullPower < 0 || yAccessor(d).bullPower * yAccessor(d).bearPower < 0 // bullPower is +ve and bearPower is -ve
			? Math.min(0, yAccessor(d).bullPower) : undefined);
		}
	}, {
		key: "yAccessorForBarBase",
		value: function yAccessorForBarBase(xScale, yScale, d) {
			var calculator = this.props.calculator;

			var yAccessor = calculator.accessor();
			var y = yAccessor(d) && Math.min(yAccessor(d).bearPower, 0);
			return yScale(y);
		}
	}, {
		key: "fillForEachBar",
		value: function fillForEachBar(d, yAccessorNumber) {
			return yAccessorNumber % 2 === 0 ? "#6BA583" : "#FF0000";
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var className = _props.className;
			var xScale = _props.xScale;
			var yScale = _props.yScale;
			var plotData = _props.plotData;
			var opacity = _props.opacity;


			return _react2.default.createElement(
				"g",
				{ className: className },
				_react2.default.createElement(_OverlayBarSeries2.default, {
					xScale: xScale, yScale: yScale,
					baseAt: this.yAccessorForBarBase,
					className: "elderray-bar",
					stroke: false, fill: this.fillForEachBar,
					opacity: opacity,
					plotData: plotData,
					yAccessor: [this.yAccessorBullTop, this.yAccessorBearTop, this.yAccessorBullBottom, this.yAccessorBearBottom] }),
				_react2.default.createElement(_StraightLine2.default, { yValue: 0 })
			);
		}
	}]);

	return ElderRaySeries;
}(_react.Component);

ElderRaySeries.propTypes = {
	className: _react.PropTypes.string,
	xScale: _react.PropTypes.func,
	yScale: _react.PropTypes.func,
	xAccessor: _react.PropTypes.func,
	calculator: _react.PropTypes.func.isRequired,
	plotData: _react.PropTypes.array,
	type: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	divergenceStroke: _react.PropTypes.bool
};

ElderRaySeries.defaultProps = {
	className: "react-stockcharts-elderray-series",
	zeroLineStroke: "#000000",
	zeroLineOpacity: 0.3,
	opacity: 1,
	divergenceStroke: false
};

exports.default = (0, _wrap2.default)(ElderRaySeries);