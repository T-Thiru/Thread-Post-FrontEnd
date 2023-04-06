import React, { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUP from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "./feature/user.slice";
const App = () => {
  // const [user, setUser] = useState({});
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch;

  // console.log(token);
  // console.log(user);

  useEffect(() => {
    if (token) {
      axios
        .post("http://localhost:5000/user/user", {
          token: Cookies.get("token"),
        })
        .then((res) => dispatch(getUser(res.data)));
    }
    setIsLoading(false);
  }, [token, dispatch]);

  return isLoading ? (
    <p>LOADING...</p>
  ) : (
    <Router>
      {token ? (
        <Home setToken={setToken} token={token} />
      ) : (
        <Routes>
          <Route path="/" element={<Login setToken={setToken} />} />
          <Route path="/signup" element={<SignUP setToken={setToken} />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
