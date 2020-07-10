import React from "react";
import "./BarChart.scss";

type BarProps = {
  height: string;
  width: string;
  value: any;
};

type TooltipProps = {
  title: string;
  subtitle?: string;
  value: number;
};

const BarChart = () => {
  return (
    <div className="bar-chart-container">
      <BarOverLay />
      <AxisX />
      <AxisY />
      <div className="chart">
        {[1, 2, 3, 4].map((bar) => (
          <Bar height={"30px"} width={"10px"} value={bar} />
        ))}
      </div>
    </div>
  );
};

const AxisX = () => <div className="axisX"></div>;

const AxisY = () => <div className="axisY"></div>;

const Bar = (props: BarProps) => (
  <div className="bar-container">
    <div
      style={{ height: props.height, width: props.width }}
      className="bar"
    ></div>
    <ToolTip title={"some titkle"} value={props.value} />
  </div>
);

const BarOverLay = () => (
  <div className="bar-overlay">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

const ToolTip = (props: TooltipProps) => (
  <div className="tooltip-container">
    <div className="tooltip-title">{props.title || "bla bla"}</div>
    {props.subtitle ? (
      <div className="tooltip-subTitle">
        {props.subtitle || "bla bla subtitle"}
      </div>
    ) : (
      <React.Fragment />
    )}
    <div className="tooltip-value">{props.value || "bla bla value"}</div>
  </div>
);
export default BarChart;
