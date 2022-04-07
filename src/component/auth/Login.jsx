import "../../styles.css";
import { useState, useEffect } from "react";

//Route Imports
import { Link } from "react-router-dom";

//Prime Imports
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Login = () => {
  const [Error, setError] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <div className="login-container">
      <Card
        title="Login Page"
        className="login-card p-shadow-24"
        style={{ width: "25rem", marginBottom: "2em" }}
      >
        <br />
        <div className="p-fluid">
          <div className="p-field">
            <InputText
              id="username"
              type="username"
              value={username}
              placeholder="Username"
            />
          </div>
          <div className="login-form-between-padding"></div>
          <div className="p-field">
            <InputText id="password" type="password" placeholder="Password" />
            <br />
            <br />
            {Error ? (
              <small id="login-help">Username or Password is incorrect!</small>
            ) : null}
          </div>
          <div className="p-field">
            <Button label="Login" />
          </div>
          <div className="p-field">
            <Link
              className="p-button"
              style={{
                display: "block",
                margin: "1rem 0",
                textDecoration: "none",
              }}
              to={`/register`}
            >
              Register
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
