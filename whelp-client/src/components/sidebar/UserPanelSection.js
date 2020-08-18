import React from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import BellIcon from "../../resources/icons/BellIcon";

function UserPanelSection(props) {
  const history = useHistory();
  const [ , , removeCookie] = useCookies(["auth_token"]);

  function handleClick() {
    removeCookie("auth_token");
    history.push("/login");
  }

  return (
    <div className="d-flex border-bottom border-black-50 align-items-center p-4">
      <div className="btn-group dropright">
        <div
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          className="btn p-0 position-relative"
        >
          <img
            src="https://avatars.dicebear.com/api/male/123456s233.svg?mood[]=happy"
            alt="avatar"
            className="rounded-circle avatar"
          />
          <div className="online-status rounded-circle position-absolute bg-success"></div>
        </div>
        <div className="dropdown-menu">
          <button onClick={handleClick} className="dropdown-item">
            Log out
          </button>
        </div>
      </div>
      <div className="align-items-center px-3">
        <h6 className="mb-0 font-weight-bold">{props.userData.name}</h6>
        <span>#{props.userData.name && props.userData.name.toLowerCase()}</span>
      </div>
      <button className="d-flex btn btn-sm bg-pinky-red text-white p-2 align-item-center ml-auto">
        <BellIcon />
      </button>
    </div>
  );
}

export default UserPanelSection;
