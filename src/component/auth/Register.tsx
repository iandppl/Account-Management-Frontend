// @ts-nocheck
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import * as authConstants from "../../constants/authConstants.tsx";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useReducer, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import loginReducer from "../../reducer/auth/authReducer.tsx";

const Register = (props) => {
  const [modalState, setModalState] = useState(false);

  const usernameRef: any = useRef();
  const passwordRef: any = useRef();
  const navigate = useNavigate();

  const initialState: any = { isValid: false, message: "" };
  const [loginState, loginDispatch] = useReducer(loginReducer, initialState);

  // closing pop up modal
  const onCloseModal = () => {
    setModalState(false);
  };

  // opening pop up modal
  const onOpenModal = () => {
    setModalState(true);
  };

  const loginHandler = () => {
    const userName = usernameRef.current.value;
    const password = passwordRef.current.value;
    loginDispatch({ type: constants.LOGIN, payload: { userName, password } });
  };

  if (props.isLoggedIn) {
    navigate("/");
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
              id="username"
              type="username"
              placeholder="Username or E-Mail"
              ref={usernameRef}
            />
          </div>
          <div className="login-form-between-padding"></div>
          <div className="p-field">
            <InputText
              id="password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
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
          <div className="p-field">
            {/* <Button label="Login" onClick={props.login} /> */}
            <Button label="Register" onClick={() => redirectToRegisterPage()} />
          </div>
          {/* <div className="p-field">
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
          </div> */}
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
