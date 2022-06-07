import React from "react";
import "./Widgets.css"
import { IconButton } from "@mui/material";
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from "@mui/material";

function Widgets() {
    return(
        <div className="widgets">

            <div className="widgets__sponsored">
                <h4>Sponsored</h4>
                <hr></hr>
            </div>
            <div className="widgets__contact">
                <h4>Friends</h4>
                <div className="widgets__button">
                    <IconButton>
                        <VideoCameraBackIcon/>
                    </IconButton>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <MoreHorizIcon/>
                    </IconButton>
                </div>
            </div>  

            <div className="frind_list">
                <div className="row_friend">
                    <Avatar src="https://i.pinimg.com/564x/96/82/c7/9682c7463bffeddd26c4b2cf931d952e.jpg"/>
                    <p>Eduarda yasaka</p>
                </div>

                <div className="row_friend">
                    <Avatar src="https://i.pinimg.com/564x/96/82/c7/9682c7463bffeddd26c4b2cf931d952e.jpg"/>
                    <p>Eduarda yasaka</p>
                </div>

                <div className="row_friend">
                    <Avatar src="https://i.pinimg.com/564x/96/82/c7/9682c7463bffeddd26c4b2cf931d952e.jpg"/>
                    <p>Eduarda yasaka</p>
                </div>

                <div className="row_friend">
                    <Avatar src="https://i.pinimg.com/564x/96/82/c7/9682c7463bffeddd26c4b2cf931d952e.jpg"/>
                    <p>Eduarda yasaka</p>
                </div>
            </div>
        </div>
    )
}

export default Widgets;