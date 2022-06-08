import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import { ThumbUp } from "@mui/icons-material";
import { ChatBubble } from "@mui/icons-material";
import { NearMe } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import { ExpandMoreOutlined } from "@mui/icons-material";

function Post({ profilePic, image, username, timestamp, message }) {

  //we need set timestamp in a different way
  return (
    <div className="post">
      <div className="post__top">

        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>

      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="img post"/>
      </div>

      <div className="post__options">

        <div className="post__option">
          <ThumbUp />
          <p>Like</p>
        </div>

        <div className="post__option">
          <ChatBubble />
          <p>Comment</p>
        </div>

        <div className="post__option">
          <NearMe />
          <p>Share</p>
        </div>

        <div className="post__option">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
