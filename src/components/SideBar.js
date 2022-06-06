import React from "react";
import "./SideBar.css";
import SidebarRow from "./SidebarRow";
import { LocalHospital, Store } from "@mui/icons-material";
import { EmojiFlags } from "@mui/icons-material";
import { People } from "@mui/icons-material";
import { Chat } from "@mui/icons-material";
import { Storefront } from "@mui/icons-material";
import { VideoLibrary } from "@mui/icons-material";
import { ExpandMoreOutlined } from "@mui/icons-material";

function SideBar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://avatars.githubusercontent.com/u/Repositories59509356?s=96&v=4"
        title="Guilherme santos"
      />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} />
    </div>
  );
}

export default SideBar;
