import React from "react";

import MainInfoCard from "./MainInfoCard";

function MainInfoRow(props) {
  return (
    <div className="row px-4">
      <div className="col">
        <h5 className="font-weight-bold px-2">{props.title}</h5>
        <div className="row">
          {props.data.map((item) => (
            <div key={item.heading} className="col p-4">
              <MainInfoCard item={item} chart={props.chart} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainInfoRow;
