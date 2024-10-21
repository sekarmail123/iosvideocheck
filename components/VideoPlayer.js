// components/VideoPlayer.js
import React from 'react';

const VideoPlayer = () => {

    

  return (
    <div>


playsInline and video from public folder
      <video
        width="100%"
        height="300"
        controls
        playsInline
        autoPlay
        muted
      >
        <source src="/videos/HOSETestDrive.mp4" type="video/mp4" controls autoplay muted preload="auto" playsInline/>
        Your browser does not support the video tag.
      </video>
     
<br />
<br />
<br />
===video from parker /content/dam===
<video controls autoplay muted  preload="auto" playsInline class="additional-image-dialog_video__PUwN7" src="https://www.parker.com/content/dam/videos/fcg/fluid-system-connectors-division/installation_videos/core_brass/HOSE_BARB_125HBL-6-6_FINAL.mp4"></video>

    </div>
  );
};

export default VideoPlayer;
