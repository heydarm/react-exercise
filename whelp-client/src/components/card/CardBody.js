import React from "react";

function CardBody(props) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

export { CardBody };
