import React from "react";
import "./Header.css";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

import { useDataLayerValue } from "../../DataLayer";

function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header_left">
        <Search />
        <input type="text" placeholder="Search for Artists, songs " />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
