"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _makeInteractive = require("./makeInteractive");

var _makeInteractive2 = _interopRequireDefault(_makeInteractive);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClickCallback = function (_Component) {
	_inherits(ClickCallback, _Component);

	function ClickCallback(props) {
		_classCallCheck(this, ClickCallback);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClickCallback).call(this, props));

		_this.onClick = _this.onClick.bind(_this);
		return _this;
	}

	_createClass(ClickCallback, [{
		key: "onClick",
		value: function onClick(_ref, interactive, _ref2, e) {
			var chartId = _ref.chartId;
			var xAccessor = _ref.xAccessor;
			var mouseXY = _ref2.mouseXY;
			var currentItem = _ref2.currentItem;
			var chartConfig = _ref2.chartConfig;
			var _props = this.props;
			var onClick = _props.onClick;
			var displayXAccessor = _props.displayXAccessor;
			var yScale = chartConfig.yScale;


			var yValue = yScale.invert(mouseXY[1]);
			var xValue = displayXAccessor(currentItem);
			onClick({
				xy: [xValue, yValue],
				mouseXY: mouseXY,
				currentItem: currentItem
			}, e);
			return { interactive: interactive }; // returning the same input to indicate that the state of the chart is not changing
		}
	}, {
		key: "render",
		value: function render() {
			return null;
		}
	}]);

	return ClickCallback;
}(_react.Component);

ClickCallback.drawOnCanvas = _utils.noop;

ClickCallback.propTypes = {
	onClick: _react.PropTypes.func.isRequired,
	/* comes from pure converted from context to prop - START */
	displayXAccessor: _react.PropTypes.func.isRequired
};

/* comes from pure converted from context to prop - END */
ClickCallback.defaultProps = {
	onClick: function onClick(e) {
		console.log(e);
	}
};

exports.default = (0, _makeInteractive2.default)(ClickCallback, ["click"], {});