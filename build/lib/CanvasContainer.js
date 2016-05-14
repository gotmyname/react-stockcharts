"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasContainer = function (_Component) {
	_inherits(CanvasContainer, _Component);

	function CanvasContainer() {
		_classCallCheck(this, CanvasContainer);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(CanvasContainer).apply(this, arguments));
	}

	_createClass(CanvasContainer, [{
		key: "getCanvasContexts",
		value: function getCanvasContexts() {
			var _refs = this.refs;
			var axesCanvasDOM = _refs.canvas_axes;
			var mouseCoordDOM = _refs.canvas_mouse_coordinates;
			var interactiveDOM = _refs.canvas_interactive;
			var bgDOM = _refs.bg;


			if (this.refs.canvas_axes) {
				return {
					axes: axesCanvasDOM.getContext("2d"),
					mouseCoord: mouseCoordDOM.getContext("2d"),
					interactive: interactiveDOM.getContext("2d"),
					bg: bgDOM.getContext("2d")
				};
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var height = _props.height;
			var width = _props.width;
			var type = _props.type;
			var zIndex = _props.zIndex;

			if (type === "svg") return null;
			return _react2.default.createElement(
				"div",
				{ style: { zIndex: zIndex } },
				_react2.default.createElement("canvas", { ref: "bg", width: width, height: height,
					style: { position: "absolute", left: 0, top: 0 } }),
				_react2.default.createElement("canvas", { ref: "canvas_axes", width: width, height: height,
					style: { position: "absolute", left: 0, top: 0 } }),
				_react2.default.createElement("canvas", { ref: "canvas_mouse_coordinates", width: width, height: height,
					style: { position: "absolute", left: 0, top: 0 } }),
				_react2.default.createElement("canvas", { ref: "canvas_interactive", width: width, height: height,
					style: { position: "absolute", left: 0, top: 0 } })
			);
		}
	}]);

	return CanvasContainer;
}(_react.Component);

CanvasContainer.propTypes = {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired,
	type: _react.PropTypes.string.isRequired,
	zIndex: _react.PropTypes.number
};

exports.default = CanvasContainer;