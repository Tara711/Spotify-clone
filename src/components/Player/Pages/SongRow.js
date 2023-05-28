import React from "react";
import "./SongRow.css";

function SongRow({ track, playSong }) {
  return (
    <div className="songrow" onClick={() => playSong(track.id)}>
      <img src={track.album.images[0].url} alt="" />
      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p className="songrow_album">
          {track.artists.map((artist) => artist.name).join(", ")}-
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
