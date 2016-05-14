"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _wrap = require("./wrap");

var _wrap2 = _interopRequireDefault(_wrap);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Area = function (_Component) {
	_inherits(Area, _Component);

	function Area() {
		_classCallCheck(this, Area);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Area).apply(this, arguments));
	}

	_createClass(Area, [{
		key: "render",
		value: function render() {
			var props = this.props;
			var stroke = props.stroke;
			var fill = props.fill;
			var className = props.className;
			var opacity = props.opacity;


			className = className.concat((0, _utils.isDefined)(stroke) ? "" : " line-stroke");
			return _react2.default.createElement("path", { d: Area.getArea(props), stroke: stroke, fill: fill, className: className, opacity: opacity });
		}
	}]);

	return Area;
}(_react.Component);

;

Area.propTypes = {
	className: _react.PropTypes.string,
	xScale: _react.PropTypes.func.isRequired,
	yScale: _react.PropTypes.func.isRequired,
	xAccessor: _react.PropTypes.func.isRequired,
	yAccessor: _react.PropTypes.func.isRequired,
	plotData: _react.PropTypes.array.isRequired,
	stroke: _react.PropTypes.string,
	fill: _react.PropTypes.string,
	opacity: _react.PropTypes.number,
	base: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number])
};

Area.defaultProps = {
	className: "line ",
	fill: "none",
	opacity: 1,
	defined: function defined(d) {
		return !isNaN(d);
	},
	base: function base(yScale /* , d*/) {
		return (0, _utils.first)(yScale.range());
	}
};
Area.getArea = function (props) {
	var plotData = props.plotData;
	var xScale = props.xScale;
	var yScale = props.yScale;
	var xAccessor = props.xAccessor;
	var yAccessor = props.yAccessor;
	var base = props.base;
	var defined = props.defined;

	var newBase = _d2.default.functor(base);

	var areaSeries = _d2.default.svg.area().defined(function (d) {
		return defined(yAccessor(d));
	}).x(function (d) {
		return xScale(xAccessor(d));
	}).y0(newBase.bind(null, yScale)).y1(function (d) {
		return yScale(yAccessor(d));
	});

	// console.log("HERE", yAccessor(plotData[0]));
	return areaSeries(plotData);
};

function segment(points0, points1, ctx) {
	ctx.beginPath();

	var _first = (0, _utils.first)(points0);

	var _first2 = _slicedToArray(_first, 2);

	var x0 = _first2[0];
	var y0 = _first2[1];

	ctx.moveTo(x0, y0);

	var i;
	for (i = 0; i < points1.length; i++) {
		var _points1$i = _slicedToArray(points1[i], 2);

		var x1 = _points1$i[0];
		var y1 = _points1$i[1];

		ctx.lineTo(x1, y1);
	};

	for (i = points0.length - 1; i >= 0; i--) {
		var _points0$i = _slicedToArray(points0[i], 2);

		var _x = _points0$i[0];
		var _y = _points0$i[1];

		ctx.lineTo(_x, _y);
	};
	ctx.closePath();
	ctx.fill();
};

Area.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
	var xAccessor = props.xAccessor;
	var yAccessor = props.yAccessor;
	var fill = props.fill;
	var stroke = props.stroke;
	var opacity = props.opacity;
	var base = props.base;
	var defined = props.defined;
	// var height = yScale.range()[0];

	var newBase = _d2.default.functor(base);

	ctx.fillStyle = (0, _utils.hexToRGBA)(fill, opacity);
	ctx.strokeStyle = stroke;

	var points0 = [],
	    points1 = [];

	for (var i = 0; i < plotData.length; i++) {
		var d = plotData[i];
		if (defined(yAccessor(d), i)) {
			var x = xScale(xAccessor(d));
			var y1 = yScale(yAccessor(d));
			var y0 = newBase(yScale, d);


			points0.push([x, y0]);
			points1.push([x, y1]);
		} else if (points0.length) {
			segment(points0, points1, ctx);
			points0 = [];
			points1 = [];
		}
	}
	if (points0.length) segment(points0, points1, ctx);
};

exports.default = (0, _wrap2.default)(Area);