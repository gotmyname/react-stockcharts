"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d2 = require("d3");

var _d3 = _interopRequireDefault(_d2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("../utils");

var _ToolTipText = require("./ToolTipText");

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = require("./ToolTipTSpanLabel");

var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RSITooltip = function (_Component) {
	_inherits(RSITooltip, _Component);

	function RSITooltip() {
		_classCallCheck(this, RSITooltip);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(RSITooltip).apply(this, arguments));
	}

	_createClass(RSITooltip, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var forChart = _props.forChart;
			var onClick = _props.onClick;
			var fontFamily = _props.fontFamily;
			var fontSize = _props.fontSize;
			var calculator = _props.calculator;
			var displayFormat = _props.displayFormat;
			var _context = this.context;
			var chartConfig = _context.chartConfig;
			var currentItem = _context.currentItem;
			var width = _context.width;
			var height = _context.height;


			var yAccessor = calculator.accessor();
			var config = (0, _utils.first)(chartConfig.filter(function (each) {
				return each.id === forChart;
			}));
			var rsi = yAccessor(currentItem);

			var value = (0, _utils.isDefined)(rsi) && displayFormat(rsi) || "n/a";

			var originProp = this.props.origin;

			var origin = _d3.default.functor(originProp);

			var _origin = origin(width, height);

			var _origin2 = _slicedToArray(_origin, 2);

			var x = _origin2[0];
			var y = _origin2[1];

			var _config$origin = _slicedToArray(config.origin, 2);

			var ox = _config$origin[0];
			var oy = _config$origin[1];


			return _react2.default.createElement(
				"g",
				{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")", onClick: onClick },
				_react2.default.createElement(
					_ToolTipText2.default,
					{ x: 0, y: 0,
						fontFamily: fontFamily, fontSize: fontSize },
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						null,
						calculator.tooltipLabel()
					),
					_react2.default.createElement(
						"tspan",
						null,
						value
					)
				)
			);
		}
	}]);

	return RSITooltip;
}(_react.Component);

RSITooltip.contextTypes = {
	chartConfig: _react.PropTypes.array.isRequired,
	currentItem: _react.PropTypes.object.isRequired,
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired
};

RSITooltip.propTypes = {
	forChart: _react.PropTypes.number.isRequired,
	origin: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.func]).isRequired,
	fontFamily: _react.PropTypes.string,
	fontSize: _react.PropTypes.number,
	onClick: _react.PropTypes.func,
	calculator: _react.PropTypes.func.isRequired,
	displayFormat: _react.PropTypes.func.isRequired
};

RSITooltip.defaultProps = {
	displayFormat: _d3.default.format(".2f"),
	origin: [0, 0]
};

exports.default = RSITooltip;