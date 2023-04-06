import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const SignUp = ({ setUser, setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorSignIn, setErrorSignIn] = useState("");
  const [profilPic, setProfilPic] = useState();

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("email", email);
      formData.append("username", username);
      formData.append("password", password);
      if (profilPic) {
        formData.append("picture", profilPic);
      }
      const resToken = await axios.post(
        "http://localhost:5000/user/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(resToken.data);
      if (resToken.data) {
        setToken(resToken.data.token);
        setUser(resToken.data);
        Cookies.set("token", resToken.data.token, { expires: 2 });
        // navigate("/");
        setErrorSignIn("");
      }
    } catch (error) {
      // console.log(error.message);
      // console.log(error.response.status);
      // console.log(error.response.data);
      if (error.response.status === 400)
        setErrorSignIn("Veuillez remplire tous les champs");
      if (error.response.status === 409)
        setErrorSignIn("Cet adresse mail existe déjà");
    }
  };

  return (
    <div>
      <div className="signup">
        <h2>SIGNUP</h2>
        <form
          className="container-form"
          action="submit"
          onSubmit={handleSubmit}
        >
          <TextField
            style={{ background: "grey" }}
            label="Username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label>
            {" "}
            <h3>Photo profil:</h3>
          </label>
          <TextField
            style={{ background: "grey" }}
            type="file"
            size="small"
            onChange={(e) => {
              setProfilPic(e.target.files[0]);
            }}
          />

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
            S'inscrire
          </Button>
          {/* <Link to="/login">Tu as deja un compte? connecte-toi!</Link> */}
          <p style={{ color: "red" }}>{errorSignIn}</p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
