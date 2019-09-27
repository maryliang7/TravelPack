import React from 'react';

const PhotoIndexItem = ({ photo }) => {
  return (
    <div>
      <img src={photo.attachedPhoto} width="200" height="110" alt="TravelPack Thumbnail" />
    </div>
  )
}

export default PhotoIndexItem;
