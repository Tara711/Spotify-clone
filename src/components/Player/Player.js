import React from "react";
import "./Player.css";
import Sidebar from "./Pages/Sidebar";
import Body from "./Pages/Body";
import Footer from "./Pages/Footer";

function Player({ spotify }) {
  return (
    <h1 className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />
        <Footer spotify={spotify} />
      </div>
    </h1>
  );
}

export default Player;
