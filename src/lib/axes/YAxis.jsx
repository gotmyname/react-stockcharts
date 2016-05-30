"use strict";

import React, { PropTypes } from "react";

import Axis from "./Axis";
import PureComponent from "../utils/PureComponent";

class YAxis extends PureComponent {
	render() {
		var { axisAt, tickFormat, ticks, percentScale, tickValues, domain } = this.props;
		var { chartConfig } = this.context;
    var domain = this.props.domain(chartConfig.yScale.domain(), this.context.plotData);
		var yScale = (percentScale) ? chartConfig.yScale.copy().domain(domain) : chartConfig.yScale;

		tickValues = tickValues || chartConfig.yTicks;

		var axisLocation;

		if (axisAt === "left") axisLocation = 0;
		else if (axisAt === "right") axisLocation = this.context.width;
		else if (axisAt === "middle") axisLocation = (this.context.width) / 2;
		else axisLocation = axisAt;

		return (
			<Axis {...this.props}
				transform={[axisLocation, 0]}
				range={[0, this.context.height]}
				tickFormat={tickFormat} ticks={[ticks]} tickValues={tickValues}
				scale={yScale} />
		);
	}
}

YAxis.propTypes = {
	axisAt: PropTypes.oneOfType([
		PropTypes.oneOf(["left", "right", "middle"]),
		PropTypes.number
	]).isRequired,
	orient: PropTypes.oneOf(["left", "right"]).isRequired,
	innerTickSize: PropTypes.number,
	outerTickSize: PropTypes.number,
	tickFormat: PropTypes.func,
	tickPadding: PropTypes.number,
	tickSize: PropTypes.number,
	ticks: PropTypes.number,
	tickValues: PropTypes.array,
	percentScale: PropTypes.bool,
	showTicks: PropTypes.bool,
	showDomain: PropTypes.bool,
	className: PropTypes.string,
  domain: PropTypes.func
};
YAxis.defaultProps = {
	showGrid: false,
	showDomain: false,
	className: "react-stockcharts-y-axis",
	ticks: 10,
  domain: function() {
    return [0, 1];
  }
};
YAxis.contextTypes = {
	plotData: PropTypes.array,
	chartConfig: PropTypes.object.isRequired,
	xScale: PropTypes.func.isRequired,
	width: PropTypes.number.isRequired,
};

export default YAxis;
