import React from "react";
import './Feed.css'
import StoryReel from "./StoryReel";

function Feed(props){
    return(
        <div className="feed">
            {/* StoryReel */}
            <StoryReel />
            
            {/* MessageSender */}
        </div>
    )   
}

export default Feed;