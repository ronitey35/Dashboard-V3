import { Link } from "react-router-dom";
import "./chartbox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  color: string;
  title: string;
  icon: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};
const ChartBox = (props: Props) => {
  return (
    <div className="chartbox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>11.238</h1>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="charts">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage <= 0 ? "red" : "green" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month </span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
