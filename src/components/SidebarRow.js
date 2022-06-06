import React from "react";
import "./SidebarRow.css"
import {Avatar} from '@mui/material'

//the compenent only will render the avatar and icon
//if they're passed

function SidebarRow({title, Icon, src}){
    return(
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow;