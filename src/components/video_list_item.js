import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  return(
    <li onClick ={() => onVideoSelect(video)} className="video-list-item" >
      <img src= {video.snippet.thumbnails.default.url} className="video-list-thumbnail" />
      <div className="video-list-title">{video.snippet.title}</div>
    </li>
  );
}

export default VideoListItem;
