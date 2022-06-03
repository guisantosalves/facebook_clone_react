import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

function Header(props) {
  return (
    <div className="header">
      <div className="header__left">
        {/* img and search */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_(2019).svg/640px-Facebook_f_logo_(2019).svg.png"
          alt="facebook logo"
        />

        <div className="header__input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__middle">

        {/* icons for options */}
        <div className="header__option">
          <HomeIcon 
            fontSize="large" 
          />
        </div>

        <div className="header__option">
          <FlagIcon 
            fontSize="large" 
          />
        </div>

        <div className="header__option">
          <SubscriptionsOutlinedIcon 
            fontSize="large" 
          />
        </div>

        <div>
          <StorefrontOutlinedIcon 
            fontSize="large" 
          />
        </div>

        <div>
            <SupervisedUserCircleIcon 
                fontSize="large"
            />
        </div>
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
