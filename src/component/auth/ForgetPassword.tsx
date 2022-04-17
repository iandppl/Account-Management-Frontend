// @ts-nocheck
import "bootstrap/dist/css/bootstrap.min.css";
import "./authStyles.css";
import * as authConstants from "../../constants/authConstants.tsx";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useEffect, useReducer, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import authReducer from "../../reducer/auth/authReducer.tsx";

const ForgetPassword = (props) => {
  const [modalState, setModalState] = useState(false);

  const usernameRef: any = useRef();
  const navigate = useNavigate();

  const initialState: any = { isValid: false, message: "", feedback: "" };
  const [forgetPasswordState, forgetPasswordDispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    if (forgetPasswordState.feedback === "success") {
      document.getElementById("username").style.backgroundColor = "white";
    } else {
      if (forgetPasswordState.message !== "") {
        document.getElementById("username").style.backgroundColor = "#FBE9E9";
        document.getElementById("username").focus();
      }
    }
  }, [forgetPasswordState]);

  // closing pop up modal
  const onCloseModal = () => {
    setModalState(false);
  };

  const redirectToMainPage = () => {
    navigate("/");
  };

  const resetHandler = () => {
    const username = usernameRef.current.value;
    forgetPasswordDispatch({
      type: authConstants.RESET_PASSWORD,
      payload: { username },
    });
  };

  const resetInput = () => {
    document.getElementById("username").style.backgroundColor = "white";
    forgetPasswordDispatch({ type: authConstants.RESET_INPUT });
  };

  if (props.isLoggedIn) {
    navigate("/");
  }

  return (
    <div className="login-container">
      <Card
        title="Forget Password Page"
        className="login-card p-shadow-24"
        style={{ width: "25rem", marginBottom: "2em" }}
      >
        <br />
        <div className="p-fluid">
          <div className="p-field">
            <InputText
              id="username"
              type="text"
              placeholder="username or E-Mail"
              ref={usernameRef}
              onKeyDown={() => resetInput()}
            />
            <br />
            <br />
            <div
              style={
                forgetPasswordState.isValid
                  ? { color: "black" }
                  : { color: "red" }
              }
            >
              {forgetPasswordState.message}
            </div>
          </div>
          <br />
          <div className="p-field">
            <Button label="Reset Password" onClick={() => resetHandler()} />
          </div>
          <br />
          <hr />
          <div className="p-field">
            <span
              onClick={() => redirectToMainPage()}
              style={{ cursor: "pointer" }}
            >
              Go back
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

export default ForgetPassword;
