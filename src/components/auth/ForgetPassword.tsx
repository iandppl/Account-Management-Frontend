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
import { SUCCESS } from "../../constants/authConstants";

const ForgetPassword = () => {
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usernameRef: any = useRef();


  useEffect(() => {
    if (authState.remarks === SUCCESS) {
      document.getElementById("username").style.backgroundColor = "white";
    } else {
      if (authState.message !== "") {
        document.getElementById("username").style.backgroundColor = "#FBE9E9";
        document.getElementById("username").focus();
      }
    }
  }, [authState]);

  const redirectToMainPage = () => {
    dispatch(authActions.resetInput());
    navigate("/");
  };

  const resetHandler = () => {
    const username = usernameRef.current.value;
    dispatch(authActions.resetPassword({ username }));
  };

  const resetInput = () => {
    document.getElementById("username").style.backgroundColor = "white";
    dispatch(authActions.resetInput());
  };

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
              placeholder="Username or E-Mail"
              ref={usernameRef}
              onKeyDown={() => resetInput()}
            />
            <br />
            <br />
            <div
              style={
                (authState.remarks === SUCCESS)
                  ? { color: "black" }
                  : { color: "red" }
              }
            >
              {authState.message}
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
    </div>
  );
};

export default ForgetPassword;
