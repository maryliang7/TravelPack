import React from 'react';
import { Link } from 'react-router-dom';
import './photo_index_item.css'

const PhotoIndexItem = ({ photo, packId }) => {
  return (
    <div className="photo-wrapper">
      <Link to={`/packs/${packId}/photos/${photo._id}`}>
        <img src={photo.attachedPhoto} alt="TravelPack Thumbnail" />
      </Link>
    </div>
  )
}

export default PhotoIndexItem;
