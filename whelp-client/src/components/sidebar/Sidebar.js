import React from "react";

import UserPanelSection from "./UserPanelSection";
import RecentActivitySection from "./RecentActivitySection";
import SearchSection from "./SearchSection";
import OvalsSection from "./OvalsSection";

function Sidebar(props) {
  return (
    <nav className="d-flex flex-column sticky-top bg-white vh-100 overflow-y sidebar">
      <UserPanelSection userData={props.userData} />

      <SearchSection />

      <RecentActivitySection />

      <OvalsSection />
    </nav>
  );
}

export default Sidebar;
