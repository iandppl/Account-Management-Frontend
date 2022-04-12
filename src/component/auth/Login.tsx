// @ts-nocheck
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import * as authConstants from "../../constants/authConstants.tsx";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useEffect, useReducer, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import authReducer from "../../reducer/auth/authReducer.tsx";

const Login = (props) => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const initialState = { isValid: false, message: "", feedback: "" };
  const [loginState, loginDispatch] = useReducer(authReducer, initialState);

  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    if (loginState.message !== "") {
      document.getElementById("username").style.backgroundColor = "#FBE9E9";
      document.getElementById("username").focus();
      document.getElementById("password").style.backgroundColor = "#FBE9E9";
    }
  }, [loginState]);

  // closing pop up modal
  const onCloseModal = () => {
    setModalState(false);
  };

  // opening pop up modal
  const onOpenModal = () => {
    setModalState(true);
  };

  const resetInput = () => {
    document.getElementById("username").style.backgroundColor = "white";
    document.getElementById("password").style.backgroundColor = "white";
    loginDispatch({ type: authConstants.RESET_INPUT });
  };

  const loginHandler = () => {
    const userName = usernameRef.current.value;
    const password = passwordRef.current.value;
    loginDispatch({
      type: authConstants.LOGIN,
      payload: { userName, password },
    });
  };

  const redirectToRegisterPage = () => {
    navigate("/register");
  };
  const redirectToMainPage = () => {
    navigate("/");
  };
  const redirectToForgetPasswordPage = () => {
    navigate("/forgetpassword");
  };

  if (loginState.isValid === true) {
    console.log("Login Successful!");
    props.login();
  }
  if (loginState.message !== "") {
    console.log(loginState.message);
  }
  if (props.isLoggedIn) {
    redirectToMainPage();
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
              style={loginState.isValid ? { color: "black" } : { color: "red" }}
            >
              {loginState.message}
            </div>
          </div>
          <br />
          <div className="p-field">
            {/* <Button label="Login" onClick={props.login} /> */}
            <Button label="Login" onClick={() => loginHandler()} />
          </div>
          <br />
          {/* <div className="p-field">
            {/* <Button label="Login" onClick={props.login} /> */}
          {/* <Button label="Register" onClick={() => redirectToRegisterPage()} /> */}
          {/* </div> */}
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

      {/* pop up model */}
      <Modal
        show={modalState}
        onHide={() => onCloseModal()}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Forget Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onCloseModal()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;