
import React, { useEffect, useState } from 'react';

const VideoPlayerWithFallback = () => {
  const [videoSrc, setVideoSrc] = useState('');
  const [isSafari, setIsSafari] = useState(false);

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
    if (typeof window !== 'undefined') {
        const ua = navigator.userAgent;
        const safari = /^((?!chrome|android).)*safari/i.test(ua);
        debugger
        setIsSafari(safari);
      }
  }, []);


  useEffect(() => {        
    if (isSafari) {
    downloadVideoAndPlay(originalVideoSrc);
    }
  }, [isSafari]);

  return (
    <div>
        <h1>Browser:{isSafari ? "THis is safari" : "not safari"}</h1>
        <div>
      <video id="video" controls autoPlay muted src={videoSrc || originalVideoSrc}>
        Your browser does not support the video tag.
      </video>
        </div>
   
    </div>
  );
};

export default VideoPlayerWithFallback;
