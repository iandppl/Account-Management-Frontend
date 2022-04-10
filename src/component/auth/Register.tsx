import "../../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";
//Route Imports
import { Link } from "react-router-dom";

//Prime Imports
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Register = () => {
  const [Error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [modalState, setModalState] = useState(false);

  const usernameRef: any = useRef();
  const passwordRef: any = useRef();

  // closing pop up modal
  const onCloseModal = () => {
    setModalState(false);
  }

  // opening pop up modal
  const onOpenModal = () => {
    setModalState(true);
  }

  const loginHandler = () => {
    const userName = usernameRef.current.value;
    const password = passwordRef.current.value;

    console.log(userName, password)
  }
  return (
    <div className="login-container">
      <Card
        title="Login"
        className="login-card p-shadow-24"
        style={{ width: "25rem", marginBottom: "2em" }}
      >
        <br />
        <div className="p-fluid">
          <div className="p-field">
            <InputText
              id="username"
              type="username"
              value={username}
              placeholder="Username"
              ref={usernameRef}
            />
          </div>
          <div className="login-form-between-padding"></div>
          <div className="p-field">
            <InputText id="password" type="password" placeholder="Password" ref={passwordRef} />
            <br />
            <br />
            {Error ? (
              <small id="login-help">Username or Password is incorrect!</small>
            ) : null}
          </div>
          <div className="p-field">
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
        </div>
      </Card>
    </div>
  );
};

export default Register;
