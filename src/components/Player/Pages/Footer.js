import React, { useEffect } from "react";
import "./Footer.css";

import {
  BsFillSkipBackwardBtnFill,
  BsFillSkipForwardBtnFill,
  BsFillPlayCircleFill,
  BsShuffle,
  BsArrowRepeat,
} from "react-icons/bs";
import { Grid, Slider } from "@material-ui/core";
import {
  PauseCircleOutline,
  PlayCircleOutline,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";
import { useDataLayerValue } from "../../DataLayer";

function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };
  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };
  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="footer_songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(",")}</p>
          </div>
        ) : (
          <div className="footer_songInfo">
            <h4>No Song is Playing</h4>
            <p>...</p>
          </div>
        )}
      </div>
      <div className="footer_center">
        <BsShuffle className="footer_green" />
        <BsFillSkipBackwardBtnFill className="footer_icon" onClick={skipNext} />
        {playing ? (
          <PauseCircleOutline
            onClick={handlePlayPause}
            fontSize="large"
            className="footer_icon"
          />
        ) : (
          <PlayCircleOutline
            onClick={handlePlayPause}
            fontSize="large"
            className="footer_icon"
          />
        )}

        <BsFillSkipForwardBtnFill
          className="footer_icon"
          onClick={skipPrevious}
        />
        <BsArrowRepeat className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
