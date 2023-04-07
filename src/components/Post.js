import axios from "axios";
import React, { useEffect, useState } from "react";
import DeletePost from "./DeletePost";
import LikePost from "./LikePost";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../feature/post.slice";

const Post = ({ post }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (post.author._id === user._id) {
      setIsAuthor(true);
    } else {
      setIsAuthor(false);
    }
  }, [user, post]);

  const handleEdit = () => {
    if (newMessage) {
      axios.put(`http://localhost:5000/post/${post._id}`, {
        message: newMessage,
      });
      dispatch(editPost([newMessage, post._id]));
    }
  };

  const dateFormater = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>
          <span>{post.author?.account?.username}</span>
          <img
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            src={post.author?.account?.avatar?.secure_url}
            alt="pic"
          />
        </h3>

        <p>posté le {dateFormater(post.createdAt)}</p>
      </div>
      {isEdit ? (
        <div className="edit-container">
          <textarea
            defaultValue={newMessage ? newMessage : post.message}
            onChange={(e) => setNewMessage(e.target.value)}
          ></textarea>
          <button
            onClick={() => {
              handleEdit();
              setIsEdit(false);
            }}
          >
            Valider édition
          </button>
        </div>
      ) : (
        <p>{newMessage ? newMessage : post.message}</p>
      )}
      <div className="icons-part">
        <LikePost post={post} userId={user._id} />
        {isAuthor && (
          <div className="update-delete-icons">
            <span
              id="update-btn"
              onClick={() => {
                handleEdit();
                setIsEdit(!isEdit);
              }}
            >
              &#10000;
            </span>
            <DeletePost postId={post._id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
