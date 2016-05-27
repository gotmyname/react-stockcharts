"use strict";

import React, { PropTypes, Component } from "react";
import d3 from "d3";

import { first, isDefined } from "../utils";
import ToolTipText from "./ToolTipText";
import ToolTipTSpanLabel from "./ToolTipTSpanLabel";

class OHLCTooltip extends Component {
	render() {
		var {
			forChart, onClick, xDisplayFormat, fontFamily, fontSize, accessor, volumeFormat, ohlcFormat,
			closeOnly, labelDate, labelO, labelH, labelL, labelC, labelVol
		} = this.props;

		var displayDate, open, high, low, close, volume;

		displayDate = open = high = low = close = volume = "n/a";

		var { chartConfig, currentItem, width, height } = this.context;
		var config = first(chartConfig.filter(each => each.id === forChart));

		if (isDefined(currentItem)
				&& isDefined(accessor(currentItem))
				&& isDefined(accessor(currentItem).close)) {
			var item = accessor(currentItem);
			volume = volumeFormat(item.volume);

			displayDate = xDisplayFormat(item.date);
			open = ohlcFormat(item.open);
			high = ohlcFormat(item.high);
			low = ohlcFormat(item.low);
			close = ohlcFormat(item.close);
		}

		var { origin: originProp } = this.props;
		var origin = d3.functor(originProp);
		var [x, y] = origin(width, height);
		var [ox, oy] = config.origin;

    var tooltipText;
    if (this.props.closeOnly) {
      tooltipText = (
				<ToolTipText x={0} y={0}
					fontFamily={fontFamily} fontSize={fontSize}>
					<ToolTipTSpanLabel key="label" x={0} dy="5">{labelDate}: </ToolTipTSpanLabel>
					<tspan key="value">{displayDate}</tspan>
					<ToolTipTSpanLabel key="label_C"> {labelC}: </ToolTipTSpanLabel><tspan key="value_C">{close}</tspan>
					<ToolTipTSpanLabel key="label_Vol"> {labelVol}: </ToolTipTSpanLabel><tspan key="value_Vol">{volume}</tspan>
				</ToolTipText>
      );
    } else {
      tooltipText = (
				<ToolTipText x={0} y={0}
					fontFamily={fontFamily} fontSize={fontSize}>
					<ToolTipTSpanLabel key="label" x={0} dy="5">{labelDate}: </ToolTipTSpanLabel>
					<tspan key="value">{displayDate}</tspan>
					<ToolTipTSpanLabel key="label_O"> {labelO}: </ToolTipTSpanLabel><tspan key="value_O">{open}</tspan>
					<ToolTipTSpanLabel key="label_H"> {labelH}: </ToolTipTSpanLabel><tspan key="value_H">{high}</tspan>
					<ToolTipTSpanLabel key="label_L"> {labelL}: </ToolTipTSpanLabel><tspan key="value_L">{low}</tspan>
					<ToolTipTSpanLabel key="label_C"> {labelC}: </ToolTipTSpanLabel><tspan key="value_C">{close}</tspan>
					<ToolTipTSpanLabel key="label_Vol"> {labelVol}: </ToolTipTSpanLabel><tspan key="value_Vol">{volume}</tspan>
				</ToolTipText>
      );
    }
    
		return (
			<g transform={`translate(${ ox + x }, ${ oy + y })`} onClick={onClick}>
        {tooltipText}
			</g>
		);
	}
}

OHLCTooltip.contextTypes = {
	chartConfig: PropTypes.array.isRequired,
	currentItem: PropTypes.object.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};

OHLCTooltip.propTypes = {
	forChart: PropTypes.number.isRequired,
	accessor: PropTypes.func.isRequired,
	xDisplayFormat: PropTypes.func.isRequired,
	ohlcFormat: PropTypes.func.isRequired,
	origin: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.func
	]).isRequired,
	fontFamily: PropTypes.string,
	fontSize: PropTypes.number,
	onClick: PropTypes.func,
	volumeFormat: PropTypes.func,
	closeOnly: PropTypes.bool,
	labelDate: PropTypes.string,
	labelO: PropTypes.string,
	labelH: PropTypes.string,
	labelL: PropTypes.string,
	labelC: PropTypes.string,
	labelVol: PropTypes.string
};

OHLCTooltip.defaultProps = {
	accessor: (d) => { return { date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume }; },
	xDisplayFormat: d3.time.format("%Y-%m-%d"),
	volumeFormat: d3.format(".4s"),
	ohlcFormat: d3.format(".2f"),
	origin: [0, 0],
	closeOnly: false,
	labelDate: "Date",
	labelO: "O",
	labelH: "H",
	labelL: "L",
	labelC: "C",
	labelVol: "Vol"
};

export default OHLCTooltip;
