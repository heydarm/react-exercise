import React, { useState, useEffect } from "react";
import { socket } from "../../service/socket";
import { LineChart, Line, BarChart, Bar } from "recharts";

import MainInfoRow from "./dashboardRows/mainInfo/MainInfoRow";
import ConversationsRow from "./dashboardRows/conversationsInfo/ConversationsInfoRow";
import MessagesInfoRow from "./dashboardRows/messagesInfo/MessagesInfoRow";

import { cardData } from "../../data";

const dashboardOverviewChart = (data, color) => (
  <LineChart width={156} height={47} data={data}>
    <Line
      type="monotone"
      dataKey="pv"
      stroke={color}
      strokeWidth={2}
      dot={false}
    />
  </LineChart>
);

const dailyActivityChart = (data) => (
  <BarChart width={65} height={72} data={data}>
    <Bar dataKey="pv" fill="#EEEFF8" radius={20} />
  </BarChart>
);

function DashboardSection(props) {
  const [language, setLanguage] = useState("eng");

  function handleChange(event) {
    socket.emit("update:lang:fromClient", event.target.value);
  }

  useEffect(() => {
    socket.connect();
    socket.on("update:lang:fromServer", (lang) => setLanguage(lang));

    return () => {
      socket.removeAllListeners();
      socket.disconnect();
    };
  }, []);

  return (
    <div className="container-fluid main">
      <div className="row px-4">
        <div className="col py-4 d-flex justify-content-end">
          <select
            onChange={handleChange}
            value={language}
            name="language"
            id="language"
          >
            <option value="eng">English</option>
            <option value="rus">Russian</option>
          </select>
        </div>
      </div>

      <MainInfoRow
        title="Overview dashboard"
        data={cardData}
        chart={dashboardOverviewChart}
      />

      <MainInfoRow
        title="Daily Activity"
        data={cardData.map((item) => ({ ...item, color: "black" }))}
        chart={dailyActivityChart}
      />

      <ConversationsRow />

      <MessagesInfoRow />
    </div>
  );
}

export default DashboardSection;
