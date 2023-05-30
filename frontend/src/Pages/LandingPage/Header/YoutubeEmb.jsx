import React from "react";
import "./Header.css";

function YoutubeEmb() {
  return (
    <div className="video">
      <iframe
        className="fabio-video"
        width="1000"
        height="500"
        src="https://www.youtube.com/embed/qyV_A9wRHO8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YoutubeEmb;
