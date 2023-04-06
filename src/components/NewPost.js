import React, { useState } from "react";
import axios from "axios";

const NewPost = ({ user, token }) => {
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    axios.post(
      "http://localhost:5000/post/",
      { message, author: user._id },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    setMessage("");
  };

  return (
    <form onSubmit={(e) => handleForm(e)} className="new-post-container">
      <textarea
        placeholder=" Votre Message ici"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default NewPost;
