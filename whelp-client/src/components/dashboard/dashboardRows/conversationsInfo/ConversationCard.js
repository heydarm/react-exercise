import React from "react";
import { Card, CardTitle, CardBody } from "../../../card";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { graphData } from "../../../../data";

function ConversationCard(props) {
  return (
    <Card>
      <CardTitle className="font-weight-bold pb-4">Conversations</CardTitle>

      <CardBody className="h-100">
        <ResponsiveContainer width="99%" height={400}>
          <LineChart data={graphData}>
            <CartesianGrid vertical={false} stroke="#DFE2E5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="pv" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
}

export default ConversationCard;
