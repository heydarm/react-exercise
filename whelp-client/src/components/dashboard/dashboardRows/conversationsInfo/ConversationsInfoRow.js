import React from "react";

import ConversationCard from "./ConversationCard";
import SocialTrafficCard from "./SocialTrafficCard";

function ConversationsInfoRow(props) {
  return (
    <div className="row px-4">
      <div className="col-12 col-xl-9 p-4">
        <ConversationCard />
      </div>

      <div className="col-12 col-xl-3 p-4">
        <SocialTrafficCard />
      </div>
    </div>
  );
}

export default ConversationsInfoRow;
