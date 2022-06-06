import React from "react";
import './Feed.css'
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender" 
import Post from "./Post";

function Feed(){
    return(
        <div className="feed">
            {/* StoryReel */}
            <StoryReel />

            {/* MessageSender */}
            <MessageSender />

            {/* Post for feed */}
            <Post />
            <Post />
            <Post />
        </div>
    )   
}

export default Feed;