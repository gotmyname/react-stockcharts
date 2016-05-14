"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isArray = exports.first = exports.overlayColors = exports.zipper = exports.slidingWindow = exports.shallowEqual = exports.noop = exports.identity = exports.merge = exports.mappedSlidingWindow = exports.accumulatingWindow = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.getClosestItemIndexes2 = getClosestItemIndexes2;
exports.getClosestItemIndexes = getClosestItemIndexes;
exports.getClosestItem = getClosestItem;
exports.rebind = rebind;
exports.head = head;
exports.last = last;
exports.isDefined = isDefined;
exports.isNotDefined = isNotDefined;
exports.isObject = isObject;
exports.touchPosition = touchPosition;
exports.mousePosition = mousePosition;
exports.clearCanvas = clearCanvas;
exports.hexToRGBA = hexToRGBA;

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _zipper = require("./zipper");

var _zipper2 = _interopRequireDefault(_zipper);

var _merge = require("./merge");

var _merge2 = _interopRequireDefault(_merge);

var _slidingWindow = require("./slidingWindow");

var _slidingWindow2 = _interopRequireDefault(_slidingWindow);

var _identity = require("./identity");

var _identity2 = _interopRequireDefault(_identity);

var _noop = require("./noop");

var _noop2 = _interopRequireDefault(_noop);

var _shallowEqual = require("./shallowEqual");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _mappedSlidingWindow = require("./mappedSlidingWindow");

var _mappedSlidingWindow2 = _interopRequireDefault(_mappedSlidingWindow);

var _accumulatingWindow = require("./accumulatingWindow");

var _accumulatingWindow2 = _interopRequireDefault(_accumulatingWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.accumulatingWindow = _accumulatingWindow2.default;
exports.mappedSlidingWindow = _mappedSlidingWindow2.default;
exports.merge = _merge2.default;
exports.identity = _identity2.default;
exports.noop = _noop2.default;
exports.shallowEqual = _shallowEqual2.default;
exports.slidingWindow = _slidingWindow2.default;
exports.zipper = _zipper2.default;
function getClosestItemIndexes2(array, value, accessor) {
	var left = _d2.default.bisector(accessor).left(array, value);
	left = Math.max(left - 1, 0);
	var right = Math.min(left + 1, array.length - 1);

	var item = accessor(array[left]);
	if (item >= value && item <= value) right = left;

	return { left: left, right: right };
};

function getClosestItemIndexes(array, value, accessor, log) {
	var lo = 0,
	    hi = array.length - 1;
	while (hi - lo > 1) {
		var mid = Math.round((lo + hi) / 2);
		if (accessor(array[mid]) <= value) {
			lo = mid;
		} else {
			hi = mid;
		}
	}
	// for Date object === does not work, so using the <= in combination with >=
	// the same code works for both dates and numbers
	if (accessor(array[lo]) >= value && accessor(array[lo]) <= value) hi = lo;
	if (accessor(array[hi]) >= value && accessor(array[hi]) <= value) lo = hi;

	if (accessor(array[lo]) < value && accessor(array[hi]) < value) lo = hi;
	if (accessor(array[lo]) > value && accessor(array[hi]) > value) hi = lo;

	if (log) {}
	// console.log(lo, accessor(array[lo]), value, accessor(array[hi]), hi);
	// console.log(accessor(array[lo]), lo, value, accessor(array[lo]) >= value);
	// console.log(value, hi, accessor(array[hi]), accessor(array[lo]) <= value);

	// var left = value > accessor(array[lo]) ? lo : lo;
	// var right = gte(value, accessor(array[hi])) ? Math.min(hi + 1, array.length - 1) : hi;

	// console.log(value, accessor(array[left]), accessor(array[right]));
	return { left: lo, right: hi };
};

function getClosestItem(array, value, accessor, log) {
	var _getClosestItemIndexe = getClosestItemIndexes(array, value, accessor, log);

	var left = _getClosestItemIndexe.left;
	var right = _getClosestItemIndexe.right;


	if (left === right) {
		return array[left];
	}

	var closest = Math.abs(accessor(array[left]) - value) < Math.abs(accessor(array[right]) - value) ? array[left] : array[right];
	if (log) {
		console.log(array[left], array[right], closest, left, right);
	}
	return closest;
};

var overlayColors = exports.overlayColors = _d2.default.scale.category10();

function rebind(target, source, mappings) {
	if ((typeof mappings === "undefined" ? "undefined" : _typeof(mappings)) !== "object") {
		return _d2.default.rebind.apply(_d2.default, arguments);
	}
	Object.keys(mappings).forEach(function (targetName) {
		var method = source[mappings[targetName]];
		if (typeof method !== "function") {
			throw new Error("The method " + mappings[targetName] + " does not exist on the source object");
		}
		target[targetName] = function () {
			var value = method.apply(source, arguments);
			return value === source ? target : value;
		};
	});
	return target;
}

function head(array, accessor) {
	if (accessor && array) {
		var value;
		for (var i = 0; i < array.length; i++) {
			value = array[i];
			if (isDefined(accessor(value))) break;
		};
		return value;
	}
	return array ? array[0] : undefined;
}

var first = exports.first = head;

function last(array, accessor) {
	if (accessor && array) {
		var value;
		for (var i = array.length - 1; i >= 0; i--) {
			value = array[i];
			if (isDefined(accessor(value))) break;
		};
		return value;
	}
	var length = array ? array.length : 0;
	return length ? array[length - 1] : undefined;
}

function isDefined(d) {
	return d !== null && typeof d != "undefined";
}

function isNotDefined(d) {
	return !isDefined(d);
}

function isObject(d) {
	return isDefined(d) && (typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && !Array.isArray(d);
}

var isArray = exports.isArray = Array.isArray;

function touchPosition(touch, e) {
	var container = e.target,
	    rect = container.getBoundingClientRect(),
	    x = touch.clientX - rect.left - container.clientLeft,
	    y = touch.clientY - rect.top - container.clientTop,
	    xy = [Math.round(x), Math.round(y)];
	return xy;
};

function mousePosition(e) {
	var container = e.currentTarget,
	    rect = container.getBoundingClientRect(),
	    x = e.clientX - rect.left - container.clientLeft,
	    y = e.clientY - rect.top - container.clientTop,
	    xy = [Math.round(x), Math.round(y)];
	return xy;
};

function clearCanvas(canvasList) {
	canvasList.forEach(function (each) {
		each.setTransform(1, 0, 0, 1, 0, 0);
		each.clearRect(-1, -1, each.canvas.width + 2, each.canvas.height + 2);
	});
};

function hexToRGBA(inputHex, opacity) {
	var hex = inputHex.replace("#", "");
	if (inputHex.indexOf("#") > -1 && (hex.length === 3 || hex.length === 6)) {

		var multiplier = hex.length === 3 ? 1 : 2;

		var r = parseInt(hex.substring(0, 1 * multiplier), 16);
		var g = parseInt(hex.substring(1 * multiplier, 2 * multiplier), 16);
		var b = parseInt(hex.substring(2 * multiplier, 3 * multiplier), 16);

		var result = "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";

		return result;
	}
	return inputHex;
};