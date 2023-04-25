import axios from "axios";
import React, { useEffect, useState } from "react";
import DeletePost from "./DeletePost";
import LikePost from "./LikePost";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../feature/post.slice";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";

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
    <Card sx={{ maxWidth: "100%", marginBottom: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>

    // <div className="card">
    //   <div className="card-header">
    //     <h3>
    //       <span>{post.author?.account?.username}</span>
    //       <img
    //         style={{
    //           height: "40px",
    //           width: "40px",
    //           borderRadius: "50%",
    //           objectFit: "cover",
    //         }}
    //         src={post.author?.account?.avatar?.secure_url}
    //         alt="pic"
    //       />
    //     </h3>

    //     <p>posté le {dateFormater(post.createdAt)}</p>
    //   </div>
    //   {isEdit ? (
    //     <div className="edit-container">
    //       <textarea
    //         defaultValue={newMessage ? newMessage : post.message}
    //         onChange={(e) => setNewMessage(e.target.value)}
    //       ></textarea>
    //       <button
    //         onClick={() => {
    //           handleEdit();
    //           setIsEdit(false);
    //         }}
    //       >
    //         Valider édition
    //       </button>
    //     </div>
    //   ) : (
    //     <p>{newMessage ? newMessage : post.message}</p>
    //   )}
    //   {post.photo?.secure_url && (
    //     <div className="post-photo">
    //       <img src={post.photo?.secure_url} alt="post" />
    //     </div>
    //   )}

    //   <div className="icons-part">
    //     <LikePost post={post} userId={user._id} />
    //     {isAuthor && (
    //       <div className="update-delete-icons">
    //         <span
    //           id="update-btn"
    //           onClick={() => {
    //             handleEdit();
    //             setIsEdit(!isEdit);
    //           }}
    //         >
    //           &#10000;
    //         </span>
    //         <DeletePost postId={post._id} />
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default Post;
