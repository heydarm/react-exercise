import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

function Login(props) {
  const [error, setError] = useState("");
  const [ , setCookie] = useCookies(["auth_token"]);
  const history = useHistory();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserCredentials((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "post",
      url: "/api/user/login",
      data: {
        email: userCredentials.email,
        password: userCredentials.password,
      },
    })
      .then((response) => {
        setCookie("auth_token", response.data, { path: "/" });
        history.push("/dashboard");
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100 justify-content-center">
        <div className="col-4 w-100 d-flex align-items-center">
          <form onSubmit={handleSubmit} className="w-100">
            <small className="text-danger mb-2">{error}</small>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleChange}
                value={userCredentials.email}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={handleChange}
                value={userCredentials.password}
              />
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
              <Link to="/register">
                <button type="button" className="btn btn-link">
                  Register
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
