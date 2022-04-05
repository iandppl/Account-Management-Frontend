import "./styles.css";
import { useState, useEffect } from "react";

//Import Apps
import Login from "./component/auth/Login";

export default function App() {
  const [LoggedInState, setLoggedInState] = useState(false);
  const [state, setState] = useState({});

  return (
    <div className="App">
      {!LoggedInState ? (
        <Login setLoggedInState={setLoggedInState} setState={setState}></Login>
      ) : null}
    </div>
  );
}
