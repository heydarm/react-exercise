import React from "react";

function Card(props) {
  return (
    <div className={"card rounded-1rem border-0 p-4-not-important h-100 " + props.className}>
      {props.children}
    </div>
  );
}

export { Card };
