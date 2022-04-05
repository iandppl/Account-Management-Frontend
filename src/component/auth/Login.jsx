import "../../styles.css";
import { useState, useEffect } from "react";

//Route Imports
import { Link, browserHistory } from "react-router-dom";

//Prime Imports
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Login = ({ setLoggedInState, setState }) => {
    const [loading, setLoading] = useState(false);
    const [Error, setError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [trackLogin, setTrackLogin] = useState("notstarted");

    const onLoginBtnClicked = () => {
        setTrackLogin("started");
        setLoading(true);
        if (!username || !password) {
            setTrackLogin("failed");
            setError(true);
            setTimeout(() => {
                setError(false);
                setLoading(false);
            }, 3000);
        } else {
            setTimeout(() => {
                setLoading(false);
                setTrackLogin("completed");
                setState({ loggedInUser: username, AppData: "" });
            }, 2000);
        }
    };

    const onClickingRegister = (props) => { };

    useEffect(() => {
        if (trackLogin === "failed") {
            setLoggedInState(false);
        } else if (trackLogin === "completed") {
            setLoggedInState(true);
        }
    }, [trackLogin, setLoggedInState]);

    return (
        <div className="login-container">
            <Card
                title="Login"
                className="login-card p-shadow-24"
                style={{ width: "25rem", marginBottom: "2em" }}
            >
                <br/>
                <div className="p-fluid">
                    <div className="p-field">
                        <InputText
                            id="username"
                            type="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            aria-describedby="login-help"
                            placeholder="Username"
                        />
                    </div>
                    <div className="login-form-between-padding"></div>
                    <div className="p-field">
                        <InputText
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            aria-describedby="login-help"
                            placeholder="Password"
                        />
                        <br/>
                        <br/>
                        {Error ? (
                            <small id="login-help">Username or Password is incorrect!</small>
                        ) : null}
                    </div>
                    <div className="login-form-between-padding"></div>
                    <div className="p-field">
                        <Button
                            label="Login"
                            loading={loading}
                            onClick={() => onLoginBtnClicked()}
                        />
                    </div>
                    <div className="p-field">
                        <Link
                            className="p-button"
                            style={{
                                display: "block",
                                margin: "1rem 0",
                                textDecoration: "none"
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
}

export default Login;