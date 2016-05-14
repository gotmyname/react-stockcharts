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

var Line = function (_Component) {
	_inherits(Line, _Component);

	function Line() {
		_classCallCheck(this, Line);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Line).apply(this, arguments));
	}

	_createClass(Line, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var stroke = _props.stroke;
			var fill = _props.fill;
			var className = _props.className;


			className = className.concat(stroke ? "" : " line-stroke");
			return _react2.default.createElement("path", { d: Line.getPath(this.props), stroke: stroke, fill: fill, className: className });
		}
	}]);

	return Line;
}(_react.Component);

Line.propTypes = {
	className: _react.PropTypes.string,
	xScale: _react.PropTypes.func.isRequired,
	yScale: _react.PropTypes.func.isRequired,
	xAccessor: _react.PropTypes.func.isRequired,
	yAccessor: _react.PropTypes.func.isRequired,
	plotData: _react.PropTypes.array.isRequired,
	stroke: _react.PropTypes.string,
	fill: _react.PropTypes.string
};

Line.defaultProps = {
	className: "line ",
	fill: "none",
	stroke: "black",
	defined: function defined(d) {
		return !isNaN(d);
	}
};

Line.getPath = function (props) {
	var plotData = props.plotData;
	var xScale = props.xScale;
	var yScale = props.yScale;
	var xAccessor = props.xAccessor;
	var yAccessor = props.yAccessor;
	var defined = props.defined;


	var dataSeries = _d2.default.svg.line().defined(function (d) {
		return defined(yAccessor(d));
	}).x(function (d) {
		return xScale(xAccessor(d));
	}).y(function (d) {
		return yScale(yAccessor(d));
	});
	return dataSeries(plotData);
};

function segment(points, ctx) {
	ctx.beginPath();

	var _first = (0, _utils.first)(points);

	var _first2 = _slicedToArray(_first, 2);

	var x = _first2[0];
	var y = _first2[1];

	ctx.moveTo(x, y);
	for (var i = 1; i < points.length; i++) {
		var _points$i = _slicedToArray(points[i], 2);

		var x1 = _points$i[0];
		var y1 = _points$i[1];

		ctx.lineTo(x1, y1);
	};

	ctx.stroke();
};

Line.drawOnCanvas = function (props, ctx, xScale, yScale, plotData) {
	var xAccessor = props.xAccessor;
	var yAccessor = props.yAccessor;
	var stroke = props.stroke;
	var defined = props.defined;


	ctx.strokeStyle = stroke;

	var points = [];
	for (var i = 0; i < plotData.length; i++) {
		var d = plotData[i];
		if (defined(yAccessor(d), i)) {
			var x = xScale(xAccessor(d));
			var y = yScale(yAccessor(d));


			points.push([x, y]);
		} else if (points.length) {
			segment(points, ctx);
			points = [];
		}
	}

	if (points.length) segment(points, ctx);
};

exports.default = (0, _wrap2.default)(Line);