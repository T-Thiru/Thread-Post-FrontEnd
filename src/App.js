import React, { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUP from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [isLoading, setIsLoading] = useState(true);

  console.log(token);
  console.log(user);

  useEffect(() => {
    if (token) {
      axios
        .post("http://localhost:5000/user/user", {
          token: Cookies.get("token"),
        })
        .then((res) => setUser(res.data));
    }
    setIsLoading(false);
  }, [token]);

  return isLoading ? (
    <p>LOADING...</p>
  ) : (
    <Router>
      {token ? (
        <Home user={user} setToken={setToken} setUser={setUser} token={token} />
      ) : (
        <Routes>
          <Route
            path="/"
            element={<Login setUser={setUser} setToken={setToken} />}
          />
          <Route
            path="/signup"
            element={<SignUP setUser={setUser} setToken={setToken} />}
          />
        </Routes>
      )}
    </Router>
  );
};

export default App;
