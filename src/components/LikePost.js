import React, { useEffect, useState } from "react";
import axios from "axios";

const LikePost = ({ post, userId, setRefresh }) => {
  const [userLiked, setUserLiked] = useState(false);

  useEffect(() => {
    if (post.likes) {
      if (post.likes.includes(userId)) {
        setUserLiked(true);
      } else {
        setUserLiked(false);
      }
    }
  }, [userId, post.likes]);

  const likePost = () => {
    axios.patch(`http://localhost:5000/post/like-post/${post._id}`, { userId });

    setUserLiked(true);
    setRefresh(2);
  };

  const dislikePost = () => {
    axios.patch(`http://localhost:5000/post/dislike-post/${post._id}`, {
      userId,
    });

    setUserLiked(false);
    setRefresh(3);
  };

  return (
    <div className="like-icon">
      <p>{post.likes ? post.likes.length : 0}</p>
      {userLiked ? (
        <span id="like-btn" onClick={() => dislikePost()}>
          &#9829;
        </span>
      ) : (
        <span id="dislike-btn" onClick={() => likePost()}>
          &#9829;
        </span>
      )}
    </div>
  );
};

export default LikePost;
