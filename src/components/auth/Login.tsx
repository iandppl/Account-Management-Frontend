// @ts-nocheck
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/authStyles.css";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from '../../store/slices/auth/reducer';
import { useSelector } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);

  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();


  useEffect(() => {
    if (authState.message !== "") {
      document.getElementById("username").style.backgroundColor = "#FBE9E9";
      document.getElementById("password").style.backgroundColor = "#FBE9E9";
    }
  }, [authState]);

  const resetInput = () => {
    document.getElementById("username").style.backgroundColor = "white";
    document.getElementById("password").style.backgroundColor = "white";
    dispatch(authActions.resetInput());
  };

  const loginHandler = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    dispatch(authActions.login({ username, password }))
  };

  const redirectToRegisterPage = () => {
    dispatch(authActions.resetInput());
    navigate("/register");
  };

  const redirectToForgetPasswordPage = () => {
    dispatch(authActions.resetInput());
    navigate("/forgetpassword");
  };

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
              placeholder="Username or E-Mail"
              ref={usernameRef}
              onKeyDown={() => resetInput()}
            />
          </div>
          <div className="login-form-between-padding"></div>
          <div className="p-field">
            <InputText
              id="password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
              onKeyDown={() => resetInput()}
            />
            <span
              onClick={() => redirectToForgetPasswordPage()}
              style={{
                float: "right",
                fontSize: "90%",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              Forget Password?
            </span>
            <br />
            <br />
            <br />
            <div
              style={authState.isAuthenticated ? { color: "black" } : { color: "red" }}
            >
              {authState.message}
            </div>
          </div>
          <br />
          <div className="p-field">
            <Button
              label="Login"
              id="loginBtn"
              onClick={() => loginHandler()}
            />
          </div>
          <br />
          <br />
          <hr />
          <br />
          <div>
            Don't have an account yet?{" "}
            <span
              onClick={() => redirectToRegisterPage()}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Register now!
            </span>
          </div>
          <br />
        </div>
      </Card>
    </div>
  );
};

export default Login;
