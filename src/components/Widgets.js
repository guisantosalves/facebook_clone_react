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
                    <p>Joao vitor lopes</p>
                </div>

                <div className="row_friend">
                    <Avatar src="https://i.pinimg.com/564x/fe/0d/a3/fe0da3b2278cfc0a62c06ac2a2e7c6ea.jpg"/>
                    <p>Henrique alves</p>
                </div>

                <div className="row_friend">
                    <Avatar src="https://i.pinimg.com/564x/76/a9/c4/76a9c40326825346749fb03a7506803a.jpg"/>
                    <p>Lucas viking</p>
                </div>

                <div className="row_friend">
                    <Avatar src="https://i.pinimg.com/236x/88/5e/8d/885e8dcda0d07df8fa9b9b5f0446118a.jpg"/>
                    <p>Gabriel biudes</p>
                </div>

                <div className="row_friend">
                    <Avatar src="https://i.pinimg.com/564x/7b/fb/ba/7bfbbaa39ff2e0dc465ccb6e23560c96.jpg"/>
                    <p>Bruno Gomes</p>
                </div>

                <div className="row_friend">
                    <Avatar src="https://i.pinimg.com/564x/32/18/c9/3218c92ded0ebace8662dd756d460b2b.jpg"/>
                    <p>Beatriz da silva</p>
                </div>
            </div>
        </div>
    )
}

export default Widgets;