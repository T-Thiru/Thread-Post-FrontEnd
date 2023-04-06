import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

const Thread = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/post/").then((res) => setPosts(res.data));
  }, [refresh]);

  console.log(posts);
  return (
    <div className="thread-container">
      {posts
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .map((post) => (
          <Post
            key={post._id}
            post={post}
            user={user}
            setRefresh={setRefresh}
          />
        ))}
    </div>
  );
};

export default Thread;
