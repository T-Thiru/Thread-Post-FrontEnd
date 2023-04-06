import React from "react";
import Cookies from "js-cookie";

import NewPost from "../components/NewPost";
import Thread from "../components/Thread";

const Home = ({ user, setUser, setToken, token }) => {
  return (
    <div className="app-container">
      <div className="profile">
        <h1>Bonjour {user?.account?.username}</h1>
        <img
          className="avatar"
          src={user.account?.avatar?.secure_url}
          alt="profil"
          onClick={() => {
            Cookies.remove("token");
            setToken(null);
            setUser(null);
          }}
        />
      </div>
      <NewPost user={user} token={token} />
      <Thread user={user} token={token} />
    </div>
  );
};

export default Home;
