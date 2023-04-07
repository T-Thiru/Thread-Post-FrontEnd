import React from "react";
import Cookies from "js-cookie";
import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUP from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

const App = () => {
  const [token, setToken] = useState(Cookies.get("token") || null);

  // console.log(token);
  // console.log(user);

  return (
    <>
      {token ? (
        <Home setToken={setToken} token={token} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route path="/signup" element={<SignUP setToken={setToken} />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
