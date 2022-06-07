import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReel />

      {/* MessageSender */}
      <MessageSender />

      {/* Post for feed */}
      <Post
        profilePic={`https://i.pinimg.com/564x/7a/ec/0e/7aec0e5b6e37a75dbc02d91e782a9e04.jpg`}
        message="Aqui é o guizao do zap"
        timestamp="timestamp here"
        username="guilherme"
        image="https://i.pinimg.com/564x/29/e5/fb/29e5fb4c3c21b45f481c3afd9fb8ab73.jpg"
      />
      <Post
        profilePic={`https://i.pinimg.com/564x/7a/ec/0e/7aec0e5b6e37a75dbc02d91e782a9e04.jpg`}
        message="Aqui é o guizao do zap"
        timestamp="timestamp here"
        username="guilherme"
        image="https://i.pinimg.com/564x/29/e5/fb/29e5fb4c3c21b45f481c3afd9fb8ab73.jpg"
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
