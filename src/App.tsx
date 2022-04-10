// @ts-nocheck
import "./styles.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./component/auth/Login.tsx";
import Register from "./component/auth/Register.tsx";
import HomePage from "./component/HomePage.tsx";

// themes from prime react
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

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
        // show login page when isLoggedIn = false
        <Route path="/" element={<Login login={loginHandler} />} />
      )}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
