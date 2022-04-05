import "./styles.css";
import { useState } from "react";

//Import Apps
import Login from "./component/auth/Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {!isLoggedIn ? <Login setLoggedInState={setIsLoggedIn}></Login> : null}
    </div>
  );
}
