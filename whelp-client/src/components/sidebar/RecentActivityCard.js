import React from "react";
import { Card, CardTitle, CardBody } from "../card";

function RecentActivityCard(props) {
  return (
    <div className="w-100 d-flex">
      <div>
        <span className="bullet"></span>
      </div>
      <Card className="px-3 py-2">
        <CardTitle className="font-size-12 font-weight-bold">Isa Abilov shared a file</CardTitle>
        <p className="card-subtitle mb-2 small font-size-9 recent-activity-subtitle">
          9 hours ago
        </p>
        <CardBody>
          <span className="font-size-9 recent-activity-body">
            Whelp_Presentation.pptx
          </span>
        </CardBody>
      </Card>
    </div>
  );
}

export default RecentActivityCard;
