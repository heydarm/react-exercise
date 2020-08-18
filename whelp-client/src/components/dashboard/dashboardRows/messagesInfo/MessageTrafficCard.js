import React from "react";
import { Card, CardBody, CardTitle } from "../../../card";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mar 20", pv: 22, uv: 14 },
  { name: "Mar 21", pv: 11, uv: 16 },
  { name: "Mar 22", pv: 21, uv: 12 },
  { name: "Mar 23", pv: 18, uv: 10 },
  { name: "Mar 24", pv: 12, uv: 16 },
  { name: "Mar 25", pv: 18, uv: 16 },
  { name: "Mar 26", pv: 30, uv: 12 },
  { name: "Mar 27", pv: 23, uv: 10 },
  { name: "Mar 28", pv: 10, uv: 30 },
  { name: "Mar 29", pv: 13, uv: 23 },
  { name: "Mar 30", pv: 40, uv: 13 },
];

const colors = ["#2F5BEA", "#FF50AF"];

function MessageTrafficCard(props) {
  return (
    <Card>
      <CardTitle className="font-weight-bold mb-4">Messages sent / received</CardTitle>

      <CardBody className="h-100">
        <ResponsiveContainer width="99%" height={400}>
          <BarChart data={data}>
            <CartesianGrid vertical={false} stroke="#DFE2E5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" fill={colors[1]} radius={50} />
            <Bar dataKey="uv" fill={colors[0]} radius={50} />
          </BarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
}

export default MessageTrafficCard;
