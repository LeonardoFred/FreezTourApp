import './styles/youtubeslider.css'
import React, { useState } from 'react';

function YouTubeVideoSlider(props) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const previousVideo = () => {
    setCurrentVideoIndex(currentVideoIndex === 0 ? props.videos.length - 1 : currentVideoIndex - 1);
  };

  const nextVideo = () => {
    setCurrentVideoIndex(currentVideoIndex === props.videos.length - 1 ? 0 : currentVideoIndex + 1);
  };

  const currentVideoLink = props.videos[currentVideoIndex];
  const currentVideoId = currentVideoLink.split('v=')[1];

  return (
    <div className="youtube-video-slider">
      <div className="video-player">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${currentVideoId}`}
          title={currentVideoId}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <button onClick={previousVideo} className="button-6">Previous</button>
      <button onClick={nextVideo} className="button-6">  Next  </button>
      
    </div>
  );
}

export default YouTubeVideoSlider;