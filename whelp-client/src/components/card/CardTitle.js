import React from "react";

function CardTitle(props) {
  return (
    <h6 className={"card-title " + props.className} style={props.style}>
      {props.children}
    </h6>
  );
}

export { CardTitle };
