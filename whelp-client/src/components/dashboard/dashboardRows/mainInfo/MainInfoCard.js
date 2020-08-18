import React from "react";
import { Card, CardTitle, CardBody } from "../../../card";

function MainInfoCard(props) {
  const { heading, value, color, data } = props.item;

  return (
    <Card>
      <CardTitle className="font-size-14" style={{ color }}>
        {heading}
      </CardTitle>

      <CardBody className="d-flex justify-content-between flex-wrap">
        <p className="card-text font-weight-bold font-size-36">{value}</p>
        {props.chart(data, color)}
      </CardBody>
    </Card>
  );
}

export default MainInfoCard;
