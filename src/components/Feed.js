import React from "react";
import './Feed.css'
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender" 

function Feed(props){
    return(
        <div className="feed">
            {/* StoryReel */}
            <StoryReel />

            {/* MessageSender */}
            <MessageSender />
        </div>
    )   
}

export default Feed;