import React, { useEffect, useState } from 'react';

const VideoPlayerWithFallback = () => {
  const [videoSrc, setVideoSrc] = useState('');
  const originalVideoSrc = 'https://www.parker.com/content/dam/videos/fcg/quick-coupling-division/ManualConnectCouplingsInstallation.mp4';

  const downloadVideoAndPlay = async (src) => {
    try {
      // Fetch the video, allowing for a range request or full download.
      const response = await fetch(src, { headers: { Range: 'bytes=0-' } });
      
      // Convert response into a blob
      const blob = await response.blob();
      
      // Create a local URL for the blob
      const videoURL = URL.createObjectURL(blob);
      
      // Set the video source to the blob URL
      setVideoSrc(videoURL);
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  useEffect(() => {
    downloadVideoAndPlay(originalVideoSrc);
  }, []);

  return (
    <div>
      <video id="video" controls autoPlay muted src={videoSrc}>
        Your browser does not support the video tag.
      </video>
      <br />
      {/* <button onClick={() => downloadVideoAndPlay(originalVideoSrc)}>
        Download and Play Video
      </button> */}
    </div>
  );
};

export default VideoPlayerWithFallback;
