"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EdgeCoordinate = function (_Component) {
	_inherits(EdgeCoordinate, _Component);

	function EdgeCoordinate() {
		_classCallCheck(this, EdgeCoordinate);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(EdgeCoordinate).apply(this, arguments));
	}

	_createClass(EdgeCoordinate, [{
		key: "render",
		value: function render() {
			var className = this.props.className;


			var edge = EdgeCoordinate.helper(this.props);
			if (edge === null) return null;
			var line, coordinateBase, coordinate;

			if ((0, _utils.isDefined)(edge.line)) {
				line = _react2.default.createElement("line", {
					className: "react-stockcharts-cross-hair", opacity: edge.line.opacity, stroke: edge.line.stroke,
					x1: edge.line.x1, y1: edge.line.y1,
					x2: edge.line.x2, y2: edge.line.y2 });
			}
			if ((0, _utils.isDefined)(edge.coordinateBase)) {
				coordinateBase = _react2.default.createElement("rect", { key: 1, className: "react-stockchart-text-background",
					x: edge.coordinateBase.edgeXRect,
					y: edge.coordinateBase.edgeYRect,
					height: edge.coordinateBase.rectHeight, width: edge.coordinateBase.rectWidth,
					fill: edge.coordinateBase.fill, opacity: edge.coordinateBase.opacity });

				coordinate = _react2.default.createElement(
					"text",
					{ key: 2, x: edge.coordinate.edgeXText,
						y: edge.coordinate.edgeYText,
						textAnchor: edge.coordinate.textAnchor,
						fontFamily: edge.coordinate.fontFamily,
						fontSize: edge.coordinate.fontSize,
						dy: ".32em", fill: edge.coordinate.textFill },
					edge.coordinate.displayCoordinate
				);
			}
			return _react2.default.createElement(
				"g",
				{ className: className },
				line,
				coordinateBase,
				coordinate
			);
		}
	}]);

	return EdgeCoordinate;
}(_react.Component);

EdgeCoordinate.propTypes = {
	className: _react.PropTypes.string,
	type: _react.PropTypes.oneOf(["vertical", "horizontal"]).isRequired,
	coordinate: _react.PropTypes.any.isRequired,
	x1: _react.PropTypes.number.isRequired,
	y1: _react.PropTypes.number.isRequired,
	x2: _react.PropTypes.number.isRequired,
	y2: _react.PropTypes.number.isRequired,
	orient: _react.PropTypes.oneOf(["bottom", "top", "left", "right"]),
	rectWidth: _react.PropTypes.number,
	hideLine: _react.PropTypes.bool,
	fill: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	fontFamily: _react.PropTypes.string.isRequired,
	fontSize: _react.PropTypes.number.isRequired,
	rectHeight: _react.PropTypes.number.isRequired
};

EdgeCoordinate.defaultProps = {
	className: "react-stockcharts-edgecoordinate",
	orient: "left",
	hideLine: false,
	fill: "#8a8a8a",
	opacity: 1,
	textFill: "#FFFFFF",
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	fontSize: 13,
	lineStroke: "#000000",
	lineOpacity: 0.3,
	rectHeight: 20
};

EdgeCoordinate.helper = function (props) {
	var displayCoordinate = props.coordinate;
	var show = props.show;
	var rectWidth = props.rectWidth;
	var type = props.type;
	var orient = props.orient;
	var edgeAt = props.edgeAt;
	var hideLine = props.hideLine;
	var fill = props.fill;
	var opacity = props.opacity;
	var fontFamily = props.fontFamily;
	var fontSize = props.fontSize;
	var textFill = props.textFill;
	var lineStroke = props.lineStroke;
	var lineOpacity = props.lineOpacity;
	var rectHeight = props.rectHeight;
	var x1 = props.x1;
	var y1 = props.y1;
	var x2 = props.x2;
	var y2 = props.y2;


	if (!show) return null;

	rectWidth = rectWidth ? rectWidth : type === "horizontal" ? 60 : 100;

	var edgeXRect, edgeYRect, edgeXText, edgeYText;

	if (type === "horizontal") {

		edgeXRect = orient === "right" ? edgeAt + 1 : edgeAt - rectWidth - 1;
		edgeYRect = y1 - rectHeight / 2;
		edgeXText = orient === "right" ? edgeAt + rectWidth / 2 : edgeAt - rectWidth / 2;
		edgeYText = y1;
	} else {
		edgeXRect = x1 - rectWidth / 2;
		edgeYRect = orient === "bottom" ? edgeAt : edgeAt - rectHeight;
		edgeXText = x1;
		edgeYText = orient === "bottom" ? edgeAt + rectHeight / 2 : edgeAt - rectHeight / 2;
	}
	var coordinateBase,
	    coordinate,
	    textAnchor = "middle";
	if ((0, _utils.isDefined)(displayCoordinate)) {
		coordinateBase = {
			edgeXRect: edgeXRect, edgeYRect: edgeYRect, rectHeight: rectHeight, rectWidth: rectWidth, fill: fill, opacity: opacity
		};
		coordinate = {
			edgeXText: edgeXText, edgeYText: edgeYText, textAnchor: textAnchor, fontFamily: fontFamily, fontSize: fontSize, textFill: textFill, displayCoordinate: displayCoordinate
		};
	}
	var line = hideLine ? undefined : {
		opacity: lineOpacity, stroke: lineStroke, x1: x1, y1: y1, x2: x2, y2: y2
	};
	return {
		coordinateBase: coordinateBase, coordinate: coordinate, line: line
	};
};

EdgeCoordinate.drawOnCanvasStatic = function (ctx, props) {
	props = _extends({}, EdgeCoordinate.defaultProps, props);

	var edge = EdgeCoordinate.helper(props);

	if (edge === null) return;

	if ((0, _utils.isDefined)(edge.coordinateBase)) {
		ctx.fillStyle = (0, _utils.hexToRGBA)(edge.coordinateBase.fill, edge.coordinateBase.opacity);

		ctx.beginPath();
		ctx.rect(edge.coordinateBase.edgeXRect, edge.coordinateBase.edgeYRect, edge.coordinateBase.rectWidth, edge.coordinateBase.rectHeight);
		ctx.fill();

		ctx.font = edge.coordinate.fontSize + "px " + edge.coordinate.fontFamily;
		ctx.fillStyle = edge.coordinate.textFill;
		ctx.textAlign = edge.coordinate.textAnchor === "middle" ? "center" : edge.coordinate.textAnchor;
		ctx.textBaseline = "middle";

		ctx.fillText(edge.coordinate.displayCoordinate, edge.coordinate.edgeXText, edge.coordinate.edgeYText);
	}
	if ((0, _utils.isDefined)(edge.line)) {
		ctx.strokeStyle = (0, _utils.hexToRGBA)(edge.line.stroke, edge.line.opacity);

		ctx.beginPath();
		ctx.moveTo(edge.line.x1, edge.line.y1);
		ctx.lineTo(edge.line.x2, edge.line.y2);
		ctx.stroke();
	}
};

exports.default = EdgeCoordinate;