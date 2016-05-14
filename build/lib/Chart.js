"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _d2 = require("d3");

var _d3 = _interopRequireDefault(_d2);

var _PureComponent2 = require("./utils/PureComponent");

var _PureComponent3 = _interopRequireDefault(_PureComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chart = function (_PureComponent) {
	_inherits(Chart, _PureComponent);

	function Chart(props, context) {
		_classCallCheck(this, Chart);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chart).call(this, props, context));

		_this.yScale = _this.yScale.bind(_this);
		return _this;
	}

	_createClass(Chart, [{
		key: "yScale",
		value: function yScale() {
			var _this2 = this;

			var chartConfig = this.context.chartConfig.filter(function (each) {
				return each.id === _this2.props.id;
			})[0];
			return chartConfig.yScale.copy();
		}
	}, {
		key: "getChildContext",
		value: function getChildContext() {
			var chartId = this.props.id;

			var chartConfig = this.context.chartConfig.filter(function (each) {
				return each.id === chartId;
			})[0];

			var width = chartConfig.width;
			var height = chartConfig.height;

			var canvasOriginX = 0.5 + chartConfig.origin[0] + this.context.margin.left;
			var canvasOriginY = 0.5 + chartConfig.origin[1] + this.context.margin.top;

			return { chartId: chartId, chartConfig: chartConfig, canvasOriginX: canvasOriginX, canvasOriginY: canvasOriginY, width: width, height: height };
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			var origin = this.context.chartConfig.filter(function (each) {
				return each.id === _this3.props.id;
			})[0].origin;

			var _origin = _slicedToArray(origin, 2);

			var x = _origin[0];
			var y = _origin[1];


			return _react2.default.createElement(
				"g",
				{ transform: "translate(" + x + ", " + y + ")" },
				this.props.children
			);
		}
	}]);

	return Chart;
}(_PureComponent3.default);

Chart.propTypes = {
	height: _react.PropTypes.number,
	width: _react.PropTypes.number,
	origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
	id: _react.PropTypes.number.isRequired,
	yExtents: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
	yScale: _react.PropTypes.func.isRequired,
	yMousePointerDisplayLocation: _react.PropTypes.oneOf(["left", "right"]),
	yMousePointerDisplayFormat: _react.PropTypes.func,
	flipYScale: _react.PropTypes.bool.isRequired,
	padding: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.shape({
		top: _react.PropTypes.number,
		bottom: _react.PropTypes.number
	})]).isRequired
};

Chart.defaultProps = {
	id: 0,
	origin: [0, 0],
	padding: 0,
	yScale: _d3.default.scale.linear(),
	yMousePointerRectWidth: 60,
	yMousePointerRectHeight: 20,
	flipYScale: false
};

Chart.contextTypes = {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired,
	chartConfig: _react.PropTypes.array,
	margin: _react.PropTypes.object.isRequired,
	interactiveState: _react.PropTypes.array.isRequired,
	currentItem: _react.PropTypes.object.isRequired,
	mouseXY: _react.PropTypes.array,
	show: _react.PropTypes.bool
};

// adding here even when this is not used by Chart, refer to https://github.com/facebook/react/issues/2517
Chart.childContextTypes = {
	height: _react.PropTypes.number,
	width: _react.PropTypes.number,
	chartConfig: _react.PropTypes.object.isRequired,
	canvasOriginX: _react.PropTypes.number,
	canvasOriginY: _react.PropTypes.number,
	chartId: _react.PropTypes.number.isRequired
};

exports.default = Chart;