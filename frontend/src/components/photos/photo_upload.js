import React from 'react';
import PhotoIndexContainer from './photo_index_container';
import FormData from 'form-data';
import merge from 'lodash/merge';

class PhotoUpload extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props.match);
    this.state = {
      title: '',
      photo: null,
      photoFile: null,
      loading: false
      
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.photoFile);
    
    //can also have this.state.title.length !== 0 &&
    if (this.state.photoFile !== null){
      this.setState({ loading: true});
      const photo = merge({}, this.state);
      this.props.createPhoto(photo);
      this.props.uploadPhoto(formData)
      .then(
        () => {
          console.log(formData);
          this.setState({ loading: false });
          this.props.history.push('/');
        },
      )
    } else {
      console.log("Upload unsuccessful");
    }
  }

  

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  };

  updatePhoto(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ photo: reader.result, photoFile: file });
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render() {
    let uploadButton = this.state.loading ?
    <button className="loading-button" onClick={this.handleSubmit} disabled >
      Uploading
    </button> :
    <button className="upload-button" onClick={this.handleSubmit} >
      Post
    </button>;

    return(
      <div>
        upload form
        <form>
          {/* <input type="text" placeholder="Photo Title" onChange={this.update('title')} /> */}
          <input type="file" accept="image/png, image/jpeg" onChange={this.updatePhoto} />
          {uploadButton}
        </form>
        <PhotoIndexContainer />
      </div>
    );
  }
}

export default PhotoUpload;