import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos(this.props.props.match.params.packId);
  }

  render(){
    console.log("PHOTO INDEXXXXX:");
    console.log(this.props);
    console.log("ENDFADSF");
    let photos = this.props.photos.map( (photo, index) => (
      <PhotoIndexItem key={index} photo={photo} />
    ));

    return (
    <div>
      PHOTO INDEX:
      {photos}
    </div>);
  }
}

export default PhotoIndex;