// pages/index.js

import VideoPlayer from "../../components/VideoPlayer";
import VideoPlayerWithFallback from "../../components/VideoPlayerFallback";


export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1> MP4 Video Player</h1>
        {/* <VideoPlayer /> */}
        <VideoPlayerWithFallback />
    </div>
  );
}
