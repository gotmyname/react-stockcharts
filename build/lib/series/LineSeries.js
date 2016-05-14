"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Line = require("./Line");

var _Line2 = _interopRequireDefault(_Line);

var _wrap = require("./wrap");

var _wrap2 = _interopRequireDefault(_wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineSeries = function (_Component) {
	_inherits(LineSeries, _Component);

	function LineSeries() {
		_classCallCheck(this, LineSeries);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(LineSeries).apply(this, arguments));
	}

	_createClass(LineSeries, [{
		key: "render",
		value: function render() {
			var props = this.props;
			var className = props.className;
			var xScale = props.xScale;
			var yScale = props.yScale;
			var xAccessor = props.xAccessor;
			var yAccessor = props.yAccessor;
			var plotData = props.plotData;
			var stroke = props.stroke;
			var type = props.type;

			return _react2.default.createElement(_Line2.default, {
				className: className,
				xScale: xScale, yScale: yScale,
				xAccessor: xAccessor, yAccessor: yAccessor,
				plotData: plotData,
				stroke: stroke, fill: "none",
				type: type });
		}
	}]);

	return LineSeries;
}(_react.Component);

LineSeries.propTypes = {
	className: _react.PropTypes.string
};

LineSeries.defaultProps = {
	stroke: "#4682B4",
	className: "line "
};

LineSeries.yAccessor = function (d) {
	return d.close;
};

exports.default = (0, _wrap2.default)(LineSeries);