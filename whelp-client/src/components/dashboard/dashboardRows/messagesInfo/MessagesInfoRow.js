import React from "react";
import MessageTrafficCard from "./MessageTrafficCard";
import MessageTypesSourcesCard from "./MessageTypesSourcesCard";

const messagesTypesData = {
  title: "Message types",
  data: [
    { name: "text", value: 37 },
    { name: "link", value: 19 },
  ],
  colors: ["#FF50AF", "#2F5BEA"],
};

const messageSourcesData = {
  title: "Message sources",
  data: [
    { name: "Webchat", value: 53 },
    { name: "Viber", value: 43 },
    { name: "Telegram", value: 46 },
  ],
  colors: ["#FC9815", "#29C942", "#2F5BEA"],
};

function MessagesInfoRow(props) {
  return (
    <div className="row px-4">
      <div className="col order-xl-1 p-4">
        <MessageTypesSourcesCard {...messagesTypesData} />
      </div>
      <div className="col-12 col-xl-6 order-xl-2 p-4">
        <MessageTrafficCard />
      </div>
      <div className="col order-1 order-xl-3 p-4">
        <MessageTypesSourcesCard {...messageSourcesData} />
      </div>
    </div>
  );
}

export default MessagesInfoRow;
