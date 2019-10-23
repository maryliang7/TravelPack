import React from 'react';
import merge from 'lodash/merge';
import './photo_show.css'

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: '',
      packId: this.props.props.match.params.packId,
      photoId: this.props.props.match.params.photoId,
    }
    let idOfPhoto = this.props.props.match.params.photoId;
    let photoArr = this.props.photos;
    for (let i = 0; i < photoArr.length; i++){
      if (photoArr[i]._id === idOfPhoto){
        this.state.photo = photoArr[i];
      }
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);

  }

  handleDelete(e){
    e.preventDefault();
    let photoData = merge({}, this.state);
    this.props.deletePhoto(photoData)
    // this.props.destroyPhoto(this.props.props.match.params.photoId)
    .then(() => this.props.props.history.push(`/packs/${this.state.packId}/photos/all`));
  }

  handleGoBack(){
    this.props.props.history.goBack();
  }

  // componentDidMount() {
  //   window.scrollTo(0, 0);
  //   let photoData = merge({}, this.state);
  //   this.props.fetchPhoto(photoData).then( ret => {
  //     this.state.photo = ret.photo.data[0].photos[0];
  //     this.forceUpdate();
  //   });

  // }

  render(){
    
    return (
    <div className="photo-show-wrapper">
      <div className="inner-photo-show-wrapper">
        <img src={this.state.photo.attachedPhoto} alt="TravelPack Thumbnail" className="photo-show"/>
        <button className="photo-show-button" onClick={this.handleGoBack}>BACK TO PHOTOS</button> 
        <button className="photo-show-button" onClick={this.handleDelete}>DELETE</button> 
      </div>
      
    </div>);
  }
}

export default PhotoIndex;