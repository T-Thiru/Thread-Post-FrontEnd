import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../feature/post.slice";

const NewPost = ({ token }) => {
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    const data = {
      message,
      author: user.id,
      // ID provisoir
      // _id: Date.now(),
    };

    axios.post("http://localhost:5000/post/", data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    dispatch(createPost(data));
    // dispatch(getPosts());
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
