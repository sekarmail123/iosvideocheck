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
<br />
<br />
<br />
===video from parker===
<video controls autoplay muted class="additional-image-dialog_video__PUwN7" src="https://www.parker.com/content/dam/videos/fcg/fluid-system-connectors-division/installation_videos/core_brass/HOSE_BARB_125HBL-6-6_FINAL.mp4"></video>

    </div>
  );
};

export default VideoPlayer;
