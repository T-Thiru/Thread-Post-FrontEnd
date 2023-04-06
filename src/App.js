import React from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUP from "./pages/SignUp";
const App = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(Cookies.get("token") || "000000");

  // console.log(token);
  // console.log(user);

  return (
    <div>
      <Login setUser={setUser} setToken={setToken} />
      <SignUP setUser={setUser} setToken={setToken} />
      <Home user={user} />
    </div>
  );
};

export default App;
