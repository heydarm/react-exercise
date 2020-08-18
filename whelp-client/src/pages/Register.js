import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Register(props) {
  const [error, setError] = useState({});
  const history = useHistory();
  const [userCredentials, setUserCredentials] = useState({
    name: "",
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
      url: "/api/user/register",
      data: {
        name: userCredentials.name,
        email: userCredentials.email,
        password: userCredentials.password,
      },
    })
      .then((response) => {
        history.push("/login");
      })
      .catch((err) => {
        const errData = err.response.data;
        setError({ message: errData.message, context: errData.context.key });
      });
  }

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="form-control"
                name="name"
                onChange={handleChange}
                value={userCredentials.fullName}
              />
              <small className="form-text text-danger p-2">
                {error.context === "name" && error.message}
              </small>
            </div>
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
              <small className="form-text text-danger p-2">
                {error.context === "email" && error.message}
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
              <small className="form-text text-danger p-2">
                {error.context === "password" && error.message}
              </small>
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
              <Link to="/login">
                <button type="button" className="btn btn-link">
                  Log in
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
