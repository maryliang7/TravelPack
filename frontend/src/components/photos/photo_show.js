import React from 'react';
import { Redirect } from 'react-router-dom'

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.photo
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();

  }

  componentDidMount() {
    console.log("PHOTO SHOW COMPONENT DID MOUNT:");
    console.log(this.props.match.params.photoId);
    this.props.fetchPhoto(this.props.match.params.photoId);
    window.scrollTo(0, 0);
  }

  render(){

    return (
    <div>
      hi
    </div>);
  }
}

export default PhotoIndex;