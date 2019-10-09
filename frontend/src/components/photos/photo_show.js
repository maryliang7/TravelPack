import React from 'react';
import { Redirect } from 'react-router-dom'
import './photo_show.css'

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: ''
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
    this.props.deletePhoto(this.props.props.match.params.photoId);

  }

  handleGoBack(){
    this.props.props.history.goBack();
  }

  componentDidMount() {
    // let idOfPhoto = this.props.props.match.params.photoId;
    // let photoArr = this.props.photos;
    // for (let i = 0; i < photoArr.length; i++){
    //   if (photoArr[i]._id === idOfPhoto){
    //     this.state.photo = photoArr[i];
    //   }
    // }
    window.scrollTo(0, 0);
  }

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