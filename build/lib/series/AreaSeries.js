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

var AreaSeries = function (_Component) {
	_inherits(AreaSeries, _Component);

	function AreaSeries() {
		_classCallCheck(this, AreaSeries);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AreaSeries).apply(this, arguments));
	}

	_createClass(AreaSeries, [{
		key: "render",
		value: function render() {
			var props = this.props;
			var className = props.className;
			var xScale = props.xScale;
			var yScale = props.yScale;
			var xAccessor = props.xAccessor;
			var yAccessor = props.yAccessor;
			var plotData = props.plotData;
			var type = props.type;
			var stroke = props.stroke;
			var fill = props.fill;
			var baseAt = props.baseAt;
			var opacity = props.opacity;


			return _react2.default.createElement(
				"g",
				{ className: className },
				_react2.default.createElement(_Line2.default, {
					xScale: xScale, yScale: yScale,
					xAccessor: xAccessor, yAccessor: yAccessor,
					plotData: plotData,
					stroke: stroke, fill: "none",
					type: type }),
				_react2.default.createElement(_Area2.default, {
					xScale: xScale, yScale: yScale,
					xAccessor: xAccessor, yAccessor: yAccessor,
					plotData: plotData,
					base: baseAt,
					stroke: "none", fill: fill, opacity: opacity,
					type: type })
			);
		}
	}]);

	return AreaSeries;
}(_react.Component);

AreaSeries.propTypes = {
	stroke: _react.PropTypes.string,
	fill: _react.PropTypes.string.isRequired,
	opacity: _react.PropTypes.number.isRequired,
	className: _react.PropTypes.string
};

AreaSeries.defaultProps = {
	stroke: "#4682B4",
	opacity: 0.5,
	fill: "#4682B4",
	className: "react-stockcharts-area"
};

AreaSeries.yAccessor = function (d) {
	return d.close;
};

exports.default = (0, _wrap2.default)(AreaSeries);