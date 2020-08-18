import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Label,
} from "recharts";

function CustomPieChart(props) {
  const { width, height, data, colors, children } = props;

  const CustomLabelContent = () => {
    return (
      <foreignObject width="99%" height="99%">
        <div xmlns="http://www.w3.org/1999/xhtml" className="h-100 w-100">
          {children}
        </div>
      </foreignObject>
    );
  };

  return (
    <PieChart width={width} height={height}>
      <Pie
        data={[{ value: 100 }]}
        dataKey="value"
        innerRadius="85%"
        outerRadius="100%"
        fill="#EEEEEE"
        isAnimationActive={false}
      >
        <Label content={CustomLabelContent} />
      </Pie>
      <Pie
        data={data}
        nameKey="name"
        dataKey="value"
        startAngle={170}
        endAngle={-30}
        innerRadius="85%"
        outerRadius="100%"
        cornerRadius="50%"
      >
        {data.map((item, index) => (
          <Cell
            style={{ strokeLinejoin: "round" }}
            key={`cell-${index}`}
            fill={colors[index % colors.length]}
          />
        ))}
      </Pie>
    </PieChart>
  );
}

export default CustomPieChart;
