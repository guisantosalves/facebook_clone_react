import { Avatar } from "@mui/material";
import React, { useState } from "react";
import './MessageSender.css';
import { Videocam } from "@mui/icons-material";
import { PhotoLibrary } from "@mui/icons-material";
import { InsertEmoticon } from "@mui/icons-material";

function MessageSender(){
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        //avoiding the reload of the page
        e.preventDefault();

        //db stuff

        setInput("");
        setImageUrl("");
    }

    //we can use onChange={e=>setInput(e.target.value)} to get the value from input
    return(
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={e=>setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder="What's on your mind?"
                    />
                    
                    <input
                        value={imageUrl}
                        placeholder="image URL (Optional)" 
                        onChange={e=>setImageUrl(e.target.value)}
                    />

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            
            <div className="messageSender__bottom">
             <div className="messageSender__option">
                <Videocam style={{color: "red"}}/>
                <h3>Live Video</h3>
             </div>

             <div className="messageSender__option">
                <PhotoLibrary style={{color: "green"}}/>
                <h3>Photo/Video</h3>
             </div>

             <div className="messageSender__option">
                <InsertEmoticon style={{color: "orange"}}/>
                <h3>Feeling/Activity</h3>
             </div>
            </div>
        </div>
    )
}

export default MessageSender;