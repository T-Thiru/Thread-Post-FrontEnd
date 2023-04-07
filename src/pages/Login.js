import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { getUser } from "../feature/user.slice";
// import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogIn, setErrorLogIn] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const logIndetail = {
        email: email,
        password: password,
      };
      const resToken = await axios.post(
        "http://localhost:5000/user/login",
        logIndetail
      );
      // console.log(resToken.data);
      if (resToken.data) {
        dispatch(getUser(resToken.data));
        setToken(resToken.data.token);
        Cookies.set("token", resToken.data.token, { expires: 2 });
        // navigate("/");
        setErrorLogIn("");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data);
      if (error.response.status === 401)
        setErrorLogIn("identifiant ou Mot de passe incorrect");
      console.log(error.response.data);
      if (error.response.status === 400)
        setErrorLogIn("Ce compte n'existe pas");
    }
  };
  return (
    <div className="login">
      <h2>LOGIN</h2>
      <form className="container-form" action="submit" onSubmit={handleSubmit}>
        <TextField
          style={{ background: "grey" }}
          label="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <TextField
          style={{ background: "grey" }}
          label="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button variant="contained" type="submit">
          Se connecter
        </Button>
        <Link to="/signup">Pas encore de compte? Inscris-toi !</Link>
      </form>
      <p style={{ color: "red" }}>{errorLogIn}</p>
    </div>
  );
};

export default Login;
<h1>LOGIN</h1>;
