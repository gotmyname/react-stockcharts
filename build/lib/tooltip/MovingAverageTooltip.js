"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _ToolTipText = require("./ToolTipText");

var _ToolTipText2 = _interopRequireDefault(_ToolTipText);

var _ToolTipTSpanLabel = require("./ToolTipTSpanLabel");

var _ToolTipTSpanLabel2 = _interopRequireDefault(_ToolTipTSpanLabel);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleMAToolTip = function (_Component) {
	_inherits(SingleMAToolTip, _Component);

	function SingleMAToolTip(props) {
		_classCallCheck(this, SingleMAToolTip);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SingleMAToolTip).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(SingleMAToolTip, [{
		key: "handleClick",
		value: function handleClick(e) {
			var _props = this.props;
			var onClick = _props.onClick;
			var forChart = _props.forChart;
			var options = _props.options;

			onClick(_extends({ chartId: forChart }, options), e);
		}
	}, {
		key: "render",
		value: function render() {
			var translate = "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")";
			return _react2.default.createElement(
				"g",
				{ transform: translate },
				_react2.default.createElement("line", { x1: 0, y1: 2, x2: 0, y2: 28, stroke: this.props.color, strokeWidth: "4px" }),
				_react2.default.createElement(
					_ToolTipText2.default,
					{ x: 5, y: 11,
						fontFamily: this.props.fontFamily, fontSize: this.props.fontSize },
					_react2.default.createElement(
						_ToolTipTSpanLabel2.default,
						null,
						this.props.displayName
					),
					_react2.default.createElement(
						"tspan",
						{ x: "5", dy: "15" },
						this.props.value
					)
				),
				_react2.default.createElement("rect", { x: 0, y: 0, width: 55, height: 30,
					onClick: this.handleClick,
					fill: "none", stroke: "none" })
			);
		}
	}]);

	return SingleMAToolTip;
}(_react.Component);

SingleMAToolTip.propTypes = {
	origin: _react.PropTypes.array.isRequired,
	color: _react.PropTypes.string.isRequired,
	displayName: _react.PropTypes.string.isRequired,
	value: _react.PropTypes.string.isRequired,
	onClick: _react.PropTypes.func,
	fontFamily: _react.PropTypes.string,
	fontSize: _react.PropTypes.number,
	forChart: _react.PropTypes.number.isRequired,
	options: _react.PropTypes.object.isRequired
};

var MovingAverageTooltip = function (_Component2) {
	_inherits(MovingAverageTooltip, _Component2);

	function MovingAverageTooltip() {
		_classCallCheck(this, MovingAverageTooltip);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MovingAverageTooltip).apply(this, arguments));
	}

	_createClass(MovingAverageTooltip, [{
		key: "render",
		value: function render() {
			var _context = this.context;
			var chartConfig = _context.chartConfig;
			var currentItem = _context.currentItem;
			var width = _context.width;
			var height = _context.height;
			var _props2 = this.props;
			var className = _props2.className;
			var onClick = _props2.onClick;
			var forChart = _props2.forChart;
			var width = _props2.width;
			var fontFamily = _props2.fontFamily;
			var fontSize = _props2.fontSize;
			var originProp = _props2.origin;
			var calculators = _props2.calculators;
			var displayFormat = _props2.displayFormat;


			var config = (0, _utils.first)(chartConfig.filter(function (each) {
				return each.id === forChart;
			}));

			var origin = _d2.default.functor(originProp);

			var _origin = origin(width, height);

			var _origin2 = _slicedToArray(_origin, 2);

			var x = _origin2[0];
			var y = _origin2[1];

			var _config$origin = _slicedToArray(config.origin, 2);

			var ox = _config$origin[0];
			var oy = _config$origin[1];


			return _react2.default.createElement(
				"g",
				{ transform: "translate(" + (ox + x) + ", " + (oy + y) + ")", className: className },
				calculators.map(function (each, idx) {
					var yValue = each.accessor()(currentItem);
					var options = {
						maType: each.type(),
						period: each.windowSize(),
						source: each.source(),
						echo: each.echo()
					};
					var yDisplayValue = yValue ? displayFormat(yValue) : "n/a";
					return _react2.default.createElement(SingleMAToolTip, {
						key: idx,
						origin: [width * idx, 0],
						color: each.stroke(),
						displayName: each.tooltipLabel(),
						value: yDisplayValue,
						options: options,
						forChart: forChart, onClick: onClick,
						fontFamily: fontFamily, fontSize: fontSize });
				})
			);
		}
	}]);

	return MovingAverageTooltip;
}(_react.Component);

MovingAverageTooltip.contextTypes = {
	chartConfig: _react.PropTypes.array.isRequired,
	currentItem: _react.PropTypes.object.isRequired,
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired
};

MovingAverageTooltip.propTypes = {
	className: _react.PropTypes.string,
	forChart: _react.PropTypes.number.isRequired,
	displayFormat: _react.PropTypes.func.isRequired,
	origin: _react.PropTypes.array.isRequired,
	onClick: _react.PropTypes.func,
	fontFamily: _react.PropTypes.string,
	fontSize: _react.PropTypes.number,
	width: _react.PropTypes.number,
	calculators: _react.PropTypes.array.isRequired,
	forDataSeries: _react.PropTypes.arrayOf(_react.PropTypes.number)
};

MovingAverageTooltip.defaultProps = {
	className: "react-stockcharts-moving-average-tooltip",
	displayFormat: _d2.default.format(".2f"),
	origin: [0, 10],
	width: 65
};

exports.default = MovingAverageTooltip;