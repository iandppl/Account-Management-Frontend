// @ts-nocheck
import "bootstrap/dist/css/bootstrap.min.css";
import "./authStyles.css";
import * as authConstants from "../../constants/authConstants.tsx";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
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
      document.getElementById("password").style.backgroundColor = "#FBE9E9";
    }
    if (loginState.isValid === true) {
      props.login();
    }
  }, [loginState, props]);

  const redirectToMainPage = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    if (props.isLoggedIn) {
      redirectToMainPage();
    }
  }, [props, redirectToMainPage]);

  // closing pop up modal
  const onCloseModal = () => {
    setModalState(false);
  };

  const resetInput = () => {
    document.getElementById("username").style.backgroundColor = "white";
    document.getElementById("password").style.backgroundColor = "white";
    loginDispatch({ type: authConstants.RESET_INPUT });
  };

  const loginHandler = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    loginDispatch({
      type: authConstants.LOGIN,
      payload: { username, password },
    });
  };

  const redirectToRegisterPage = () => {
    navigate("/register");
  };

  const redirectToForgetPasswordPage = () => {
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
              style={loginState.isValid ? { color: "black" } : { color: "red" }}
            >
              {loginState.message}
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
