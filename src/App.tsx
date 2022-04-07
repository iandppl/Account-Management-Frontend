// @ts-nocheck
import "./styles.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./component/auth/Login.tsx";
import Register from "./component/auth/Register.tsx";
import HomePage from "./component/HomePage.tsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <Routes>
      {isLoggedIn ? (
        // show home page when isLoggedIn = true
        <Route path="/" element={<HomePage logout={logoutHandler} />} />
      ) : (
        <Route path="/" element={<Login login={loginHandler} />} />
      )}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
