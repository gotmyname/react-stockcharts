"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getDisplayName(Series) {
	var name = Series.displayName || Series.name || "Series";
	return name;
}

function pure(PureSeries, contextShape) {
	var ignorePropKeys = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

	var PureCanvasSeries = function (_Component) {
		_inherits(PureCanvasSeries, _Component);

		function PureCanvasSeries() {
			_classCallCheck(this, PureCanvasSeries);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(PureCanvasSeries).apply(this, arguments));
		}

		_createClass(PureCanvasSeries, [{
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
				return !(0, _utils.shallowEqual)(this.props, nextProps) || !(0, _utils.shallowEqual)(this.state, nextState) || !(0, _utils.shallowEqual)(this.context, nextContext);
			}
		}, {
			key: "getWrappedComponent",
			value: function getWrappedComponent() {
				return this.refs.pureSeries;
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				var ctx = {};
				Object.keys(this.context).filter(function (key) {
					return ignorePropKeys.indexOf(key) === -1;
				}).forEach(function (key) {
					ctx[key] = _this2.context[key];
				});

				return _react2.default.createElement(PureSeries, _extends({ ref: "pureSeries"
				}, ctx, this.props));
			}
		}]);

		return PureCanvasSeries;
	}(_react.Component);

	;

	PureCanvasSeries.displayName = "pure(" + getDisplayName(PureSeries) + ")";

	PureCanvasSeries.contextTypes = contextShape;

	var defaultProps = {};

	if (PureSeries.defaultProps) {
		Object.keys(PureSeries.defaultProps).forEach(function (key) {
			defaultProps[key] = PureSeries.defaultProps[key];
		});
		PureCanvasSeries.defaultProps = defaultProps;
	}

	/* Object.keys(PureSeries)
 	.filter((key) => key !== "propTypes")
 	.filter(key => key !== "defaultProps")
 	.filter(key => key !== "displayName")
 	.filter(key => key !== "contextTypes")
 	.filter(key => key !== "childContextTypes")
 	.forEach(key => PureCanvasSeries[key] = PureSeries[key]);*/

	// console.log(Object.keys(PureCanvasSeries))
	return PureCanvasSeries;
}

exports.default = pure;