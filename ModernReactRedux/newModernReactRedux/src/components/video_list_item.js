import React from 'react';

const VideoListItem = ({video}) => {
  // const video = props.video === ({video})
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" />
        </div>

        <div className="media-heading">
          <div className="media-body"></div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;
