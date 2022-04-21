// @ts-nocheck
import "bootstrap/dist/css/bootstrap.min.css";

import * as authConstants from "../../constants/authConstants.tsx";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import authReducer from "../../reducer/auth/authReducer.tsx";
import { BOOLEAN_FALSE } from "../../constants/authConstants";

const Register = (props) => {
  const [modalState, setModalState] = useState(false);

  const nameRef: any = useRef();
  const usernameRef: any = useRef();
  const emailRef: any = useRef();
  const contactNumberRef: any = useRef();
  const passwordRef: any = useRef();
  const navigate = useNavigate();

  const initialState: any = {
    isValid: BOOLEAN_FALSE,
    message: "",
    feedback: "",
  };
  const [registerState, registerDispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    if (registerState.feedback === "name") {
      document.getElementById("name").style.backgroundColor = "#FBE9E9";
      document.getElementById("name").focus();
    }
    if (registerState.feedback === "username") {
      document.getElementById("username").style.backgroundColor = "#FBE9E9";
      document.getElementById("username").focus();
    }
    if (registerState.feedback === "email") {
      document.getElementById("email").style.backgroundColor = "#FBE9E9";
      document.getElementById("email").focus();
    }
    if (registerState.feedback === "contactNumber") {
      document.getElementById("contact").style.backgroundColor = "#FBE9E9";
      document.getElementById("contact").focus();
    }
    if (registerState.feedback === "password") {
      document.getElementById("password").style.backgroundColor = "#FBE9E9";
      document.getElementById("password").focus();
    }
    if (registerState.isValid) {
      props.login();
    }
  }, [registerState, props]);

  const redirectToLoginPage = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    if (props.isLoggedIn) {
      redirectToLoginPage();
    }
  }, [props, redirectToLoginPage]);

  // closing pop up modal
  const onCloseModal = () => {
    setModalState(false);
  };

  const resetInput = () => {
    document.getElementById("name").style.backgroundColor = "white";
    document.getElementById("username").style.backgroundColor = "white";
    document.getElementById("email").style.backgroundColor = "white";
    document.getElementById("contact").style.backgroundColor = "white";
    document.getElementById("password").style.backgroundColor = "white";
    registerDispatch({ type: authConstants.RESET_INPUT });
  };

  const registerHandler = () => {
    const name = nameRef.current.value;
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const contactNumber = contactNumberRef.current.value;
    const password = passwordRef.current.value;

    registerDispatch({
      type: authConstants.REGISTER,
      payload: { name, username, email, contactNumber, password },
    });
  };

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
              registerState.isValid ? { color: "black" } : { color: "red" }
            }
          >
            {registerState.message}
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

export default Register;
