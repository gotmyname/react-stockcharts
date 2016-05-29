"use strict";

import React, { PropTypes, Component } from "react";
import Line from "./Line";
import wrap from "./wrap";

class ATRSeries extends Component {
	render() {
		var { className, xScale, yScale, xAccessor, calculator, plotData, stroke, type } = this.props;
		var yAccessor = calculator.accessor();

		return (
			<g className={className}>
				<Line
					className={className}
					xScale={xScale} yScale={yScale}
					xAccessor={xAccessor} yAccessor={yAccessor}
					plotData={plotData}
					stroke={stroke} fill="none"
					type={type} />
			</g>
		);
	}
}

ATRSeries.propTypes = {
	className: PropTypes.string,

	calculator: PropTypes.func.isRequired,
	xScale: PropTypes.func,
	yScale: PropTypes.func,
	xAccessor: PropTypes.func,
	plotData: PropTypes.array,
	stroke: PropTypes.string,
	type: PropTypes.string,
};

ATRSeries.defaultProps = {
	className: "react-stockcharts-atr-series",
	stroke: "#000000"
};

export default wrap(ATRSeries);
