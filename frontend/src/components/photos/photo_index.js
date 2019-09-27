import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render(){
    console.log("PHOTO INDEX:");
    console.log(this.props.photos);
    let photos = this.props.photos.map( (photo, index) => (
      <PhotoIndexItem key={index} photo={photo} />
    ));

    return (
    <div>
      {photos}
    </div>);
  }
}

export default PhotoIndex;