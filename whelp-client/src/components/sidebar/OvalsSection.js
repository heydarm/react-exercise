import React from "react";

function OvalsSection(props) {
  return (
    <div className="d-flex flex-row justify-content-between p-4">
      <div className="oval">
        <div className="oval-item active"></div>
      </div>
      <div className="oval">
        <div className="oval-item"></div>
      </div>
      <div className="oval">
        <div className="oval-item"></div>
      </div>
      <div className="oval">
        <div className="oval-item"></div>
      </div>
    </div>
  );
}

export default OvalsSection;
