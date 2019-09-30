import React from 'react';
import PhotoIndexItem from './photo_index_item';
import './photo_index.css'
import { Link } from 'react-router-dom';


class PhotoIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photos: ''
    }
    this.state.photos = this.props.photos.map( (photo, index) => (
      <PhotoIndexItem key={index} photo={photo} packId={this.props.pack._id} />
    ));
  }

  componentDidMount() {
    this.state.photos = this.props.photos.map( (photo, index) => (
      <PhotoIndexItem key={index} photo={photo} packId={this.props.pack._id} />
    ));
  }

  render(){
    

    return (
      <div className="photo-index-outer-wrapper">
        <div className="photos-header">Photos</div>
        <Link to={`/packs/${this.props.pack._id}/photos/upload`} style={{ textDecoration: 'none' }}><div className="photo-upload-link">Upload Photo</div></Link>

        <div>
          <div className="photo-index-inner-wrapper">{this.state.photos}</div>
        </div>
      </div>
    );
  }
}

export default PhotoIndex;