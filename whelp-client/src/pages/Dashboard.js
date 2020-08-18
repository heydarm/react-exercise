import React, { useEffect, useState } from "react";
import axios from "axios";

import { useCookies } from "react-cookie";

import Sidebar from "../components/sidebar/Sidebar";
import DashboardSection from "../components/dashboard/DashboardSection";
import { Redirect } from "react-router-dom";

function Dashboard(props) {
  const [cookies] = useCookies(["auth_token"]);
  const [authorized, setAuthorized] = useState(false);
  const [page, setPage] = useState();

  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();

    if (!authorized) {
      axios({
        method: "get",
        url: "/api/private/dashboard",
        headers: {
          auth_token: cookies.auth_token,
        },
      })
        .then((response) => {
          if (!unmounted) {
            setAuthorized(true);
            setPage(
              <>
                <Sidebar userData={response.data} />
                <DashboardSection />
              </>
            );
          }
        })
        .catch((err) => {
          console.log(err);
          if (!unmounted) {
            setAuthorized(false);
            setPage(<Redirect to="/login" />);
          }
        });
    }

    return function () {
      unmounted = true;
      source.cancel("Cancelling in cleanup");
    };
  });

  return <div className="d-flex">{page}</div>;
}

export default Dashboard;
