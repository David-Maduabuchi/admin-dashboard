import { Link } from "react-router-dom";
import "./ChartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  color: string;
  icon:string;
  title: string;
  dataKey: string;
  number: number|string;
  percentage: number;
  chartData: object[]
}

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/admin-dashboard/" style={{color: props.color}}>View all</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
                contentStyle={{ background: "transparent", border: "none" }}
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
          <div className="percentage" style={{color: props.percentage < 0 ? "tomato": "limegreen"}}>{props.percentage}</div>
          <div className="duration">this month</div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
