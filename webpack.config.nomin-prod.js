var config = require("./webpack.config.js");
var webpack = require("webpack");

config.plugins = config.plugins.concat(
	new webpack.DefinePlugin({
		"process.env": {
			// This has effect on the react lib size
			NODE_ENV: JSON.stringify("production")
		}
	}),
	new webpack.optimize.DedupePlugin()
);

module.exports = config;