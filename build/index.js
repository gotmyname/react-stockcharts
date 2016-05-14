"use strict";

// common components

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ChartCanvas = require("./lib/ChartCanvas");

var _ChartCanvas2 = _interopRequireDefault(_ChartCanvas);

var _Chart = require("./lib/Chart");

var _Chart2 = _interopRequireDefault(_Chart);

var _BackgroundText = require("./lib/BackgroundText");

var _BackgroundText2 = _interopRequireDefault(_BackgroundText);

var _EventCapture = require("./lib/EventCapture");

var _EventCapture2 = _interopRequireDefault(_EventCapture);

var _series = require("./lib/series");

var series = _interopRequireWildcard(_series);

var _scale = require("./lib/scale");

var scale = _interopRequireWildcard(_scale);

var _coordinates = require("./lib/coordinates");

var coordinates = _interopRequireWildcard(_coordinates);

var _indicator = require("./lib/indicator");

var indicator = _interopRequireWildcard(_indicator);

var _axes = require("./lib/axes");

var axes = _interopRequireWildcard(_axes);

var _tooltip = require("./lib/tooltip");

var tooltip = _interopRequireWildcard(_tooltip);

var _helper = require("./lib/helper");

var helper = _interopRequireWildcard(_helper);

var _interactive = require("./lib/interactive");

var interactive = _interopRequireWildcard(_interactive);

var _utils = require("./lib/utils");

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// interaction components


var version = "0.4.0";

// chart types & Series


exports.default = {
	ChartCanvas: _ChartCanvas2.default,
	Chart: _Chart2.default,
	EventCapture: _EventCapture2.default,
	BackgroundText: _BackgroundText2.default,
	series: series,
	coordinates: coordinates,
	indicator: indicator,
	axes: axes,
	scale: scale,
	tooltip: tooltip,
	helper: helper,
	interactive: interactive,
	version: version,
	Utils: Utils
};