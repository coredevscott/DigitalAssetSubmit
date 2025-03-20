import React from "react";

const VideoPlayer = ({ src, controls = true }) => {
  return (
    <div className="video-player">
      <video width="100%" controls={controls} autoPlay muted loop>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
