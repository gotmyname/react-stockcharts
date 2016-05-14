"use strict";

/* an extension to d3.zip so we call a function instead of an array */

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = zipper;

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _identity = require("./identity");

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function zipper() {
	var combine = _identity2.default;

	function zip() {
		var n = arguments.length;
		if (!n) return [];
		var i,
		    m = _d2.default.min(arguments, d3_zipLength),
		    zips = new Array(m);
		for (i = -1; ++i < m;) {
			for (var j = -1, zip = zips[i] = new Array(n); ++j < n;) {
				zip[j] = arguments[j][i];
			}
			zips[i] = combine.apply(this, zips[i]);
		}
		return zips;
	};
	function d3_zipLength(d) {
		return d.length;
	}
	zip.combine = function (x) {
		if (!arguments.length) {
			return combine;
		}
		combine = x;
		return zip;
	};
	return zip;
};