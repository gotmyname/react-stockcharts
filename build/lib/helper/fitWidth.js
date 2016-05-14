"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = fitWidth;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getDisplayName(Series) {
	var name = Series.displayName || Series.name || "Series";
	return name;
}

function fitWidth(WrappedComponent) {
	var withRef = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	var ResponsiveComponent = function (_Component) {
		_inherits(ResponsiveComponent, _Component);

		function ResponsiveComponent(props) {
			_classCallCheck(this, ResponsiveComponent);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResponsiveComponent).call(this, props));

			_this.handleWindowResize = _this.handleWindowResize.bind(_this);
			_this.getWrappedInstance = _this.getWrappedInstance.bind(_this);
			return _this;
		}

		_createClass(ResponsiveComponent, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				window.addEventListener("resize", this.handleWindowResize);
				var el = _reactDom2.default.findDOMNode(this);
				var w = el.parentNode.clientWidth;
				this.setState({
					width: w
				});
			}
		}, {
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				window.removeEventListener("resize", this.handleWindowResize);
			}
		}, {
			key: "handleWindowResize",
			value: function handleWindowResize() {
				var el = _reactDom2.default.findDOMNode(this);
				var w = el.parentNode.clientWidth;
				this.setState({
					width: w
				});
			}
		}, {
			key: "getWrappedInstance",
			value: function getWrappedInstance() {
				return this.refs.component;
			}
		}, {
			key: "render",
			value: function render() {
				var ref = withRef ? { ref: "component" } : {};

				if (this.state && this.state.width) {
					return _react2.default.createElement(WrappedComponent, _extends({ width: this.state.width }, this.props, ref));
				} else {
					return _react2.default.createElement("div", null);
				}
			}
		}]);

		return ResponsiveComponent;
	}(_react.Component);

	ResponsiveComponent.displayName = "fitWidth(" + getDisplayName(WrappedComponent) + ")";

	return ResponsiveComponent;
}