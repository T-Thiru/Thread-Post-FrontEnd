import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../feature/post.slice";

const NewPost = ({ token }) => {
  const [message, setMessage] = useState("");
  const [newPostPic, setNewPostPic] = useState();
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("message", message);
    formData.append("author", user._id);

    if (newPostPic) formData.append("picture", newPostPic);

    axios.post("http://localhost:5000/post/", formData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = {
      message,
      author: user._id,
      _id: Date.now(),
    };
    dispatch(createPost(data));
    // dispatch(getPosts());
    setMessage("");
    setNewPostPic("");
  };
  console.log(newPostPic);

  return (
    <form onSubmit={(e) => handleForm(e)} className="new-post-container">
      <div className="new-post">
        <textarea
          placeholder=" Votre Message ici"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <label>
          <h3>Photo:</h3>
        </label>
        <input
          type="file"
          onChange={(e) => {
            setNewPostPic(e.target.files[0]);
          }}
        />
      </div>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default NewPost;
