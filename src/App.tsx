// @ts-nocheck
import { Routes, Route } from "react-router-dom";
import "./styles.css";

import Login from "./components/auth/Login.tsx";
import Register from "./components/auth/Register.tsx";
import ForgetPassword from "./components/auth/ForgetPassword.tsx";
import HomePage from "./components/HomePage.tsx";

// themes from prime react
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { useSelector } from "react-redux";

const App = () => {

  // global state of auth
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Routes>
      {isAuth ? (
        <Route
          path="/"
          element={<HomePage />}
        />
      ) : (
        <Route
          path="/"
          element={<Login />}
        />
      )}
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/forgetpassword"
        element={<ForgetPassword />}
      />
    </Routes>
  );
};

export default App;
