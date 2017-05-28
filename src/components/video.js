import React from 'react';

const Video = ({video}) => {
  if(!video) {
    return <div>Loading......</div>
  }

  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return(
    <div className="video-container">
      <iframe src={videoUrl}/>
      <div className="video-description" >{video.snippet.title}</div>
      <div className="video-description" >{video.snippet.description}</div>
    </div>
  );
}

export default Video;
