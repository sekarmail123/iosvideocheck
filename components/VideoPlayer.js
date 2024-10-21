// components/VideoPlayer.js
import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
playsInline=============
      <video
        width="100%"
        height="300"
        controls
        playsInline
        autoPlay
        muted
      >
        <source src="/videos/HOSETestDrive.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* controls| autoPlay
      <video
        width="100%"
        height="300"
        controls
        autoPlay
      >
        <source src="/videos/HOSETestDrive.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

    </div>
  );
};

export default VideoPlayer;
