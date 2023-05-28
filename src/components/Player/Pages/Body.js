import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "../../DataLayer";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_url: `spotify:playlist:00eea3a2b44645ec9c56275a43f6c9e9`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_TOKEN",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilled className="body_shuffle" onClick={playPlaylist} />
          <Favorite className="body_shuffle" fontSize="large" />
          <MoreHoriz className="body_shuffle" />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} playSong={playSong} />
        ))}
      </div>
    </div>
  );
}

export default Body;
