import React, { useState } from "react";

import RecentActivityCard from "./RecentActivityCard";

import ChevronDownIcon from "../../resources/icons/ChevronDownIcon";
import ChevronRightIcon from "../../resources/icons/ChevronRightIcon";

function RecentActivitySection(props) {
  const initialCollapseOpen = true;
  const [collapseOpen, setCollapseOpen] = useState(initialCollapseOpen);

  return (
    <div className="d-flex flex-column h-100 px-4">
      <button
        className="d-flex btn text-uppercase w-100 justify-content-between align-items-center shadow-none px-0 py-2 font-size-12"
        type="button"
        onClick={() => setCollapseOpen((prev) => !prev)}
      >
        Recent Activity
        {collapseOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
      </button>
      <div className="position-relative h-100">
        <div className={"w-100 collapse-custom " + (collapseOpen && "open")}>
          <RecentActivityCard />
          <RecentActivityCard />
          <RecentActivityCard />
          <RecentActivityCard />
          <RecentActivityCard />
          <RecentActivityCard />
          <RecentActivityCard />
          <RecentActivityCard />
        </div>
      </div>
    </div>
  );
}

export default RecentActivitySection;
