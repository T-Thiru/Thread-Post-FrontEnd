import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import NewPost from "../components/NewPost";
import Thread from "../components/Thread";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../feature/user.slice";

const Home = ({ setToken, token }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);

  useEffect(() => {
    try {
      if (Cookies.get("token")) {
        axios
          .post("http://localhost:5000/user/user", {
            token: Cookies.get("token"),
          })
          .then((res) => dispatch(getUser(res.data)));
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }, [token, dispatch]);

  return isLoading ? (
    <p>LOADING...</p>
  ) : (
    <div className="app-container">
      <div className="profile">
        <h1>
          Bonjour <span className="username">{user?.account?.username}</span>
        </h1>
        <img
          className="avatar"
          src={user.account?.avatar?.secure_url}
          alt="profil"
          onClick={() => {
            Cookies.remove("token");
            setToken(null);
            dispatch(getUser({}));
          }}
        />
      </div>
      <NewPost token={token} />
      <Thread token={token} />
    </div>
  );
};

export default Home;
