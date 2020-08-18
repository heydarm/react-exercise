import React from "react";

import SearchIcon from "../../resources/icons/SearchIcon";

function SearchSection(props) {
  return (
    <div className="p-4">
      <div className="position-relative w-100">
        <input
          type="text"
          placeholder="Search"
          className="form-control h-100 rounded-2rem py-2 font-size-14"
        />
        <SearchIcon className="search-icon" />
      </div>
    </div>
  );
}

export default SearchSection;
