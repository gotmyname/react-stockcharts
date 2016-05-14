"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Circle(props) {
	var className = props.className;
	var stroke = props.stroke;
	var opacity = props.opacity;
	var fill = props.fill;
	var point = props.point;
	var r = props.r;

	var radius = _d2.default.functor(r)(point.datum);
	return _react2.default.createElement("circle", { className: className, cx: point.x, cy: point.y, stroke: stroke, fillOpacity: opacity, fill: fill, r: radius });
}

Circle.propTypes = {
	stroke: _react.PropTypes.string,
	fill: _react.PropTypes.string.isRequired,
	opacity: _react.PropTypes.number.isRequired,
	point: _react.PropTypes.shape({
		x: _react.PropTypes.number.isRequired,
		y: _react.PropTypes.number.isRequired,
		datum: _react.PropTypes.object.isRequired
	}).isRequired,
	className: _react.PropTypes.string,
	r: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired
};

Circle.defaultProps = {
	stroke: "#4682B4",
	opacity: 0.5,
	fill: "#4682B4",
	className: "react-stockcharts-marker-circle"
};

Circle.drawOnCanvas = function (props, point, ctx) {
	var stroke = props.stroke;
	var fill = props.fill;
	var opacity = props.opacity;


	ctx.strokeStyle = stroke;

	if (fill !== "none") {
		ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
	}

	Circle.drawOnCanvasWithNoStateChange(props, point, ctx);
};

Circle.drawOnCanvasWithNoStateChange = function (props, point, ctx) {
	var r = props.r;

	var radius = _d2.default.functor(r)(point.datum);

	ctx.moveTo(point.x, point.y);
	ctx.beginPath();
	ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI, false);
	ctx.stroke();
	ctx.fill();
};

exports.default = Circle;