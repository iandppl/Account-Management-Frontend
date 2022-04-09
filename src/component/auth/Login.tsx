// @ts-nocheck
import "../../styles.css";
import * as constants from "../../constants/index.tsx";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useReducer, useRef } from "react";
import loginReducer from "../reducer/Login.tsx";
const Login = (props) => {

  const initialState: any = { isValid: false, message: "" };
  const [loginState, loginDispatch] = useReducer(loginReducer, initialState);
  const usernameRef: any = useRef();
  const passwordRef: any = useRef();

  const loginHandler = () => {
    const userName = usernameRef.current.value;
    const password = passwordRef.current.value;
    loginDispatch({ type: constants.LOGIN, payload: { userName, password } });
  }

  if (loginState.isValid) {
    console.log("Login Successful!");
  }
  if (loginState.message !== "") {
    console.log(loginState.message);
  }

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
            <InputText id="username" type="username" placeholder="Username" ref={usernameRef} />
          </div>
          <div className="login-form-between-padding"></div>
          <div className="p-field">
            <InputText id="password" type="password" placeholder="Password" ref={passwordRef} />
            <br />
            <br />
          </div>
          <div className="p-field">
            {/* <Button label="Login" onClick={props.login} /> */}
            <Button label="Login" onClick={() => loginHandler()} />
          </div>
          <div className="p-field">
            <Link
              className="p-button"
              style={{
                display: "block",
                margin: "1rem 0",
                fontWeight: "Bold",
                textDecoration: "none",
              }}
              to={`/register`}
            >
              Register
            </Link>
          </div>

          <div style={loginState.isValid ? { color: "black" } : { color: "red" }}>{loginState.message}</div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
