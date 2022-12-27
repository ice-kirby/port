import React from "react";
import "../style/Video.scss";

const Video = () => {
  return (
    <div className="Video">
      <video src="../medias/whatClothes.mp4" controls></video>
    </div>
  );
};

export default Video;
