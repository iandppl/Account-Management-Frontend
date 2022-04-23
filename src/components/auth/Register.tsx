// @ts-nocheck
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/authStyles.css";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useEffect, useRef, } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/slices/auth/reducer';

const Register = () => {
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nameRef: any = useRef();
  const usernameRef: any = useRef();
  const emailRef: any = useRef();
  const contactNumberRef: any = useRef();
  const passwordRef: any = useRef();

  useEffect(() => {
    if (authState.remarks === "name") {
      document.getElementById("name").style.backgroundColor = "#FBE9E9";
      document.getElementById("name").focus();
    }
    if (authState.remarks === "username") {
      document.getElementById("username").style.backgroundColor = "#FBE9E9";
      document.getElementById("username").focus();
    }
    if (authState.remarks === "email") {
      document.getElementById("email").style.backgroundColor = "#FBE9E9";
      document.getElementById("email").focus();
    }
    if (authState.remarks === "contactNumber") {
      document.getElementById("contact").style.backgroundColor = "#FBE9E9";
      document.getElementById("contact").focus();
    }
    if (authState.remarks === "password") {
      document.getElementById("password").style.backgroundColor = "#FBE9E9";
      document.getElementById("password").focus();
    }

    return () => {
      
    };
  }, [authState]);

  const redirectToLoginPage = () => {
    navigate("/");
  };

  const resetInput = () => {
    document.getElementById("name").style.backgroundColor = "white";
    document.getElementById("username").style.backgroundColor = "white";
    document.getElementById("email").style.backgroundColor = "white";
    document.getElementById("contact").style.backgroundColor = "white";
    document.getElementById("password").style.backgroundColor = "white";
    dispatch(authActions.resetInput())
  };

  const registerHandler = () => {
    const name = nameRef.current.value;
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const contactNumber = contactNumberRef.current.value;
    const password = passwordRef.current.value;
    dispatch(authActions.register({ name, username, email, contactNumber, password }));
  };

  if (authState.isAuthenticated) {
    redirectToLoginPage();
  }

  return (
    <div className="login-container">
      <Card
        title="Register Page"
        className="login-card p-shadow-24"
        style={{ width: "25rem", marginBottom: "2em" }}
      >
        <br />
        <div className="p-fluid">
          <div className="p-field">
            <InputText
              id="name"
              type="name"
              placeholder="Your Name"
              ref={nameRef}
              onKeyDown={() => resetInput()}
            />
          </div>
          <div className="login-form-between-padding"></div>
          <div className="p-field">
            <InputText
              id="username"
              type="username"
              placeholder="Username"
              ref={usernameRef}
              onKeyDown={() => resetInput()}
            />
          </div>
          <div className="login-form-between-padding"></div>
          <div className="p-field">
            <InputText
              id="email"
              type="email"
              placeholder="E-Mail"
              ref={emailRef}
              onKeyDown={() => resetInput()}
            />
          </div>
          <div className="login-form-between-padding"></div>
          <div className="p-field">
            <InputText
              id="contact"
              type="contact"
              placeholder="Contact Number"
              ref={contactNumberRef}
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
          </div>
          <br />
          <br />
          <div
            style={
              authState.isAuthenticated ? { color: "black" } : { color: "red" }
            }
          >
            {authState.message}
          </div>
          <br />
          <br />
          <div className="p-field">
            <Button label="Register" onClick={() => registerHandler()} />
          </div>
          <br />
          <br />
          <hr />
          <br />
          <div className="p-field">
            Have an account?{" "}
            <span
              onClick={() => redirectToLoginPage()}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Login here
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Register;
