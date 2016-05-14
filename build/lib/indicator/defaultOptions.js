"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var BollingerBand = exports.BollingerBand = {
	period: 20,
	source: function source(d) {
		return d.close;
	}, // "high", "low", "open", "close"
	multiplier: 2,
	movingAverageType: "sma"
};

var ATR = exports.ATR = {
	period: 14,
	source: function source(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	}
};

var ForceIndex = exports.ForceIndex = {
	close: function close(d) {
		return d.close;
	}, // "high", "low", "open", "close"
	volume: function volume(d) {
		return d.volume;
	}
};

var ElderRay = exports.ElderRay = {
	period: 13,
	source: function source(d) {
		return d.close;
	}, // "high", "low", "open", "close"
	movingAverageType: "sma",
	ohlc: function ohlc(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	}
};

var ElderImpulse = exports.ElderImpulse = {
	stroke: {
		up: "#6BA583",
		down: "#FF0000",
		neutral: "#0000FF"
	}
};

var MACD = exports.MACD = {
	fast: 12,
	slow: 26,
	signal: 9,
	source: function source(d) {
		return d.close;
	}, // "high", "low", "open", "close"
	fill: {
		divergence: "#4682B4"
	},
	stroke: {
		macd: "#FF0000",
		signal: "#00F300"
	}
};

var FullStochasticOscillator = exports.FullStochasticOscillator = {
	period: 12,
	K: 3,
	D: 3,
	source: function source(d) {
		return { open: d.open, high: d.high, low: d.low, close: d.close };
	},
	stroke: {
		D: "#17becf",
		K: "#ff7f0e"
	},
	overSold: 80,
	middle: 50,
	overBought: 20
};

var RSI = exports.RSI = {
	period: 14,
	source: function source(d) {
		return d.close;
	}, // "high", "low", "open", "close"
	overSold: 70,
	middle: 50,
	overBought: 30
};

var EMA = exports.EMA = {
	source: function source(d) {
		return d.close;
	}, // "high", "low", "open", "close"
	period: 10
};

var SMA = exports.SMA = {
	source: function source(d) {
		return d.close;
	}, // "high", "low", "open", "close"
	period: 10
};

var Kagi = exports.Kagi = {
	reversalType: "ATR", // "ATR", "FIXED"
	period: 14,
	reversal: 2,
	source: function source(d) {
		return d.close;
	}, // "high", "low", "open", "close"
	dateAccessor: function dateAccessor(d) {
		return d.date;
	},
	dateMutator: function dateMutator(d, date) {
		d.date = date;
	},
	indexMutator: function indexMutator(d, idx) {
		d.idx = idx;
	}
};

var Renko = exports.Renko = {
	reversalType: "ATR", // "ATR", "FIXED"
	period: 14,
	fixedBrickSize: 2,
	source: function source(d) {
		return { high: d.high, low: d.low };
	}, // "close", "hi/lo"
	dateAccessor: function dateAccessor(d) {
		return d.date;
	},
	dateMutator: function dateMutator(d, date) {
		d.date = date;
	},
	indexMutator: function indexMutator(d, idx) {
		d.idx = idx;
	},
	indexAccessor: function indexAccessor(d) {
		return d.idx;
	}
};

var PointAndFigure = exports.PointAndFigure = {
	boxSize: 0.5,
	reversal: 3,
	source: function source(d) {
		return { high: d.high, low: d.low };
	}, // "close", "hi/lo"
	dateAccessor: function dateAccessor(d) {
		return d.date;
	},
	dateMutator: function dateMutator(d, date) {
		d.date = date;
	},
	indexMutator: function indexMutator(d, idx) {
		d.idx = idx;
	},
	indexAccessor: function indexAccessor(d) {
		return d.idx;
	}
};