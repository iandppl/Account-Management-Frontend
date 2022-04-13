// @ts-nocheck
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './styles.css';

import Login from "./component/auth/Login.tsx";
import Register from "./component/auth/Register.tsx";
import ForgetPassword from "./component/auth/ForgetPassword.tsx";
import HomePage from "./component/HomePage.tsx";

// themes from prime react
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
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
        <Route
          path="/"
          element={<HomePage logout={logoutHandler} isLoggedIn={isLoggedIn} />}
        />
      ) : (
        <Route
          path="/"
          element={<Login login={loginHandler} isLoggedIn={isLoggedIn} />}
        />
      )}
      <Route path="/register" element={<Register isLoggedIn={isLoggedIn} />} />
      <Route
        path="/forgetpassword"
        element={<ForgetPassword isLoggedIn={isLoggedIn} />}
      />
    </Routes>
  );
};

export default App;
