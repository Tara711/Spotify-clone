import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { useDataLayerValue } from "../../DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={AiFillHome} />
      <SidebarOption title="Search" Icon={AiOutlineSearch} />
      <SidebarOption title="Your Library" Icon={BiLibrary} />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
