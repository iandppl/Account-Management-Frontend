import "./styles.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

//Import Apps
import Login from "./component/auth/Login";
import Register from "./component/auth/Register.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <React.Fragment>
      <Routes>
        {isLoggedIn ? (
          // show home page when true
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="/register" element={<Register />} />
      </Routes>
    </React.Fragment>
  );
}
