import axios from "axios";
import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../feature/post.slice";

const Thread = () => {
  // const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const posts = useSelector((state) => state.posts.postsData);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/post/")
        .then((res) => dispatch(getPosts(res.data)));
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  return (
    <div className="thread-container">
      {posts &&
        posts
          .slice()
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
          .map((post) => <Post key={post._id} post={post} user={user} />)}
    </div>
  );
};

export default Thread;
