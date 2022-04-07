import "../../styles.css";

import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Login = (props) => {
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
            <InputText id="username" type="username" placeholder="Username" />
          </div>
          <div className="login-form-between-padding"></div>
          <div className="p-field">
            <InputText id="password" type="password" placeholder="Password" />
            <br />
            <br />
          </div>
          <div className="p-field">
            <Button label="Login" onClick={props.login} />
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
