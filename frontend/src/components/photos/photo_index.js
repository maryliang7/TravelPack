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

  // componentDidMount() {
  //   console.log("MOUNT");
  //   // this.props.fetchPhotos(this.props.props.match.params.packId);
  // }

  render(){
    

    return (
      <section className="photo-index">
        <div>
          <div className="photos-header">Photos</div>
          <div className="photo-upload-link"><Link to={`/packs/${this.props.pack._id}/photos/upload`} style={{ textDecoration: 'none' }}>Upload Photo</Link></div>
        </div>

        <div className="photo-index-outer-wrapper">
          <div className="photo-index-inner-wrapper">{this.state.photos}</div>
        </div>
      </section>
    );
  }
}

export default PhotoIndex;